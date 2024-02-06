import React from 'react'
import homeImg from '../../images/avataaars.svg';

export default function Home() {
  return (
    <>
    <div className="app-home text-center home text-white">
    <div className='mb-5'>
        <img src={homeImg} alt="" className='w-25'/>
    </div>
    <h1 className='fw-bold fs-1'>START FRAMEWORK</h1>
    <div className="component mb-2">
      <span></span>
      <i class="fa-solid fa-star mx-3"></i>
      <span></span>
    </div>
    <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
  )
}
