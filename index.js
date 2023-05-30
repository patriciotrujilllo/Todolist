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

        const createButtonEl = (itemContainer) => {
            let buttonEl = document.createElement("button");
            buttonEl.type = "button";
            buttonEl.append("-");
            buttonEl.onclick = () => {
                const idEl = itemContainer.id;
                itemContainer.remove()

                tasks = tasks.filter(t => t.id != idEl);
                console.log(tasks);
            }

            return buttonEl;
        }

        const createLabelEl = (tasks) => {
            let labelEl = document.createElement("label");
            let inputEl = document.createElement("input");
            inputEl.type = "checkbox";

            labelEl.appendChild(inputEl);
            labelEl.append(task.name);

            return labelEl;
        }

        const createItemContainer = () => {
            let itemContainer = document.createElement("div");
            itemContainer.className = "item-container";
            itemContainer.id = task.id;

            itemContainer.appendChild(createLabelEl(tasks));
            itemContainer.appendChild(createButtonEl(itemContainer));

            return itemContainer;
        }


        listContainer.appendChild(createItemContainer());
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