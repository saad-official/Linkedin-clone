import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { auth } from '../../firebase';
import { login } from '../../features/user/userSlice';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState('');
    const dispatch =  useDispatch();
    const Register = () => {
        if (!name) {
            return alert('Please Enter a full name');
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic
                        }))
                    })
            }).catch(error => alert(error));
    };

    const LoginToApp = (e) => {

        e.preventDefault();
        // auth
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: userAuth.user.photoURL
            }))
        }).catch(error => alert(error))
    };

  return (
      <div className='login'>
          <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
        alt="Linkedin main logo"
          />
          <form action="#">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name (required if regustering' type="text" />

              <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" placeholder='Profile Pic Url (optional)' />

              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />

              <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder='Password' />

              <button onClick={LoginToApp} type='submit'>Sign In</button>
              </form>
              <p>Not a Member?
                  <span onClick={Register} className='login__register'>Register Now</span>
              </p>
          
    </div>
  )
}

export default Login