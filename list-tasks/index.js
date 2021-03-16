module.exports = async function (context) {
    context.log('looking for taks');

    var taskList = [];

    const task = {
        "description": "Probar API en azure ",
        "responsible": {
            "name": "Ricardo Martinez",
            "email": "andres.martinez-d@mail.escuelaing.edu.co"
        },
        "status": "Done",
        "dueDate":  new Date()
    }

    taskList.push(task,task);
    
    const responseMessage = { tasks: taskList};

    context.res = {
        status: 200,
        body: responseMessage,
        headers: {
            'Content-Type': 'application/json'
        }
    };
}