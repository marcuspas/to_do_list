export interface Todo {
    id: number,
    text: string,
    is_checked: boolean
}

export interface TodoItemProps {
    classes?: any
    todo: Todo
}