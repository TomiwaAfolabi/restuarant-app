import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Welcome from "./pages/welcome";
import Authentication from "./pages/authentication";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/authentication" element={<Authentication/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
