export const getHighestId = (data) => {
    let highestId = 24;
  
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].subgenres.length; j++) {
        if (highestId < data[i].subgenres[j].id) {
          highestId = data[i].subgenres[j].id;
        }
      }
    }
    return highestId;
  };
  