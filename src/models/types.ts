export interface ITodo {
  title: string,
  description: string,
  date: Date,
  id: string
}

export interface IList {
  name: string,
  description: string,
  date: Date,
  id: string,
  todos: ITodo[]
}