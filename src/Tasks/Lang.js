import React, { useContext } from "react";
import { LgnContext } from "./Context";

const Lang = () => {
    console.log(LgnContext);
  const [lang,setLang] = useContext(LgnContext);
  return (
    <>
    <h1 style={{ textAlign: "center" }}>This Is Task C</h1>
  <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
    <select onClick={(e) => setLang(e.target.value)}>
      <option value="english">English</option>
      <option value="gujarati">Gujarati</option>
      <option value="hindi">Hindi</option>
      <option value="panjabi">Panjabi</option>
    </select>
    <div>
      {lang === "english" ? (
        <>
         
          <div>
            Hello, My name is Prince. I like to play Football.
          </div>
        </>
      ) : lang === "gujarati" ? (
        <div>નમસ્કાર, મારું નામ પ્રિન્સ છે. મને ફૂટબોલ રમવું ગમે છે.</div>
      ) : lang === "hindi" ?(
        <div>नमस्ते, मेरा नाम प्रिंस है। मैं फुटबॉल खेलना पसंद करता हूं।</div>
      ) : (
        <div>ਹੈਲੋ, ਮੇਰਾ ਨਾਮ ਪ੍ਰਿੰਸ ਹੈ। ਮੈਨੂੰ ਫੁੱਟਬਾਲ ਖੇਡਣਾ ਪਸੰਦ ਹੈ।</div>
      )}
    </div>
  </div>
</>
);
}

export default Lang





  
  
