export const keyAction = (id, volume, mute, toggleBank, animState) => {
  let originState = {
    volume:volume,
    mute:mute,
    toggleBank: toggleBank,
    animState:animState};

  if(mute){
    switch(id){
      case 'Enter':
        return ({toggleBank:toggleBank, volume:volume, mute:!mute, animState:animState});
      default:
        return originState;
    }

  }else{
  switch(id){
    //modify toggleBank
    case 'Shift':
      document.getElementById('drum-display').innerHTML = toggleBank ? 'Smooth Piano Kit' : 'Heater Kit';
      return ({toggleBank:!toggleBank, volume:volume, mute:mute, animState:animState});

    //modify mute
    case 'Enter':
      return ({toggleBank:toggleBank, volume:volume, mute:!mute, animState:animState});

    //modify volume
    case 'ArrowUp':
      if(volume<1){
        let newVol = Number((volume+0.1).toFixed(2));
        let displayStr=(newVol*100).toFixed(2);
        document.getElementById('drum-display').innerHTML = 'Volume: '+displayStr.slice(0, displayStr.length-3);
        return ({toggleBank:toggleBank, volume:newVol, mute:mute, animState:animState});
      }else{
        return originState;
      }

    //modifiy volume
    case 'ArrowDown':
      if(volume>0){
        let newVol = Number((volume-0.1).toFixed(2));
        let displayStr=(newVol*100).toFixed(2);
        document.getElementById('drum-display').innerHTML = 'Volume: '+displayStr.slice(0, displayStr.length-3);
        return ({toggleBank:toggleBank, volume:newVol, mute:mute, animState:animState});
      }else{
        return originState;
      }

    //play clip
    default:
      if((/^[qweasdzxc]$/i).test(id)){
        id = id.toUpperCase();
        document.getElementById(id).play();
        let str = document.getElementById(id).parentElement.id;
        let mapStr = str.match(/\w+/g);
        let formatStr = mapStr.map((x)=>x[0].toUpperCase()+x.slice(1));
        document.getElementById('drum-display').innerHTML = formatStr.join(' ');
        if(animState.includes(id)){
          document.getElementById('backup-inner'+id).classList.add('animation-inner');
          document.getElementById('backup-outer'+id).classList.add('animation-outer');
          return({toggleBank:toggleBank, mute:mute, animState:animState.slice(1)+'0', volume:volume});
        }else{
          document.getElementById('inner'+id).classList.add('animation-inner');
          document.getElementById('outer'+id).classList.add('animation-outer');
          return ({toggleBank:toggleBank, mute:mute, animState:animState.slice(1)+id, volume:volume});
        }
      }else{
        return originState;
      }
  }
}
}
