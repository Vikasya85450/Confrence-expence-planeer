import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="py-4"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1560523159-94c9d18bcf27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
       backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      <h1 className="text-3xl font-bold">Conference Expense Planner</h1>
      <p  className="text-3xl font-extrabold">
        Plan your perfect conference with venue rooms, add-ons, and catering —
        all in one place.
      </p>
      <button className="rounded-2xl p-6 mt-5 hover:"
        onClick={() => navigate("/selection")}
        style={{ padding: "10px 20px", backgroundColor:"red",  fontSize: "18px", cursor: "pointer" }}
      >
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;
