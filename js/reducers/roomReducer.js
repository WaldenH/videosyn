export default function reducer( state = {
    videoName: 'X-Men',
    users:[
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
    currentstamp: '12',
    videoState: 'stop',
  }, action ) {
    switch (action.type) {
      case "UPD_TIMEABC": {
        console.log("Update time in Reducer: ", action.element.currentstamp);
        return {
          ...state,
          currentstamp: action.element.currentstamp,
        }
      }
      case "Do_NoThing": {
        console.log("doNoThing in  Reducer");
        return {
          ...state,
        }
      }
      case "STP_TIME": {
        console.log("Stop in Reducer");

        return {
          ...state,
          videoState:'stop'
        }
      }
      case "STA_TIME": {
        console.log("Play in Reducer");

        return {
          ...state,
          videoState:'play'
        }
      }
      case "UPD_TIME2": {
        console.log("UPD_TIME2 in reducer!");
        return {
        }
      }
      // default:
      //   console.log("Default action in Roomreducer!");
      // ;
    }

    return state;
}
