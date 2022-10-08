import React from 'react';

const DataContext = React.createContext(
    {
        tList: [],
        notification: [],
        onAddTask: (item) => { },
        onDeleteTask: (id) => { },
        onClearItems: () => { },
        onEditTask: (id) => { },

    }
);

export default DataContext;



