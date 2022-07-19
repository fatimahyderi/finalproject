import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './shop.css';
import ModalView from '../../Partials/ModalView/ModalView';
import Widgets from '../../Partials/Widgets/Widgets';

function Shop(props) {
    const { product, onAdd, onRemove, cart } = props
    const [productdata,setProductData] = useState(product)
    const filterResult = (catItem) => {
        const result = product.filter((curData) => {
            return curData.category === catItem;
        });
        setProductData(result)
    }
    console.log(productdata)

    const [modalview, getmodalview] = useState({})

    const viewModal = (data) => {
        console.log(data.price)
        getmodalview(data)

    }
    const [pageNumber, setPageNumber] = useState(0);
    const productsperpage = 6;
    const pagesVisited = pageNumber * productsperpage

    const displayProducts = productdata.slice(pagesVisited, pagesVisited + productsperpage).map((data) => {
        return (
            <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.2s">

                <div className="product-img">


                    <img src={`./img/img/product-img/${data.image}`} alt="" />
                    <div className="product-quicview">
                        <button onClick={() => viewModal(data)} data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></button>
                    </div>
                </div>

                <div className="product-description">
                    <h4 className="product-price">{data.price}</h4>
                    <p>{data.name}</p>
                    <p>{data.brand}</p>
                    <p>{data.color}</p>
                    <Link to='' className="add-to-cart-btn" onClick={() => onAdd(data)}>ADD TO CART</Link>

                </div>
            </div>
        )
    })


    const pageCount = Math.ceil(productdata.length / productsperpage)
    const handlePageClick = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <>
        <Widgets filterResult={filterResult} />
        <div className="col-12 col-md-8 col-lg-9">

            <div className="shop_grid_product_area">
                <div className="row">
                    <ModalView modalview={modalview} onAdd={onAdd} onRemove={onRemove} cart={cart} />
                    {displayProducts}
                </div>
            </div>

            <div className="shop_pagination_area wow fadeInUp" data-wow-delay="1.1s">

                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />

            </div>


        </div>
        </>
    )
}

export default Shop