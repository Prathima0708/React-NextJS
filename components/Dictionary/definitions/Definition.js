// import React from 'react'
// import styles from './Definition.module.css'

// const Definition = ({word,meanings,category}) => {
//   return (
//     <div className={styles.meanings}>
//          {word === "" ? (
//         <span className="subTitle">Start by typing a word in search</span>
//       ) : (
//         meanings.map((mean) =>
//           mean.meanings.map((item) =>
     
//             item.definitions.map((def) => (
//               <div
//                 className={styles.singleMean}
//                 style={{
//                   backgroundColor:  "white",
//                   color:  "black",
//                 }}
//               >
//                 <b>{def.definition}</b>
//                 <hr style={{ backgroundColor: "black", width: "100%" }} />
//                 {def.example && (
//                   <span>
//                     <b>Example :</b> {def.example}
//                   </span>
//                 )}
//                 {def.synonyms && (
//                   <span>
//                     <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
//                   </span>
//                 )}
//               </div>
//             ))
//           )
//         )
//       )}
//     </div>
//   )
// }

// export default Definition




import React from "react";
import styles from './Definition.module.css'

const Definitions = ({ meanings, word, category,lightMode }) => {
  return (
    <div className={styles.meanings}>
     
{meanings[0]&& word &&category==='en' &&(
  <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio } style={{backgroundColor:"white",borderRadius:"10"}} controls>
    Your browser doesnt support audio element
  </audio>
)}
    
     

      {word === "" ? (
        <span className={styles.subTitle}>Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className={styles.singleMean}
                style={{
                  backgroundColor: lightMode ? "#3b5360" : "white",
                  color: lightMode ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;