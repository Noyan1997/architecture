import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { data } from '../../images/images'
const ImageLayout: NextPage = () => {
  return (
    <div className="image_gride_container">
      <div className="gallery">
        {data.map((row) => (
          <div className={row.className}>
            {row.images.map((src) => (
              <Image
                className="arch_img"
                src={src.image}
                height="600px"
                width="600px"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default ImageLayout
