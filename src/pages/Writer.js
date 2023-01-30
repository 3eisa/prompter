import React, { useContext, useState } from 'react'
import '../styles/Writer.css'

import { UserContext } from '../context/UserContext';

import NameList from '../components/NameList';
import TextEditor from '../components/TextEditor';
import Questions from '../components/Questions';
import FormHeader from '../components/FormHeader';

export default function Writer() {

    //profile/user state
    const {user, setUser} = useContext(UserContext);
    const [profileClicked, setProfileClicked] = useState(false);

    //profile icone/dropdown
    const handleProfileClick = ()=> {
        setProfileClicked(!profileClicked);
    }

    //remove user and delete session from browser
    const handleLogOut = () => {
        console.log("clicked logout")
        setUser(null)
        window.localStorage.removeItem('twoth-token')
    }
    //


    //editor state
    const [plan,setPlan] = useState("");
    //


    //names for plans list
    const names = ["John", "Emily", "Jessica", "Michael", "David", "Sarah", "Daniel", "Brian", "Ashley", "Amy"];
    //

  return (
    <div className="main-container">

        <div className='header'>
            <img onClick={handleProfileClick} src={user.picture} alt='pp' />
            <ul style={profileClicked?{display:'none'}:{listStyle:'none' ,cursor: 'pointer',position:'fixed',top:'3rem',right:'1rem',fontWeight: 'bold'}}>
                <li onClick={handleLogOut}>Log Out </li>
            </ul>
        </div>

      <div className="list-container">
        <FormHeader className='list-header' />
        <NameList names={names} />
      </div>
      
      
      <div className="form-container">
        <Questions setPlan={setPlan} />
      </div>
      
      
      <div className="editor-container">
        <TextEditor handlePlanChange={setPlan} plan={plan}/>
      </div>
    </div>
  );
}
