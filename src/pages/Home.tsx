import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonTitle,
  IonToolbar,
  IonPage
} from "@ionic/react";
import { book, build, colorFill, grid } from "ionicons/icons";
import React from "react";
import "./Home.css";

const Home: React.FunctionComponent = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>
            <ion-icon name="logo-react" /> Ionic React
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard class="welcome-card" color="danger">
          <img src="/assets/shapes.svg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Ionic React</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Open Source Code Ionic feat React Typescript.</p>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Resources</IonLabel>
          </IonListHeader>
          <IonItem
            href="https://www.hockeycomputindo.com/2010/12/blog-post.html"
            target="_blank"
          >
            <IonIcon slot="start" color="tertiary" icon="code-slash" />
            <IonLabel>Open Source Code Project</IonLabel>
          </IonItem>
          <IonItem href="https://axcora.com/getaxcoracms" target="_blank">
            <IonIcon slot="start" color="tertiary" icon="game-controller" />
            <IonLabel>Get Axcora CMS</IonLabel>
          </IonItem>
          <IonItem href="https://phoneixsangular.web.app" target="_blank">
            <IonIcon slot="start" color="tertiary" icon="rocket" />
            <IonLabel>Phoneixs Angular CMS Blog</IonLabel>
          </IonItem>
          <IonItem
            href="https://www.youtube.com/c/bakoelraksupermarketMesinKasir/videos"
            target="_blank"
          >
            <IonIcon slot="start" color="danger" icon="logo-youtube" />
            <IonLabel>Youtube Chanel</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
