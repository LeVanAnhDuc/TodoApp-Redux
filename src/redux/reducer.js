import FilterReducer from "../components/Filters/FilterReducer";
import TodoListReducer from '../components/TodoList/TodoListReducer'

import {combineReducers} from 'redux'

// const rootReducer = ( state = {}, action ) => {
//     return {
//     filters: FilterReducer(state.filter, action),
//     todoList: TodoListReducer(state.todoList, action),
// }}

const rootReducer = combineReducers({
    filters: FilterReducer,
    todoList: TodoListReducer,
})

export default rootReducer;