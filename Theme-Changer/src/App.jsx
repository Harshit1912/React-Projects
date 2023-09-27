import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="container">Theme-Changer</div>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
