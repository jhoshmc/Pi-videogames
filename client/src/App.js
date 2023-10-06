import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Landing from "./views/landingPage/Landing";
import Created from "./views/create/Create";
import Detail from "./views/detail/Detail";
import Home from "./views/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/created" element={<Created />} />
      </Routes>
    </div>
  );
}

export default App;
