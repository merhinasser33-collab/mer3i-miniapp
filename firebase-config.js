<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDdChxB8Axden4r5TChcL_wuwuGUZfL0yk",
    authDomain: "mer3imarket.firebaseapp.com",
    projectId: "mer3imarket",
    storageBucket: "mer3imarket.firebasestorage.app",
    messagingSenderId: "318791325244",
    appId: "1:318791325244:web:2a35c7fe774ab1772f5539",
    measurementId: "G-4ZR3G6DEN4"
  };

  const app = initializeApp(firebaseConfig);
  window.auth = getAuth(app);
</script>
