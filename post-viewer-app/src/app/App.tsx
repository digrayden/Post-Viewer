import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';
import RouterProvider from './providers/router/RouterProvider';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RouterProvider />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
