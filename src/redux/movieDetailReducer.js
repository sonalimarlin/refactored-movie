const initialState = {
    movie: {}
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'GET_MOVIE_DETAIL':
      return {
        movie: action.payload.movie
      }
      case 'REMOVE_SELECTED_MOVIE':
      return {
        movie: action.payload.movie
      }
      default:
      return state
    }
  }
  