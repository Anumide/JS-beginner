// function to convert fahr to celsius
const convertFahrToCelsius = (n) => {
  let toNum = Number(n);
  if(isNaN(toNum)){
    return `"${n}" is not a valid number but a/an ${typeof n}`;
  }
    return ((toNum - 32) * 5/9).toFixed(4);
}

console.log(convertFahrToCelsius('to'));
console.log(convertFahrToCelsius('0'));
console.log(convertFahrToCelsius(0));


//function for checking YuGiOh
const checkYuGiOh = (n) => {
  let arr = [];
  if(isNaN(n)){
    return `invalid parameter "${n}"`
  }
  for(let i = 1; i <= n; i++){
    arr.push(i);
  }
  console.log(arr);
  const modArr = arr.map((num) => {
    switch (true){
      case (num % 30 == 0):
        return num = "yu-gi-oh"
        break;
      case (num % 15 == 0):
        return num = "gi-oh"
        break;
      case (num % 10 == 0):
        return num = "yu-oh"
        break;
      case (num % 6 == 0):
        return num = "yu-gi"
        break;
      case (num % 5 == 0):
        return num = "oh"
        break;
      case (num % 3 == 0):
        return num = "gi"
        break;
      case (num % 2 == 0):
        return num = "yu"
        break;
      default: return num
    }
  });
    console.log(modArr);
}

console.log(checkYuGiOh('100'));
console.log(checkYuGiOh('hi'));
console.log(checkYuGiOh(50));
