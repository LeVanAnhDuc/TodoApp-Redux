
// redux toolket 
import { configureStore } from'@reduxjs/toolkit'
import FilterSlice from "../components/Filters/filterSlice";
import TodoListSlice from '../components/TodoList/todoListSlice'

const store = configureStore ({
    reducer:{
        filters: FilterSlice.reducer,
        todoList: TodoListSlice.reducer,
    },
})

export default store