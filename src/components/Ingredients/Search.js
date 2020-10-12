import React, { useState,useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const {updateingredientList,startfetching,error} = props; 
  const [searchInput, setsearchInput] = useState("");
  const inputRef = useRef();

  useEffect(()=>{
    startfetching(true);
    const timer = setTimeout(()=>{
      if(searchInput===inputRef.current.value){  const query = searchInput.length===0?"":`?orderBy="title"&equalTo="${searchInput}"`
        fetch('https://indegredent-list-withhooks.firebaseio.com/ingredient.json'+query)
          .then(res=>res.json())
          .then(res=>{
            const fetchedIndegridents = [];
            for(const key in res){
              fetchedIndegridents.push({
                id: key,
                title: res[key].title,
                amount: res[key].amount
              })
            };
            updateingredientList(fetchedIndegridents);
          })
          .catch(err=>{
            console.log(err)
            error(err.message);
          })
        }
    },500)
    return()=>{
      clearTimeout(timer);
    };
    }
  ,[searchInput,updateingredientList,inputRef,startfetching,error])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input ref={inputRef} value={searchInput} onChange={(e)=>{setsearchInput(e.target.value)}} type="text" />
        </div>
      </Card>
    </section>
  );
});

export default Search;
