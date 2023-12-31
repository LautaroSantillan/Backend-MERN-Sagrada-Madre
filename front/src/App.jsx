// IMPORTS
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./ProtectedRoute";
import { ReminderProvider } from "./context/RemindersContext";
// IMPORTS PAGES
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RemindersPage from "./pages/RemindersPage";
import RemindersFormPage from "./pages/RemindersFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
// IMPORTS COMPONENTS
import Navbar from "./components/Navbar";

function App(){
  return(
    <AuthProvider>
      <ReminderProvider>
        <BrowserRouter>
          <main className="container mx-auto">
            <Navbar />
            <Routes>
              {/* Publics Routes */}
              <Route path="/" element={<HomePage />}/>
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/register" element={<RegisterPage />}/>
              {/* Private Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/reminders" element={<RemindersPage />}/>
                <Route path="/add-reminders" element={<RemindersFormPage />}/>
                <Route path="/reminders/:id" element={<RemindersFormPage />}/>
                <Route path="/profile" element={<ProfilePage />}/>
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </ReminderProvider>
    </AuthProvider>
  );
}

export default App;