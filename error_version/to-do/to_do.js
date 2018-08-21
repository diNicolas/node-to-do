const fs = require('fs');

let listTodo = [];


const saveDB = () => {
    let data = JSON.stringify(listTodo);

    fs.writeFile(`data/db.json`, data, (err) => {
        if (err) throw new Error('Could not record');
    });
}

const loadDB = () => {
    try {
        listTodo = require('../data/db.json');
    } catch (error) {
        listTodo = [];
    }

}


const create = (description) => {
    loadDB();

    let toDo = {
        description,
        complete: false
    };

    listTodo.push(toDo);

    saveDB();
    return toDo;
}

const getList = () => {
    loadDB();
    return listTodo;
}


const update = (description, complete = true) => {
    loadDB();
    let index = listTodo.findIndex(task => task.description === description);

    if (index >= 0) {
        listTodo[index].complete = complete;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const erase = (description) => {
    loadDB();
    let newList = listTodo.filter(task => {
        return task.description !== description;
    });

    if (listTodo.length === newList.length) {
        return false;
    } else { //Guardamos el dato actializado en la bd
        listTodo = newList;
        saveDB();
        return true;
    }
}

module.exports = {
    create,
    getList,
    update,
    erase
}