import BackToTop from "@/components/BackToTop"
import BusinessPlan from '@/components/BusinessPlan'
import Contact from '@/components/Contact'
import ContactNetwork from '@/components/ContactNetwork'
import Features from '@/components/Features'
import Service from '@/components/Service'
import Template from '@/components/Template'

export default function Home() {
  return (
    <>
      <Service />
      <BusinessPlan />
      <Features />
      <Template />
      <Contact />
      <ContactNetwork />
      <BackToTop />
    </>
  )
}
