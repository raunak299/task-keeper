import styles from './FormInput.module.css'
import { useContext, useRef } from 'react';
import EditContext from '../store/edit-Context';


function FormInput(props) {

    const inputDom = useRef();

    const editContxt = useContext(EditContext);
    const editItem = editContxt.editItem;
    // console.log(editItem);
    const edit = editContxt.edit;
    const placeholderValue = editItem.taskName;

    let inputString = '';
    const submitHandler = (events) => {
        inputString = inputDom.current.value;
        events.preventDefault();
        const taskData = {
            taskName: inputString,
        }
        // console.log(taskData);
        if (edit) {
            // console.log(editItem);
            if (inputString.trim().length !== 0) {
                editItem.taskName = inputString;
            }
            // console.log(editItem);
            props.onEditTaskData(editItem);
            editContxt.resetState();
        }
        else {
            props.onSaveTaskData(taskData);
        }

        inputDom.current.value = '';
    }

    return (
        <form action="" onSubmit={submitHandler}>
            < input type="text" className={`${styles['input-text']} ${edit ? styles['highlighted'] : ''} `} placeholder={`${edit ? placeholderValue : "Task Here"}`}
                ref={inputDom} />
            <input type="submit" className={`${styles['add-btn']} ${edit ? styles['edit'] : ''}`} value={` ${edit ? 'Edit' : 'Add'}`} />
        </form>
    )
}

export default FormInput;