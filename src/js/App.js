import React from "react";
import { Switch, Route } from "react-router-dom";
import Abstracts from "./components/Abstracts";
import Home from "./components/Home";
import TheaterSchedule from "./components/TheaterSchedule";
import OncologyMedicines from "./components/oncology/OurMedicines";
import OncologyResearch from "./components/oncology/OurResearch";
import HematologyMedicines from "./components/hematology/OurMedicines";
import HematologyResearch from "./components/hematology/OurResearch";
import HematologyEducationalResources from "./components/hematology/OurEducationalResources";
import PageNotFound from "./components/404";
import { ModalProvider } from "./components/UI/ContactUsModal";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/abstracts" component={ Abstracts } />
          <Route exact path="/product-theater-schedule" component={ TheaterSchedule } />
          <Route exact path="/oncology/our-medicines" component={ OncologyMedicines } />
          <Route exact path="/oncology/our-research" component={ OncologyResearch } />
          <Route exact path="/hematology/our-medicines" component={ HematologyMedicines } />
          <Route exact path="/hematology/our-research" component={ HematologyResearch } />
          <Route exact path="/hematology/our-educational-resources" component={ HematologyEducationalResources } />

          <Route path="*" component={ PageNotFound } />
        </Switch>
      </ModalProvider>
    </div>
  );
}

export default App;
