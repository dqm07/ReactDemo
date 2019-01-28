const list = (state = [], action) => {
  switch(action.type) {
    case 'Delect':
      return state.splice(action.index, 1)
    default:
      return state  
  }
}

export default list