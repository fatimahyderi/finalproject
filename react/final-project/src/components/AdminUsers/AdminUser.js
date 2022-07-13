import React from 'react'
import '../ProductForms/List.css'

function AdminUser(props) {
  const { users } = props
  return (
    <div className='container-table'>

      <h3 className="title">Users</h3>
      <table className="product-table">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Phonenumber</th>


          </tr>
        </thead>
        <tbody>

          {users && users.map((data, index) => {
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
                  {data.lastname}
                </td>
                <td>
                  {data.email}
                </td>
                <td>
                  {data.phonenumber}
                </td>
              </tr>


            )
          })}

        </tbody>
      </table>

    </div>
  )
}

export default AdminUser