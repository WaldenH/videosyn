export function addUser(data) {
  console.log('data in action');
  console.log(data);
  return {
    type: 'ADD_USER',
    element:{
        name:    data,
    }
  }
}

// export function reloadRooms(){
//   dispatcher.dispatch({
//     type: 'getAllRooms',
//   });
// }
//
// export function iniRooms(){
//   dispatcher.dispatch({
//     type: 'iniRooms',
//   });
// }
