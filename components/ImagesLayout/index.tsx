import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
const ImageLayout: NextPage = () => {
  return (
    <div>
      <Image src="/test.jpg" height="600px" width="600px" />
    </div>
  )
}

export default ImageLayout
