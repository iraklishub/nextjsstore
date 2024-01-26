'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CustomLeftArrow, CustomRightArrow } from './arrows'

const SlickSlider = ({ settings, className, children }) => {
  const sliderSettings = {
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
    ...settings
  }
  return (
    <Slider {...sliderSettings} className={className}>
      {children}
    </Slider>
  )
}

export default SlickSlider
