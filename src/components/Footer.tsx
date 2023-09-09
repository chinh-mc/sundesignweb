/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      {/* Footer Area Start */}
      <section id="footer-Content" style={{paddingTop: 20}}>
        <div className="container">
          {/* Start Row */}
          <ul className="footer-menu" >
            <li >
              <Image src="/img/logo.png" alt="" width={100} height={58} />
            </li>
            <li >
              <a className="nav-link page-scroll" href="#home">SUN</a>
            </li>
            <li >
              <a className="nav-link page-scroll" href="#services">Dịch vụ</a>
            </li>
            <li >
              <a className="nav-link page-scroll" href="#business-plan">Giới thiệu</a>
            </li>
            <li >
              <a className="nav-link page-scroll" href="#features">Ưu điểm</a>
            </li>
            <li >
              <a className="nav-link page-scroll" href="#template">Mẫu website</a>
            </li>

            <li >
              <a className="nav-link page-scroll" href="#contact">Liên hệ</a>
            </li>
          </ul>


        </div>
        {/* Copyright Start  */}
        <div className="copyright" style={{marginTop: 0, paddingTop: 5, paddingBottom: 5}}>
          <div className="container">
            {/* Star Row */}
            <div className="row">
              <div className="col-md-12">
                <div className="site-info text-center" >
                  <p style={{color: 'white'}}>Copyright © {new Date().getFullYear()} - Develop by Sun Design Web</p>
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
        </div>
        {/* Copyright End */}
      </section>
      {/* Footer area End */}
    </footer>

  )
}

export default Footer