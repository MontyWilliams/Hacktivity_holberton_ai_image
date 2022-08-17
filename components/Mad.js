import Link from "next/link";

const Mad = (props) => {
  const {id, description, adlibs, words, wordsAnswer} = props.madL

  console.log(props)
  return (
    <div>
    <h2 >{"MadLib # " + `${id}`}</h2>
    <p>{"This one has " + `${adlibs}` + " madLibs to add!"}</p>
    <p>{"They are" + " " + `${words}`}</p>
    {/* <p>{"This is for the next page" + " " + `${JSON.stringify(wordsAnswer)}`}</p> */}
    <Link  href="/Madlibs/[id.va]" as={`/Madlibs/${id}`}>Home</Link>
    {/* <button onClick={(() => setIt(e))}>Go</button> */}
  </div>
  )

}
export default Mad;
