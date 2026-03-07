import { useState } from "react";
import CaseInput from "./components/CaseInput";
import PopupCard from "./components/PopupCard";
import VerdictScroll from "./components/VerdictScroll";
import LoadingSpinner from "./components/LoadingSpinner";
import { analyzeCase } from "./services/api";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [loading, setLoading] = useState(false);

  const [prosecution, setProsecution] = useState("");
  const [defense, setDefense] = useState("");
  const [judge, setJudge] = useState("");
  const [confidence, setConfidence] = useState("");

  const [showPros, setShowPros] = useState(false);
  const [showDef, setShowDef] = useState(false);
  const [showVerdict, setShowVerdict] = useState(false);



  async function runCase(text) {

    try {

      setLoading(true);

      const data = await analyzeCase(text);

      setProsecution(data.prosecution);
      setDefense(data.defense);
      setJudge(data.judge || data.verdict || "");
      setConfidence(data.confidence);

      setLoading(false);

    } catch (err) {

      console.error(err);
      alert("Backend error");
      setLoading(false);

    }

  }



  function resetCase() {

    setProsecution("");
    setDefense("");
    setJudge("");
    setConfidence("");

    setShowPros(false);
    setShowDef(false);
    setShowVerdict(false);

  }



  /* ---------------- LOGIN PAGE ---------------- */

  if (!loggedIn) {

    return (

      <div className="login-page">

        <div className="login-box">

          <img src="/logo.png" className="login-logo" />

          <h2 className="login-title">
            Verdict AI
          </h2>

          <p className="login-subtitle">
            AI Courtroom System
          </p>

          <input
            type="text"
            placeholder="Username"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button onClick={() => setLoggedIn(true)}>
            Login
          </button>

        </div>

      </div>

    );

  }



  /* ---------------- MAIN APP ---------------- */

  return (

    <div className="app">

      <header>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

          <img src="/logo.png" className="nav-logo" />

          <h1>AI Courtroom</h1>

        </div>

        <button onClick={() => setLoggedIn(false)}>
          Logout
        </button>

      </header>



      <CaseInput onSubmit={runCase} />



      {loading && <LoadingSpinner />}



      {prosecution && (

        <div className="trial-buttons">

          <button onClick={() => setShowPros(true)}>
            View Prosecution
          </button>

          <button onClick={() => setShowDef(true)}>
            View Defense
          </button>

          <button
            className="verdict-btn"
            onClick={() => setShowVerdict(true)}
          >
            View Judge Verdict
          </button>

          <button onClick={resetCase}>
            New Case
          </button>

        </div>

      )}



      {showPros && (

        <PopupCard
          title="⚔ Prosecution Argument"
          text={prosecution}
          onClose={() => setShowPros(false)}
        />

      )}



      {showDef && (

        <PopupCard
          title="🛡 Defense Argument"
          text={defense}
          onClose={() => setShowDef(false)}
        />

      )}



      {showVerdict && (

        <VerdictScroll
          verdict={judge}
          confidence={confidence}
          onClose={() => setShowVerdict(false)}
        />

      )}

    </div>

  );

}