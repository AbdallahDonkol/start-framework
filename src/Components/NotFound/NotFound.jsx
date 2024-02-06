import React from 'react'
import NotFoundImg from '../../images/404-error.avif'
export default function NotFound() {
  return (
    <div className='app-notFound text-center d-flex justify-content-center align-items-center'>
        <img src={NotFoundImg} alt="" className=''/>
    </div>
  )
}
