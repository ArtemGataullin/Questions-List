import './styles/Global.css'
import { AppRouter } from './providers/RouterProvider'
import { StoreProvider } from './providers/StoreProvider'

function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  )
}

export default App
