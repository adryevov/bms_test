import React from "react";
import { Switch, Route } from "react-router-dom";
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
import ImmunoOncology from "./components/oncology/ImmunoOncology";
import DataDiscovery from "./components/DataDiscovery";
import IoPotential from "./components/IoPotential";
import BrickBuilder from "./components/BrickBuilder";
import PageNotFound from "./components/404";
import { ModalProvider } from "./components/UI/ContactUsModal";

const App = () => {
  return (
    <div className="App">
      <ModalProvider>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/abstracts" component={ Abstracts } />
          <Route exact path="/product-theater-schedule" component={ TheaterSchedule } />
          <Route exact path="/immuno-oncology" component={ ImmunoOncology } />
          <Route exact path="/oncology/our-medicines" component={ OncologyMedicines } />
          <Route exact path="/oncology/our-medicines/opdivo-yervoy" component={ OpdivoYervoy } />
          <Route exact path="/oncology/our-medicines/opdivo-cabometyx" component={ OpdivoCabometyx } />
          <Route exact path="/oncology/our-medicines/opdivo-folfox" component={ OpdivoFolfox } />
          <Route exact path="/oncology/our-educational-resources" component={ ImmunoOncology } />
          <Route exact path="/hematology/our-medicines" component={ HematologyMedicines } />
          <Route exact path="/hematology/our-educational-resources" component={ HematologyEducationalResources } />
          <Route exact path="/data-discovery" component={ DataDiscovery } />
          <Route exact path="/io-potential" component={ IoPotential } />
          <Route exact path="/brick-builder" component={ BrickBuilder } />
          <Route path="*" component={ PageNotFound } />
        </Switch>
      </ModalProvider>
    </div>
  );
};

export default App;
