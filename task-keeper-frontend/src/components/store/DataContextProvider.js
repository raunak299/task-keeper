import DataContext from './data-context';
import { useCallback, useState } from 'react';




function DataContextProvider(props) {

    const [tList, setTList] = useState([]);
    const [notificationMsg, setNotication] = useState('');

    const notificationHandler = (msg) => {
        setNotication(msg);
        setTimeout(() => (setNotication('')), 1000)
    }

    const onReplaceTaskHandler = useCallback((taskList) => {
        setTList(taskList);
    }, []);




    const dataContext = {
        tList,
        notification: notificationMsg,
        replaceTaskList: onReplaceTaskHandler,
        showNotification: notificationHandler,
    }

    return (
        <DataContext.Provider value={dataContext}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;