import Header from '@/components/Header'
import "@/assets/css/bootstrap.min.css"
import "@/assets/css/animate.css"
import "@/assets/css/LineIcons.css"
import "@/assets/css/owl.carousel.css"
import "@/assets/css/owl.theme.css"
import "@/assets/css/magnific-popup.css"
import "@/assets/css/nivo-lightbox.css"
import "@/assets/css/main.css"
import "@/assets/css/responsive.css"
import "@/assets/css/eraweb.css"

import BusinessPlan from '@/components/BusinessPlan'
import Service from '@/components/Service'
import Features from '@/components/Features'
import ShowCase from '@/components/ShowCase'
import Pricing from '@/components/Pricing'
import Testimonial from '@/components/Testimonial'
import Team from '@/components/Team'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Script from 'next/script'
import Template from '@/components/Template'
import ContactNetwork from '@/components/ContactNetwork'


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
