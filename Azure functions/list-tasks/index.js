const { format, isValid } = require("date-fns");

module.exports = async function (context) {
    context.log('looking for taks');

    var taskList = [];

    const task = {
        "description": "Probar una API desplegada en azure ",
        "responsible": {
            "name": "Ricardo Martinez",
            "email": "ricardo@somemail.com"
        },
        "status": "Done",
        "dueDate":  formatDate(new Date())
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

function formatDate(date){
    const dateFormat = "dd/MM/yyyy";
    if (isValid (date)){
        return format(date,dateFormat);
    }
    return null;
}