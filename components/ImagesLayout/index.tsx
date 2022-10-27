import { NextPage } from 'next'
import Image from 'next/image'
import React, { useCallback, useMemo, useState } from 'react'
import { data } from '../../images/images'
import Modal from '../Modal/modal'
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

  const showPrevious = useCallback(() => {
    const _currentIndex = imagesIdArray.indexOf(selectedId)
    console.log({ _currentIndex })
    // the last one item
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
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="slider_contents">
          <div className="arrow_wrapper" onClick={showPrevious}>
            <i className="arrow left"></i>
          </div>

          <Image src={_currentImage?.[0]?.image} height="600px" width="600px" />
          <div className="arrow_wrapper" onClick={showNext}>
            <i className="arrow right"></i>
          </div>
        </div>
        <div className="image_name_container">
          <span>{_currentImage?.[0]?.name}</span>
        </div>
      </Modal>
    )
  }, [isOpen, showNext, selectedId, findImageBySelectedId])

  return (
    <div className="image_gride_container">
      {data.map((row) => (
        <div className={`arch_img ${row.className}`}>
          {row.images.map((src) => (
            <Image
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
