import { useRouter } from 'next/router'

const madL = (props) => {
  console.log(props)
  const router = useRouter()
  const {id} = router.query;
  // console.log(router)
  return (
    <div>
    <p>Succesfully got The routes Working! this is rout: "{id}"</p>
  </div>
  )

}
// export const getStaticProps = async (context) => {
//   const result =

// }
export default madL
