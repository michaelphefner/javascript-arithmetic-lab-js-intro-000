function add(one, two){
  if((parseInt(one, 10) != 'NaN') && (parseInt(two, 10) != 'NaN')){
    return add + two;
  }
}
function subtract(one, two){
  if((parseInt(one, 10) != 'NaN') && (parseInt(two, 10) != 'NaN')){
    return  two - one;
  }
}
function multiply(one, two){
  if((parseInt(one, 10) != 'NaN') && (parseInt(two, 10) != 'NaN')){
    return one * two;
  }
}
function divide(one, two){
  if((parseInt(one, 10) != 'NaN') && (parseInt(two, 10) != 'NaN')){
    return add / two;
  }
}
function inc(n){
  return n++;
}
function dec(n){
  return dec--;
}
function makeInt(n){
  let number = parseInt(n, 10);
  return number;
}
function preserveDecimal(n){
  let number = parseFloat(n);
  return number;
}
