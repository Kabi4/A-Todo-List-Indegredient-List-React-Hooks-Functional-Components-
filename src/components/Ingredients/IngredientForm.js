import React,{useState} from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setinputAmount] = useState(0);


  const submitHandler = event => {
    event.preventDefault();
    props.addItem({title: inputName,amount: inputAmount});
    setInputName("");
    setinputAmount(0);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input value={inputName} onChange={(e)=>{setInputName(e.target.value)}} type="text" id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" onChange={(e)=>{setinputAmount(e.target.value)}} value={inputAmount} id="amount" />
          </div>
          <div className="ingredient-form__actions">
            <button disabled={inputName===""||inputAmount===0} type="submit">Add Ingredient</button>
            {props.loading?<LoadingIndicator />:null}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
