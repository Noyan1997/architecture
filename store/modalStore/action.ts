import { type } from 'os'
import * as types from '../types'
export enum ModalType {
    'imageModal',
    'null'
}

interface OpenModal {
    type: string
    payload: {
      modalType: ModalType
      modalData: any
    }
  }
  interface CloseModal {
    type: string
  }
  
  export type ModalAction = OpenModal
  
  export const openModal = (modalType: ModalType, modalData: any): OpenModal => {
    return { type: types.SET_OPEN_MODAL, payload: { modalType, modalData } }
  }
  
  export const closeModal = (): CloseModal => {
    return { type: types.SET_CLOSE_MODAL }
  }
  