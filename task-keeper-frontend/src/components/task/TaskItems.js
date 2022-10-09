
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
    // console.log(taskList);
    // const resetState = editContxt.resetState();
    // useEffect(() => {
    //     editContxt.resetState();
    // }, [taskList]);


    return (
        <div id='task-items'>
            {taskList.map((task) => (

                <TaskInfo
                    key={task['task_id']}
                    input={task.taskInfo}
                    id={task['task_id']}
                    taskComplete={task.checked}
                />))
            }
        </div>
    );

}

export default TaskItems;