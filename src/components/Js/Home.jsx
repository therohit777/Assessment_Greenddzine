import React, { useState } from 'react';
import "../css/home.css";
import user from "../Assets/userlogo.png";
import dashicon from "../Assets/dashboardlogo.png";
import { FaHome } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

const Home = () => {
  const [body, setbody] = useState(1);
  return (
    <div className='Home'>
      <div className='profilepic'>
        <img src={user} alt="none" width={'40px'}/>
      </div>
      <div className='dashpic'>
        <img src={dashicon} alt="none" width={'75px'} className='dashimg'/>
        <p className='dashicon'>4</p>
      </div>
      {
        (body===1)?<HomeBody/>:<DashboardBody/>
      }
      <div className="btns">
        <div onClick={()=>{setbody(1)}} className={(body===0)?'btnbody':'btnbodyhighlight'}><FaHome/></div>
        <div onClick={()=>{setbody(0)}} className={(body===0)?'btnbodyhighlight2':'btnbody'}><CiUser/></div>
      </div>
    </div>
  )
}

const HomeBody = () => {
  return (
      <div className="empcont">
        <div className="header">Employee Productivity Dashboard</div>
        <div className="stats">
          <div className="statline">
            <p>Productivity on Monday</p>
            <div className="bar1"></div>
          </div>
          <div className="statdata">4%</div>
        </div>
        <div className="stats">
          <div className="statline">
            <p>Productivity on Tuesday</p>
            <div className="bar2"></div>
          </div>
          <div className="statdata">92%</div>
        </div>
        <div className="stats">
          <div className="statline">
            <p>Productivity on Wednesday</p>
            <div className="bar3"></div>
          </div>
          <div className="statdata">122%</div>
        </div>
        <div className="stats">
          <div className="statline">
            <p>Productivity on Thursday</p>
            <div className="bar4"></div>
          </div>
          <div className="statdata">93%</div>
        </div>
        <div className="stats">
          <div className="statline">
            <p>Productivity on Friday</p>
            <div className="bar5"></div>
          </div>
          <div className="statdata">89%</div>
        </div>
        <div className="stats">
          <div className="statline">
            <p>Productivity on Saturday</p>
            <div className="bar6"></div>
          </div>
          <div className="statdata">98%</div>
        </div>
      </div>
  )
}

const DashboardBody = () => {
  const users =[
    {
      'id':'1',
      'name':'Arjun',
      'DOB':'16-11-2000',
      'role':'Software Engineer'
    },
    {
      'id':'2',
      'name':'Mahesh',
      'DOB':'15-01-2000',
      'role':'Web Engineer'
    },
  ]
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(users);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };

  return (
    <div className='profilebody'>
       <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        className='searchbox'
      />
      <div>
        {searchResults.map((user) => (
          <div key={user.id}  className='Infocont'>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>DOB: <span className='dob'>{user.DOB}</span></p>
            <p>Role: <span className='role'>{user.role}</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Home;