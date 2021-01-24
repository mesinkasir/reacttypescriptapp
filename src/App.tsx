import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { apps, flash, send } from "ionicons/icons";
import Tab1 from "./pages/Home";
import Tab2 from "./pages/About";
import Tab3 from "./pages/Contact";
import Tab4 from "./pages/Webapp";
import Details from "./pages/Details";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import UIContext from "./my-context";

const App: React.FunctionComponent = () => {
  const { showTabs } = React.useContext(UIContext);

  let tabBarStyle = showTabs ? undefined : { display: "none" };

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Tab1} exact={true} />
            <Route path="/about" component={Tab2} exact={true} />
            <Route path="/about/details" component={Details} />
            <Route path="/contact" component={Tab3} />
            <Route path="/webapp" component={Tab4} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar color="tertiary" slot="bottom" style={tabBarStyle}>
            <IonTabButton tab="home" href="/home">
              <IonIcon icon="planet" />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="about" href="/about">
              <IonIcon icon="logo-github" />
              <IonLabel>About</IonLabel>
            </IonTabButton>
            <IonTabButton tab="webapp" href="/webapp">
              <IonIcon icon="ribbon" />
              <IonLabel>Web Apps</IonLabel>
            </IonTabButton>
            <IonTabButton tab="contact" href="/contact">
              <IonIcon icon="people" />
              <IonLabel>Contact</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
