export function updTime(data) {
  console.log('Update time in Actions: ', data);
  return {
    type: 'UPD_TIMEABC',
    element:{
      currentstamp:     data,
    }
  }
}

export function stopVideo() {
  console.log('Stop in Actions!');
  return {
    type: 'STP_TIME',
    element:{
    }
  }
}

export function statVideo() {
  console.log('Start in Actions!');
  return {
    type: 'STA_TIME',
    element:{
    }
  }
}

export function doNoThing() {
  console.log('doNoThing in Actions');
  return {
    type: 'Do_NoThing',
    element:{
    }
  }
}
