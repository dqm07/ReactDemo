const add = (state = [], action) => {
  switch (action.type) {
    case 'Add': 
      console.log('add', state)
      return [
        ...state,
        action
      ]
    case 'Delect':
      console.log('delect', state) 
      return state.filter(s => s.index !== action.index) 
    default:
      return state
  }
}

export default add