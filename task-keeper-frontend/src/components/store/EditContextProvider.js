import React, { useContext, useState } from "react";
import EditContext from "./edit-Context";
import DataContext from "./data-context";

function EditContextProvider(props) {


    const dataContext = useContext(DataContext);

    const [editYN, setEditYN] = useState(false);
    const [item, setItem] = useState(false);


    const editStateHandler = (id) => {
        setEditYN(true);
        const list = dataContext.tList;
        const newList = list.filter((task) => (task.id === id));
        // console.log(newList);
        const newItem = newList[0];
        setItem(newItem);
        // console.log(newItem);

    }

    const resetStateHandler = () => {
        setEditYN(false);
        setItem({});
    }

    const currData = {
        edit: editYN,
        editItem: item,
        editState: editStateHandler,
        resetState: resetStateHandler,
    }

    // console.log(currData.editItem);


    return (
        <EditContext.Provider value={currData}>
            {props.children};
        </EditContext.Provider>
    )

}

export default EditContextProvider;