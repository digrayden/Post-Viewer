import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';
import RouterProvider from './providers/router/RouterProvider';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './providers/store/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <BrowserRouter>
          <RouterProvider />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App;
