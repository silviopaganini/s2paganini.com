import { StateType } from '../context'
import { IProject } from 'types'

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export enum Types {
  CHANGE_PROJECT = 'CHANGE_PROJECT',
}

type ProjectPayload = {
  [Types.CHANGE_PROJECT]: {
    project: IProject | null
  }
}
export type ProjectActions = ActionMap<ProjectPayload>[keyof ActionMap<ProjectPayload>]

const reducer = (state: StateType, action: ProjectActions) => {
  let newState = {}

  switch (action.type) {
    case Types.CHANGE_PROJECT:
      newState = { ...state, project: action.payload.project }
      break

    default:
      throw new Error('Action not available')
  }

  return newState
}

export default reducer
