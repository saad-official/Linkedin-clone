import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widget from './components/widget/Widget';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice';
import Login from './components/login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {

    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // User is Logged In
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      }
      else {
        // User is Logged Out
        dispatch(logout());
      }
    })

  }, []);
  return (
    <div className="app">
      <Header />
      {!user ?  <Login /> : 
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
        
      </div>
}
      {/* App Body */}
      {/* Sidebar */}
      {/* Feed */}
      {/* widget */}
  </div>
  );
}

export default App;
