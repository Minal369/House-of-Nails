import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProductsList from "./Pages/AllProductsList";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import NGiftApp from "./Pages/NGiftApp";
import NStoreEvent from "./Pages/NStoreEvent";
import NGiftCard from "./Pages/NGiftCard";
import NHelp from "./Pages/NHelp";
import AllBrandsList from "./Component/SingleBrand/NailPaint/AllBrands/AllBrandsList/AllBrandsList";
import SugerpopList from "./Component/SingleBrand/NailPaint/SugerPOP/SugerpopList/SugerpopList";
import NykaaList from "./Component/SingleBrand/NailPaint/Nykaa/NykaaList/NykaaList";
import LakmeList from "./Component/SingleBrand/NailPaint/Lakme/LakmeList/LakmeList";
import DebellList from "./Component/SingleBrand/NailPaint/DeBell/DebellList/DebellList";
import Elle18List from "./Component/SingleBrand/NailPaint/Elle18/Elle18List/Elle18List";
import JucieGlossList from "./Component/SingleBrand/NailPaint/JucieGloss/JucieGlossList/JucieGlossList";
import KayBeautyList from "./Component/SingleBrand/NailPaint/KayBeauty/KayBeautyList/KayBeautyList";
import FacesList from "./Component/SingleBrand/NailPaint/Faces/FacesList/FacesList";
import ColorbarList from "./Component/SingleBrand/NailPaint/Colorbar/ColorbarList/ColorbarList";
import AllStickersList from "./Component/SingleBrand/Sticker/AllStickers/AllStickerList/AllStickersList";
import LettersList from "./Component/SingleBrand/Sticker/LetterStickers/LettersList/LettersList";
import FlowerList from "./Component/SingleBrand/Sticker/FlowerStickers/FlowerList/FlowerList";
import FruiteList from "./Component/SingleBrand/Sticker/FruiteStickers/FruiteList/FruiteList";
import LafyList from "./Component/SingleBrand/Sticker/Lafy&ModernSickers/LafyList/LafyList";
import MicKeyList from "./Component/SingleBrand/Sticker/MicKeyMouse/MicKeyList/MicKeyList";
import ThreeDList from "./Component/SingleBrand/Sticker/ThreeDStickers/ThreeDList/ThreeDList";
import AllTollkitList from "./Component/SingleBrand/Toolkits/AllTollkit/AllTollkitList/AllTollkitList";
import DeadSkinPlierList from "./Component/SingleBrand/Toolkits/DeadSkinPlier/DeadSkinPlierList/DeadSkinPlierList";
import DeadSkinPushList from "./Component/SingleBrand/Toolkits/DeadSkinPush/DeadSkinPushList/DeadSkinPushList";
import DeadSkinShovelList from "./Component/SingleBrand/Toolkits/DeadSkinShovel/DeadSkinShovelList/DeadSkinShovelList";
import DoublepickList from "./Component/SingleBrand/Toolkits/Doublepick/DoublepickList/DoublepickList";
import FlatClipperList from "./Component/SingleBrand/Toolkits/FlatNailClippers/FlatClipperList/FlatClipperList";
import NailFileList from "./Component/SingleBrand/Toolkits/NailFile/NailFileList/NailFileList";
import ObliqueClippersList from "./Component/SingleBrand/Toolkits/ObliqueNailClippers/ObliqueClippersList/ObliqueClippersList";
import SmallClippersList from "./Component/SingleBrand/Toolkits/SmallNailClippers/SmallClippersList/SmallClippersList";
import AllJwelleryList from "./Component/SingleBrand/Jwellerys/AllJwellery/AllJwelleryList/AllJwelleryList";
import BowKnotList from "./Component/SingleBrand/Jwellerys/BowKnotCrystal/BowKnotList/BowKnotList";
import MetalBeadsList from "./Component/SingleBrand/Jwellerys/MetalNailsBeads/MetalBeadsList/MetalBeadsList";
import PearlBeadsList from "./Component/SingleBrand/Jwellerys/PearlBeads/PearlBeadsList/PearlBeadsList";
import PinkStoneList from "./Component/SingleBrand/Jwellerys/PinkCrystalStone/PinkStoneList/PinkStoneList";
import ThreeDShellFlowerList from "./Component/SingleBrand/Jwellerys/ThreeDShellFlower/ThreeDShellFlowerList/ThreeDShellFlowerList";
import ThreeDStarList from "./Component/SingleBrand/Jwellerys/ThreeDMetalAlloyStarBead/ThreeDStarList/ThreeDStarList";
import AllArtKitList from "./Component/SingleBrand/NailArtKit/AllArtKit/AllArtKitList/AllArtKitList";
import KitwithoutTraningList from "./Component/SingleBrand/NailArtKit/KitwithoutTraning/KitwithoutTraningList/KitwithoutTraningList";
import KitwithTraningList from "./Component/SingleBrand/NailArtKit/KitwithTraning/KitwithTraningList/KitwithTraningList";
import GLAMBuffingList from "./Component/SingleBrand/NewIn/GLAMBuffingMachine/GLAMBuffingList/GLAMBuffingList";
import UVLampList from "./Component/SingleBrand/NewIn/GLAMuvLEDLamp/UVLampList/UVLampList";
import LYNBuffingList from "./Component/SingleBrand/NewIn/LYNNailBuffing/LYNBuffingList/LYNBuffingList";
import AllNewInList from "./Component/SingleBrand/NewIn/AllNewIn/AllNewInList/AllNewInList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/GiftApp" element={<NGiftApp />} />
          <Route path="/Store&Events" element={<NStoreEvent />} />
          <Route path="/GiftCard" element={<NGiftCard />} />
          <Route path="/Help" element={<NHelp />} />
          <Route path="/AllPD" element={<AllProductsList />} />
          <Route path="/Brand" element={<AllBrandsList />} />
          <Route path="/SugerPoP" element={<SugerpopList />} />
          <Route path="/Nykaa" element={<NykaaList />} />
          <Route path="/Lakme" element={<LakmeList />} />
          <Route path="/DeBelle" element={<DebellList />} />
          <Route path="/Jucie-Gloss" element={<JucieGlossList />} />
          <Route path="/Elle18" element={<Elle18List />} />
          <Route path="/Kay-Beauty" element={<KayBeautyList />} />
          <Route path="/Face" element={<FacesList />} />
          <Route path="/Colorbar" element={<ColorbarList />} />
          <Route path="/AllStickers" element={<AllStickersList />} />
          <Route path="/LetterSticker" element={<LettersList />} />
          <Route path="/MickeyMouseStickers" element={<MicKeyList />} />
          <Route path="/FlowerStickers" element={<FlowerList />} />
          <Route path="/FruitStickers" element={<FruiteList />} />
          <Route path="/Leaf&ModernStickers" element={<LafyList />} />
          <Route path="/3DStickers" element={<ThreeDList />} />
          <Route path="/AllToolkit" element={<AllTollkitList />} />
          <Route path="/FlatNailClippers" element={<FlatClipperList />} />
          <Route path="/ObliqueNailClipper" element={<ObliqueClippersList />} />
          <Route path="/SmallNailClipper" element={<SmallClippersList />} />
          <Route path="/DeadSkinPiler" element={<DeadSkinPlierList />} />
          <Route path="/NailFile" element={<NailFileList />} />
          <Route path="/Doublepick" element={<DoublepickList />} />
          <Route path="/DeadSkinPush" element={<DeadSkinPushList />} />
          <Route path="/DeadSkinShovel" element={<DeadSkinShovelList />} />
          <Route path="/AllJwellery" element={<AllJwelleryList />} />
          <Route path="/MetalNailsBeads" element={<MetalBeadsList />} />
          <Route path="/BowKnotCrystal" element={<BowKnotList />} />
          <Route path="/3DShellFlower" element={<ThreeDShellFlowerList />} />
          <Route path="/PinkCrystalStone" element={<PinkStoneList />} />
          <Route path="/PearlBeads" element={<PearlBeadsList />} />
          <Route path="/3DMeatlAlloyStare" element={<ThreeDStarList />} />
          <Route path="/AllArtKit" element={<AllArtKitList />} />
          <Route path="/KitWithTranning" element={<KitwithTraningList />} />
          <Route
            path="/KitWithoutTranning"
            element={<KitwithoutTraningList />}
          />
          <Route path="/AllNewIn" element={<AllNewInList />} />
          <Route path="/GLAMBuffingMachine" element={<GLAMBuffingList />} />
          <Route path="/LYNNailBuffing" element={<LYNBuffingList />} />
          <Route path="/GLAMuvLEDLamp" element={<UVLampList />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
