import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './components/App/App';
import "../node_modules/fwt-internship-uikit/dist/index.css"
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
