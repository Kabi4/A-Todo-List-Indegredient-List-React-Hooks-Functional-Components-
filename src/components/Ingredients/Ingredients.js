import React,{useCallback, useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from './../UI/ErrorModal';

function Ingredients() {
  const [ingredientList, setingredientList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [err,setErr] = useState(null);

  const addIngredientHandler = (newItem)=>{
    setisLoading(true);
    fetch('https://indegredent-list-withhooks.firebaseio.com/ingredient.json',{
      method: "POST",
      body: JSON.stringify(newItem),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res=>{
      return res.json();
    })
    .then(res=>{
      setisLoading(false);
      setingredientList(prevState=>[...prevState,{id: res.name,...newItem}]);
    })
    .catch(err=>{
      setError(err.message.replace(/_/g,""));
    })
  }

  const removeIngredientHandler = (id)=>{
    setisLoading(true);
    fetch(`https://indegredent-list-withhooks.firebaseio.com/ingredient/${id}.json`,{
      method: "DELETE"
    })
    .then(res=>{
      setisLoading(false);
      setingredientList(prevState=>{
        let index = prevState.findIndex(ele=>ele.id===id);
        let newState = [...prevState];
        if(index>=0){
          newState.splice(index,1);
        }
        return newState;
      })
    })
    .catch(err=>{
      setError(err.message.replace(/_/g,""));
    })
  };

  const setFilterIndegredents = useCallback(filteredIndegredent=>{
    setingredientList(filteredIndegredent);
    setisLoading(false);
  },[])

  const startingFetchingIndegredient = useCallback(()=>{
    setisLoading(true);
  },[]);

  const clearError = ()=>{
    setErr(null);
  }

  const setError = useCallback((message)=>{
    setErr(message);
    setisLoading(false);
  },[]);

  return (
    <div className="App">
      {err && <ErrorModal onClose={clearError} >{err}</ErrorModal>}
      <IngredientForm loading={isLoading} addItem = {addIngredientHandler} />

      <section>
        <Search  error={setError} startfetching={startingFetchingIndegredient} updateingredientList={setFilterIndegredents} />
        <IngredientList onRemoveItem={removeIngredientHandler} ingredients={ingredientList}/>
      </section>
    </div>
  );
}

export default Ingredients;
