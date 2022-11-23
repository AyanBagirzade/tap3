import axios from "axios"
import { ActionTypes } from "../action-types"

export const decr = ()=>{
   return {
        type:ActionTypes.PHOTO_DECR
    }
}

export const incr = ()=>{
    return {
        type:ActionTypes.PHOTO_INCR
    }
}

export const getdata = ()=>{
    return async(dispatch)=>{
      try {
        
        dispatch({
            type:ActionTypes.PHOTO_LOADING
        })

        const {data} = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')

        dispatch({
            type:ActionTypes.PHOTO_SUCCESS,
            payload:data
        })

        
      } catch (error) {
        dispatch({
            type:ActionTypes.PHOTO_ERROR,
            payload:error.message
        })
      }
    }
}