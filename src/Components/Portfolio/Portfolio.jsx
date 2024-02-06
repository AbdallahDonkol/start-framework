import React from 'react'
import imgOne from '../../images/port1.png'
import imgTwo from '../../images/port2.png'
import imgThree from '../../images/port3.png'

export default function Portfolio() {
  return (
    <div className='app-portfolio text-center pt-4'>
    <div className="component mb-2">
        <h1>PORTFOLIO COMPONENT</h1>
        <span></span>
        <i class="fa-solid fa-star mx-3"></i>
        <span></span>
      </div>
      <div className="container mt-4 pb-4">
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="portImage position-relative rounded-3 overflow-hidden">
              <img src={imgOne} alt=""  className='w-100'/>
              <div className="layer position-absolute start-0 top-0 w-100 h-100">
              <i class="fa-solid fa-plus fa-7x position-absolute top-50 translate-middle text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="portImage position-relative rounded-3 overflow-hidden">
              <img src={imgTwo} alt=""  className='w-100'/>
              <div className="layer position-absolute start-0 top-0 w-100 h-100">
              <i class="fa-solid fa-plus fa-7x position-absolute top-50 translate-middle text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="portImage position-relative rounded-3 overflow-hidden">
              <img src={imgThree} alt=""  className='w-100'/>
              <div className="layer position-absolute start-0 top-0 w-100 h-100">
              <i class="fa-solid fa-plus fa-7x position-absolute top-50 translate-middle text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="portImage position-relative rounded-3 overflow-hidden">
              <img src={imgOne} alt=""  className='w-100'/>
              <div className="layer position-absolute start-0 top-0 w-100 h-100">
              <i class="fa-solid fa-plus fa-7x position-absolute top-50 translate-middle text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="portImage position-relative rounded-3 overflow-hidden">
              <img src={imgTwo} alt=""  className='w-100'/>
              <div className="layer position-absolute start-0 top-0 w-100 h-100">
              <i class="fa-solid fa-plus fa-7x position-absolute top-50 translate-middle text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="portImage position-relative rounded-3 overflow-hidden">
              <img src={imgThree} alt=""  className='w-100'/>
              <div className="layer position-absolute start-0 top-0 w-100 h-100">
              <i class="fa-solid fa-plus fa-7x position-absolute top-50 translate-middle text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
