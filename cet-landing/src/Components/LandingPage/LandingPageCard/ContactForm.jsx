import React from 'react'
import './ContactForm.css'

export default function ContactForm(props) {
  return (
    <>
      <div className='card flex flex-wrap content-center mb-24'>
        <div className='card__front'>
          <form className='card__form'>
            <h3 className='mb-1 mt-8 text-lg font-normal'>Email</h3>
            <input className='card__inputemail mt-1 mb-4' type='email' required />
            <h3 className='mb-1 text-lg'>Message</h3>
            <textarea className='card__input mt-1' type='text' required />
            <button className='card__button '>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
