import { useState } from "react";
import "./App.css";
import { Landing } from "../componets/Landing/Landing";
import { Routes, Route, Navigate } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import Form from "../componets/Login/Form";

function App() {
  const [auth, setAuth] = useState(false);
  const [savedCards, setSavedCards] = useState([84115, 84043, 10001, 96150]);

  return (
    <DataContext.Provider
      value={{
        savedCards,
        setSavedCards,
        setAuth
      }}
    >
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              !auth ? <Form setAuth={setAuth} /> : <Navigate to="/landing" />
            }
          />
          <Route
            path="/landing"
            element={auth ? <Landing setAuth={setAuth} /> : <Navigate to="/" />}
          />
        </Routes>
        {/* <Landing /> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
