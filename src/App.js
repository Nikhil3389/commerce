import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Pantry from "./components/pantry/pantry";
import Loader from "./components/Common/Loader";
// import Home from "./components/Home/Football";
import About from "./components/About/about";
import Contact from "./components/About/contact";
// import Blog from "./components/Landing/Home";
import TopNavbar from "./components/Navbar/TopNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNavbar from "./components/Navbar/BottomNavbar";
// import FootballDetails from "./components/GameDetails/FootballDetails";
// import Cricket from "./components/Home/Cricket";
// import CricketDetails from "./components/GameDetails/CricketDetails";
// import Basketball from "./components/Home/BasketBall";
// import BasketballDetails from "./components/GameDetails/BasketballDetails";
// import Tennis from "./components/Home/Tennis";
// import TennisDetails from "./components/GameDetails/TennisDetails";
// import Hockey from "./components/Home/Hockey";
import HockeyDetails from "./components/GameDetails/HockeyDetails";
import Baseball from "./components/Home/home";
import BaseballDetails from "./components/Electro/electro";
import Error from "./components/error/error";
import Product from "./components/Products/products";
import Product_2 from "./components/Products/product_2";
import Cart from "./components/About/cart";
import Checkout from "./components/About/checkout";
import Compare from "./components/About/compare";
import Coming from "./components/About/coming";
import Login from "./components/About/login";
import Register from "./components/About/register";
import Offer from "./components/About/offer";
import Dashboard from "./components/Vendor/dashboard";
import Profile from "./components/user/profile";
import VProfile from "./components/Vendor/profile";
import Setting from "./components/Vendor/setting";
import Upload from "./components/Vendor/upload";
import Track from "./components/user/track";
import History from "./components/user/history";
import Wish from "./components/user/wish";
import Invoice from "./components/user/invoice";
function App() {
  return (
    <>
      <div className="">
        <TopNavbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/cricket" element={<Cricket />} /> */}
          <Route path="/" element={<Baseball />} />
          {/* <Route path="/tennis" element={<Tennis />} />
          <Route path="/hockey" element={<Hockey />} />
          <Route path="/baseball" element={<Baseball />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/football/:id" element={<FootballDetails />} />
          <Route path="/cricket/:id" element={<CricketDetails />} /> */}
           <Route path="/shop-full-width.html" element={<BaseballDetails />} />
          <Route path="/shop-right-sidebar-col-3.html" element={<BaseballDetails />} />
          <Route path="/shop-left-sidebar-col-3.html" element={<BaseballDetails />} />
          <Route path="/shop-left-sidebar-col-4.html" element={<BaseballDetails />} />
          <Route path="/shop-banner-full-width.html" element={<Loader />} />
          <Route path="/shop-banner-left-sidebar-col-3.html" element={<Loader />} />
          <Route path="/shop-banner-left-sidebar-col-4.html" element={<Loader />} />
          <Route path="/shop-banner-right-sidebar-col-3.html" element={<Loader />} />
          <Route path="/shop-full-width-col-3.html" element={<Pantry />} />
          <Route path="/shop-full-width-col-4.html" element={<Pantry />} />
          <Route path="/shop-full-width-col-5.html" element={<Pantry />} />
          <Route path="/shop-banner-full-width-col-3.html" element={<Pantry />} />
          <Route path="/shop-list-left-sidebar.html" element={<Error />} />
          <Route path="/shop-list-right-sidebar.html" element={<Error />} />
          <Route path="/shop-list-full-col-2.html" element={<Error />} />
          <Route path="/product-full-width.html" element={<Product />} />
          <Route path="/product-360-full-width.html" element={<Product_2 />} />
          <Route path="/product-video-full-width.html" element={<Product />} />
          <Route path="/about-us.html" element={<About />} />
          <Route path="/contact-us.html" element={<Contact />} />
          <Route path="/cart.html" element={<Cart />} />
          <Route path="/checkout.html" element={<Checkout />} />
          <Route path="/compare.html" element={<Compare />} />
          <Route path="/faq.html" element={<Coming />} />
          <Route path="/login.html" element={<Login />} />
          <Route path="/register.html" element={<Register />} />
           <Route path="/track-order.html" element={<Coming />} /> *
          <Route path="/terms-condition.html" element={<Coming />} />
          <Route path="/privacy-policy.html" element={<Coming />} />
          {/* <Route path="/vendor-profile.html" element={<Coming />} /> */}
          {/* <Route path="/vendor-uploads.html" element={<Coming />} /> */}
          {/* <Route path="/vendor-settings.html" element={<Coming />} /> */}/
           <Route path="/offer.html" element={<Offer />} />
          <Route path="/vendor-dashboard.html" element={<Dashboard />} />
          <Route path="/user-profile.html" element={<Profile />} />
          <Route path="/vendor-profile.html" element={<VProfile />} />
          <Route path="/vendor-settings.html" element={<Setting />} />
          <Route path="/vendor-uploads.html" element={<Upload />} />
          <Route path="/user-profile.html" element={<Profile />} />
          <Route path="/track-order.html" element={<Track />} />
          <Route path="/user-history.html" element={<History />} />
          <Route path="/wishlist.html" element={<Wish />} />
          <Route path="/user-invoice.html" element={<Invoice />} />
          <Route path="/catalog-single-vendor.html" element={<Coming />} />
          <Route path="/catalog-multi-vendor.html" element={<Coming />} /> 
 


          {/* <Route path="/shop-left-sidebar-col-4.html" element={<BaseballDetails />} /> */}
          {/* <Route path="/tennis/:id" element={<TennisDetails />} />    
          <Route path="/hockey/:id" element={<HockeyDetails />} />    
          <Route path="/baseball/:id" element={<BaseballDetails />} />     */}
        </Routes>
        <BottomNavbar />
      </div>
    </>
  );
}

export default App;
