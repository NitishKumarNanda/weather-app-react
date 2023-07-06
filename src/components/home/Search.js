import React, { useRef } from 'react'

export default function Search(props) {
    const searchInput=useRef();
  return (
    <div style={{display:'flex'}}>
        <input type='search' value={props.searchData} className='border border-black p-1 text-2xl'
        onChange={()=> props.eventHandler(searchInput.current.value)} ref={searchInput}/>
        <button onClick={props.searchWeatherHandler} className='p-3'>Search</button>
    </div>
  )
}
