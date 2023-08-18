
// redux toolkit

import {createSlice} from '@reduxjs/toolkit'

const TodoListSlide = createSlice({
    name:'todoList',
    initialState:[
        {id:1, name:'Learn English', completed:false, priority:'Medium'},
        {id:2, name:'Learn Germary', completed:true, priority:'High'},
        {id:3, name:'Learn VietNam', completed:false, priority:'Low'},
        {id:4, name:'Learn France', completed:true, priority:'Medium'},
        {id:5, name:'Learn Japan', completed:true, priority:'Medium'},
        {id:6, name:'Learn Korea', completed:false, priority:'High'},
    ],
    reducers:{
        addTodo: (state, action) =>{
            state.push(action.payload)
        },
        toggleTodo: (state, action) =>{
            const currentTodo = state.find(todo => todo.id === action.payload)
            currentTodo.completed = !currentTodo.completed

            // state.map( todo =>todo.id ===action.payload ? todo.completed =!todo.completed :todo)
        },
    }
})
export default TodoListSlide