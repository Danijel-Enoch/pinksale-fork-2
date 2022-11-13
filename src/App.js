import React , {useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import Launchpad from "./pages/Launchpad";
import MultiSender from "./pages/MultiSender";
import CreateToken from "./pages/CreateToken";
import LaunchpadList from "./pages/LaunchpadList";
import CreateLock from "./pages/CreateLock";
import Token from "./pages/Token";
import Liquidity from "./pages/Liquidity";
import ScrollToTop from './component/ScrollToTop';
import { Context } from "./context/context";



function App() {
  const { sidebarOpen} = useContext(Context);
  return (
    <div className="App">
      <div class={`dashboard ${sidebarOpen ? 'dashboard-compact' : ''}`}>

        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/launchpad/create" element={<Launchpad />} />
            <Route exact path="/launchpad/create_token" element={<CreateToken />} />
            <Route exact path="/launchpad/launchpad_list" element={<LaunchpadList />} />
            <Route exact path="/pink_lock/create_lock" element={<CreateLock />} />
            <Route exact path="/pink_lock/token" element={<Token />} />
            <Route exact path="/pink_lock/liquidity" element={<Liquidity />} />
            <Route exact path="/multi_sender" element={<MultiSender />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
