import React from "react";
import Main from "./Main/Main";
import Mac from "./Components/Mac/Mac";
import Iphone from "./Components/Pages/iPhone/Iphone";
import Watch from "./Components/watch/Watch";
import Tv from "./Components/tv/Tv";
import Music from "./Components/Musics/Music";
import Support from "./Components/Support/Support";
import { Route, Routes } from "react-router-dom";
import Ipad from "./Components/ipad/Ipad";
import Cart from "./Components/Cart/Cart";
import Four04 from "./Components/Four04/Four04";
import SingleAppleProduct from "./Components/SingleAppleProduct/SingleAppleProduct";
import SharedLayout from "./Components/Pages/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="Mac" element={<Mac />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="applewatch" element={<Watch />} />
        <Route path="tv" element={<Tv />} />
        <Route path="music" element={<Music />} />
        <Route path="support" element={<Support />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={<Four04 />} />
        <Route path="iphone/:productID" element={<SingleAppleProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
