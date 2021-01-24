import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage
} from "@ionic/react";

const Contact: React.FunctionComponent = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Contact Us.</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ion-item>
          <ion-label>
            <h3>Hello World</h3>
            <img src="https://bstp.sourceforge.io/cov.jpg" />
            <p>
              If you need website app project you can contact us.
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

export default Contact;
