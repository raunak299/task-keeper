import React from 'react';

const EditContext = React.createContext(
    {
        edit: false,
        editItem: {},
        editState: (id) => { },
        resetState: () => { }
    }
);

export default EditContext;