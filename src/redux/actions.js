export const addTodo = (payload) =>{
    return{
        type:'todoList/addTodo',
        payload
    }
}

export const toggleTodo = (idItem) =>{
    return{
        type:'todoList/toggleTodo',
        payload :idItem,
    }
}

export const searchTodo = (payload) =>{
    return {
        type:'filters/searchTodo',
        payload
    }
}


export const statusTodo = (payload) =>{
    return {
        type:'filters/statusTodo',
        payload
    }
}

export const priorityTodo = (payload) =>{
    return {
        type:'filters/priorityTodo',
        payload
    }
}