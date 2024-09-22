import React, { useState } from 'react';

export function InputComponent({ onAddTodo }) {
    const [todo, setTodo] = useState("");

    const handleAddTodo = () => {
        onAddTodo(todo);
        setTodo((todo) => "");
    };

    return (
        <div>
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}
