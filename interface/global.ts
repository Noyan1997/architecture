import React from 'react'

export interface IModal {
  open: boolean
  onClose: any
  children: React.ReactNode
}

export interface ISlider {
  id?: number
  image?: string
  name?: string
  title?: string
  quote?: any
  personIndex?: number
  index?: any
}

// id, image, name, title, quote, personIndex, index
