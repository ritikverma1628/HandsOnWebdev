let request = prompt("Enter your request");
let tasks = [];

while(true){
    if(request === "quit")
        break;

    if(request === "list"){
        console.log("-----------");
        for(let task of tasks){
            console.log(task);
        }
        console.log("-----------");
    }

    else if(request === "add"){
        let taskName = prompt("Enter the name of the task you want to add.");
        tasks.push(taskName);
        console.log("Your task was added successfully");
    }

    else if(request === "delete"){
        let delTask = prompt("Enter the name of the task you want to delete.");
        let index = tasks.indexOf(delTask);
        tasks.splice(index,1);
        console.log("YOur task was deleted successfully.")
    }

    request=prompt("Enter your request again.");
}