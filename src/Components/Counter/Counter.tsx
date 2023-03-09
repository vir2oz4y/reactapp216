import React, { useState } from 'react';

const Counter = () => {
    const [currentN, setCurrentN] = useState("1")
    const [state, setState] = useState(0)
    let n=0;

   /* const OnCick=(value:number) =>{
        setState(prev=>prev + value)
    }*/
   /* const OnPlus_100=() =>{
        setState(prev=>prev + 100)
    }
    const OnPlus=() =>{
       setState(prev=>prev + 1)
    }
    const OnMinus=() =>{
        setState(prev=>prev - 1)
    }
    const OnMinus_100=() =>{
        setState(prev=>prev - 100)
    }
    */
    return (
        <div>
           {/* <div>
                <input type="text"
                value={currentN}
                onChange={(e)=>setCurrentN(e.target.value)}/>
            </div>
            <div>
                {state}
            </div>*/}
            <div>
               {/*{ <button onClick={()=> OnPlus()}>
                    Plus 1
                </button>

                <button onClick={()=> OnMinus()}>
                    Minus 1
                </button>

                <button onClick={()=> OnPlus_100()}>
                    Plus 100
                </button>
                <button onClick={()=> OnMinus_100()}>
                    Minus 100
                </button>}
               { <button onClick={()=> On_N()}>
                    Plus N
                </button>}*/}
            </div>
        </div>
    );
};

export default Counter;