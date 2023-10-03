import { Route, Routes } from "react-router-dom";
import Landing from "./views/landingPage/Landing";
import Form from "./views/form/Form";
import Detail from "./views/detail/Detail";
import Home from "./views/home/Home";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
