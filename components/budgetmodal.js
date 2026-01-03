export default function BudgetModal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div style={overlay} onClick={onClose}>
      <div style={modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={closeBtn}>×</button>
        {children}
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999
};

const modal = {
  background: "#fff",
  borderRadius: "18px",
  padding: "30px",
  width: "100%",
  maxWidth: "520px",
  boxShadow: "0 30px 80px rgba(0,0,0,.25)"
};

const closeBtn = {
  position: "absolute",
  right: "18px",
  top: "14px",
  fontSize: "22px",
  border: "none",
  background: "none",
  cursor: "pointer"
};
