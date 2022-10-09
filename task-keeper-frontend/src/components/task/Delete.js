import './Delete.css'
import DataContext from '../store/data-context';
import { useContext } from 'react';
import useHTTP from '../../custom-hooks/http-hook';


function Delete(props) {

    const { replaceTaskList, showNotification } = useContext(DataContext);
    const { sendRequest } = useHTTP();
    const onDeleteHandler = () => {

        // const getRequest = 


        sendRequest({
            url: `http://localhost:8000/api/v1/tasks/${props.id}/`,
            method: 'DELETE',
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
            showNotification('Tasks Deleted !!')
        });
    }

    return (
        <div onClick={onDeleteHandler}>
            <img className='delete-icon' src='https://img.icons8.com/external-solid-style-bomsymbols-/65/000000/external-bin-business-shop-finance-solid-style-set-2-solid-style-bomsymbols--2.png' alt='delete' />
        </div>
    );
}

export default Delete;