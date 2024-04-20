import { CONSTANT } from "../Constant";
interface action {
    type: string;
}
const countReducer=(state={count:0},action: action)=>{
    console.log("action",action);
    if(action.type==CONSTANT.COUNT_ACTION_SUCCESS){
        console.log("CountReducer is executing!!");
        return {...state,count:state.count+1};;
    }
    else{
        return state;
    }
}

export default countReducer;