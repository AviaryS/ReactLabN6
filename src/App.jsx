import './App.css';
import {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  const [login, setLogin] = useState(false);
  const [regCheck, setRegCheck] = useState(false);

  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  const [users, setUsers] = useState([
    { id: 0, name: 'admin', password: 'admin' },
    { id: 1, name: 'admin2', password: 'admin2' },
    { id: 2, name: 'admin3', password: 'admin3' },
  ]);

  return (
    <div className="App">
      <Router>
        <Header login={login} setLogin={setLogin} />
        <Routes>
          <Route
              path='/register'
              element={
                <RegisterPage
                    setRegCheck={setRegCheck}
                    users={users}
                    setUsers={setUsers}
                />
              }
          />
          <Route
              path='/login'
              element={
                <LoginPage
                    regCheck={regCheck}
                    setLogin={setLogin}
                    users={users}
                />
              }
          />
          <Route
              path='/'
              element={
                  <HomePage
                      setRegCheck={setRegCheck}
                      login={login}
                      cart={cart}
                      setCart={setCart}
                />
              }
          />
            <Route
                path='/cart'
                element={
                    <CartPage
                        cart={cart}
                        setCart={setCart}
                        order={order}
                        setOrder={setOrder}
                    />
                }
            />
            <Route
                path='/order'
                element={
                    <OrderPage
                        order={order}
                    />
                }
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
