import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react';
import { MadContext } from '../../../components/Context/MadContext';

const madL = () => {
   const {madLibs, setMadLibs, madL} = useContext(MadContext);

  const [data, setData] = useState("")
  
  // useEffect(() => {
  //   setMadLibs(madL)
  // }, );
  
  console.log(madLibs);

  const router = useRouter()
  const {id} = router.query;
  return (
    <div >
      <p>Succesfully got The routes Working! this is route: "{id}"</p>
      <p>{madLibs.description}</p>
      {/* <button onClick={getIt} >yes</button> */}
      <div className="box">
      {/* <button onClick={setIt(data)} >yes</button> */}


      </div> 
    </div>
  )
}

export default madL
