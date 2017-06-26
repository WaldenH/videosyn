export function addChannel(data) {
  return {
    type: 'ADD_CHANNEL',
    element:{
        name:    data,
    }
  }
}
