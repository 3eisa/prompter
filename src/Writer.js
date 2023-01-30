import React, { useContext, useState } from 'react'
import NameList from './NameList';
import './Writer.css'

import TextEditor from './TextEditor';
import { UserContext } from './UserContext';
import Questions from './Questions';

export default function Writer() {

    //profile
    const {user, setUser} = useContext(UserContext);
    const [profileClicked, setProfileClicked] = useState(false);

    const handleProfileClick = ()=> {
        setProfileClicked(!profileClicked);
    }

    const handleLogOut = () => {
        console.log("clicked logout")
        setUser(null)
        window.localStorage.removeItem('thwart-token')
    }
    //

    //plan
    const [plan,setPlan] = useState("");

    //

  return (
    <div className="main-container">

        <div className='header'>
            <button onClick={handleProfileClick}>
            <img src={user.picture} alt='pp' />
            </button>
            <ul style={profileClicked?{display:'none'}:{listStyle: 'none',cursor: 'pointer'}}>
                <li onClick={handleLogOut}>Log Out </li>
            </ul>
            {/* {showList && (
                <ul style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                padding: '20px',
                border: '1px solid gray',
                }}>
                <li>
                    <button onClick={() => console.log('Button inside list clicked')}>
                    Button logout
                    </button>
                </li>
                </ul>
            )} */}
        </div>

      <div className="list-container">

        <NameList />
      </div>
      
      
      {/* remove planchange after webhook */}
      <div className="form-container">
        <Questions setPlan={setPlan} />
      </div>
      
      
      <div className="editor-container">
        <TextEditor handlePlanChange={setPlan} plan={plan}/>
      </div>
    </div>
  );
}
