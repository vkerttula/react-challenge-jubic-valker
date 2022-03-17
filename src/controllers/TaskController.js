export const getAllFromLocalStorage = () => {

    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    values.sort((a, b) => (a.id > b.id) ? 1 : -1);
    return(values);

};

export const addTaskToLocalStorage = ( data ) => {

    let id = Object.keys(localStorage).length;
    data['id'] = id;
    localStorage.setItem("Task:" + id, JSON.stringify(data));

};


export const addTaskArrayToLocalStorage = ( data ) => {

    localStorage.clear();
    data.map((task) => (
        addTaskToLocalStorage(task)
    ));

};

export const removeTask = ( data ) => {

    const tasks = getAllFromLocalStorage();
    const filtered = tasks.filter(task => task.id !== data);
    addTaskArrayToLocalStorage(filtered);

};