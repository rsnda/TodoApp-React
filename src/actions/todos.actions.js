import Todo from '../../modele/Todo'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_ALL = 'REMOVE_ALL'

let counter = 0;

export function addTodo(title) {
    return {
    type: ADD_TODO,
    todo: new Todo(++counter, title, false)
    }
}

export function removeAll() {
    return {
    type: REMOVE_ALL
    }
}