import './Checkbox.css'
import { useContext } from 'react';
import DataContext from '../store/data-context';
import useHTTP from '../../custom-hooks/http-hook';


function Checkbox(props) {




    let { tList, replaceTaskList, showNotification } = useContext(DataContext);
    const { taskInfo, checked } = tList.find((task) => (task['task_id'] === props.id));
    const checkboxClicked = checked;
    const { sendRequest } = useHTTP();
    const checkboxHandler = () => {

        sendRequest({
            url: `http://localhost:8000/api/v1/tasks/${props.id}/`,
            method: 'PUT',
            body: JSON.stringify({
                taskInfo,
                checked: !checked
            }),
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
            showNotification('Tasks Completed !!')
        })
    }
    return (
        //inline dynamic style method
        < i className="fa fa-check custom-checkbox" onClick={checkboxHandler} style={
            { background: checkboxClicked && 'rgb(116, 191, 244)', color: checkboxClicked && 'black' }
        }>
        </i >

        // css file dynamic method
        // < i className={`fa fa-check custom-checkbox ${checkboxClicked ? 'clicked' : ''}`} onClick={checkboxHandler}> </i>
    );
}


export default Checkbox;