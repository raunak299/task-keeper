import DataContext from './data-context';
import { useReducer } from 'react';

// import App from '../../App';


const defaultData = {
    tList: [],
    notification: [],
};

let flag = false;

const dataReducer = (state, action) => {


    if (action.type === 'ADD') {
        flag = !flag;
        if (action.value.taskName.trim().length === 0) {
            return { tList: state.tList, notification: ['Task cannot be empty !!', flag] };
        }
        const list = state.tList;
        const newList = [action.value, ...list];
        console.log(newList);
        return { tList: newList, notification: ['New Task Added ', flag] };
    }



    if (action.type === 'DELETE') {
        flag = !flag
        const list = state.tList;
        console.log(list);
        const newList = list.filter((task) => (task.id !== action.value));
        console.log(newList);
        return { tList: newList, notification: ['Task Deleted', flag] };
    }


    if (action.type === 'EDIT') {
        flag = !flag
        const list = state.tList;
        const newList = [...list];
        console.log(list);
        let index = newList.findIndex((task) => (
            action.value.id === task.id
        ));
        newList[index].taskName = action.value.taskName;

        console.log(newList);
        return { tList: newList, notification: ['Task Edited', flag] };
    }



    if (action.type === 'CLEAR-ALL') {
        flag = !flag;
        return { tList: [], notification: ['All Tasks Cleared', flag] };
    }

    else {
        return { tlist: state.tList, notification: ['', flag] };
    }

}


function DataContextProvider(props) {

    const [currData, dispatchCurrData] = useReducer(dataReducer, defaultData);


    const onAddTaskHandler = (taskData) => {
        dispatchCurrData({ type: 'ADD', value: taskData });

    }

    const onDeleteTaskHandler = (id) => {
        dispatchCurrData({ type: 'DELETE', value: id });
    }

    const onClearItemsHandler = (taskData) => {
        dispatchCurrData({ type: 'CLEAR-ALL', value: taskData });
    }

    const onEditTaskHandler = (taskData) => {
        dispatchCurrData({ type: 'EDIT', value: taskData });
    }



    const dataContext = {
        tList: currData.tList,
        notification: currData.notification,
        onAddTask: onAddTaskHandler,
        onDeleteTask: onDeleteTaskHandler,
        onClearItems: onClearItemsHandler,
        onEditTask: onEditTaskHandler,
    }

    return (
        <DataContext.Provider value={dataContext}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;