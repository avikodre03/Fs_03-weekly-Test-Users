import React from 'react'

const FilterUser2 = ({state,setusers}) => {
  return (
    <div>
     <input name="gender" value="all" type="radio" defaultChecked
             onChange={()=>{
              setusers(state)
            }}
            /><label>ALL</label>
            <input name="gender" value="male" type="radio"
            onChange={()=>{
              setusers(state.filter((data)=>data.gender==="male"))
            }}
            /><label>MALE</label>
            <input name="gender" value="female" type="radio" 
             onChange={()=>{
              setusers(state.filter((data)=>data.gender==="female"))
            }}
            /><label>FEMALE</label>    
    </div>
  )
}

export default FilterUser2