const firebaseConfig = {
    apiKey: 'AIzaSyD-EXAMPLE_KEY',
    authDomain: 'your-app-id.firebaseapp.com',
    projectId: 'your-app-id',
    storageBucket: 'your-app-id.appspot.com',
    messagingSenderId: '1234567890',
    appId: '1:1234567890:web:abcdef123456',
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  function displayMessage() {
    const messageElement = document.getElementById('message');
    messageElement.innerText = 'Hello from Firebase! Your app is connected.';
  }
  
  function storeData() {
    const dataInput = document.getElementById('dataInput').value;
    if (dataInput) {
      db.collection('demoData')
        .add({
          data: dataInput,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          alert('Data stored successfully!');
          document.getElementById('dataInput').value = '';
        })
        .catch((error) => {
          console.error('Error storing data: ', error);
        });
    } else {
      alert('Please enter some data before storing.');
    }
  }