import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { AuthContextProvider } from "./AuthContext"
import { NODE_ENV } from "@/commons/constants"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ThemeProvider } from "./ThemeContext"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 5, // 5mn
    },
  },
})

type AppWrapperProps = {
  children: React.ReactNode
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <AuthContextProvider>{children}</AuthContextProvider>
      </ThemeProvider>
      {NODE_ENV === true && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}

export { AppWrapper }
