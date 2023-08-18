import {createSelector} from '@reduxjs/toolkit'
export const getListToDoSelector =(state) => state.todoList
export const getSearchTextSelector = (state) => state.filters.search
export const getStatusSelector = (state) => state.filters.status
export const getPrioritySelector = (state) => state.filters.priority



export const getRemainingToDoSelector= createSelector(
    getListToDoSelector,
    getSearchTextSelector,
    getStatusSelector,
    getPrioritySelector,
    // Nhan gia tri tra ve cua cac ham tren
    (todoList,filterSearch, filterStatus, filterPriority)=>{
        return todoList.filter((todo) =>{
            if(filterStatus ==='All'){
                return filterPriority.length ? todo.name.includes(filterSearch) && filterPriority.includes(todo.priority) : todo.name.includes(filterSearch) 
            }

            return todo.name.includes(filterSearch) &&  (
                filterStatus ==='Completed' ? todo.completed : !todo.completed 
            ) && (filterPriority.length ? filterPriority.includes(todo.priority) : true);
    })}
)