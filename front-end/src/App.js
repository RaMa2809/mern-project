import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import PublicRoutes from "./routes/publicRoutes";
import Guest from "./views/guest";
import LoggedInUser from "./views/LoggedInUser";
import PrivateRoutes from "./routes/PrivateRoutes";
import Users from "./components/Users";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoutes/>}>
              <Route path="/Dashboard" element={<LoggedInUser/>} />
              <Route path="/Dashboard/Users" element={<Users/>} />
          </Route>

          <Route path="/Guest" element={<PublicRoutes/>}>
            <Route path="/Guest/login" element={<Guest page={'login'}/>} />
            <Route path="/Guest/forgot-password" element={<Guest page={'ForgotPassword'}/>} />
            <Route path="/Guest/reset-password" element={<Guest page={'ResetPassword'}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
