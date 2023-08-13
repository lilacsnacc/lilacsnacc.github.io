import { supabaseClient } from '.'

export type BroadcastCBProps = {
  [key: string]: any
  type: 'broadcast'
  event: string
}

type BroadcastCB = (payload: BroadcastCBProps) => any

const id = Math.random().toString(36).substring(2, 12)
const gameRoom = supabaseClient.channel('portfolio-bg').subscribe()

export const usePlayerPositions = (callback: BroadcastCB) => {
  gameRoom.on('broadcast', { event: 'move' }, callback)

  function sendBroadcast(data: object) {
    gameRoom.send({
      type: 'broadcast',
      event: 'move',
      payload: { id, ...data }
    })
  }

  return { sendBroadcast }
}
