export interface IContent {
  type: string,
  content: string,
}

export interface IVideo {
  id: string,
  url: string,
  mimeType: string,
  __typename: string,
}

export interface IImage {
  url: string,
  id: string,
  __typename: string,
}

export interface IProject {
  id: string,
  link?: string,
  video?: IVideo,
  title: string,
  thumb: IImage,
  __typename: string,
}

export interface IProjects {
  title: string,
  data: IProject[],
}

export interface IStack {
  title: string,
  stack: strink,
}

export interface IStacks {
  data: IStack[],
}

export interface IContact {
  link: string,
  icon: IImage,
}

export interface IContacts {
  data: IContact[],
}