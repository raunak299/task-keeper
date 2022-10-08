import React, { useEffect } from 'react';

import './App.css';

import Task from '../src/components/task/Task';
import Form from '../src/components/form/Form';
import ClearTask from '../src/components/cleartask/ClearTask';
import Notification from '../src/components/notification/Notification';
// import DataContext from './components/store/data-context';
import EditContextProvider from './components/store/EditContextProvider';
// import DataContextProvider from './components/store/DataContextProvider';
import useHTTP from './custom-hooks/http-hook';


function App() {


  // const [message, setMessage] = useState('');
  // const notificationMsg = (msg) => {
  //   setMessage(msg);
  // }

  // const dataContx = useContext(DataContext);
  // const msg = dataContx.notification;

  // if (msg === 'New Task Added ') {
  //   notificationMsg(msg);
  //   setTimeout(() => {
  //     notificationMsg('');
  //   }, 1000);
  // }

  const { sendRequest } = useHTTP();
  useEffect(() => {
    sendRequest({
      url: 'http://localhost:8000/api/v1/tasks/',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
    }, (data) => (console.log(data)))
  }, [sendRequest])

  return (
    < EditContextProvider >
      <main>
        <div id='task-keeper'>



          <Notification msg={''} />
          <h1>Task Keeper</h1>
          <Form />
          <Task />
          <ClearTask>
            ClearTask</ClearTask>
        </div>
      </main>
    </EditContextProvider>



  );
}

export default App;

