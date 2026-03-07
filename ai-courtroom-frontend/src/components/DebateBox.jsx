import { useEffect, useState } from "react";

export default function DebateBox({ title, text }) {

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {

    let i = 0;

    const typing = setInterval(() => {

      setDisplayText((prev) => prev + text[i]);

      i++;

      if (i >= text.length) {
        clearInterval(typing);
      }

    }, 18);

    return () => clearInterval(typing);

  }, [text]);

  return (

    <div className="debate-box">

      <h2>{title}</h2>

      <p className="debate-text">
        {displayText}
      </p>

    </div>

  );
}