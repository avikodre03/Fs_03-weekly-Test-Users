import React from 'react'

const UserTable = ({users}) => {
  return (
    <div> <table width="100%" frame="box" rules="all" >
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>GENDER</th>
              
            </tr>
          </thead>
          <tbody>
            {users && users.map((ele) => {
              return (
                <tr >
                  <td>
                    <img alt='userImg' src={ele.picture.medium} height="130px" width="130px" />
                  </td>
                  <td> {ele.name.first}</td>
                  <td>{ele.email}</td>
                  <td>{ele.gender}</td>
                 
                </tr>

              );
            })}





          </tbody>
        </table>
        </div>
  )
}

export default UserTable