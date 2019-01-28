let nextListId = 0
export const addList = text => ({
  type: 'Add',
  index: nextListId++,
  value: text
})

export const delectList = id => ({
  type: 'Delect',
  index: id
})