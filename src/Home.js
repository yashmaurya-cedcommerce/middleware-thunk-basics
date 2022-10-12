import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './redux/action'

export default function Home() {

    const dispatch = useDispatch();
    const state = useSelector(state=>state)

  return (
    <div className='homeContainer'>

        <button className='fetchDatabtn' onClick={()=>dispatch(fetchData())}>Fetch Data</button>
        {(state.users?.length>0)?state.users.map((item)=> {
            return (<div className='eachRow'>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.company.name}</p>
                <p>{item.address.street}</p>
            </div>)
        }):''}

    </div>
  )
}
