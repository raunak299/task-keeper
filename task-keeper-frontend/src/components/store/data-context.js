import React from 'react';

const DataContext = React.createContext(
    {
        tList: [],
        notification: '',
        replaceTaskList: (taskList) => { },
        showNotification: () => { },

    }
);

export default DataContext;



