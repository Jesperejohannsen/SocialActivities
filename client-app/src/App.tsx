import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {

  const [activities, setActivities] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])

  return (
    <>
      <h1>Activities</h1>
      <div>
        <ul>
          {activities.map((activity: any) => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </ul>
        <select>
          {activities.map((activity: any) => (
            <option key={activity.id}>{activity.title}</option>
          ))}
        </select>
      </div>
    </>
  )
}

export default App
