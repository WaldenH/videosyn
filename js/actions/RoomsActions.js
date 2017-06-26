export function addRoom(data) {
  return {
    type: 'ADD_ROOM',
    element:{
        name:    data,
    }
  }
}
