let id = 3;

const initialState = [
    {
        id: 1,
        title: 'Enregistrer le tutoriel',
        completed: false
    },
    {
        id: 2,
        title: 'Preparer le tutoriel',
        completed: true
    },
]

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'
export const UPADTE_TODO_ACTION = 'UPADTE_TODO_ACTION'

export function todosReducer (state = initialState, action){
    switch(action.type){
        case ADD_TODO_ACTION:
            return [...state, {id: ++id, completed: false, ...action.payload}]
        default:
            return state
    }
}