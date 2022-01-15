import React from 'react'
import './Landing.css'

export default function LandingPageCard ({ title, image }) {
  return (
    <>
      <div id='parent'>
        <div className='back lg:m-8 xs:mb-24'>
          <div className='px-6 py-4'>
            <div className='title text-white text-center font-bold'>
              {title}
            </div>
          </div>
        </div>
        <div className='front lg:m-8 xs:mb-12'>
          <img className='icon' src={image} alt='' />
        </div>
      </div>
    </>
  )
}
