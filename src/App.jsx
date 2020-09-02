import React, { useState } from 'react'
import './index.css'





let App=()=>{

    let state=useState()
    let [count,setcount]=useState(0)


let Increment=()=>
{
    setcount(count-1)
   
  

};

    return(

        <>

        <div className='item'>
        <h1>{count}</h1>

        <button onClick={Increment}>Click Me</button>
        
        
        </div>

       </>

    )


}

export default App;