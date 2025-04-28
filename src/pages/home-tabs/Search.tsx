import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonSearchbar, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon, 
  IonSpinner 
} from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import { useState } from 'react';

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Sample data
  const items = [
    { id: 1, name: 'Classic Leather Jacket' },
    { id: 2, name: 'Wireless Headphones' },
    { id: 3, name: 'Eco-friendly Water Bottle' },
    { id: 4, name: 'Bluetooth Speaker' },
    { id: 5, name: 'Stylish Sunglasses' },
  ];

  const handleSearch = (e: any) => {
    const searchValue = e.target.value;
    setQuery(searchValue);
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Simulate loading delay
    }, 500);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            style={{
              width: '100%',
              marginLeft: '10px',
              borderRadius: '20px', // Rounded corners for a smoother look
              backgroundColor: '#f0f0f0', // Subtle background color
            }}
            debounce={300}
            showClearButton="focus"
            placeholder="Search items..."
            value={query}
            onIonInput={handleSearch}
            inputMode="text"
          />
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div
          style={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          {loading ? (
            <IonSpinner name="crescent" />
          ) : (
            <>
              <p style={{ fontSize: '18px', color: '#888' }}>
                {query ? `Search results for "${query}"` : 'Start searching for items'}
              </p>
              <IonList style={{ width: '100%' }}>
                {filteredItems.length > 0 ? (
                  filteredItems.map(item => (
                    <IonItem key={item.id}>
                      <IonIcon icon={searchOutline} slot="start" />
                      <IonLabel>
                        <h2>{item.name}</h2>
                      </IonLabel>
                    </IonItem>
                  ))
                ) : (
                  <p style={{ color: '#888' }}>No results found</p>
                )}
              </IonList>
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
