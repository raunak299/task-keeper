
import TaskInfo from './TaskInfo'
import DataContext from '../store/data-context';
import { useContext } from 'react';
// import EditContext from '../store/edit-Context';
// import { useEffect } from 'react';
import './TaskItems.css'


function TaskItems() {


    const dataContx = useContext(DataContext);
    // const editContxt = useContext(EditContext);
    const taskList = dataContx.tList;
    // const resetState = editContxt.resetState();
    // useEffect(() => {
    //     editContxt.resetState();
    // }, [taskList]);


    return (
        <div id='task-items'>
            {taskList.map((task) => (

                <TaskInfo
                    key={task.id}
                    input={task.taskName}
                    id={task.id}
                    taskComplete={task.taskComplete}
                />))
            }
        </div>
    );

}

export default TaskItems;