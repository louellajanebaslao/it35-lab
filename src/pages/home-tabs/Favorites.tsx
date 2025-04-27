import { 
  IonAvatar,
  IonButtons,
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonItem, 
  IonItemOption, 
  IonItemOptions, 
  IonItemSliding, 
  IonLabel, 
  IonList, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import { call, pin, share, trash } from 'ionicons/icons';

const Favorites: React.FC = () => {
  const laptops = [
    { name: 'ASUS ZenBook 14', link: 'https://www.asus.com/Laptops/ZenBook/ZenBook-14/' },
    { name: 'ASUS ROG Zephyrus G14', link: 'https://www.asus.com/Laptops/ROG/ROG-Zephyrus/ROG-Zephyrus-G14/' },
    { name: 'ASUS TUF Gaming A15', link: 'https://www.asus.com/Laptops/ASUS-TUF-Gaming/ASUS-TUF-Gaming-A15/' },
    { name: 'ASUS VivoBook 15', link: 'https://www.asus.com/Laptops/ASUS-VivoBook/ASUS-VivoBook-15/' }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="light">
        <IonList inset={true}>
          {laptops.map((laptop, index) => (
            <IonItemSliding key={index}>
              <IonItem button={true} onClick={() => window.open(laptop.link, "_blank")}>
                <IonAvatar aria-hidden="true" slot="start">
                  <img alt={laptop.name} src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>{laptop.name}</IonLabel>
                <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
              </IonItem>
              <IonItemOptions slot="end">
                <IonItemOption color="warning">
                  <IonIcon slot="icon-only" icon={pin}></IonIcon>
                </IonItemOption>
                <IonItemOption color="tertiary">
                  <IonIcon slot="icon-only" icon={share}></IonIcon>
                </IonItemOption>
                <IonItemOption color="danger" expandable={true}>
                  <IonIcon slot="icon-only" icon={trash}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
