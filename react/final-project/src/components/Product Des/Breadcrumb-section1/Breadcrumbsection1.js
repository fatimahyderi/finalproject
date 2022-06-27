import React from 'react'

function Breadcrumbsection1(props) {
    const {product} = props
  return (
<div className="breadcumb_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ol className="breadcrumb d-flex align-items-center">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="index.html">Dresses</a></li>
                                <li className="breadcrumb-item active">{product.name}</li>
                            </ol>

                            <a href="index.html" className="backToHome d-block"><i className="fa fa-angle-double-left"></i> Back to Category</a>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Breadcrumbsection1