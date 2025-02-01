import FirstPage from "./pages/FirstPage";
import RegistrationPage from "./pages/RegistrationPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
