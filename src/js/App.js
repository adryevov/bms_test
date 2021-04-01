import React from "react";
import { Switch, Route } from "react-router-dom";
import Abstracts from "./components/Abstracts";
import Home from "./components/Home";
import TheaterSchedule from "./components/TheaterSchedule";
import OurMedicines from "./components/OurMedicines";
import OurResearch from "./components/OurResearch";
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
          <Route exact path="/oncology/our-medicines" component={ OurMedicines } />
          <Route exact path="/oncology/our-research" component={ OurResearch } />

          <Route path="*" component={ PageNotFound } />
        </Switch>
      </ModalProvider>
    </div>
  );
}

export default App;
