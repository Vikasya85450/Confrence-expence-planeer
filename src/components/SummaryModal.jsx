import React, { useState, useEffect } from "react";

function SummaryModal({ show, onClose, rooms, addons, meals, people }) {
  if (!show) return null;

  const [items, setItems] = useState([]);

  useEffect(() => {
    const initialItems = [
      ...rooms.map(r => ({ type: "room", name: r.name, price: r.price, qty: r.quantity,image:r.img })),
      ...addons.map(a => ({ type: "addon", name: a.name, price: a.price, qty: a.quantity })),
      ...meals.filter(m => m.selected).map(m => ({ type: "meal", name: m.name, price: m.price, qty: people }))
    ];
    setItems(initialItems);
  }, [rooms, addons, meals, people]);

  const handleQtyChange = (index, newQty) => {
    const updated = [...items];
    updated[index].qty = Number(newQty);
    setItems(updated);
  };

  const handleRemove = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const overlayStyle = {
    position: "absolute",
  paddingTop:"20px",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalStyle = {
    background: "linear-gradient(135deg, #a8edea, #fed6e3)",
    padding: "30px",
    borderRadius: "25px",
    width: "90%",
    maxWidth: "700px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
    color: "#333",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    marginBottom: "20px",
    paddingTop:"4px",
    paddingBottom:"4px"
  };

  const thStyle = {
    borderBottom: "2px solid #ccc",
    padding: "10px",
    textAlign: "left",
    backgroundColor: "rgba(255,255,255,0.7)",
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  };

  const inputStyle = {
    width: "50px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    padding: "5px",
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "6px 12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ff6b6b",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s, transform 0.2s",
  };

  const buttonHover = {
    backgroundColor: "#ff4757",
    transform: "scale(1.05)",
  };

  return (
    <div className="" style={overlayStyle}>
      <div style={modalStyle}>
        <h2 style={{paddingTop:"30px", fontSize: "2rem", marginBottom: "20px" }}>Summary</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Item</th>
              <th style={thStyle}>Unit Price</th>
              <th style={thStyle}>Quantity</th>
              <th style={thStyle}>Subtotal</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i, idx) => (
              <tr key={idx}>
                <td style={tdStyle}>{i.name}</td>
                <td style={tdStyle}>${i.price}</td>
                <td style={tdStyle}>
                  <input
                    type="number"
                    value={i.qty}
                    min="0"
                    onChange={(e) => handleQtyChange(idx, e.target.value)}
                    style={inputStyle}
                  />
                </td>
                <td style={tdStyle}>${i.price * i.qty}</td>
                <td style={tdStyle}>
                  <button
                    style={buttonStyle}
                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHover)}
                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
                    onClick={() => handleRemove(idx)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={{ marginTop: "20px" }}>Total Cost: ${total}</h3>
        <button
          style={{ ...buttonStyle, marginTop: "20px" }}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
          onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SummaryModal;
