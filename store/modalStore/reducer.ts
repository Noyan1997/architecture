import * as types from "../types";
import { ModalAction, ModalType } from "./action";

export interface IModal {
  stateModal: boolean;
  modalType: ModalType;
  modalData: any;
}
const initialState = {
  stateModal: false,
  modalType: ModalType["null"],
  modalData: {},
};
export const modalReducer = (
  state: IModal = initialState,
  action: ModalAction
) => {
  try {
    switch (action.type) {
      case types.SET_OPEN_MODAL:
        const { modalType, modalData } = action.payload;
        return {
          ...state,
          stateModal: true,
          modalType: modalType,
          modalData: modalData,
        };
      case types.SET_CLOSE_MODAL:
        return {
          ...state,
          stateModal: false,
          modalType: ModalType["null"],
          modalData: {},
        };
      default:
        return state;
    }
  } catch (e) {
    throw e;
  }
};
