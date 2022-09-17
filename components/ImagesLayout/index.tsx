import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { data } from '../../images/images'
const ImageLayout: NextPage = () => {
  return (
    <div className="image_gride_container">
      {data.map((row) => (
        <div className={`arch_img ${row.className}`}>
          {row.images.map((src) => (
            <Image src={src.image} height="600px" width="600px" />
          ))}
        </div>
      ))}
    </div>
  )
}
export default ImageLayout
