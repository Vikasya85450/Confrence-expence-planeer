import React from "react";

function MealsSelection({ meals, updateMealQuantity, people, setPeople }) {
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
    gap: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "20px",
     width: "320px",
    boxSizing: "border-box",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const cardHoverStyle = {
    transform: "translateY(-8px)",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
  };

  const checkboxStyle = {
    width: "18px",
    height: "18px",
    marginRight: "8px",
    cursor: "pointer",
  };

  const inputStyle = {
    width: "60px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    padding: "5px",
    textAlign: "center",
  };

  return (
    <div style={backgroundStyle}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Meals Selection</h2>

      <div style={{ display: "flex", alignItems: "center" , gap: "10px", marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold" }}>Number of People:</label>
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          style={inputStyle}
        />
      </div>

      <div className=" gap-4 flex flex-wrap h-100" style={{  justifyContent:"center" }}>
        {meals.map((meal, index) => {
          const [hover, setHover] = React.useState(false);
          return (
            <div 
              key={index}
              style={{ ...cardStyle, ...(hover ? cardHoverStyle : {}) }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <label style={{ cursor: "pointer", display: "flex", flexDirection:'column', alignItems: "center" }}>
                <img style={{ height:"320px", width:"250px"}}  class="w-full flex flex-wrap h-100" src={meal.img}/>
                <div style={{display:'flex'}}>
               
                <div style={{ fontWeight: "bold",margin:"20px",display:"flex" }}>
                  {meal.name} - ${meal.price}
                  
                </div>
                 <input className=" mt-5"
                  type="checkbox"
                  checked={meal.selected}
                  onChange={() => updateMealQuantity(index)}
                  style={checkboxStyle}
                />

                </div>
              </label>
            </div>
          );
        })}
      </div>

      <h3 style={{ marginTop: "30px", fontSize: "1.8rem" }}>
        Total Cost: ${meals.reduce((sum, m) => sum + (m.selected ? m.price * people : 0), 0)}
      </h3>
    </div>
  );
}

export default MealsSelection;
