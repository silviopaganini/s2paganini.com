export type Nil = null | undefined
export type Prop<T> = T | Nil

export type IContent = {
  type: string
  content: string
}

export type IVideo = {
  id: string
  url: string
  mimeType: string
  __typename: string
}

export type IImage = {
  url: string
  id: string
  __typename: string
}

export type IProject = {
  id?: string
  key: string
  link?: string
  video?: IVideo
  title: string
  thumb: IImage
  order?: number
  body?: string
  __typename?: string
}

export type IProjects = {
  title: string
  data: Prop<IProject[]>
}

export type IStack = {
  title: string
  stack: strink
}

export type IStacks = {
  data: Prop<IStack[]>
}

export type IContact = {
  link: string
  icon: IImage
}

export type IContacts = {
  data: Prop<IContact[]>
}
