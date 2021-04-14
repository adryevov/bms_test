import React from "react";
import { Switch, Route } from "react-router-dom";
import Abstracts from "./components/Abstracts";
import Home from "./components/Home";
import TheaterSchedule from "./components/TheaterSchedule";
import OncologyMedicines from "./components/oncology/OurMedicines";
import OncologyResearch from "./components/oncology/OurResearch";
import HematologyMedicines from "./components/hematology/OurMedicines";
import HematologyEducationalResources from "./components/hematology/OurEducationalResources";
import HematologyResearch from "./components/hematology/OurResearch";
import MyeloidDisease from "./components/hematology/research/MyeloidDisease";
import Lymphoma from "./components/hematology/research/Lymphoma";
import MultipleMyeloma from "./components/hematology/research/MultipleMyeloma";
import CereblonModulation from "./components/hematology/research/CereblonModulation";
import CARTCellTherapy from "./components/hematology/research/CARTCellTherapy";
import PageNotFound from "./components/404";
import { ModalProvider } from "./components/UI/ContactUsModal";
import { useIsMobile } from "./utils/hooks";
import { Nav } from "react-bootstrap";

function App() {
  const isMobile = useIsMobile();
  console.log('isMobile', isMobile);

  return (
    <div className="App">
      { !isMobile &&
        <ModalProvider>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/abstracts" component={ Abstracts } />
            <Route exact path="/product-theater-schedule" component={ TheaterSchedule } />
            <Route exact path="/oncology/our-medicines" component={ OncologyMedicines } />
            <Route exact path="/oncology/our-research" component={ OncologyResearch } />
            <Route exact path="/hematology/our-medicines" component={ HematologyMedicines } />
            <Route exact path="/hematology/our-educational-resources" component={ HematologyEducationalResources } />
            <Route exact path="/hematology/our-research" component={ HematologyResearch } />
            <Route exact path="/hematology/our-research/myeloid-disease" component={ MyeloidDisease } />
            <Route exact path="/hematology/our-research/lymphoma" component={ Lymphoma } />
            <Route exact path="/hematology/our-research/multiple-myeloma" component={ MultipleMyeloma } />
            <Route exact path="/hematology/our-research/cereblon-modulation" component={ CereblonModulation } />
            <Route exact path="/hematology/our-research/car-t-cell-therapy" component={ CARTCellTherapy } />
            <Route path="*" component={ PageNotFound } />
          </Switch>
        </ModalProvider>
      }

      { isMobile &&
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
}

export default App;
