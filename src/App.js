import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProductsList from "./Pages/AllProductsList";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import NGiftApp from "./Pages/NGiftApp";
import NStoreEvent from "./Pages/NStoreEvent";
import NGiftCard from "./Pages/NGiftCard";
import NHelp from "./Pages/NHelp";
import SugerpopList from "./Component/SingleBrand/NailPaint/SugerpopList/SugerpopList";
import NykaaList from "./Component/SingleBrand/NailPaint/NykaaList/NykaaList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/GiftApp" element={<NGiftApp/>} />
          <Route path="/Store&Events" element={<NStoreEvent />} />
          <Route path="/GiftCard" element={<NGiftCard />} />
          <Route path="/Help" element={<NHelp/>} />
          <Route path="/AllPD" element={<AllProductsList />} />
          <Route path="/SugerPoP" element={<SugerpopList/>} />
          <Route path="/Nykaa" element={<NykaaList/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
