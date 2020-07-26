
const hathChange = (arr) => {
  if (!arr) return true;

  //initialize empty register as an object with key of denomination
  //values as the amount in register
  let register = {
    5: 0,
    10: 0,
    20: 0,
  };

  //looping through input array to check each individual elemen
  for (let i = 0; i < arr.length; i++) {
    //switch statement to increment or decrement the values base don what is
    //in the register
    switch (arr[i]) {
      case 5:
        register[5] += 1;
        break;
      case 10:
        register[5] -= 1;
        register[10] += 1;
        break;
      case 20:
        register[20] += 1;
        if (register[5] >= 1 && register[10] >= 1) {
          register[5] -= 1;
          register[10] -= 1;
        } else if (register[5] >= 3) {
          register[5] -= 3;
        }
    }
  }

  console.log(register);
  //looping through the register object to check is there is any negatives
  //if there is a negative value then register doesn't have change
  for (let key in register) {
    if (register[key] < 0) {
      return false;
    } else {
      return true;
    }
  }
};

hathChange([5, 5, 5, 10, 20, 5, 10]);
