import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonSearchbar, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
        <IonToolbar>
          {/* Align the search bar to the left */}
          <IonSearchbar 
            style={{ 
              width: '100%', 
              marginLeft: '10px', // Add some left margin to give a little space
            }} 
            debounce={300} // Added debounce time to prevent excessive calls
          />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          Search
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
