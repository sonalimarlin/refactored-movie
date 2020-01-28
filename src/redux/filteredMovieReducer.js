const initialState = {
    filteredMovies: []
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'FILTER_MOVIES':
      return {
        filteredMovies: action.payload.filteredMovies,
      }
      default:
      return state
    }
  }
  