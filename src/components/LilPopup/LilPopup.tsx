import { Alert, AlertColor, Snackbar } from '@mui/material'

type LiLPopupProps = {
  open: boolean
  message: string
  severity: AlertColor
  onClose: () => void
}

export const LilPopup = ({ open, onClose, message, severity }: LiLPopupProps) => (
  <Snackbar
    autoHideDuration={2000}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    {...{ open, onClose }}
  >
    <Alert sx={{ textAlign: 'center' }} {...{ severity, onClose }}>
      {message}
    </Alert>
  </Snackbar>
)
