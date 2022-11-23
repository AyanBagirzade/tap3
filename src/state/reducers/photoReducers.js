import { ActionTypes } from "../action-types"

const initialState ={
    value:0,
    loading:false,
    data:[],
    error:null
}

export const photoReducer = (state=initialState,action)=>{
    switch(action.type){
      case ActionTypes.PHOTO_INCR:
        return {
            ...state,value:state.value+1
        }
      case ActionTypes.PHOTO_DECR:
        return {
            ...state,value:state.value-1
        }
      case ActionTypes.PHOTO_LOADING:
        return {
            ...state,loading:true
        }
      case ActionTypes.PHOTO_SUCCESS:
        return {
            ...state,data:action.payload,loading:false
        }
      case ActionTypes.PHOTO_ERROR:
        return {
            ...state,loading:false,error:action.payload
        }
        default:return state
    }

}