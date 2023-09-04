import "./App.css"

import { Card, CardContent } from "./components/ui/card"

import { Button } from "./components/ui/button"
import reactLogo from "./assets/react.svg"
import { useState } from "react"
import viteLogo from "/vite.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-screen grid grid-cols-1 mx-0 bg-primary-foreground">
      <div className="flex flex-col items-center justify-center">
        <div className="p-4">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <Card>
          <CardContent className="p-6 text-center">
            <Button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </CardContent>
        </Card>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
