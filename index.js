const tasks = [{
    id: 1,
    name: "task1",
    isDone: false
},
{
    id: 2,
    name: "task2",
    isDone: false
}
];

console.log(tasks);

const form = document.querySelector("form");
const listContainer = document.querySelector(".list-container");

const tasksRender = (tasks) => {
    let html = tasks.map((task) => {
        return (`
                    <div class="item-container">
                        <label for="">
                                <input type="checkbox" name="" id="">
                                ${task.name}
                        </label>
                        <button type="button">-</button>
                    </div>
                    `)
    })
    listContainer.innerHTML = html.join("")
}

submitTask = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    tasks.push({
        id: tasks.length + 1,
        name: data.task,
        isDone: false
    });
    tasksRender(tasks);
    form.reset();
}

const contentLoaded = () => {

    tasksRender(tasks);
}
document.addEventListener("DOMContentLoaded", contentLoaded);
form.addEventListener("submit", submitTask);

//1 contentLoaded
//2 submitTask
//3 tasksRender