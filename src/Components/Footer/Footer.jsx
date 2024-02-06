import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className='position-relative bottom-0 start-0 end-0'>
    <div className="div text-white py-5 text-center" style={{backgroundColor:"#2c3e50"}}>
    <div className="container py-4">
        <div className="row">
            <div className="col-md-4">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
                <h2>AROUND THE WEB</h2>
                <ul className='list-unstyled d-flex justify-content-center'>
                    <li className='me-2 p-2  border border-white rounded-5'><i className='fa-fw fa fa-brands fa-facebook fa-lg'></i></li>
                    <li className='me-2 p-2  border border-white rounded-5'><i className='fa-fw fa fa-brands fa-twitter fa-lg'></i></li>
                    <li className='me-2 p-2  border border-white rounded-5'><i className='fa-fw fa fa-brands fa-linkedin-in fa-lg'></i></li>
                    <li className='p-2  border border-white rounded-5'><i className='fa-fw fa-solid fa-globe fa-lg'></i></li>
                </ul>
            </div>
            <div className="col-md-4">
                <h2>ABOUT FREELANCER</h2>
                <p className='mb-0'>Freelance is a free to use, licensed</p>
                <p>Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
    </div>
    <div className="div py-3 text-center text-white" style={{backgroundColor:"#1a252f"}}>
        <p>Copyright © Your Website 2021</p>
    </div>
    </footer>
    
    </>
  )
}
