import './App.css';
import { useState } from 'react';

function App() {

  // This method for individual state

  // const[firstName, setfirstName] = useState("");
  // const[lastName, setlastName] = useState("");

  // console.log(firstName);
  // console.log(lastName)

  // function changeFirstHandler(event){
  //   // console.log("Printing First Name");
  //   // console.log(event.target.value);
  //   setfirstName(event.target.value);
  // }

  // function changeLastHandler(event){
  //   // console.log("Printing Last Name");
  //   // console.log(event.target.value);
  //   setlastName(event.target.value);
  // }

  // This method for Handling multiple state using object
  
  const [FormData, setFormData] = useState( {firstName: "", lastName: "", email: "", comments: "", check: true, mode: "", favCar:""} )
  

  function changeHandler(event){
    const {name,value,checked,type} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    });

  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Submission Done");
    console.log(FormData);
  }

  return (
    <div className="App">
      
    <form onSubmit={submitHandler}>
    <br></br>
      <input
        type='text'
        placeholder='First Name'
        onChange={changeHandler}
        name='firstName' // to identify call kisne kra tha
        value={FormData.firstName}
      />

      <br></br>
      <br></br>
      <input
        type='text'
        placeholder='Last Name'
        onChange={changeHandler}
        name='lastName' // to identify call kisne kra tha
        value={FormData.lastName} // storing the state in value from the formData -due to this Hr input element k saath uske state ko save kra liya
      />

      <br></br>
      <br></br>
      <input
        type='email'
        placeholder='E-mail'
        onChange={changeHandler}
        name='email' // to identify call kisne kra tha
        value={FormData.email}
      />

      <br></br>
      <br></br>
      <textarea
        type='text'
        placeholder='Your Comments'
        onChange={changeHandler}
        name='comments' // to identify call kisne kra tha
        value={FormData.comments} // storing the state in value from the formData -due to this Hr input element k saath uske state ko save kra liya
      />

      <br></br>
      <br></br>
      <input
        type='checkbox'
        onChange={changeHandler}
        name='check' // to identify call kisne kra tha
        checked={FormData.check}
        id='check'
      />
      <label htmlFor='check'> Hit me</label>

      <br></br>
      <br></br>

      <fieldset>
        <legend>Mode:</legend>
        
      <input
        type='radio'
        onChange={changeHandler}
        name='mode' // to identify call kisne kra tha
        checked={FormData.mode === "on-line"}
        value="on-line"
        id='on-mode'
      />
      <label htmlFor='on-mode'> Online Mode</label>

      <br></br>
      <br></br>
      <input
        type='radio'
        onChange={changeHandler}
        name='mode' // to identify call kisne kra tha
        checked={FormData.mode === "off-line"}
        value="off-line"
        id='off-mode'
      />
      <label htmlFor='off-mode'> Offline Mode</label>

      </fieldset>

      <label htmlFor='favCar'>Tell me favCar</label>
      <select
        name='favCar'
        id='favCar'
        value={FormData.favCar}
        onChange={changeHandler}
      >

      <option value="scarpio">Scarpio</option>
      <option value="fortuner">Fortuner</option>
      <option value="bmw">BMW</option>
      <option value="Mercedes">Mercedes</option>
      <option value="Audi">Audi</option>
      <option value="Thar">Thar</option>

      </select>

      <br></br>
      <br></br>
      <button>Submit</button>

    </form>

    </div>
  );
}

export default App;
