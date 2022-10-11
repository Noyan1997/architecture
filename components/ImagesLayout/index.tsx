import { NextPage } from 'next'
import Image from 'next/image'
import React, { useState } from 'react'
import { data } from '../../images/images'
import Modal from '../Modal/modal'
const ImageLayout: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="image_gride_container">
      {data.map((row) => (
        <div className={`arch_img ${row.className}`}>
          {row.images.map((src) => (
            <Image
              src={src.image}
              height="600px"
              width="600px"
              onClick={() => setIsOpen(true)}
            />
          ))}
        </div>
      ))}
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div>slider</div>
      </Modal>
    </div>
  )
}
export default ImageLayout
