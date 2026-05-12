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
}

export type IImage = {
  url: string
  id: string
}

export type IProject = {
  id?: string
  link?: string
  video?: IVideo | null
  title: string
  thumb: IImage
  order?: number
  body?: string
}


export type IContact = {
  link: string
  icon: IImage
}
