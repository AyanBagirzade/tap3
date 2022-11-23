import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decr, getdata, incr } from '../state/actions'

const Gallery = () => {
   const photos =  useSelector(state=>state.photos)
   const dispatch = useDispatch() 
   console.log(photos)
  return (

    <div>

     <button onClick={()=>dispatch(incr())}>Incr</button>
     <button onClick={()=>dispatch(decr())}>Decr</button>
     <button onClick={()=>dispatch(getdata())}>Get Data</button>

    </div>
  )
}

export default Gallery