import React, { useEffect, useContext } from 'react';

import './App.css';

import Task from '../src/components/task/Task';
import Form from '../src/components/form/Form';
import ClearTask from '../src/components/cleartask/ClearTask';
import Notification from '../src/components/notification/Notification';
import DataContext from './components/store/data-context';

// import DataContextProvider from './components/store/DataContextProvider';
import useHTTP from './custom-hooks/http-hook';


function App() {


  const { replaceTaskList, notification } = useContext(DataContext);

  const { sendRequest } = useHTTP();

  useEffect(() => {
    sendRequest({
      url: 'http://localhost:8000/api/v1/tasks/',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
    }, (data) => {
      console.log(data)
      replaceTaskList(data ? data : [])
    })
  }, [sendRequest, replaceTaskList]);



  return (

    <main>
      <div id='task-keeper'>
        {notification.length > 0 && <Notification msg={''} />}
        <h1>Task Keeper</h1>
        <Form />
        <Task />
        <ClearTask>
          ClearTask</ClearTask>
      </div>
    </main>
  );
}

export default App;

