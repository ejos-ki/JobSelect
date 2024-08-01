import React from 'react'
import Header from './component/Header'
import Banner from './component/Banner'
import ButtonsMenu from './component/ButtonsMenu'
import Search from './component/Search'
import Footer from './component/Footer'
import Statistics from './component/Statistics'
import Partners from './component/Partners'
import UserSection from './component/UserSection'

export default function App() {
  return (
    <>
      <Header/>
      <ButtonsMenu/>
      <Banner/>
      <UserSection/>
      <Statistics/>
      <Partners/>
      <Footer/>
    </>
  )
}
