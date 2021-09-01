import { TOKEN_CHANGE } from '../constants';
export function changeToken(token) {
return {
type: TOKEN_CHANGE,
payload: token
}
}