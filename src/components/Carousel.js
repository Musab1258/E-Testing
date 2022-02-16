import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const facts = [
    {
      imageSrc: "https://github.com/Musab1258/Test-prep/blob/main/src/images/Waste.jpeg.jpg",
      description: "Do you know that:  In Lagos alone, about 9,000 tonnes of waste are generated daily with about 86 per cent of it plastic.",
    },
    {
      imageSrc: "https://github.com/Musab1258/Test-prep/blob/main/src/images/Drainage.jpeg.jpg",
      description: "Due to poor waste management awareness residents dump waste indiscriminately into drainage channels and on the streets.",
    },
    {
      imageSrc: "https://github.com/Musab1258/Test-prep/blob/main/src/images/Flooding.jpeg.jpg",
      description: "These dumped waste leads to environmental degradation and also, flooding.",
    },
    {
      imageSrc: "https://github.com/Musab1258/Test-prep/blob/main/src/images/Cash.jpeg.jpg",
      description: "At Recycle, we recycle plastic waste, but, we need you to help us gather them while we pay you.",
    },
  ]

  return (
    <div className='content'>
      <div className='controls'>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {facts.map((fact, index) => (
          <div key={index} className='fact'>
            <img src={fact.imageSrc} className='fact-image' />
            <p>{fact.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}
