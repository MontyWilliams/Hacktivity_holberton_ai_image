import { useRouter } from 'next/router'
import React, { useContext } from 'react';
import { MadContext } from '../../../components/Context/MadContext';


const madL = (props) => {
  const { mad, madLibs, setMadLibs } = useContext(MadContext);

  console.log(mad)
  const router = useRouter()
  const {id} = router.query;
  return (
    <div>
      <p>Succesfully got The routes Working! this is rout: "{id}"</p>
      <p>{madLibs}</p>
    </div>
  )

}
// export const getStaticProps = async (context) => {
//   const result =

// }
export default madL
