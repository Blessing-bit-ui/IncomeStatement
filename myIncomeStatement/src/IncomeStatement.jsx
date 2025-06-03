import { useReducer } from "react"

const initialState={
    income:0,
    expenses:0,
    entries:[]
}
const Action ={
    type:"update, Add_Entry, || Delete"
}

function reducer(state, action){
    switch(action.type){
        case"update":
            const updatedEntries=[...state.entries]
            updatedEntries[action.index][action.field]=Number[action.value]
            return{
                ...state,
                entries:updatedEntries
            }
        
        case "Add_Entry":
            return{
                ...state,
                entries:[...state.entries,{
                    income:state.income,
                    expenses:state.expenses
                }]
        }
        case" Delete":
            return{
                ...state,
                entries:state.entries.filter((_,i)=>i !==action.index)
            }
        default:
        return state
    }
}

function IncomeStatement(){
    const [state, dispatch]=useReducer(reducer, initialState)
    return(
    <div> 
        <h1>jjjj</h1>
        </div>
)}
export default IncomeStatement;

