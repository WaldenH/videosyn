export function addVideo(data) {
  console.log('Add video in action!');
  return {
    type: 'ADD_VIDEO',
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
