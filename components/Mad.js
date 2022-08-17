import Link from "next/link";

const Mad = (props) => {
  const {id, description, adlibs, words} = props.madL
  // console.log(mad)
  return (
    <div>
    <h2 >{"MadLib # " + `${id}`}</h2>
    <p>{"This one has " + `${adlibs}` + " madLibs to add!"}</p>
    <p>{"They are" + " " + `${words}`}</p>
    <Link  href="/Madlibs/[id]" as={`/Madlibs/${id}`}>Home</Link>
    {/* <button onClick={(() => setIt(e))}>Go</button> */}
  </div>
  )

}
export default Mad;
