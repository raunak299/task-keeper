import FormInput from './FormInput';
import { useContext } from 'react';
import DataContext from '../store/data-context';
import './Form.css';
import useHTTP from '../../custom-hooks/http-hook';

function Form() {

    const { replaceTaskList, showNotification } = useContext(DataContext);
    const { sendRequest } = useHTTP();

    const onSaveTaskDataHandler = (data) => {
        console.log(data)
        const taskData = {
            ...data,
            checked: false
        }

        sendRequest({
            url: `http://localhost:8000/api/v1/tasks/`,
            method: 'POST',
            body: JSON.stringify(
                taskData
            ),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
        }, () => {
            sendRequest({
                url: 'http://localhost:8000/api/v1/tasks/',
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json"
                },
            }, (data) => (replaceTaskList(data)));
            showNotification('New Task Added !!')
        });

    }



    return (
        <FormInput onSaveTaskData={onSaveTaskDataHandler} />
    )
}

export default Form;