import { NextPage } from 'next'
import Image from 'next/image'
import React, { useCallback, useMemo, useState } from 'react'
import { data } from '../../images/images'
import ModalParent from '../ModalBox/ModalParent'
const ImageLayout: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedId, setSelectedId] = useState<string>('')
  const findImageBySelectedId = useCallback(
    (_selectedId: string) =>
      data.flatMap((_row) =>
        _row.images.filter((_imagesArray) => _imagesArray.id === _selectedId)
      ),

    []
  )

  const imagesIdArray = data.flatMap((row) => row.images.map((src) => src.id))

  const showNext = useCallback(() => {
    const _currentIndex = imagesIdArray.indexOf(selectedId)
    // the last one item
    if (_currentIndex == imagesIdArray.length - 1) {
      const _firstImageOfGallery = findImageBySelectedId(imagesIdArray[0])
      setSelectedId(_firstImageOfGallery?.[0]?.id)
      //
    } else if (_currentIndex !== -1) {
      const _nextImage = findImageBySelectedId(imagesIdArray[_currentIndex + 1])
      setSelectedId(_nextImage?.[0]?.id)
    }
  }, [setIsOpen, findImageBySelectedId, selectedId])

  const showPrevious = useCallback((e:any) => {
    const _currentIndex = imagesIdArray.indexOf(selectedId)
    if (_currentIndex === 0) {
      null
      //
    } else if (_currentIndex !== -1) {
      const _nextImage = findImageBySelectedId(imagesIdArray[_currentIndex - 1])
      setSelectedId(_nextImage?.[0]?.id)
    }
  }, [setIsOpen, findImageBySelectedId, selectedId])

  const GalleryModal = useMemo(() => {
    const _currentImage = findImageBySelectedId(selectedId)

    return (
      <ModalParent open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="slider_contents">
          <div className="arrow_wrapper r_left" onClick={showPrevious}>
            <i className="arrow left"></i>
          </div>

          <Image alt='' src={_currentImage?.[0]?.image} height="600px" width="600px" />
          <div className="arrow_wrapper r_right" onClick={showNext}>
            <i className="arrow right"></i>
          </div>
        </div>

        <div className="image_name_container">
          <span>{_currentImage?.[0]?.name}</span>
        </div>
      </ModalParent>
    )
  }, [isOpen, showNext, selectedId, findImageBySelectedId])

  return (
    <div className="image_gride_container">
      {data.map((row) => (
        <div key={row.id} className={`arch_img ${row.className}`}>
          {row.images.map((src) => (
            <Image
              key={row.id}
              src={src.image}
              height="600px"
              width="600px"
              onClick={() => {
                setIsOpen(true), setSelectedId(src.id)
              }}
            />
          ))}
          {GalleryModal}
        </div>
      ))}
    </div>
  )
}
export default ImageLayout
