import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonIcon, 
  IonButton 
} from '@ionic/react';
import { heart, addCircleOutline } from 'ionicons/icons';

const Favorites: React.FC = () => {
  const favorites = [
    { id: 1, name: 'Classic Leather Jacket', description: 'A timeless piece for any wardrobe.' },
    { id: 2, name: 'Wireless Headphones', description: 'Experience sound like never before.' },
    { id: 3, name: 'Eco-friendly Water Bottle', description: 'Stay hydrated and save the planet.' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>My Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {favorites.map(favorite => (
            <IonItem key={favorite.id} lines="full">
              <IonIcon icon={heart} slot="start" color="danger" />
              <IonLabel>
                <h2>{favorite.name}</h2>
                <p>{favorite.description}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonButton expand="full" color="success" shape="round" fill="solid">
          <IonIcon slot="start" icon={addCircleOutline} />
          Add New Favorite
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
