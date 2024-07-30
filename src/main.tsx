import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'
import { Provider } from 'react-redux'
import { persistor, ReduxStore } from './reduxs/store/Store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={ReduxStore}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={MainRoutes} />
      <Toaster />
    </PersistGate>
  </Provider>
)
