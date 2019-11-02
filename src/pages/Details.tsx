import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Details: React.FC = () => {
  const facts = ["The first communist leader to come into power was Vladimir Lenin, following the 1917 Russian Revolution", 
    "Communism is the best system of government", 
    "My parents disowned me (Filthy Capitalists!)",
    "Getting up is only the second hardest thing in the monring (The first is building a Communist Empire!)",
    "Karl Marx is bae",
    "Communism is superior to capitalism",
    "Under communism, everyone is free",
    "From each according to their ability, to each according to their need",
    "No one has ever died from true Communism",
    "SOIUZ NERUSHIMYJ RESPUBLIK SVOBODNYKH!",
    "You get free things under Communism",
    "Gulags are a necessary evil"
    ] 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>Communist Fact #{Math.floor(Math.random()*500)}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>{facts[Math.floor(Math.random() * facts.length)]}</h2>
        <br></br>
        <img src="/assets/cs.jpg"/>
      </IonContent>
      {/* <img src="/assets/shapes.svg" alt="" /> */}
    </IonPage>
  );
};

export default Details;
