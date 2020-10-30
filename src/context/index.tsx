import React, { createContext, useReducer, useMemo } from 'react'
import { IProject } from 'types'
import reducer, { ProjectActions } from '../reducers'

export type StateType = {
  project: IProject | null
}

export const initialState = {
  project: null,
}

type ContextProps = {
  state: StateType
  dispatch: React.Dispatch<ProjectActions>
}

export const Context = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
})

type Props = {
  children: JSX.Element
}

export default ({ children }: Props) => {
  //@ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState)
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
