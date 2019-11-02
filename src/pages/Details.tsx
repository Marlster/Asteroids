import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Details: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>Communist Fact #422</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>The first communist leader to come into power was Vladimir Lenin, following the 1917 Russian Revolution</h2>
        <br></br>
      </IonContent>
      <img src="public/assests/cs.jpg"/>
    </IonPage>
  );
};

export default Details;
