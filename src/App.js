import './index.css'
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [BMI, setBMI] = useState(0);
  const [output, setOutput] = useState(0);

  function processData() {
    console.log(weight, height);
    const result = weight / (height * height);
    setBMI(result.toFixed(2));
    
    if (result >= 1 && result <= 18.49) {
      setOutput('Underweight');
    } 

    else if (result >= 18.50 && result <= 24.99) {
      setOutput('Healthy');
    }

    if (result >= 25 && result <= 29.99) {
      setOutput('Overweight');
    } 

    else if (result >= 30 && result <= 99.99) {
      setOutput('Obesity');
    }
  }
  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
    <div className='w-[400px] h-[400px] border-2 p-5 border-black rounded-2xl bg-indigo-500'>
      <div className='flex flex-col bg-stone-500 rounded-2xl p-5'>
      <input onChange={(e) => setWeight(Number(e.target.value))} className={`my-2 pl-2 py-2 border-2 border-slate-700 rounded-xl`} placeholder='Weight (in kg)' type='text' />
      <input onChange={(e) => setHeight(Number(e.target.value))} className={`my-2 pl-2 py-2 border-2 border-slate-700 rounded-xl`} placeholder='Height (in meters)' type='text' />
      <button className='bg-cyan-700 text-white rounded-xl p-2'
      onClick={processData}>
        Submit
      </button>

      </div>

      <h1 className='font-bold text-md border-2 border-black rounded-2xl p-2 my-5'> Your BMI is {BMI}</h1>
      <h1 className='font-bold text-md border-2 border-black rounded-2xl p-2 my-5'> You are <span className='font-bold'> {output} </span></h1>
    </div>
    </div>
  );
}

export default App;
