import { QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '@pages'
import queryClient from './services/utils/query'

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)

export default App
