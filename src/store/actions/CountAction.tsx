import {CONSTANT} from "../Constant";

const CountAction = ()=>{
    return(
        {
            type:CONSTANT.COUNT_ACTION,
        }
    )
}

const CountActionSuccess = ()=>{
    return(
        {
            type:CONSTANT.COUNT_ACTION_SUCCESS,
        }
    )
}

export {CountAction,CountActionSuccess}