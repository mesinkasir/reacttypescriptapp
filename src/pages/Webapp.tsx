import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage
} from "@ionic/react";

const Webapp: React.FunctionComponent = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Web Apps.</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ion-item>
          <ion-label>
            <img src="https://mesinkasir.github.io/assets/img/aplikasi%20toko%20online%20web%20app.jpg" />
            <p>
              We Are your web app solutions, website + application
              <br /> ready for develope and support your bussiness.
              <br />
              <a href="https://mesinkasironline.web.app">
                mesinkasironline.web.app
              </a>
              <br />
              WhatsApp : +6285646104747
              <br />
              Call Us : +6287819355589
            </p>
          </ion-label>
        </ion-item>
      </IonContent>
    </IonPage>
  );
};

export default Webapp;
