// Iterate over an array, construct a strnig, use the return statement
// Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.
// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;

    for(i=1; i<arr.length-1; i++){
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
        sum += arr[i];
    }
    var average = sum / arr.length;
    console.log("The minimum is " + min + ", the maximum is " + max + ", and the average is " + average);

    return [min, max, average];
    

}
maxMinAvg([1,-2,9,4]);
