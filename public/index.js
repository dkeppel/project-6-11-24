const firebaseConfig = {
  apiKey: "AIzaSyA6QkifGcb_HK8mYs94tlHZi5-7qsP0qPQ",
  authDomain: "fir-f34c8.firebaseapp.com",
  projectId: "fir-f34c8",
  storageBucket: "fir-f34c8.firebasestorage.app",
  messagingSenderId: "741912201158",
  appId: "1:741912201158:web:781aaa38732d8c4e4594c7"
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