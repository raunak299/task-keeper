
import { useContext } from 'react';
import useHTTP from '../../custom-hooks/http-hook';
import DataContext from '../store/data-context';
import styles from './ClearTask.module.css'


function ClearTask(props) {

    const { tList, replaceTaskList, showNotification } = useContext(DataContext);
    const { sendRequest } = useHTTP();
    const length = tList.length;

    const clearItemsHandler = () => {
        tList.forEach((task) => {
            let id = task['task_id']
            console.log(id)
            sendRequest({
                url: `http://localhost:8000/api/v1/tasks/${id}/`,
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json"
                },
            }, () => {
                sendRequest(
                    {
                        url: 'http://localhost:8000/api/v1/tasks/',
                        headers: {
                            'Accept': 'application/json',
                            "Content-Type": "application/json"
                        },
                    }
                    , (data) => (replaceTaskList(data))
                );
                showNotification('All Tasks Cleared !!')
            }
            )
        })



    }


    return (
        <div className={length !== 0 ? styles['clear-tasks'] : styles['clear-tasks-hide']}
            onClick={clearItemsHandler} >
            {props.children}
        </div >
    );
}

export default ClearTask;