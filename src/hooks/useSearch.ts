import { useReducer } from "react"

export type SearchType = "category" | "name"
type ActionType = SearchType

type State = {
  activeSearch: SearchType
  activeValue: string
  category: string
}

type Action =
  | { type: "category"; payload: string }
  | { type: "name"; payload: string }

const initialState: State = {
  activeSearch: "name",
  activeValue: "",
  category: "All",
}

const searchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "category":
      return {
        ...state,
        activeSearch: action.type,
        activeValue: action.payload,
        category: action.payload,
      }
    case "name":
      return {
        ...state,
        activeSearch: action.type,
        activeValue: action.payload,
        name: action.payload,
      }
  }
}

export const useSearch = () => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    searchReducer,
    initialState
  )
  const setSearch = (search: string, type: ActionType) => {
    dispatch({ type, payload: search })
  }

  const { activeSearch, category, activeValue } = state
  return { activeSearch, category, activeValue, setSearch }
}
