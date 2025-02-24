import { 
  IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
    <img alt="Silhouette of mountains" src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" />
    <IonCardHeader>
      <IonCardTitle>Card Title</IonCardTitle>
      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
  </IonCard>
      
      </IonContent>
    </IonPage>
  );
};
export default Feed;