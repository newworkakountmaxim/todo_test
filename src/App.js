import React from 'react';

import TemporaryDrawer from "./Layouts/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

export default props => (
    <div>
        <TemporaryDrawer/>

        <AddTask/>

        <TaskFilter/>

        <TaskList tasks={props.tasks}/>
    </div>
);