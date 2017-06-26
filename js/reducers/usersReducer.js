export default function reducer( state = {
    users: [
      {
        id:   '000001',
        name: 'Jack',
      },
      {
        id:   '000002',
        name: 'Walden',
      },
      {
        id:   '000002',
        name: 'Tom',
      },],
  }, action ) {
    switch (action.type) {
      case "ADD_USER": {
        console.log('data in reducer');
        console.log(action.element);
        return {
          ...state,
          users: [...state.users, action.element],
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
