import "@/assets/css/LineIcons.css"
import "@/assets/css/animate.css"
import "@/assets/css/bootstrap.min.css"
import "@/assets/css/eraweb.css"
import "@/assets/css/magnific-popup.css"
import "@/assets/css/main.css"
import "@/assets/css/nivo-lightbox.css"
import "@/assets/css/owl.carousel.css"
import "@/assets/css/owl.theme.css"
import "@/assets/css/responsive.css"
import Header from '@/components/Header'

import BusinessPlan from '@/components/BusinessPlan'
import Contact from '@/components/Contact'
import ContactNetwork from '@/components/ContactNetwork'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Service from '@/components/Service'
import Template from '@/components/Template'
import Script from 'next/script'

export const metadata = {
  title: "SUN DESIGN - Thiết kế web chuẩn SEO",
  description: "Bạn muốn có website đẹp, chuyên nghiệp, chuẩn SEO, tăng doanh số? Hãy đến với công ty thiết kế web của chúng tôi. Chúng tôi sẽ tạo cho bạn website phù hợp với thương hiệu, ngành nghề, tối ưu hóa cho di động, hỗ trợ từ A-Z. Giá cả hợp lý, thời gian nhanh chóng, chất lượng đảm bảo.Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết. Chúng tôi cam kết mang đến cho bạn sự hài lòng và tin cậy. Cùng chúng tôi xây dựng website của bạn ngay hôm nay!",
};

export default function Home() {
  return (
    <>
      <Header />
      <Service />
      <BusinessPlan />
      <Features />
      <Template />
      {/* <ShowCase /> */}
      {/* <Pricing /> */}
      {/* <Testimonial />
      <Team />
      <Blog /> */}
      <Contact />
      <Footer />
      <ContactNetwork />
      <a href="#" className="back-to-top">
        <i className="lni-chevron-up"></i>
      </a>

      <>
        <Script src="/js/jquery-min.js"></Script>
        <Script src="/js/popper.min.js"></Script>
        <Script src="/js/bootstrap.min.js"></Script>
        <Script src="/js/owl.carousel.js"></Script>
        <Script src="/js/jquery.nav.js"></Script>
        <Script src="/js/scrolling-nav.js"></Script>
        <Script src="/js/jquery.easing.min.js"></Script>
        <Script src="/js/nivo-lightbox.js"></Script>
        <Script src="/js/jquery.magnific-popup.min.js"></Script>
        <Script src="/js/form-validator.min.js"></Script>
        <Script src="/js/contact-form-script.js"></Script>
        <Script src="/js/main.js"></Script>
      </>
    </>
  )
}
