import {SHOW_ALL_TASKS, SHOW_PROCESS_TASKS, SHOW_DONE_TASKS, SHOW_REMOVE_TASKS} from "../index";

export default (state="SHOW_ALL_TASKS",action) => {

    console.log(action);

    switch (action.type) {
        case SHOW_ALL_TASKS:
            return action.payload;
        case SHOW_PROCESS_TASKS:
            return action.payload;
        case SHOW_DONE_TASKS:
            return action.payload;
        case SHOW_REMOVE_TASKS:
            return action.payload;
    }
    //if (action.type === true) {return action.payload};
    return state;
};