import {ADD_NEW_TASK, PROCESS_TASK, DONE_TASK, REMOVE_TASK, SHOW_ALL_TASKS, SHOW_PROCESS_TASKS, SHOW_DONE_TASKS, SHOW_REMOVE_TASKS} from "../index";

export const addNewTask = (task) => {
    return {
        type: ADD_NEW_TASK,
        payload: task
    }
};

export const doneTask = (task_id) => {
    return {
        type: DONE_TASK,
        payload: task_id
    }
};

export const processTask = (task_id) => {
    return {
        type: PROCESS_TASK,
        payload: task_id
    }
};

export const removeTask = (task_id) => {
    return {
        type: REMOVE_TASK,
        payload: task_id
    }
};

export const showAllTasks = () => {
    return {
        type: SHOW_ALL_TASKS,
        payload: "SHOW_ALL_TASKS"
    }
};

export const showProcessTasks = () => {
    return {
        type: SHOW_PROCESS_TASKS,
        payload: "SHOW_PROCESS_TASKS"
    }
};

export const showDoneTasks = () => {
    return {
        type: SHOW_DONE_TASKS,
        payload: "SHOW_DONE_TASKS"
    }
};

export const showRemoveTasks = () => {
    return {
        type: SHOW_REMOVE_TASKS,
        payload: "SHOW_REMOVE_TASKS"
    }
};