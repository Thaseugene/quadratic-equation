module.exports = function solveEquation(equation) {
  var xx,xy;
  var array=[xx,xy];
  var arr=equation.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
  if (arr[7]==="-") {
    arr[8]=-arr[8];
  }
  if (arr[3]==="-") {
    arr[4]=-arr[4];
  }
  xx=(-arr[4]+Math.sqrt(Math.pow(arr[4],2)-4*arr[0]*arr[8]))/(2*arr[0]);
  xy=(-arr[4]-Math.sqrt(Math.pow(arr[4],2)-4*arr[0]*arr[8]))/(2*arr[0]);
  if(arr[0]<0) {
    return [Math.round(xx),Math.round(xy)];
  }
  if (arr[0]>0) {
    return [Math.round(xy),Math.round(xx)];
  }
}
