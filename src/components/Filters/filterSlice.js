
// redux tookit
import {createSlice} from '@reduxjs/toolkit'

const FilterSlice= createSlice({
    name:'filters',
    initialState:{
        search:'',
        status:'All',
        priority:[],
    },
    reducers:{
        searchTodo: (state, action) =>{
            state.search =action.payload
        }, // => type (name/children(Reducers)) <=> filters/searchTodo
        statusTodo: (state, action) =>{
            state.status = action.payload
        },
        priorityTodo: (state, action) =>{
            state.priority =action.priority
        },
    }
})

export default FilterSlice