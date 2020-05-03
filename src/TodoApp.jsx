import React, { useEffect } from 'react';
import {
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Grid
} from '@material-ui/core';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
    // const initialTodos = [
    //     { id: 1, task: 'Clean Fishtak', completed: false },
    //     { id: 2, task: 'Wash Car', completed: true },
    //     { id: 3, task: 'Grow Beard', completed: false },
    // ];
    const { todos, addTodo, editTodo, removeTodo, toggleTodo } = useTodoState(
        initialTodos
    );
    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa'
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ margin: '2rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;