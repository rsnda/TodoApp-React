import Todo from '../../modele/Todo'
import {ADD_TODO, REMOVE_ALL} from '../actions/todos.actions'

export const initialState = {
    todos: []
}

export default function todoReducer (state = initialState, action) {

    switch (action.type) {
        case ADD_TODO: {
            return {
            ...state,
            todos: [action.todo, ...state.todos]
            }
        }
        case REMOVE_ALL: {
            return {
            ...state,
            todos: []
            }
        }
        default:
            return state;
    }
}
