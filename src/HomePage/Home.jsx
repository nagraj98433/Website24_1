import React from 'react'
import Cards from './Cards/Cards'
import AboutUS from './AboutUS/AboutUS'
import Why_US from './Why_US/Why_US'
import Customer_Review from './Customer_Review/Customer_Review'
import FAQ from './FAQSection/FAQ'

function Home() {
  return (
    <>
      <Cards />
      <Why_US />
      <AboutUS />
      <Customer_Review />
      <FAQ />
    </>
  )
}

export default Home
