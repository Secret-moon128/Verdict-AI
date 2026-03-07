export default function PopupCard({ title, text, onClose }) {

  return (
    <div className="popup-overlay">

      <div className="popup-card">

        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2 className="popup-title">{title}</h2>

        <div className="popup-content">
          {text.split("\n").map((p,i)=>
            <p key={i}>{p}</p>
          )}
        </div>

      </div>

    </div>
  );

}