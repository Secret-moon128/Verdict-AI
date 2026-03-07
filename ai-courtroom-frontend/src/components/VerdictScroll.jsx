export default function VerdictScroll({ verdict, confidence, onClose }) {

  // split verdict text
  const lines = verdict ? verdict.split("\n") : [];

  return (

    <div className="verdict-overlay">

      <div className="verdict-scroll">

        {/* scroll background */}
        <img src="/scroll.png" className="scroll-bg" />

        {/* text on top of scroll */}
        <div className="scroll-content">

          <div className="verdict-title">
            <img src="/gavel.png" className="gavel-icon" />
            <h2>Judge Verdict</h2>
          </div>

          {/* verdict content */}
          {lines.map((line, index) => {

            const lower = line.toLowerCase();

            if (lower.includes("prosecution score")) {
              return (
                <div key={index} className="score">
                  {line}
                </div>
              );
            }

            if (lower.includes("defense score")) {
              return (
                <div key={index} className="score">
                  {line}
                </div>
              );
            }

            if (lower.includes("final verdict")) {
              return (
                <div key={index} className="final-verdict">
                  {line}
                </div>
              );
            }

            if (lower.includes("confidence")) {
              return (
                <div key={index} className="confidence-badge">
                  {line}
                </div>
              );
            }

            return <p key={index}>{line}</p>;

          })}

          {/* fallback if confidence comes separately */}
          {confidence && (
            <div className="confidence-badge">
              Confidence: {confidence}
            </div>
          )}

          <button className="close-btn" onClick={onClose}>
            Close
          </button>

        </div>

      </div>

    </div>

  );

}