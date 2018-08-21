const description = {
    demand: true,
    alias: 'd',
    desc: 'to do task description'
};

const complete = {
    alias: 'c',
    default: true
}


const argv = require('yargs')
    .command('create', 'Create task to do', {
        description
    })
    .command('update', 'Update the task state', {
        description,
        complete
    })
    .command('erase', 'Erase a task', {
        description
    })
    .help()
    .argv;


module.exports = {
    argv
}