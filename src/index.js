import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Importing the CSS file for styling
import ethiopianFoodData from "./data/ethiopianFoods"; // Importing the data for Ethiopian foods from an external file

// Main application component
function App() {
  return (
    <>
      <div className="container">
        <Header /> {/* Rendering the Header component */}
        <Main /> {/* Rendering the Main component */}
        <Footer /> {/* Rendering the Footer component */}
      </div>
    </>
  );
}

// The Header component displays the title of the application
function Header() {
  return (
    <div>
      <header className="header">
        <h1>Ethio Traditional Food</h1> {/* Main title of the application */}
      </header>
    </div>
  );
}

// The Main component handles the display of the Ethiopian food menu
function Main() {
  const foods = ethiopianFoodData; // Array of Ethiopian food objects from the imported data
  const numFoods = foods.length; // Number of food items available

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numFoods > 0 ? (
        <>
          <p>
            Authentic Ethiopian cuisine. 10 creative dishes to choose from. All
            organic, all delicious.
          </p>

          <ul className="foods">
            {foods.map((food) => (
              <EthiopianFood foodObj={food} key={food.name} /> // Rendering an EthiopianFood component for each food item in the list
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

// The EthiopianFood component represents a single food item
function EthiopianFood({ foodObj }) {
  return (
    <>
      <li className={`food ${foodObj.soldOut ? "sold-out" : ""}`}>
        <img src={foodObj.photoName} alt={foodObj.name} />
        {/* Image of the food item */}
        <div>
          <h1>{foodObj.name}</h1> {/* Name of the food item */}
          <p>{foodObj.ingredients}</p> {/* Ingredients of the food item */}
          <span>{foodObj.soldOut ? "SOLD OUT" : `$${foodObj.price}`}</span>
          {/* Display "SOLD OUT" if the item is not available, otherwise show the price */}
        </div>
      </li>
    </>
  );
}

// The Footer component displays the open/close status of the restaurant
function Footer() {
  const hour = new Date().getHours(); // Current hour of the day
  const openHour = 12; // Restaurant opening hour
  const closeHour = 22; // Restaurant closing hour
  const isOpen = hour >= openHour && hour <= closeHour; // Boolean value to check if the restaurant is open
  console.log(isOpen); // Logging the open status to the console

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} /> // Rendering the Order component if the restaurant is open
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

// The Order component displays ordering options when the restaurant is open
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button> {/* Button to place an order */}
    </div>
  );
}

// Creating the root element and rendering the App component
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
