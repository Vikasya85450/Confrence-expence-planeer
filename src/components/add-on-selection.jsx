import React from "react";

function AddOnsSelection({ addons, updateQuantity }) {
  const backgroundStyle = {
    backgroundImage: "linear-gradient(135deg, #a8edea, #fed6e3)", // soft gradient
    width: "100vw",
    minHeight: "100vh",
    padding: "50px 20px",
    boxSizing: "border-box",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    width: "320px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const cardHoverStyle = {
    transform: "translateY(-8px)",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
  };

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ff6b6b",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s, transform 0.2s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#ff4757",
    transform: "scale(1.05)",
  };

  return (
    <div style={backgroundStyle}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Add-Ons Selection</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {addons.map((item, index) => {
          const [hover, setHover] = React.useState(false);
          return (
            <div
              key={index}
              style={{ ...cardStyle, ...(hover ? cardHoverStyle : {}) }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <h4 style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#333" }}>{item.name}</h4>
             <img style={{ height:"320px",marginLeft:"2px", width:"300px"}} src={item.img} />
              <p style={{ margin: "5px 0", fontWeight: "bold" }}>${item.price}</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
                <button 
                  style={buttonStyle}
                  onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
                  onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
                  onClick={() => updateQuantity("addons", index, -1)}
                >
                  -
                </button>
                <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{item.quantity}</span>
                <button
                  style={buttonStyle}
                  onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
                  onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
                  onClick={() => updateQuantity("addons", index, 1)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h3 style={{ marginTop: "30px", fontSize: "1.8rem" }}>
        Total Cost: ${addons.reduce((sum, a) => sum + a.price * a.quantity, 0)}
      </h3>
    </div>
  );
}

export default AddOnsSelection;