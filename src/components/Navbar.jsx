import React from "react";

function Navbar({ onShowDetails }) {
  return (
    <div className=" max-w-screen  py-2.5" style={{ display: "flex", justifyContent: "space-between", background: "#0a3d62", color: "white",  }}>
      <h2 className="text-3xl font-bold mx-4 mt-4"> <i class="fa-solid fa-circle-notch fa-lg"></i> Conference Expense Planner</h2>
      <div className="my-4 mx-4 text-l font-bold">
        <a href="#rooms" style={{ margin: "0 15px", color: "white" }}>Venue</a>
        <a href="#addons" style={{ margin: "0 15px", color: "white" }}>Add-ons</a>
        <a href="#meals" style={{ margin: "0 15px", color: "white" }}>Meals</a>
        <button className="hover:scale-100 hover: transition-all duration-300 hover:text-lg" onClick={onShowDetails} style={{ marginLeft: "20px", padding: "6px 12px" }}>
          Show Details
        </button>
      </div>
    </div>
  );
}

export default Navbar;
