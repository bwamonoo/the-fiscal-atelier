import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { api } from "./api/axios";
import { Dashboard } from "./pages/Dashboard";
import { AddTransaction } from "./pages/AddTransaction";
import { TransactionHistory } from "./pages/TransactionHistory";
import { SignIn } from "./pages/SignIn";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";

function App() {
  const [authLoading, setAuthLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [transactions, setUserTransactions] = useState([]);

  const getUserTransactions = async () => {
    const response = await api.get("/transactions/user");
    setUserTransactions(response.data.data);
  };

  useEffect(() => {
    console.log("luce", window.lucide);
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.get("/users/me");
        if (response.data?.data?.user) {
          setUser(response.data.data.user);
        }
      } catch (error) {
        console.log("No active session found: ", error);
      } finally {
        setAuthLoading(false);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    if (user) getUserTransactions();
  }, [user]);

  if (authLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Routes>
        <Route path={"/sign-in"} element={<SignIn setUser={setUser} />} />

        <Route element={<ProtectedRoute user={user} />}>
          <Route index element={<Dashboard transactions={transactions} />} />
          <Route
            path="/add-transaction"
            element={
              <AddTransaction getUserTransactions={getUserTransactions} />
            }
          />
          <Route
            path="/transactions"
            element={<TransactionHistory transactions={transactions} />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
