import { useState ,useCallback,useEffect} from 'react'

import './App.css'

function App() {
  const [length, setlen] = useState(8)
  const[numberallow,setnumberallow]=useState(false)
  const[upper,setupperallow]=useState(false)
  const[charallow,setcharallow]=useState(false)
  const[pass,setpass]=useState('')

  const genpass=useCallback(()=>{
    let pass1=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberallow){
      str+='0123456789'
    }
    if(charallow){
      str+='$&@*%^'
    }
    if(upper){
      str+='abcdefghijklmnopqrstuvwxyz'
    }
    
    for(let i=1;i<length;i++){
      let index=Math.floor(Math.random()*str.length+1)
      pass1+=str.charAt(index)
    }
    setpass(pass1)
     
  },[length,numberallow,charallow,upper])

  const handleCopyClick=()=>{
    window.navigator.clipboard.writeText(pass)
    
  }

  useEffect(()=>{
genpass()
  },[length,numberallow,charallow,upper])
  

  return (
    <>
      <h1 className='bg-red-500 text-center font-bold text-lg px-3 py-3 my-8 '>Password Generation Site</h1>

      <div className="w-full max-w-md mx-auto shadow-md px-5 py-3 my-40 border-2 bg-purple-500">

      <div>
        <input
          type="text"
          placeholder='Password'
          value={pass}
          readOnly
          className="outline-none py-1 px-3 rounded-md w-80  "
        />
        <button
          onClick={handleCopyClick}
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Copy
        </button>
        </div>

        <div className="text-sm gap-x-2">
      <div className="flex  items-center  gap-x-4">
      
      <input
        type="range"
        min="8"
        max="100"
        value={length}
        className='cursor-pointer'
        onChange={(e)=>setlen(e.target.value)} 
      />

      <label htmlFor="len" className='text-black-600 text-lg px-2 my-4 font-semibold '>Length:{length}</label>
      </div>

      <div className=" items-center  gap-x-3">
      <input
        type="checkbox"
        
        defaultChecked={numberallow}
        onChange={()=>setnumberallow((prev)=>!prev)}
        className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      />
      <label htmlFor="num" className='text-black-600 text-lg px-2 my-8 font-semibold'>Numbers</label>


      </div>

      <div className=" items-center  gap-x-3">
      <input
        type="checkbox"
        
        defaultChecked={charallow}
        onChange={()=>setcharallow((prev)=>!prev)}
        className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      />
      <label htmlFor="char" className='text-black-600 text-lg px-2 my-8 font-semibold'>Characters</label>


      </div>
      <div className=" items-center  gap-x-3">
      <input
        type="checkbox"
        
        defaultChecked={upper}
        onChange={()=>setupperallow((prev)=>!prev)}
        className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      />
      <label htmlFor="lower" className='text-black-600 text-lg px-2 my-8 font-semibold'>LowerCharacters</label>


      </div>




    </div>

    
    
</div>
<footer>
<div className=' text-center px-3 py-3 mx-auto my-4 font-bold bottom-5'>
      
        <p>&copy; 2024 React. All rights reserved.</p>
      
    </div>
    </footer>


    </>
  )
}

export default App
