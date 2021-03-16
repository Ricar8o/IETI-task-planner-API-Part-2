const { format, isValid } = require("date-fns");

module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const task = req.body;
    let message = "Task Body Empty";
    let responseCode = 400;
    let responseMessage = { message: message};

    if (typeof(task) != "undefined"){

        message = "Bad Task Body";

        let dueDate = formatDate(new Date(task.dueDate));
        let responsible = {
            name : task.responsible,
            email : task.email
        }
        let taskBody = {
            description: task.description,
            status: task.status,
            dueDate: dueDate,
            responsible : responsible
        }

        if (task.responsible != null && task.email != null && task.description != null && task.status != null && dueDate != null){
            message = "Correct Task Body";
            responseCode = 201;
        }
        
        responseMessage = { taskBody: taskBody, message: message};
    }


    context.res = {
        status: responseCode,
        body: responseMessage
    };
    
};

function formatDate(date){
    const dateFormat = "dd/MM/yyyy";
    if (isValid (date)){
        return format(date,dateFormat);
    }
    return null;
}