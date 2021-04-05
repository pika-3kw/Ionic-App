import {
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";

/* Pages */
import Super from "./Super";

/* Components */
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/detail">
            <IonPage>
              <Header title="Detail" />
            </IonPage>
          </Route>
          <Route exact path="/detail/super">
            <Super />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="detail" href="/detail">
            <IonLabel>Detail</IonLabel>
          </IonTabButton>
          <IonTabButton tab="super" href="/detail/super">
            <IonLabel>Super</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;
