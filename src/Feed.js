import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';


function Feed() {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);

    const sendPost = (event) => {
        event.preventDefault()

        db.collection('posts').add({
            name: 'Don Mac',
            description: 'Test description',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("")
    }
    return <>
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e=>setInput(e.target.value)} type="text" name="" id="" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                    <InputOption title="Write Article" Icon={CalendarViewDayIcon} color="#7FC15E" />
                </div>
            </div>

            {/*  POSTS  */}
            {posts.map(({id,data:{name,description,message,photoUrl}}) => 
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            )}

            {/* <Post name='Don Mac' description='This is a test' message='wowz' /> */}
        </div>
    </>
        
    }

export default Feed