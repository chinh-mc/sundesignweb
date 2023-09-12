/* eslint-disable @next/next/no-img-element */
"use client";

import FormContactCustomer from "./FormContactCustomer";



const Contact = () => {


  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-text section-header text-center">
              <div>
                <h2 className="section-title">Liên hệ</h2>
                <div className="desc-text">
                  <p>Để lại thông tin để chúng tôi liên lạc với bạn, hoặc liên hệ trực tiếp qua zalo, messenger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <FormContactCustomer />
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="contact-img">
              <img src="img/contact/01.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div className="col-lg-1">
        </div>

        <div className="col-lg-1">
        </div>
      </div>
    </section >
  )
}

export default Contact