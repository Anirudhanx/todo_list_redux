export const addTodo = (data) => {
    return {

        type:"Add_ToDo",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteTodo = (id) => {

    return {

        type:"Delete_ToDo",
        id
    }
}
export const removeTodo = () => {

    return {

        type:"Remove_ToDo"
    }
}