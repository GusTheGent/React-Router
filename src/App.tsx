import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "components/Home/Home";
import NavBar from "components/Navbar/Navbar";
import Participation from "components/Participation/Participation";
import NotFound from "components/Not-Found/Not-Found";
import Products from "components/Products/Products";
import Featured from "components/Products/components/Featured/Featured";
import New from "components/Products/components/New/New";
import Users from "components/Users/Users";
import UserDetails from "components/Users/UserDetails/UserDetails";
import Profile from "components/Profile/Profile";
import { AuthProvider } from "utils/Auth/Auth";
import Login from "components/Login/Login";
import RequireAuth from "utils/RequireAuth/RequireAuth";
const LazyAboutComponent = React.lazy(() => import("components/About/About"));

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="about"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyAboutComponent />
                </React.Suspense>
              }
            />
            <Route path="products" element={<Products />}>
              <Route index element={<Featured />} />
              <Route path="featured" element={<Featured />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route
              path="users"
              element={
                <RequireAuth>
                  <Users />
                </RequireAuth>
              }
            >
              <Route path=":userId" element={<UserDetails />} />
            </Route>
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="participation-form" element={<Participation />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
