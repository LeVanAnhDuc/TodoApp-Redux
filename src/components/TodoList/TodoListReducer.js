const initState = [
    {id:1, name:'Learn English', completed:false, priority:'Medium'},
    {id:2, name:'Learn Germary', completed:true, priority:'High'},
    {id:3, name:'Learn VietNam', completed:false, priority:'Low'},
    {id:4, name:'Learn France', completed:true, priority:'Medium'},
    {id:5, name:'Learn Japan', completed:true, priority:'Medium'},
    {id:6, name:'Learn Korea', completed:false, priority:'High'},
]


const rootReducer = ( state=initState, action ) =>{
    switch(action.type){
        case 'todoList/addTodo':
            return [
                    ...state, 
                    action.payload
                ]
        case 'todoList/toggleTodo':
            return state.map(todo => todo.id === action.payload ? 
                {...todo, completed: !todo.completed} : todo)
        default:
            return state
    }
}

export default rootReducer;