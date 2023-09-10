/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {TEMPLATE_CONTENT} from "@/assets/content"
import Image from 'next/image'

const Template = () => {
  return (
    <div className='section' id="template">
      <div className='container'>
        <div className="col-lg-12">
          <div className="section-header text-center">
            <div>
              <h2 className="section-title">MẪU WEBSITE</h2>
              <div className="desc-text">
                <p>Chúng tối cung cấp nhiều mẫu website để bạn có thể thoải mãi lựa chọn, hoặc thiết kế theo phong cách cá nhân của bạn</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row' style={{ gap: "30px 0" }}>
          {
            TEMPLATE_CONTENT.map((item, index) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-6" data-title={item.name} key={index}>
                  <div className="themes-era">
                    <div className="item-era" style={{ width: '100%', margin: 0, backgroundImage: `url(${item.img})` }}>
                      <input type="radio" id={item.id} name="theme" defaultValue={80} className="hidden-era" />
                      <label htmlFor={item.id}>
                        {/* <img src={item.img} alt={item.name} loading="lazy" /> */}
                        <Image src={item.img} alt={item.name} loading="lazy" sizes="100vw" 
                        width={0}
                        height={0}
                        style={{ width: '100%', height: '300px' }} // optional
                        />
                      </label>
                      <br />
                      <a className="btn-view-theme-era" href={item.theme} target="_blank">OPEN</a>
                    </div>
                    <label htmlFor={item.id} style={{color: "#000"}}>
                      <h6 className="desc-text mt-2">{item.name}</h6>
                    </label>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>

  )
}

export default Template