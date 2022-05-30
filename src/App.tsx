import React from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <div className="app">
     <AppRoutes />    
    </div>
  );
}

export default App;
