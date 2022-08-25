import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react';
import { MadContext } from '../../../components/Context/MadContext';
import create from 'zustand'

const useStore = create((set) => ({
  filter: "",
  wordAnswers: [],
  setFilter: (filter) => set((state) => ({
    ...state,
    filter,
  })),  
  setWordAnswers: () => ((set) => ({
    ...state,
    pokemon,
  }))  
}))  


const FilterInput = () => {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);
  return (
    <input value={filter} onChange={(evt) => setFilter(evt.target.value)}/>
    )  
  }

  function getIt (props) {

    for(const key in props) {
     let page = (Object.values(props))
     return(<div>{page.map(e => {
      return(
        <p key={e}>{e}</p>

      )
     })}</div>)
    
  }
  }

const madL = () => {
  const {madLibs, setMadLibs} = useContext(MadContext);
  const filter = useStore((state) => state.filter);
  const word = madLibs.wordsAnswer


  const router = useRouter()
  const {id} = router.query;
  return (
    <div >
      <p>Succesfully got The routes Working! this is route: "{id}"</p>
      <p>{madLibs.description}</p>
      {/* <button onClick={getIt} >yes</button> */}
      <FilterInput />
      <div className="box">
      {filter}
      {getIt(word)}
      </div> 
    </div>
  )
}

export default madL
