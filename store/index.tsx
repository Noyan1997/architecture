import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { IModal, modalReducer } from './modalStore/reducer'
import thunk from 'redux-thunk'

export interface State {
  modal: IModal
}
const rootReducer = combineReducers<State>({
  modal: modalReducer,

})
export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// declare module 'react-redux' {
//   interface DefaultRootState extends State {}
// }
