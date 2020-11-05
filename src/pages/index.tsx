import Link from 'next/link'
import firebase from 'firebase';

const baseUrl = process.env.NODE_ENV === 'development'
? 'http://localhost:3000'
: 'https://ticket-to-ride2.vercel.app';

export default function Home() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDXZbxV7k61Ihb-WIzx0PTPebZXeS2z7xw",
    authDomain: "my-chat-9a67d.firebaseapp.com",
    databaseURL: "https://my-chat-9a67d.firebaseio.com",
    projectId: "my-chat-9a67d",
    storageBucket: "my-chat-9a67d.appspot.com",
    messagingSenderId: "352895782579",
    appId: "1:352895782579:web:2a965eb65700575a746ac6"
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <div>
      <button type="submit" onClick={() => {
        const provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('read:user');

        firebase.auth().signInWithPopup(provider).then(function(result) {
          const githubUsername = result.additionalUserInfo.username;
          console.log(githubUsername);

          window.location.href = `/${githubUsername}`;
        }).catch(function(error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = error.credential;
          console.log(errorCode, errorMessage, email, credential)
        });
      }}>
        Login com GitHub
      </button>

      <ul style={{ padding: 0 }}>
        {['omariosouto', 'peas'].map((post, idx) => {
          const title = `${baseUrl}/api/thumbnail.png?title=${post}`;
          return (
          <li key={idx}>
            <Link href={title}>
              <img src={title} style={{ maxWidth: '100%' }} />
            </Link>
          </li>
        )})}
      </ul>
    </div>
  )
}