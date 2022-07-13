import React, { useState , useMemo} from 'react'
import Header from '../Common/Header/Header';
import Discount from '../Common/Discount-Secction/Discount';
import Footer from '../Common/Footer/Footer';
import Widgets from './Widgets/Widgets';
import Shop from './Shop/Shop';

function Product(props) {
    const { product, onAdd, cart, onRemove } = props
    const [filterproducts, setFilterProducts] = useState()
    // const filterproductsclick = (cat_name) => {
    //     const newproducts = product.filter((cat) => {
    //         return cat.category === cat_name;

    //     })
    //     setFilterProducts(newproducts)
    //     console.log('done')
    // }
    const filterproductsclick = (data) => {
        setFilterProducts(data);
    }
    function getFilteredList() {
        // Avoid filter when selectedCategory is null
        if (!filterproducts) {
            return product;
        }
        return product.filter((item) => item.category === filterproducts);
    }
    var filteredList = useMemo(getFilteredList, [filterproducts, product]);

    console.log(`filter products ${filterproducts}`)
    console.log(filteredList)
   

    return (
        <>
            <Header cart={cart} />
            <Discount />

            <section className="shop_grid_area section_padding_100">
                <div className="container">
                    <div className="row">
                        <Widgets product={product} filterproductsclick={filterproductsclick} />

                        <Shop product={product} filteredList={filteredList} onAdd={onAdd} onRemove={onRemove} cart={cart} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product