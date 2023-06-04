const initialState = {
    tasks: [
        {id:Math.random(),description:"first task",isDone:false}
    ]
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "addnewtodo":
        return { tasks: [...state.tasks, payload] };
        case "checktask":
        return {
            tasks: [...state.tasks].map((task) =>
            task.id === payload ? { ...task, isDone:!task.isDone } : task
            ),
        };
        case "deleteTask":
        return { tasks:[...state.tasks].filter((task)=>task.id===payload) };
        default:
        return state;
    }
};

export default reducer;