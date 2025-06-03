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
const handleChange=()=>{
    dispatch({
        type:"update",
        field,
        index,
        value,
    })
}
    return (
      <div>
        <table>
          <tr>
            <th>Activity</th>
            <th> Income</th>
            <th> Expenditure</th>
            <th> Balance</th>
          </tr>
          <tbody>
            {state.entries.map((index, entry) => (
              <tr key={index}>
                <td>
                  <input type="text"
                   placeholder="Enter Activity" />
                </td>
                <td>
                  <input
                    type="number"
                    value={entry.income}
                    onChange={(e) => {
                      handleChange(index, "income", e.target.value);
                    }}
                  />
                </td>
                <td>
                    <input
                    type="number"
                    value={entry.income}
                    onChange={(e)=>{
                        handleChange(index,"income", e.target.value)
                    }}
                    />
                </td>
              </tr>
            ))}
            <tr>
                <th>
                    Total Balance
                </th>
                
            </tr>
          </tbody>
        </table>
      </div>
    );}
export default IncomeStatement;

