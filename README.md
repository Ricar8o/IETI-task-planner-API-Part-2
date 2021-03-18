# Azure API 

## Run Local

    cd "Azure functions"
    func start

If func command does not work, run this:

    npm install -g azure-functions-core-tools@3 --unsafe-perm true

## ROUTES
### add-task 

    POST
    https://task-app-api.azurewebsites.net/api/add-task?code=qKsRlDPr4CTOxbjovixW1PDaTnWINmOQXJcYVaahS17gVdrxqYuEeQ==

### list-tasks

    GET
    https://task-app-api.azurewebsites.net/api/list-tasks?code=KKMuy7SoT4qnVJor9brhxmB9QtnVqoXzP9h3IvWvmLan6xLu0FORUQ==




# Test with simple React component 

    cd frontend-consumption
    npm install
    npm start