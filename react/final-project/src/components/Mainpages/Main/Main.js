import React from 'react'
import Header from '../../Partials/Common/Header/Header'
import Discount from '../../Partials/Common/Discount-Secction/Discount'
import NewArrival from '../../Partials/New Arrival/NewArrival'
import Welcome from '../../Partials/Welcome-Section/Welcome'
import TopCategory from '../../Partials/Top-Category/TopCategory'
import OfferArea from '../../Partials/Offer Area/OfferArea'
import Footer from '../../Partials/Common/Footer/Footer'
import '../../../css/core-style.css'
import '../../../css/responsive.css'


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
      <Footer />

    </>

  )
}

export default Main