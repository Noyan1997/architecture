/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { modalAction } from "../../store/actions";
import "./modalBox.scss";
import * as ModalContent from "./ModalContent"
const ModalBox: React.FunctionComponent = () => {
  // const { modalType } = useSelector((state) => state.modal);

  const generateModalContent = (
    type: modalAction.ModalType
  ): JSX.Element | null => {
    switch (type) {
      case modalAction.ModalType["imageModal"]: {
        return <ModalContent.ImagesModal />;
      }
      default:
        return null;
    }
  };
  return (
    <>
      <div
  
      >
        <div className="modal_content animate__animated animate__fadeIn ">
          {/* {generateModalContent(modalType)} */}
        </div>
      </div>
    </>
  );
};

export default ModalBox;
