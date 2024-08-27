import { useState } from "react"
import { Keyboard } from "./components/Keyboard"

export function App() {

  const [ result , setResult] = useState('');

  function handleClick(event: React.MouseEvent<HTMLButtonElement>){
    setResult(result.concat(event.currentTarget.id))
  }

  function calculate(){
    try{
      setResult(eval(result).toString());
    }catch (error){
      setResult('Invalid')
    }
  }

  function clear(){
    setResult('');
  }

  function percentage(){
    setResult(eval((parseInt(result)/100).toString()));
  }

  function deleteElement(){
    setResult(result.slice(0,-1));
  }

  return (
    <div className="bg-red-400 h-screen flex items-center justify-center">
      <div className="bg-black/90 w-[420px] h-[680px] p-8">
        <div className="h-full flex flex-col gap-4 ">
          
         <input className="h-12 bg-transparent text-white p-2 text-right text-xl" />
          <input className="h-[60px] text-right p-2 text-red-400 text-6xl w-full bg-transparent" value={result}/>
          <div className="border border-gray-500"></div>
          <div className="h-full">
            <Keyboard onHandleClick={handleClick} onHandleCalculate={calculate} onHandleClear={clear} onHandlePercentage={percentage} onHandleDeleteElement={deleteElement}/> 
          </div>
        </div>
      </div>
    </div>
  )
}

