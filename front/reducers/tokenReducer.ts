import { TOKEN_CHANGE } from '../constants';
const initialState = {
token: ""
};
const tokenReducer = (state = initialState, action) => {
switch(action.type) {
case TOKEN_CHANGE:
return {
...state,
token:action.payload
};
default:
return state;
}
}
export default tokenReducer;
