import React, { useEffect } from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage
} from "@ionic/react";
import UIContext from "../my-context";

const Details = ({ match }) => {
  const { setShowTabs } = React.useContext(UIContext);

  useEffect(() => {
    setShowTabs(false);

    return () => {
      setShowTabs(true);
    };
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Who ??</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Just Man in Da ARt</p>
      </IonContent>
    </IonPage>
  );
};

export default Details;
