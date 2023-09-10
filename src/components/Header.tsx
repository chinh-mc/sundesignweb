"use client"
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useState } from 'react'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleToggle = () => {
    setOpenMenu((prev)=>!prev)
  }

 

  return (
    <header id="home" className="hero-area">
  <div className="overlay">
    <span />
    <span />
  </div>
  <nav className="navbar navbar-expand-md fixed-top scrolling-navbar header-top-area">
    <div className="container">
      <a href="/" className="navbar-brand">
        {/* <img src="img/logo.png" alt="" /> */}
        <Image src="/img/logo.png" alt="" width={100} height={58} />
        </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggle}>
        <i className="lni-menu" />
      </button>
      <div className={`collapse navbar-collapse ${openMenu ? "show menu-bg" : ""}`} id="navbarCollapse">
        <ul className="navbar-nav mr-auto w-100 justify-content-end">
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#home" >SUN</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#services">Dịch vụ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#business-plan">Giới thiệu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#features">Ưu điểm</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#template">Mẫu website</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link page-scroll" href="#pricing">Pricing</a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link page-scroll" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#blog">Blog</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#contact">Liên hệ</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container">
    <div className="row space-100">
      <div className="col-lg-6 col-md-12 col-xs-12">
        <div className="contents">
          <h2 className="head-title">Mua sự an tâm</h2>
          <p>Hãy để chúng tôi giúp bạn tạo ra những trang web phù hợp với mục đích sử dụng, chuyên nghiệp và an toàn, để bạn có thể an tâm và tập trung vào việc kinh doanh của mình.</p>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-xs-12 p-0">
        <div className="intro-img">
          <Image src="/img/banner/banner-art.svg" alt="" width={750} height={411} />
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header