import { useState } from "react";

export default function CaseInput({ onSubmit }) {

  const [text,setText] = useState("");
  const [error,setError] = useState("");

  const submit = () => {

    if(!text.trim()){
      setError("Please enter case facts");
      return;
    }

    setError("");
    onSubmit(text);

  };

  return (

    <div className="case-box">

      <textarea
        placeholder="Enter case facts..."
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button onClick={submit}>
        Analyze Case
      </button>

    </div>

  );

}