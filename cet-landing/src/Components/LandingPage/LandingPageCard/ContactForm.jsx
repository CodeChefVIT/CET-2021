import React from 'react'
import './ContactForm.css'
import contactimg from '../../../Assets/contactimg.png';

export default function ContactForm(props) {
  return (
    <>
      <div className='card flex flex-wrap content-center lg:mb-48 sm:mb-24'>
        <div className='card__front'>
          <form className='card__form'>
            <h3 className='mb-1 mt-8 lg:text-lg xs:text-base font-normal'>Email</h3>
            <input className='card__inputemail mt-1 mb-4' type='email' required />
            <h3 className='mb-1 lg:text-lg xs:text-base mt-5'>Message</h3>
            <textarea className='card__input mt-1 mb-8' type='text' required />

            <button className='card__button '>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
