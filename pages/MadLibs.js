import Head from 'next/head'
import { useRouter } from "next/router";

const MadLibs = (props) => {
  const router = useRouter();
  const query = router.query;
  const name = query.name;
  console.log(props)
  return(
    <div>
      <Head>
        <title>About</title>
      </Head>
    
    </div>
  )
}
export default MadLibs
