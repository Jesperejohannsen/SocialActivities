import { useEffect, useState } from 'react';
import './styles.css'
import axios from 'axios';
import { Activity } from '../models/activity';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);


  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        console.log(response);
        setActivities(response.data);
    })
  }, [])

  return (
    <>
      <h1>Activities</h1>
      <div>
        <ul>
          {activities.map(activity => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </ul>    
      </div>
    </>
  )
}

export default App
