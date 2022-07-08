import React from 'react'

function Category(props) {
    const {categories} = props
    
  return (
    <>
     <div className='table_box'>
        <h1>Categories</h1>
        <table className="tablestyle">
          <thead>
              <tr>
              <th>Sr. No</th>  
                <th>ID</th>
                <th>Category Name</th>
                <th>Category Description</th>
                
                  
                
              </tr>
            </thead>
          <tbody>

            {categories && categories.map((data, index) => {
              return (
                
                <tr key={index}>
                     <td>
                    {index +1}
                  </td>

                  <td>
                    {data._id}
                  </td>
                  <td>
                    {data.name}
                  </td>
                  <td>
                    {data.cat_description}
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

export default Category