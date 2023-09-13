import AuthProvider from '@/components/provider/AuthProvider'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { URL_WEBSITE } from '@/lib/config'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

//
import "@/assets/css/LineIcons.css"
import "@/assets/css/animate.css"
import "@/assets/css/bootstrap.min.css"
import "@/assets/css/eraweb.css"
// import "@/assets/css/magnific-popup.css"
import "@/assets/css/main.css"
import "@/assets/css/responsive.css"
// import "@/assets/css/nivo-lightbox.css"
import "@/assets/css/custom.scss"

import AppContextProvider from '@/components/provider/AppProvider'


export const metadata: Metadata = {
  title: "SUN DESIGN - Thiết kế web chuẩn SEO",
  description: "Bạn muốn có website đẹp, chuyên nghiệp, chuẩn SEO, tăng doanh số? Hãy đến với công ty thiết kế web của chúng tôi. Chúng tôi sẽ tạo cho bạn website phù hợp với thương hiệu, ngành nghề, tối ưu hóa cho di động, hỗ trợ từ A-Z. Giá cả hợp lý, thời gian nhanh chóng, chất lượng đảm bảo.Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết. Chúng tôi cam kết mang đến cho bạn sự hài lòng và tin cậy. Cùng chúng tôi xây dựng website của bạn ngay hôm nay!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta name="keywords" content="Thiết kế web chuẩn seo, sun design web, thietkeweb, thiet ke web, seo, thiết kế  web, sun" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"></link>
      <meta name="og:title" content={"SUN DESIGN - Thiết kế web chuẩn SEO"} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={URL_WEBSITE} />
      <meta name="og:description" content={"Bạn muốn có website đẹp, chuyên nghiệp, chuẩn SEO, tăng doanh số? Hãy đến với công ty thiết kế web của chúng tôi. Chúng tôi sẽ tạo cho bạn website phù hợp với thương hiệu, ngành nghề, tối ưu hóa cho di động, hỗ trợ từ A-Z. Giá cả hợp lý, thời gian nhanh chóng, chất lượng đảm bảo.Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết. Chúng tôi cam kết mang đến cho bạn sự hài lòng và tin cậy. Cùng chúng tôi xây dựng website của bạn ngay hôm nay!"} />
      <meta name="og:image" content={`${URL_WEBSITE}/img/logo_seo.png`} />
      <body className={inter.className}>
        <AuthProvider>
          <AppContextProvider>
            <Header />
            {children}
            <Footer />
            <>
              <Script src="/js/jquery-min.js"></Script>
              {/* <Script src="/js/popper.min.js"></Script> */}
              <Script src="/js/bootstrap.min.js"></Script>
              {/* <Script src="/js/owl.carousel.js"></Script> */}
              <Script src="/js/jquery.nav.js"></Script>
              <Script src="/js/scrolling-nav.js"></Script>
              <Script src="/js/jquery.easing.min.js"></Script>
              {/* <Script src="/js/nivo-lightbox.js"></Script> */}
              {/* <Script src="/js/jquery.magnific-popup.min.js"></Script> */}
              <Script src="/js/main.js"></Script>
            </>
          </AppContextProvider>
        </AuthProvider>

      </body>
    </html>
  )
}
