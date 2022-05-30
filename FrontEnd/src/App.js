import axios from "axios"
import React, {  useEffect, useState } from "react"
import "./App.css"

function App() {

  const [arrayData, setmethod] = useState("")
  // let listItems
	useEffect(() => {
		axios.get("http://localhost:4000/home").then(function(response) {
			setmethod(response.data);
      
		})
	}, [])

//   listItems = arrayData.map((ques) =>
//   <div className="App1">
      
//   <table>
//   <tr>
//     <th>Question:</th> <td>{ques.Question}</td>
//   </tr>
//   <tr>
//     <td>(A)</td> <td></td>
//   </tr>    
//   <tr>
//     <td>(B)</td> <td></td> 
//   </tr>
//   <tr>
//     <td>(C)</td> <td></td> 
//   </tr>
//   <tr>
//     <td>(D)</td> <td></td> 
//   </tr>
//   <tr>
//     <td>Ans: </td> <td></td>
//   </tr>
//   <tr>
//     <td>Explanation: </td> <td></td>
//   </tr>
// </table>
//   <hr/>
// </div>
//   )

	return (
    <div>
      
      <div style={{fontSize:"22px", textAlign:"center", fontWeight:"bolder"}}>Quiz</div><hr/>
      {arrayData.map((ques) => 
      <ol><span style = {{fontWeight:"bold"}}>Question: </span>{ques.Questions}
      <ol type="A">
        <li>{ques.A}</li>
        <li>{ques.B}</li>
        <li>{ques.C}</li>
        <li>{ques.D}</li>
      </ol><br/>
      Ans: {ques.Ans} <br/>
      Explanation: {ques.Explanation}
      <hr/>
      </ol>
      ) }

    </div>
    )
}

export default App