import React from 'react'

function Cartview(props) {
    const { cart, onAdd, onRemove } = props
    return (
        <div className="cart-table clearfix">
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        return (
                            <>
                                <tr key={item.id}>
                                    <td className="cart_product_img d-flex align-items-center">
                                        <a href="index.html"><img src={process.env.PUBLIC_URL + `/img/img/product-img/${item.imagepath}`} alt="Product" /></a>
                                        <h6>{item.name}</h6>
                                    </td>
                                    <td className="price"><span>{item.price}</span></td>
                                    <td className="qty">
                                        <div className="quantity">
                                            <span className="qty-minus" onClick={() => onAdd(item)}><i className="fa fa-plus" aria-hidden="true"></i></span>
                                            {item.qty}
                                            <span className="qty-plus" onClick={() => onRemove(item)}><i className="fa fa-minus" aria-hidden="true"></i></span>
                                        </div>
                                    </td>

                                    <td className="total_price"><span>{item.qty * item.price}</span></td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Cartview