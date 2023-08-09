import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
//UTILS IMPORTS
import { AuthProvider } from "utils/Auth/Auth";
import RequireAuth from "utils/RequireAuth/RequireAuth";
//COMPONENTS IMPORTS
import NavBar from "components/Navbar/Navbar";
import NotFound from "components/Not-Found/Not-Found";
import Featured from "components/FeaturedProducts/FeaturedProducts";
import New from "components/NewProducts/NewProducts";
import UserDetails from "components/UserDetails/UserDetails";
//PAGE IMPORTS
import Login from "pages/Login/Login";
import Home from "pages/Home/Home";
import Profile from "pages/Profile/Profile";
import Products from "pages/Products/Products";
import Users from "pages/Users/Users";
import Participation from "pages/Participation/Participation";
const LazyAboutComponent = React.lazy(() => import("pages/About/About"));

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
