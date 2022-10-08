import FormInput from './FormInput';
import { useContext } from 'react';
import DataContext from '../store/data-context';
import './Form.css';

function Form() {

    const dataContx = useContext(DataContext);


    const onSaveExpenseDataHandler = (data) => {
        const taskData = {
            ...data,
            id: Math.random().toString(),
            taskComplete: false
        }
        // console.log(taskData);
        dataContx.onAddTask(taskData);
    }

    const onEditTaskDataHandler = (taskData) => {
        // console.log(taskData);
        dataContx.onEditTask(taskData);
    }


    return (
        <FormInput onSaveTaskData={onSaveExpenseDataHandler} onEditTaskData={onEditTaskDataHandler} />
    )
}

export default Form;