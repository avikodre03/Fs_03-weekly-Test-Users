import React, { useEffect, useState } from 'react';
import './Users.css'
import axios from "axios";
import FilterUser2 from './FilterUser2/FilterUser2';
import UserTable from './UsersTable/UserTable';

const Users2 = () => {
  const [users, setusers] = useState([])
  const [state, setstate] = useState([])
 useEffect(()=>{

   const userData = () => {
  axios.get("https://randomuser.me/api/?results=30").then((res) => {
      console.log(res.data.results);
      setusers(res.data.results)
      setstate(res.data.results)
  }).catch((error) => {
      alert("error")
  })
}
userData()
},[])
  return (
    <div className='Users'>
      <h2>User Details</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis asperiores impedit aliquid eligendi harum facere deserunt necessitatibus laboriosam, commodi aliquam quod, maiores hic? Accusantium ad at aperiam commodi amet corporis, libero ipsa nam. Itaque quisquam dignissimos beatae illo expedita mollitia aliquam. Dolore perspiciatis assumenda corrupti velit quia nisi maxime aspernatur!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis asperiores impedit aliquid eligendi harum facere deserunt necessitatibus laboriosam, commodi aliquam quod, maiores hic? Accusantium ad at aperiam commodi amet corporis, libero ipsa nam. Itaque quisquam dignissimos beatae illo expedita mollitia aliquam. Dolore perspiciatis assumenda corrupti velit quia nisi maxime aspernatur!
      </p>
     
      <br />

      {users.length > 0 &&(<FilterUser2 state={state} setusers={setusers} /> )}
      
      <br />

      {users.length > 0 && (<UserTable users={users}/>)}
    </div>
  )
}

export default Users2
