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

const form = document.querySelector("#tasks-form ");
const listContainer = document.querySelector("#tasks-list-container");

const tasksRender = (tasks) => {
    tasks.forEach((task) => {
        let itemContainer = document.createElement("div");
        itemContainer.className = "item-container";
        let labelEl = document.createElement("label");
        let inputEl = document.createElement("input");
        inputEl.type = "checkbox";

        let buttonEl = document.createElement("button");
        buttonEl.type = "button";

        labelEl.appendChild(inputEl);
        labelEl.append(task.name);
        itemContainer.appendChild(labelEl);
        itemContainer.appendChild(buttonEl);

        listContainer.appendChild(itemContainer);
        /*  return (`
                        <div class="item-container">
                            <label for="">
                                    <input type="checkbox" name="" id="">
                                    ${task.name}
                            </label>
                            <button type="button">-</button>
                        </div>
                        `) */
    })
    // listContainer.innerHTML = html.join("")
}

submitTask = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newElement = {
        id: tasks.length + 1,
        name: data.task,
        isDone: false
    };
    tasks.push(newElement);
    tasksRender([newElement]);
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