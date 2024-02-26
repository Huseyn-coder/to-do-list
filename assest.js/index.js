var b = 1
var tasks = getTasks();

function saveTasks () {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
function getTasks () {
    const t = localStorage.getItem("tasks")
    if(t) {
        return JSON.parse(t)
    } else {
        return []
    }
}
const num = document.querySelector("#number")
var numb = 0
function numberiTap () {
    numb = 0
    for(let i in tasks) {
        if(tasks[i].completed) {
            
        } else {
            numb++
        }
    }
    num.innerHTML = numb
}



function yeniTaskYarat (text) {
    const task = {
        text,
        completed: false
    }
    tasks.push(task)
    goster(tasks)
    numberiTap()
    saveTasks()
};


function completeActivate (index) {
    if(tasks[index].completed) {
    tasks[index].completed = false
    
} else {
    tasks[index].completed = true
}
saveTasks()
goster(tasks)
}

function removeTask (index) {
if(confirm("Are You Sure?.")) {
tasks.splice(index, 1)
goster(tasks)
numberiTap()
    }
    saveTasks()
}

function clearCompleted () {
 tasks = tasks.filter(task => !task.completed)
 saveTasks()
    goster()
}


function hamisiGoster () {
goster(tasks)
}

function aktivleriGoster () {
const aktivler = tasks.filter(task => !task.completed)
goster(aktivler)
}

function bitmishleriGoster () {
const bitmishler = tasks.filter(task => task.completed)
goster(bitmishler)
}

function goster(t) {
    numberiTap()
const tasksDiv = document.querySelector("#tasks")
tasksDiv.innerHTML = ""

for (let i in t) {
    const task = t[i]
    const div = document.createElement("div")
    div.style.padding = "15px"
    div.style.display = "flex"
    div.style.width = "90%"
    div.style.justifyContent = "flex-start"
    const input = document.createElement("input")
    input.type = "checkbox"
    const removebtn = document.createElement("button")
    removebtn.style.marginLeft = "auto"
    removebtn.innerHTML = "X"

    removebtn.addEventListener("click", function() {
        removeTask(i)
    })
var a = task.text
const article = document.createElement("article")
article.append(a)
if (task.completed) {
    article.style.textDecoration = "line-through";
    input.checked = true;
} else {
    article.style.textDecoration = "none";
    input.checked = false;
}
    div.append(input, article, removebtn)
   
    input.addEventListener("click", function () {

completeActivate(i)
        numberiTap()
    })

    tasksDiv.append(div)
}
}
const inpvalue = document.querySelector("#task")
document.querySelector("#add").addEventListener("click", function(){
const text = document.querySelector("#task").value
if (!text.trim()) {
    alert("Task yazin")
    
} else {
    yeniTaskYarat(text)
}
inpvalue.value = ""
})
function clear () {
    if(confirm("Are You Sure?.")) {
    tasks = tasks.filter(task => !task.completed)
    goster(tasks)
    numberiTap()
    }
}

document.querySelector("#all").addEventListener("click", hamisiGoster);
document.querySelector("#completed").addEventListener("click", bitmishleriGoster);
document.querySelector("#active").addEventListener("click", aktivleriGoster)
document.querySelector("#clear").addEventListener("click", clear)
window.onload = function() {
    goster(tasks)
}
