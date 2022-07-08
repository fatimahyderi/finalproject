import React, { useState } from 'react'
import Header from '../Common/Header/Header';
import Discount from '../Common/Discount-Secction/Discount';
import Footer from '../Common/Footer/Footer';
import Widgets from './Widgets/Widgets';
import Shop from './Shop/Shop';

function Product(props) {
    const { product, onAdd, cart, onRemove } = props
    const [filterproducts, setFilterProducts] = useState()
    const filterproductsclick = (cat_name) => {
        const newproducts = product.filter((cat) => {
            return cat.category === cat_name;

        })
        setFilterProducts(newproducts)
        console.log('done')
    }
    console.log(`filter products ${filterproducts}`)
    // const [product, getProduct] = useState();

    // const getProductData = () => {
    //     axios.get('http://localhost:8080/items')
    //         .then(function (response) {
    //             // handle success

    //             getProduct(response.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .then(function () {
    //             // always executed
    //         });
    // }

    // useEffect(() => {
    //     getProductData()
    // }, []);

    // const [cart, setCart] = useContext(ShoppingCartContext);

    // const onAdd = (product) => {
    //     setCart([...cart, product]);
    // }

    // const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

    // useEffect(() => {
    //     localStorage.setItem("cart",JSON.stringify(cart));
    // }, [cart])

    return (
        <>
            <Header cart={cart} />
            <Discount />

            <section className="shop_grid_area section_padding_100">
                <div className="container">
                    <div className="row">
                        <Widgets product={product} filterproductsclick={filterproductsclick} />

                        <Shop product={product} onAdd={onAdd} onRemove={onRemove} cart={cart} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product