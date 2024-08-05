document.addEventListener("DOMContentLoaded", () => {
  function capitalizeFirstChar(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function formatDate(userFriendlyDate) {
    const date = new Date(userFriendlyDate);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return date.toLocaleDateString("en-GB", options);
  }

  //Membuat instance dari object task
  const myTasks = new Task();

  // membuat variable untuk mengambil seluruh task
  const existingTasks = myTasks.getTasks();

  const taskWrapper = document.getElementById("taskWrapper");
  const taskWrapperEmpty = document.getElementById("taskWrapperEmpty");

  function displayAllTasks(tasks = existingTasks) {
    if (tasks.length === 0) {
      taskWrapperEmpty.className =
        "flex justify-center items-center h-[420px] mx-auto";
      taskWrapper.className = "hidden";
      console.log("tidak ada task tersedia");
    } else {
      taskWrapper.innerHTML = "";
      taskWrapperEmpty.className = "hidden";
      console.log("beberapa task tersedia dan siap ditampilkan");

      tasks.forEach((task) => {
        const userFriendlyDate = formatDate(task.createdAt);
        const itemTask = document.createElement("div");
        itemTask.className =
          "flex justify-between bg-white p-3 w-full rounded-3xl";
        itemTask.innerHTML = `
          <div class="task-card flex flex-col gap-5">
                    <div class="flex gap-3 items-center">
                      <div
                        class="w-[50px] h-[50px] flex shrink-0 items-center justify-center bg-[#CABDFF] rounded-full"
                      >
                        <img src="img/icons/code.svg" class="w-8" alt="icon" />
                      </div>
                      <div class="flex flex-col">
                        <p class="font-semibold text-[14px] md:text-base md:leading-[27px]">
                          ${capitalizeFirstChar(task.taskName)}
                        </p>
                        <p class="text-[12px] md:text-sm leading-[21px] opacity-70">
                        Created at ${userFriendlyDate}
                        </p>
                      </div>
                    </div>
                    <div class="flex gap-4 font-semibold text-sm leading-[21px]">
                      <div class="flex gap-1 items-center">
                        <div class="flex shrink-0 w-4 h-4 md:w-5 md:h-5">
                          <img src="img/icons/layer.svg" alt="icon" />
                        </div>
                        <p class="text-[12px]">${task.taskPriority}</p>
                      </div>
                      ${
                        task.isCompleted === false
                          ? `<div
                            class="flex gap-1 items-center text-[#7676B1] bg-progress py-2 px-3 rounded-full"
                          >
                            <div class="flex items-center justify-center shrink-0 w-4 h-4 md:w-5 md:h-5">
                              <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.29163 2.16663V18.8333"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M4.29163 3.83337H13.625C15.875 3.83337 16.375 5.08337 14.7916 6.66671L13.7916 7.66671C13.125 8.33337 13.125 9.41671 13.7916 10L14.7916 11C16.375 12.5834 15.7916 13.8334 13.625 13.8334H4.29163"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <p class="text-[12px]">In Progress</p>
                          </div>`
                          : `<div
                              class="flex gap-1 items-center text-[#97AB46] bg-complete py-2 px-3 rounded-full"
                            >
                              <div class="flex items-center justify-center shrink-0 w-4 h-4 md:w-5 md:h-5">
                                <svg
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.29163 2.16663V18.8333"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M4.29163 3.83337H13.625C15.875 3.83337 16.375 5.08337 14.7916 6.66671L13.7916 7.66671C13.125 8.33337 13.125 9.41671 13.7916 10L14.7916 11C16.375 12.5834 15.7916 13.8334 13.625 13.8334H4.29163"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                              <p class="text-[12px]">Completed</p>
                            </div>`
                      }
                    </div>
                  </div>
                  <div class="flex flex-col md:flex-row items-center gap-3 md:gap-x-3">
                    <a
                      href="#" id="deleteTask-${task.id}"
                      class="flex text-[12px] md:text-sm gap-[10px] justify-center items-center px-2 md:px-4 h-11 font-semibold text-red hover:text-white bg-transparent rounded-full w-full border border-red hover:bg-red transition"
                      >Delete</a
                    >
                    ${
                      task.isCompleted === false
                        ? `<a
                          href="#" id="completeTask-${task.id}"
                          class="flex text-[12px] md:text-sm  gap-[10px] justify-center items-center px-4 h-11 font-semibold bg-green rounded-full w-full border border-transparent hover:bg-transparent hover:border-green transition"
                          >Complete</a
                        >`
                        : `<a href="#" id="completeTask-${task.id}" class="hidden">Complete</a>`
                    }
                  </div>
          `;

        taskWrapper.appendChild(itemTask);

        itemTask
          .querySelector(`#completeTask-${task.id}`)
          .addEventListener("click", function (event) {
            event.preventDefault();
            myTasks.completeTask(task.id);
            const updateTasks = myTasks.getTasks();
            displayAllTasks(updateTasks);
          });

        itemTask
          .querySelector(`#deleteTask-${task.id}`)
          .addEventListener("click", function (event) {
            event.preventDefault();
            myTasks.deleteTask(task.id);
            const updateTasks = myTasks.getTasks();
            displayAllTasks(updateTasks);
          });
      });
    }
  }

  displayAllTasks();
});
