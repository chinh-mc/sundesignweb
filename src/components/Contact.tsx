/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="section">
      {/* Container Starts */}
      <div className="container">
        {/* Start Row */}
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
        {/* End Row */}
        {/* Start Row */}
        <div className="row">
          {/* Start Col */}
          <div className="col-lg-6 col-md-12">
            <form id="contactForm">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Họ và tên" required data-error="Nhập tên của bạn" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
              
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" id="email" name="email" placeholder="Email" required data-error="Nhập địa chỉ email" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="Số điện thoại" id="budget" className="form-control" name="budget" required data-error="Nhập số điện thoại" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea className="form-control" id="message" name="message" placeholder="Viết một chút.." rows={4} data-error="Write your message" required defaultValue={""} />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="submit-button">
                    <button className="btn btn-common" id="submit" type="submit">Gửi thông tin</button>
                    <div id="msgSubmit" className="h3 hidden" />
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* End Col */}
          {/* Start Col */}
          <div className="col-lg-1">
          </div>
          {/* End Col */}
          {/* Start Col */}
          <div className="col-lg-4 col-md-12">
            <div className="contact-img">
              <img src="img/contact/01.png" className="img-fluid" alt="" />
            </div>
          </div>
          {/* End Col */}
          {/* Start Col */}
          <div className="col-lg-1">
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
    </section>

  )
}

export default Contact