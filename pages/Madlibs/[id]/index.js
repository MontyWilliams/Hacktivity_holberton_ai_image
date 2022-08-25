import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react';
import { MadContext } from '../../../components/Context/MadContext';
import styles from '../../../styles/madIndex_styles.module.css';
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
    
  }))  
}))  


const FilterInput = () => {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);
  return (
    <div>
      <input name=""value={filter} onChange={(evt) => setFilter(evt.target.value)}/>
      {filter}
    </div> 
    )  
  }

  function getIt (props) {

    for(const key in props) {
     let page = (Object.values(props))
     return(<div className={styles.h1}>{page.map(e => {
      return(
        <div>
          <h1 className="box" key={e}>{e}
          </h1>
         

        </div>
      )
    })}
     
    <FilterInput />
     </div>)
    
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
      {/* <p>Succesfully got The routes Working! this is route: "{id}"</p> */}
      <p>{madLibs.description}</p>
      {/* <button onClick={getIt} >yes</button> */}

      <div >
      {getIt(word)}
      </div> 
    </div>
  )
}

export default madL
