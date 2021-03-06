import React from 'react'
import '../ProductForms/List.css'

function AdminOrder(props) {
  const { order } = props
  console.log(order)
  return (
    <>
      <div className='container-table'>

        <h3 className="title">Order List</h3>
        <table className="product-table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>ID</th>
              <th>Order Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Total Amount</th>


            </tr>
          </thead>
          <tbody>

            {order && order.map((data, index) => {
              return (

                <tr key={index}>
                  <td>
                    {index + 1}
                  </td>

                  <td>
                    {data._id}
                  </td>
                  <td>
                    {data.firstname}
                  </td>
                  <td>
                    {data.address}
                  </td>
                  <td>
                    {data.product.length}
                  </td>
                  <td>
                    {data.totalamount}
                  </td>
                </tr>


              )
            })}

          </tbody>
        </table>

      </div>
    </>
  )
}

export default AdminOrder