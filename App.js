import React,{useState} from "react";
import './index.css';

function App(){
  const [weight,Setweight]=useState('');
  const [height,Setheight]=useState('');
  const [bmi,Setbmi]=useState('');
  const [message,Setmessage]=useState('');

  let calculatebmi=(event) =>{
    event.preventDefault();
    if(weight ===0 || height ==0){
      alert("Invalid data")
    }else{
      let bmi=(weight / (height / 100) ** 2)
      Setbmi(bmi.toFixed(2))
      if(bmi < 18.5){
        Setmessage("You are underweight")
      }else if(bmi >= 18.5 && bmi<=24.9){
        Setmessage("You are Healthy Weight")
      }
    else if(bmi >=25 && bmi<=29.9){
         Setmessage("You are Over weight")
    }else{
      Setmessage("You are Obese");
    }
  } 
  }

  return(
  <div className="app">
    <div className="container">
      <h2 className="center">BMI Calculator</h2>
      <form onSubmit={calculatebmi}>
        <div>
          {/*<label>weight (kg)</label>*/}
          <input value={weight} placeholder="Your Weight (kg)" onChange={(e) => Setweight(e.target.value)} />
        </div>
        <div>
          {/*<label>Height (cm)</label>*/}
          <input value={height} placeholder="Your height (cm)" onChange={(e) => Setheight(e.target.value)} />
        </div>
        <button className="btn" type="submit">Calculate</button>
      </form>
      <div className="center">
        <h3>Your BMI :</h3>
        <input value={bmi} />
        <p class="id">{message}</p>
      </div>
    </div>
  </div>
  )
  }
export default App;