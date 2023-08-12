import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>HOME PAGE</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reminders" element={<h1>REMINDERS PAGE</h1>} />
        <Route path="/add-reminders" element={<h1>New Reminders</h1>} />
        <Route path="/reminders/:id" element={<h1>Update Reminder</h1>} />
        <Route path="/profile" element={<h1>PROFILE</h1>} />
      </Routes>
      {/* <h1 className="text-4xl font-bold">HELLO WORLD</h1> */}
    </BrowserRouter>
  );
}

export default App;