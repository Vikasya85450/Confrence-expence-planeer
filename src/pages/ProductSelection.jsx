import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RoomSelection from "../components/roomselection";
import AddOnsSelection from "../components/addOnsSelection";
import MealsSelection from "../components/MealsSelection";
import SummaryModal from "../components/SummaryModal";

function ProductSelectionPage() {
  const [rooms, setRooms] = useState([
    { name: "Auditorium Hall", capacity: 200, price: 5500, quantity: 0,img:"https://images.pexels.com/photos/7991486/pexels-photo-7991486.jpeg" },
    { name: "Conference Room", capacity: 15, price: 3500, quantity: 0,img:"https://plus.unsplash.com/premium_photo-1661879435429-a396d927c686?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Presentation Room", capacity: 50, price: 700, quantity: 0,img:"https://images.pexels.com/photos/7750131/pexels-photo-7750131.jpeg" ,},
    { name: "Large Meeting Room", capacity: 10, price: 900, quantity: 0,img:"https://plus.unsplash.com/premium_photo-1724753995771-8ee6954e78da?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
    { name: "Small Meeting Room", capacity: 5, price: 1100, quantity: 0, img:"https://images.unsplash.com/photo-1661169399398-dd271af8f651?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ]);

  const [addons, setAddons] = useState([
    { name: "Speakers", price: 35, quantity: 0 ,img:"https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "Microphones", price: 45, quantity: 0,img:"https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg" },
    { name: "Whiteboards", price: 80, quantity: 0 ,img:"https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"},
    { name: "Projectors", price: 200, quantity: 0,img:"https://images.pexels.com/photos/2867980/pexels-photo-2867980.jpeg" },
    { name: "Signage", price: 80, quantity: 0 ,img:"https://images.pexels.com/photos/1751279/pexels-photo-1751279.jpeg"}
  ]);

  const [meals, setMeals] = useState([
    { name: "Breakfast", price: 50, selected: false ,img:"https://images.unsplash.com/photo-1528699633788-424224dc89b5?q=80&w=733&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "Lunch", price: 60, selected: false,img:"https://plus.unsplash.com/premium_photo-1661771822467-e516ca075314?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "High Tea", price: 25, selected: false ,img:"https://images.unsplash.com/photo-1719004322339-afe59dc291d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpZ2glMjB0ZWF8ZW58MHx8MHx8fDA%3D"},
    { name: "Dinner", price: 70, selected: false ,img:"https://plus.unsplash.com/premium_photo-1672199330058-adb7cae5eeda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D"}
  ]);

  const [people, setPeople] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const updateQuantity = (type, index, delta) => {
    if (type === "rooms") {
      setRooms(prev =>
        prev.map((r, i) => i === index ? { ...r, quantity: Math.max(0, r.quantity + delta) } : r)
      );
    } else {
      setAddons(prev =>
        prev.map((a, i) => i === index ? { ...a, quantity: Math.max(0, a.quantity + delta) } : a)
      );
    }
  };

  const updateMealQuantity = (index) => {
    setMeals(prev =>
      prev.map((m, i) => i === index ? { ...m, selected: !m.selected } : m)
    );
  };

  return (
    <div >
      <Navbar onShowDetails={() => setShowModal(true)} />
      <RoomSelection rooms={rooms} updateQuantity={updateQuantity} />
      <AddOnsSelection addons={addons} updateQuantity={updateQuantity} />
      <MealsSelection meals={meals} updateMealQuantity={updateMealQuantity} people={people} setPeople={setPeople} />
      <SummaryModal show={showModal} onClose={() => setShowModal(false)} rooms={rooms} addons={addons} meals={meals} people={people} />
    </div>
  );
}

export default ProductSelectionPage;
