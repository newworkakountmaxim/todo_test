import {ADD_NEW_TASK, PROCESS_TASK, DONE_TASK, REMOVE_TASK} from "../index";

const initState = {
    tasks: [
        {name: "Wake up", process:false, done:false, remove:false}
    ],
};

export default (state=initState,action) => {

    console.log(action);

    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state, tasks: [...state.tasks, {name: action.payload, done:false, remove:false}]
            };
        case PROCESS_TASK:
            return {
                // ...state, tasks: state.tasks
                ...state, tasks: state.tasks.map((el, i) => action.payload === i?{...el, process:true }:el)
            };
        case DONE_TASK:
            return {
                // ...state, tasks: state.tasks
                ...state, tasks: state.tasks.map((el, i) => action.payload === i?{...el, done:true}:el)
            };
        case REMOVE_TASK:
            return {
                // ...state, tasks: state.tasks
                ...state, tasks: state.tasks.map((el, i) => action.payload === i?{...el, remove:true}:el)
            };
    }
    return state;
};