import React from 'react'
import Hero from '../components/hero/Hero'
import PartnersSection from '../components/partners/PartnersSection'
import AboutSection from '../components/about-itl/AboutSection'
import WhyAttendSection from '../components/why-attend/WhyAttend'
import SpeakerIntroSection from '../components/speaker-intro/SpeakerIntroSection'
import FaqSection from '../components/faqs/FAQsSection'

export default function LandingPage() {
  return (
    <div>
        <Hero />
        <PartnersSection />
        <AboutSection />
        <WhyAttendSection />
        <SpeakerIntroSection />
        <FaqSection />
    </div>
  )
}
