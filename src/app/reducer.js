import { indexOf } from "lodash";
import * as actions from "./actionTyes";


let lastId = 0 ;

export default function reducer(state = [], action){
    switch (action.type){
        case actions.ADD_BUG:
            return[
                ...state,
                {
                    id:++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
            break;
        case actions.REMOVE_BUG:
            return state.filter(bug=>bug.id !== action.payload.id)
            break;
        case actions.RESOLVE_BUG:
            
            return[
                ...state.map((e)=>{
                    if(e.id === action.payload.id){
                        return{...e,resolved:true}
                    }
                })
            ]
        default:
            return state;
            break;
        
    }
}