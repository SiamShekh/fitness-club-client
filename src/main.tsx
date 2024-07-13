import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={MainRoutes} />
)
