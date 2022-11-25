import { Link, Routes, Route } from "react-router-dom";
import Expr from "./components/Expr";
import If1 from "./components/If1";
import If2 from "./components/If2";
import If3 from "./components/If3";
import If4 from "./components/If4";
import Loop1 from "./components/Loop1";
import Loop2 from "./components/Loop2";
import Loop3 from "./components/Loop3";

function App() {
  return (
    <div className="App">
      <Link to="/expr">[Expr]</Link>
      <Link to="/if1">[If1]</Link>
      <Link to="/if2">[If2]</Link>
      <Link to="/if3">[If3]</Link>
      <Link to="/if4">[If4]</Link>
      <Link to="/loop1">[Loop1]</Link>
      <Link to="/loop2">[Loop2]</Link>
      <Link to="/loop3">[Loop3]</Link>


      <Routes>
        <Route path="/expr" element={<Expr />}></Route>
        <Route path="/if1" element={<If1 />}></Route>
        <Route path="/if2" element={<If2 />}></Route>
        <Route path="/if3" element={<If3 />}></Route>
        <Route path="/if4" element={<If4 />}></Route>
        <Route path="/loop1" element={<Loop1 />}></Route>
        <Route path="/loop2" element={<Loop2 />}></Route>
        <Route path="/loop3" element={<Loop3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
