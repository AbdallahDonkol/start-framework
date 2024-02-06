import React from 'react'

export default function Contact() {
  return (
    <div className='app-contact text-center pt-4'>
      <div className="component mb-2">
        <h1>CONTACT COMPONENT</h1>
        <span></span>
        <i class="fa-solid fa-star mx-3"></i>
        <span></span>
      </div>
    <form className='py-5 mx-auto w-50'>
    <input type="text" className='form-control mb-5' name='username' id='username' placeholder='userName'/>
    <input type="number" className='form-control my-5' name='userAge' id='userAge' placeholder='userAge'/>
    <input type="email" className='form-control my-5' name='userEmail' id='userEmail' placeholder='userEmail'/>
    <input type="password" className='form-control my-4' name='userPass' id='userPass' placeholder='userPassword'/>
    <button className='btn btn-success d-block'>Send Message</button>
    </form>
    </div>
  )
}
