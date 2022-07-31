const madLibsArray = 
[
    [
      "Every year, __ should go visit the __. It is a very __ visit.",
      3,
      "PLURAL NOUN",
      "PLACE",
      "ADJECTIVE"
    ],
    [
      "Your __ is usually a __ who is wearing a __ __",
      4,
      "NOUN",
      "NOUN",
      "ADJECTIVE",
      "PIECE OF CLOTHING"
    ],
    ["They looked at your __, __, and __.",
     3,
     "BODY PART",
     "NOUN",
     "NOUN"
    ],
    ["Sometimes, __ can be very __.", 2, "NOUN", "ADJECTIVE"],
    ["Afterwards, __ will give you a __ and a __ ", 3, "NOUN", "NOUN", "NOUN"],
    [
      "then your __ or __ will take you to __ as a treat.",
      3,
      "NOUN",
      "NOUN",
      "PLACE"
    ],
    ["All in all, the __ isn't so __!", 2, "NOUN", "ADJECTIVE"],
    [
      "A recent survey informs us that one out of every __ __ owns a __ phone.",
      3,
      "NUMBER",
      "PLURAL NOUN",
      "ADJECTIVE"
    ],
    [
      "Fortunately, __ over a mobile __ in recent years has improved __.",
      3,
      "VERB ENDING IN ING",
      "NOUN",
      "ADVERB"
    ],
    ["Today, __-held __ are all the rage.", 2, "PART OF THE BODY", "PLURAL NOUN"],
    ["In __, you find many __", 2, "PLACE", "PLURAL NOUN"],
    ["__ talk into their __ as they __.", 3, "PLURAL NOUN", "NOUN", "VERB"],
    [
      "__ percent of __ place their __ calls from their cars as they are __ to and from their home, office, or __.",
      5,
      "NUMBER",
      "PLURAL NOUN",
      "NOUN",
      "VERB ENDING IN ING",
      "NOUN"
    ],
    ["__ and __ are now the \u201cin\u201d thing to do.", 2, "NOUN", "NOUN"],
    [
      "__ can watch an hour of __ before __ in their room.",
      3,
      "PLURAL NOUN",
      "VERB ENDING IN ING",
      "VERB ENDING IN ING"
    ],
    [
      "Make sure they do not __ any violent __ or adult __.",
      3,
      "VERB",
      "PLURAL NOUN",
      "PLURAL NOUN"
    ],
    [
      "If there are any phone __, do not __ yourself as the NOUN-sitter. Take a message.",
      3,
      "PLURAL NOUN",
      "VERB",
      "NOUN"
    ],
    ["Write the __ __ on the __ provided.", 3, "NOUN", "ADVERB", "NOUN"],
    [
      "Hello, my fellow __ in __, it's me, __, the first __.",
      4,
      "PLURAL NOUN",
      "YEAR",
      "FAMOUS PERSON",
      "OCCUPATION"
    ],
    [
      "I am writing from __ where I have been __ living for the past __ years.",
      3,
      "A PLACE",
      "ADVERB",
      "NUMBER"
    ],
    [
      "I am concerned by the __ state of affairs in __ these days.",
      2,
      "ADJECTIVE",
      "COUNTRY"
    ],
    [
      "they are more concerned with VERB ENDING IN ING one another than with __ to the __.",
      3,
      "VERB ENDING IN ING",
      "VERB ENDING IN ING",
      "PLURAL NOUN"
    ],
    [
      "If we're going to keep __ then we need to learn how to __ all __",
      3,
      "VERB ENDING IN ING",
      "VERB",
      "PLURAL NOUN"
    ],
    [
      "Don't get me wrong; we had __ __ in my day, too.",
      2,
      "ADJECTIVE",
      "PLURAL NOUN"
    ],
    [
      "__ once called me a __ and __ me",
      3,
      "FAMOUS PERSON",
      "NOUN",
      "PAST TENSE VERB"
    ],
    ["__ was able to __ in harmony.'", 2, "PROPER NOUN", "VERB"],
    ["Let us find that __ __ once again, ", 2, "ADJECTIVE", "NOUN"],
    ["or else I'm taking my __ off the __!", 2, "PART OF THE BODY", "NOUN"]
  ]
  // let madLibSet = new Set(madLibsArray)  
  //  let madLibLibrary = Object.assign({}, madLibsArray)
  
  let madLibLibrary = []
  
//   for (const [key, value] of madLibsArray) {
    
//       madLibLibrary.set({key, value})
//      }
// console.log(madLibLibrary)

// for (lib in madLibsArray ) {
//   console.log("###############")
//   for (attribute in madLibsArray[lib]) {
    
//     console.log(madLibsArray[lib][attribute].shift())
//     console.log("-----")
//   }
// }
let LiBy = new Set();

madLibsArray.forEach(madLib => {
  // console.log(madLib)
  LiBy.add({
    "description": madLib[0],
    "numOfLibs": madLib[1]
  })
  
  madLib.shift();
  madLib.shift();
  madLib.forEach(attribute => {
    LiBy.add({
      "madLibs": attribute
    })
    
  })
  madLibLibrary.push(LiBy)
});

// console.log(madLibLibrary)
export { madLibLibrary }
