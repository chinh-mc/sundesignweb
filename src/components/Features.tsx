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
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            <div className="feature-item featured-border1" style={{ display: 'flex' }}>
              <div className="float-left">
                {/* <i className="lni-coffee-cup" /> */}
                <Image src="/img/advantage/easy.webp" alt="" width={100} height={100} />
              </div>
              <div className="feature-info float-left">
                <h4>Dễ dàng quản lý</h4>
                <p>Giao diện hệ thống quản lý hiện đại, thân thiện giúp bạn dễ dàng thao tác trên các mô-đun được cá nhân hoá theo từng nhu cầu cụ thể.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            <div className="feature-item featured-border2" style={{ display: 'flex' }}>
              <div className="float-left">
                <Image src="/img/advantage/interface.webp" alt="" width={100} height={100} />
              </div>
              <div className="feature-info float-left">
                <h4>Giao diện linh hoạt</h4>
                <p>Tuỳ ý chỉnh sửa giao diện, bố cục, phông chữ, màu sắc, hình ảnh. Chủ động thêm bớt các section, container, block, addon để trang web tối ưu hơn.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            <div className="feature-item featured-border1" style={{ display: 'flex' }}>
              <div className="float-left">
                <Image src="/img/advantage/optimize.webp" alt="" width={100} height={100} />
              </div>
              <div className="feature-info float-left">
                <h4>Tối ưu chuyển đổi</h4>
                <p>Cam kết mang lại nhiều chuyển đổi hơn so với các trang web được thiết kế trên các nền tảng website truyền thống khác.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            <div className="feature-item featured-border2" style={{ display: 'flex' }}>
              <div className="float-left">
                <Image src="/img/advantage/speed.webp" alt="" width={100} height={100} />
              </div>
              <div className="feature-info float-left">
                <h4>Tốc độ tải nhanh</h4>
                <p>Hệ thống được tối ưu sẵn về hiệu suất trên tất cả thiết bị và màn hình. Sử dụng công nghệ CDN để tăng tốc độ tải trang với người dùng địa phương.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            <div className="feature-item featured-border3" style={{ display: 'flex' }}>
              <div className="float-left">
                <Image src="/img/advantage/security.webp" alt="" width={100} height={100} />
              </div>
              <div className="feature-info float-left">
                <h4>Bảo mật tối đa</h4>
                <p>Hệ thống có nhiều cấp độ bảo mật, các dữ liệu nhạy cảm được mã hóa, dữ liệu của bạn luôn độc lập và sao lưu an toàn trên cơ sở hạ tầng của AWS.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            <div className="feature-item" style={{ display: 'flex' }}>
              <div className="feature-icon float-left">
                <Image src="/img/advantage/hostingfree.webp" alt="" width={100} height={100} />
              </div>
              <div className="feature-info float-left">
                <h4>Hosting miễn phí</h4>
                <p>Tặng phí sử dụng hosting cao cấp từ AWS với cấu hình mạnh, hoạt động ổn định và luôn có khả năng mở rộng. Bạn không cần mua hosting ở nơi khác.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            <div className="feature-item" style={{ display: 'flex' }}>
              <div className="float-left">
                <Image src="/img/advantage/CostOptimization.webp" alt="" width={100} height={100} />
              </div>
              <div className="feature-info float-left">
                <h4>Tối ưu chi phí</h4>
                <p>Cam kết giá tốt nhất thị trường và minh bạch dựa trên nhu cầu sử dụng thực tế. Không phát sinh phụ phí. Hiệu quả mang lại tương xứng chi phí bỏ ra.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            <div className="feature-item" style={{ display: 'flex' }}>
              <div className="float-left">
                <Image src="/img/advantage/ExpandAndUpgrade.webp" alt="" width={100} height={100} />
              </div>
              <div className="feature-info float-left">
                <h4>Sẵn sàng mở rộng và nâng cấp</h4>
                <p>Hoàn toàn có thể mở rộng và phát triển tính năng theo nhu cầu. Tích hợp API với các nhà phát triển khác đem lại hiệu quả cho khách hàng. Nâng cấp mọi lúc.</p>
              </div>
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div className="col-lg-6 col-md-6 col-xs-12 p-0">
              <div className="feature-item" style={{ display: 'flex' }}>
                <div className="float-left">
                  <Image src="/img/advantage/support.webp" alt="" width={100} height={100} />
                </div>
                <div className="feature-info float-left">
                  <h4>Hỗ trợ chuyên nghiệp</h4>
                  <p>Hỗ trợ 24/7 bởi đội ngũ chuyên gia nhiều năm kinh nghiệm và đội ngũ chăm sóc khách hàng tận tâm luôn yêu thương khách hàng.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

  )
}

export default Features