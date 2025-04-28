import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonText, 
  IonImg 
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ padding: '20px' }}>
          <IonText>
            <h2>Welcome to Our App</h2>
            <p>
              This app is designed to provide users with the best experience. It offers various features such as creating posts, viewing updates, and interacting with a community.
              Our mission is to make your online experience easier and more enjoyable.
            </p>
            <p>
              We hope you enjoy using the app. Feel free to reach out to us with any questions or feedback!
            </p>
          </IonText>
          <IonImg 
            src="https://i.pinimg.com/originals/3d/c1/00/3dc1000fcf371c8c125f45984a025065.gif" 
            alt="About us image"
            style={{ marginTop: '20px', borderRadius: '10px', width: '100%' }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
