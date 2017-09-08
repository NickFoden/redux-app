import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
    todos: [
        { id: 1, name: 'render Static UI', isComplete: true},
        { id: 2, name: 'Create initial state', isComplete: true},
        { id: 3, name: 'render based on state', isComplete: true}
    ]
}

ReactDOM.render(<App todos={state.todos} />, document.getElementById('root'));
registerServiceWorker();
