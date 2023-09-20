import { FEATURE_CONTENT } from '@/assets/content'
import { randomUUID } from 'crypto'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="features-text section-header text-center">
              <div>
                <h2 className="section-title">9 ưu điểm vượt trội</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row featured-bg">
          {
            FEATURE_CONTENT.map((item, index) => {
              if (index == FEATURE_CONTENT.length - 1) {
                return (
                  <div style={{ display: "flex", justifyContent: "center" }} key={randomUUID()}>
                    <div className="col-lg-6 col-md-6 col-xs-12 p-0">
                      <div className="feature-item" style={{ display: 'flex' }}>
                        <div className="float-left">
                          <Image src={item.image} alt="" width={100} height={100} />
                        </div>
                        <div className="feature-info float-left">
                          <h5 style={{fontWeight: 600}}>{item.title}</h5>
                          <p>{item.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <div className="col-lg-6 col-md-6 col-xs-12 p-0" key={randomUUID()}>
                  <div className="feature-item featured-border1" style={{ display: 'flex' }}>
                    <div className="float-left">
                      <Image src={item.image} alt="" width={100} height={100} />
                    </div>
                    <div className="feature-info float-left">
                      <h5 style={{fontWeight: 600}}>{item.title}</h5>
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>

  )
}

export default Features