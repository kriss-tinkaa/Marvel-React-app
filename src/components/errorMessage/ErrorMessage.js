import React from 'react'
import './ErrorMessage.scss';
import errorImg from './error.gif';

export default function ErrorMessage() {
  return (
    <img className='error-img' src={errorImg} />
  )
}
