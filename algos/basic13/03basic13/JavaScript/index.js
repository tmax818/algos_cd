

function findMax(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
    return max
}

const arr1 = [-12, 34, 56, 899, -5]

console.log(findMax(arr1))