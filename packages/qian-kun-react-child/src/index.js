import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let instant = null;
function render(props) {
  const { container } = props;
  const root = container ? container.querySelector('#root') : document.querySelector('#root');
  instant = ReactDOM.createRoot(root)
  instant.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react18] react app bootstraped');
}

export async function mount(props) {
  console.log('[react18] props from main framework', props);
  render(props);
}

export async function unmount() {
  instant.unmount();
}


