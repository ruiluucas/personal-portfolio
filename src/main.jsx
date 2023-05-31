import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Fingerspose from './components/Fingerspose'
import './globals.css'

import { Provider } from 'react-redux'
import store from './contexts/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Fingerspose />
    <App />
  </Provider>,
)
