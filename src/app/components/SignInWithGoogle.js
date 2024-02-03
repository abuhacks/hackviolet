import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase'; // Import the firebase app initialization

export default function SignInWithGoogle() {
  const signIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async (result) => {
        // Get the user's ID token
        const token = await result.user.getIdToken();

        // Send the ID token to your backend for verification
        fetch('http://127.0.0.1:5000', { // Replace with your backend's URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ idToken: token })
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response from your backend
          // This could include saving the session, redirecting the user, etc.
          console.log(data);
        })
        .catch((error) => {
          // Handle any errors that occur during fetch
          console.error('Error when sending token to backend:', error);
        });
      })
      .catch((error) => {
        // Handle errors from the Google Sign-In process
        console.error('Error during Google Sign-In:', error);
      });
  };

  return (
    <button onClick={signIn}>Sign in with Google</button>
  );
}
