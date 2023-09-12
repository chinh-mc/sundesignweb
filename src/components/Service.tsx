import React from 'react'

const Service = () => {
  return (
    <section id="services" className="section">
      <div className="container">
      <div className="col-lg-12">
          <div className="section-header text-center">
            <div>
              <h2 className="section-title">Dịch vụ</h2>
              <div className="desc-text">
                <p>Chúng tôi cung cấp nhiều dịch vụ website về thương hiệu, thương mại điện tử, tuyển dụng..</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="services-item text-center">
              <div className="icon">
                <i className="lni-bookmark-alt" />
              </div>
              <h4>THƯƠNG HIỆU</h4>
              <p>Thích hợp để tạo trang web cá nhân, trang web giới thiệu, blog cá nhân, trang web giới thiệu sản phẩm, dịch vụ, thương hiệu và doanh nghiệp</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="services-item text-center">
              <div className="icon">
                <i className="lni-layout" />
              </div>
              <h4>THƯƠNG MẠI ĐIỆN TỬ</h4>
              <p>Thích hợp để tạo trang web giới thiệu sản phẩm, dịch vụ hoặc thương mại điện tử chuyên nghiệp cho cá nhân và doanh nghiệp.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="services-item text-center">
              <div className="icon">
                <i className="lni-heart" />
              </div>
              <h4>TUYỂN DỤNG</h4>
              <p>Thích hợp để tạo trang web tuyển dụng và ứng viên nộp hồ sơ trực tuyến, doanh nghiệp quản lý quy trình tuyển dụng bằng hệ thống.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Service