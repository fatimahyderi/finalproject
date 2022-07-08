import React from 'react'
import { Link } from 'react-router-dom'


function ModalView(props) {
    const { modalview, onAdd, onRemove, cart } = props
    console.log(modalview)
  return (
    <div className="modal fade" id="quickview" tabindex="-1" role="dialog" aria-labelledby="quickview" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <div className="modal-body">
                            <div className="quickview_body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-lg-5">
                                            <div className="quickview_pro_img">
                                                <img src={`./img/img/product-img/${modalview.image}`} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-7">
                                            <div className="quickview_pro_des">
                                                <h4 className="title">{modalview.name}</h4>
                                                <div className="top_seller_product_rating mb-15">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <h5 className="price">{modalview.price}</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?</p>
                                                {/* <Link to={`/productdetails/${modalview._id}`}>View Full Product Details</Link> */}
                                            </div>

                                            <div className="cart">
                                                
                                                <Link to='/shop' ><button onClick={() => onAdd(modalview)} className="cart-submit">ADD TO CART</button></Link>
                                                <div className="modal_pro_wishlist">
                                                    <Link to="#"><i className="ti-heart"></i></Link>
                                                </div>

                                                <div className="modal_pro_compare">
                                                    <Link to="#" ><i className="ti-stats-up"></i></Link>
                                                </div>
                                            </div>

                                            <div className="share_wf mt-30">
                                                <p>Share With Friend</p>
                                                <div className="_icon">
                                                    <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                                    <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                                    <Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
                                                    <Link to="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ModalView