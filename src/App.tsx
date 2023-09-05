import "./App.css"

import Home from "./pages/Home"
import { ThemeProvider } from "./context/ThemeContext"

type AppProps = {
  children?: React.ReactNode
}
const App = ({ children }: AppProps) => {
  return (
    <ThemeProvider defaultTheme="dark">
      <Home />
      {children}
    </ThemeProvider>
  )
}

export default App
