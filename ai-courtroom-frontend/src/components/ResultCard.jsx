export default function ResultCard({ title, text, onClose }) {

  return (

    <div className="modal-overlay">

      <div className="modal-card">

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>{title}</h2>

        <p className="result-text">
          {text}
        </p>

      </div>

    </div>

  );
}