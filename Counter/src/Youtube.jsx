import { useState } from 'react'
function Youtube(){

// //const[msg,setmsg]=useState(flase)
//   //  const clickme=()=>
//     {
// setmsg(true)
//     }
const [showMessage, setShowMessage] = useState(false);

  const clickme = () => {
    setShowMessage(true);
  };
    return (
        <>
        <h1>Calculator</h1>
        <button onClick={clickme}>click me</button>
        {
            showMessage && ( 
            <div>
            <p>hi</p>
            <p>heloo</p>
            </div>
            )
        }
        
        
        
        </>


    )
}
export default Youtube