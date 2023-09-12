import BackToTop from "@/components/BackToTop"
import BusinessPlan from '@/components/BusinessPlan'
import Contact from '@/components/contact-customer/Contact'
import ContactNetwork from '@/components/ContactNetwork'
import DialogContact from "@/components/DialogContact"
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
      <DialogContact />
    </>
  )
}
