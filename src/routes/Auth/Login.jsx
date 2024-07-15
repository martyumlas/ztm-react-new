import { auth } from '../../config/firebase/firebase';
import 'firebaseui/dist/firebaseui.css'
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

const Login = () => {// Initialize the FirebaseUI Widget using Firebase.

  const [credentials, setCredentials] = useState({
    'email' :'',
    'password' : ''
  })

  const handleChange = (e) => {
    const {id, value} = e.target
    setCredentials(prev => ({...prev , [id] : value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {email, password} = credentials
   await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
    });
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="email">Email</label>
        <input type='email' id='email' value={credentials.email} required onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type='password' id='password' required onChange={(e) => {
          setCredentials(prev => ({...prev, password: e.target.value}))
        }}/>
      </div>
      <div>
        <button type='submit' >Login</button>
      </div>
      </form>
    </>
  )
}

export default Login