const dp = new Array(10).fill(-1).map(() => new Array(10).fill(-1));

function predictTheWinner(arr,f,l){
  if (f === l) return arr[l];
  if (f > l) return 0;
  if (dp[f][l] !== -1) return dp[f][l];

  const f_result = arr[f] - predictTheWinner(arr, f + 1, l);
  const l_result = arr[l] - predictTheWinner(arr, f, l - 1);

  dp[f][l] = Math.max(f_result, l_result);

  return dp[f][l];
}

var aaa = function(arr) {
        const n = arr.length - 1;
        return predictTheWinner(arr, 0, n) >= 0;
}

console.log(aaa([3,5,2]))



