import React from 'react'
import Header from '../Common/Header/Header'
import Discount from '../Common/Discount-Secction/Discount'
import NewArrival from './New Arrival/NewArrival'
import Welcome from './Welcome-Section/Welcome'
import TopCategory from './Top-Category/TopCategory'
import Testimonials from './Testimonials/Testimonials'
import OfferArea from './Offer Area/OfferArea'
import Footer from '../Common/Footer/Footer'

function Main(props) {
  const { product, onAdd, cart, onRemove, user } = props
  console.log(user)
  return (
    <>
      <Header cart={cart} />
      <Discount />
      <Welcome />
      <TopCategory />
      <NewArrival product={product} onAdd={onAdd} onRemove={onRemove} cart={cart} />
      <OfferArea />
      {/* <Testimonials/> */}
      <Footer />

    </>

  )
}

export default Main