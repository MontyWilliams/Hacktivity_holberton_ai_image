import { useRouter } from 'next/router'
import React, { useContext} from 'react';
import { MadContext } from '../../../components/Context/MadContext';


const madL = (props) => {
  
  const { madLibs } = useContext(MadContext)
  // console.log(madLibs)
 
  const router = useRouter()
  const {id} = router.query;
  return (
    <div>
      <p>Succesfully got The routes Working! this is route: "{id}"</p>
      
    </div>
  )

}
// export const getStaticProps = async (context) => {
//   const result =

// }
export default madL
