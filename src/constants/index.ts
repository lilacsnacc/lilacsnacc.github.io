const d = new Date()

/** NY State living wage as of July 2023
 * https://livingwage.mit.edu/states/36 */
const livingWage = 21.46
/** started programming (professionally, fulltime) in 2018 */
export const yearsOfExp = d.getFullYear() - 2018
/** months of professional programming to date */
const monthsOfExp = yearsOfExp * 12 + d.getMonth()
/** after thinking about it, I believe rate increase should be a 5 year bell curve,
 * with wage increase going up to +$1/hr/month at career peak (around 2.5yrs)...
 *
 * but that's a lot of math so we'll just say +50 cents/hr/month
 */
const dollarIncreasePerMonth = 0.5
/** my minimum wage */
export const rate = `$${(livingWage + monthsOfExp * dollarIncreasePerMonth) | 0}/hr`
/** am I looking for a job? */
export const openForHire = true
/** my current email... I might create a new work-specific email */
export const email = 'nqshabazz@gmail.com'
/** aws endpoint for the SendEmail lambda */
export const emailEndpoint = `https://qe3jimzxlpnieteo22a3by7dl40xbkqg.lambda-url.us-east-1.on.aws/`
