//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv
const toDo = require('./to-do/to_do');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(task);
        break;

    case 'list':
        let list = toDo.getList();
        for (let task of list) {
            console.log('============= To do ==========='.green);
            console.log(task.description);
            console.log('State: ', task.complete);
            console.log('================================'.green);
        }
        break;

    case 'update':

        let updated = toDo.update(argv.description, argv.complete);
        console.log(updated);
        break;

    case 'erase':
        let erased = toDo.erase(argv.description);
        console.log(erased);

    default:
        console.log('Comand don´t recognised');


}