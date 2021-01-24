import React from "react";
import { useHistory } from "react-router";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  IonPage
} from "@ionic/react";

const About = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>About Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard class="welcome-card">
          <img src="/assets/shapes.svg" alt="" />
          <IonCardHeader>
            <iframe
              width="360"
              class="rounded"
              src="https://www.youtube.com/embed/7E-uPPqSrVg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <IonCardSubtitle>Lorep Ipsum dolor siamet.</IonCardSubtitle>
            <IonCardTitle>Lorep Ipsum.</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button
              onClick={() => {
                history.push("about/details");
              }}
            >
              <p>More About Us</p>
            </button>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
