export default function reducer( state = {
    videos: [
      {
        id:   '000001',
        name: 'Black Hawk Down',
      },
      {
        id:   '000002',
        name: 'The Matrix',
      },
      {
        id:   '000002',
        name: 'The Lord of the Rings',
      },],
  }, action ) {
    switch (action.type) {
      case "ADD_VIDEO": {
        console.log("Add video in reducer!");
        return {
          ...state,
          videos: [...state.videos, action.element],
        }
      }
      case "DELETE_VIDEO": {
        return {
        }
      }
    }

    return state
}
