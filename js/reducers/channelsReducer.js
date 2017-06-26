export default function reducer( state = {
    channels: [
      {
        id:   '000001',
        name: 'Comedy Movie',
      },
      {
        id:   '000002',
        name: 'Fiction Movie',
      },
      {
        id:   '000002',
        name: 'Action Movie',
      },],
  }, action ) {
    switch (action.type) {
      case "ADD_CHANNEL": {
        return {
          ...state,
          channels: [...state.channels, action.element],
        }
      }
      case "DELETE_VIDEO": {
        return {
        }
      }
    }

    return state
}
