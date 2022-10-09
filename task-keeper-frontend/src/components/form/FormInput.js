import styles from './FormInput.module.css'
import { useRef } from 'react';



function FormInput(props) {

    const inputDom = useRef();

    let inputString = '';
    const submitHandler = (events) => {
        inputString = inputDom.current.value;
        events.preventDefault();
        const taskData = {
            taskInfo: inputString,
        }
        props.onSaveTaskData(taskData);

        inputDom.current.value = '';
    }

    return (
        <form action="" onSubmit={submitHandler}>
            < input type="text" className={`${styles['input-text']}`}
                ref={inputDom} />
            <input type="submit" className={`${styles['add-btn']} `} value='Add' />
        </form>
    )
}

export default FormInput;