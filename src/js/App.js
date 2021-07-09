import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Abstracts from "./components/Abstracts";
import Home from "./components/Home";
import TheaterSchedule from "./components/TheaterSchedule";
import OncologyMedicines from "./components/oncology/OurMedicines";
import OpdivoYervoy from "./components/oncology/OpdivoYervoy";
import OpdivoCabometyx from "./components/oncology/OpdivoCabometyx";
import OpdivoFolfox from "./components/oncology/OpdivoFolfox";
import OncologyEducationalResources from "./components/oncology/OurEducationalResources";
import HematologyMedicines from "./components/hematology/OurMedicines";
import HematologyEducationalResources from "./components/hematology/OurEducationalResources";
import DataDiscovery from "./components/DataDiscovery";
import IoPotential from "./components/IoPotential";
import BrickBuilder from "./components/BrickBuilder";
import PageNotFound from "./components/404";
import { ModalProvider } from "./components/UI/ContactUsModal";
import { useIsMobile } from "./utils/hooks";

const App = () => {
  const isMobile = useIsMobile();
  const location = useLocation();

  return (
    <div className="App">
      { (!isMobile || location.pathname.startsWith("/hematology")) &&
        <ModalProvider>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/abstracts" component={ Abstracts } />
            <Route exact path="/product-theater-schedule" component={ TheaterSchedule } />
            <Route exact path="/oncology/our-medicines" component={ OncologyMedicines } />
            <Route exact path="/oncology/our-medicines/opdivo-yervoy" component={ OpdivoYervoy } />
            <Route exact path="/oncology/our-medicines/opdivo-cabometyx" component={ OpdivoCabometyx } />
            <Route exact path="/oncology/our-medicines/opdivo-folfox" component={ OpdivoFolfox } />
            <Route exact path="/oncology/our-educational-resources" component={ OncologyEducationalResources } />
            <Route exact path="/hematology/our-medicines" component={ HematologyMedicines } />
            <Route exact path="/hematology/our-educational-resources" component={ HematologyEducationalResources } />
            <Route exact path="/data-discovery" component={ DataDiscovery } />
            <Route exact path="/io-potential" component={ IoPotential } />
            <Route exact path="/brick-builder" component={ BrickBuilder } />
            <Route path="*" component={ PageNotFound } />
          </Switch>
        </ModalProvider>
      }

      { isMobile && !location.pathname.startsWith("/hematology") &&
        <div className="mobile-view">
          <img src={ process.env.PUBLIC_URL + "/img/logo.png" } alt="BMS logo" />

          <div className="text-content-wrapper">
            <p className="mobile-large-font">This website is not compatible for mobile.</p>
            <p className="mobile-small-font">Please visit this website on a desktop computer or a laptop.</p>
          </div>
        </div>
      }
    </div>
  );
};

export default App;
