const storage = new Storage(new SessionStorage());
const tasksOnSession = storage.get("tasks")

const tasks = tasksOnSession ? tasksOnSession : [];

const form = document.querySelector("#tasks-form ");
const listContainer = document.querySelector("#tasks-list-container");
const completedStats = document.querySelector("#completed-tasks");
const totalStats = document.querySelector("#total-tasks");

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
                storage.set("tasks", tasks);
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

const submitTask = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newElement = {
        id: tasks.length + 1,
        name: data.task,
        isDone: false
    };
    tasks.push(newElement);

    storage.set("tasks", tasks);

    tasksRender([newElement]);
    form.reset();
}

const contentLoaded = () => {

    tasksRender(tasks);
    if (totalStats) {
        totalStats.innerText = tasks.length;
    };
}
document.addEventListener("DOMContentLoaded", contentLoaded);
form.addEventListener("submit", submitTask);

//1 contentLoaded
//2 submitTask
//3 tasksRender