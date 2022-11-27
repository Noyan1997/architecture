import { NextPage } from 'next'
import React from 'react'
import { IModal } from '../../interface/global'

const ModalParent: NextPage<IModal> = ({ children, open, onClose }) => {
  if (!open) return null
  return (
    <>
      <div className="modal_overlay">
        <div className="modal_wrapper">
          <div className="modal">
            <div className="close_btn_area" onClick={onClose}>
              <span>&times;</span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
export default ModalParent