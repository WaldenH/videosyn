export default function reducer( state = {
    rooms: [
      {
        id:   '000001',
        name: 'room1',
      },
      {
        id:   '000002',
        name: 'room2',
      },
      {
        id:   '000002',
        name: 'room3',
      },],
  }, action ) {
    switch (action.type) {
      case "ADD_ROOM": {
        return {
          ...state,
          rooms: [...state.rooms, action.element],
        }
      }
      case "DELETE_VIDEO": {
        return {
          ...state,
          tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
        }
      }
    }

    return state
}
