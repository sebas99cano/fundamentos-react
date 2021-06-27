import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

function Example() {
    const [count, setCount] = useState(0);

    // Similar a componentDidMount y componentDidUpdate:
    useEffect(() => {
        // Actualiza el título del documento usando la Browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

function ExampleWithManyStates() {
    // Declarar múltiple variables de estado!
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    // ...
}
ReactDOM.render(
    <Example />,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
