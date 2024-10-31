const input = document.getElementById("taskInput");
        const addTaskButton = document.getElementById("addTaskButton");
        const markAllButton = document.getElementById("markAllButton");
        const taskList = document.getElementById("taskList");

        addTaskButton.addEventListener("click", function() {
            const taskText = input.value.trim();
            if (taskText) {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                                    <span>${taskText}</span>

                    <input type="checkbox" class="taskCheckbox" />
                    <button class="deleteButton">Delete</button>
                `;
                taskList.appendChild(listItem);
                input.value = '';

                markAllButton.addEventListener("click", function() {
            const checkboxes = document.querySelectorAll(".taskCheckbox");
            checkboxes.forEach(checkbox => {
                checkbox.checked = !checkbox.checked; 
            });
        });
                const deleteButton = listItem.querySelector(".deleteButton");
                deleteButton.addEventListener("click", function() {
                    taskList.removeChild(listItem);
                });
            }
        });

       