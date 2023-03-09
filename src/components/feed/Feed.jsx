import React, { useEffect } from 'react'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
    ref,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";
// import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
// import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import './Feed.css'; 
import { Avatar } from '@material-ui/core';
import InputOption from '../inputOption/InputOption';
import Post from '../post/Post';
import { useState } from 'react';
import { db, storage } from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
import FlipMove from "react-flip-move";
import Modal from '../Modal';
const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    const user = useSelector(selectUser);
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data:doc.data()
        }))
    )
    )
    }, []);



    const sendPost = async (e) => {
        e.preventDefault();
        console.log(input)
        image ?  handleSubmit() : handleSubmitJustText()
        setInput('');
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    };

    const handleSubmitJustText = () => {
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            messageImg:'',
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    const handleSubmit = () => {
        const fileName = new Date().getTime() + image.name;
        const imageRef = ref(storage, fileName);
        uploadBytes(imageRef, image)
          .then(() => {
            getDownloadURL(imageRef)
              .then((url) => {
                  setUrl(url);

                  db.collection('posts').add({
                    name: user.displayName,
                    description: user.email,
                    message: input,
                    messageImg:url,
                    photoUrl: user.photoUrl || '',
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
              })
                
              .catch((error) => {
                console.log(error.message, "error getting the image url");
              });
            // setImage(null);
          })
          .catch((error) => {
            console.log(error.message);
          });
        
        console.log(url);
      };
  return (
      <div className='feed'>
          <div className="feed__container">
          <div  className="feed__inputContainer">
                  <Avatar style={{ height: '50px', width: '50px', backgroundColor:'blueviolet', cursor:'pointer' }} className='feed__avatar' src={user.photoUrl}>
                      {user.email[0]}
          </Avatar>
              <div className="feed__input">
                  {/* <CreateIcon /> */}
                 
                  <form action="">
                      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Start a Post' />
                      <button onClick={sendPost} type='submit'>send</button>
                  </form>
              </div>
              </div>
              <div className="feed__inputOptions" >
                  {/* Call the input option */}
                  <button style={{ background: "none", border: "none" }} onClick={(e) => setIsOpen(true)}>
                  <InputOption  Icon={ImageIcon} title={'Photo'} color="#70B5F9" />
                  </button>
                  <Modal open={isOpen} onClose={() => setIsOpen(false)} onSave={() => {
                      setIsOpen(false)
                  }}>
                      <input type="file" onChange={handleImageChange}  id="file" style={{display:'none'}} />
                      <label for="file" >
                          Select an image to upload
                          </label>
                      </Modal>
                  <InputOption Icon={SubscriptionsIcon} title={'Video'} color="#E7A33E"  />

                  <InputOption Icon={ImageIcon} title={'Event'} color="#C0CBCD"  />

                  <InputOption Icon={CalendarViewDayIcon} title={'Write Artical'}  color="#7FC15E" />
              </div>
          </div>

          {/* {Post} */}
          <FlipMove>
          {posts.map(({id, data:{name, description, message, messageImg ,  photoUrl}}) => (
              <Post
                  key={id}
                  name={name}
                  description={description}
                  message={message}
                  messageImg={messageImg}
                  photoUrl={photoUrl}
              />
          ))}
              </FlipMove>
    </div>
  )
}

export default Feed