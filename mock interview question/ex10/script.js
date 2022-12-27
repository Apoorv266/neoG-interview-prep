// Create a list of 3 objects that has 2 attributes name of the task and completed which is a boolean value true or false. Display those tasks which are completed or which have attributes as completed:true on the click of a button. 

let obj = [
    {
        name: "task1",
        completed : true
    },
    {
        name: "task2",
        completed : true
    },{
        name: "task3",
        completed : true
    }
]

obj.map((item =>{
    if (item.completed === true) {
        document.write(item.name)
    }
}))