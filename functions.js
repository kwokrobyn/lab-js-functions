// Question 1
function maxOfTwoNumbers(i,j) {
  if (i >= j) return i;
  else return j;
}

// Question 2
function maxOfThree(i,j,k) {
  return maxOfTwoNumbers(i, maxOfTwoNumbers(j,k));
}

// Question 3
function isCharacterAVowel(c) {
  var vowel = ["a", "e", "i", "o", "u"];
  return vowel.indexOf(c.toLowerCase()) !== -1;
}

// Question 4
function sumArray(arr) {
  var sum = 0;
  for (var i=0;i<arr.length;i++) {
    sum += arr[i];
  }
  return sum;
}

// Question 4
function multiplyArray(arr) {
  var mult = 0;
  for (var i=0;i<arr.length;i++) {
    mult *= arr[i];
  }
  return mult;
}

// Question 5
var reverseString = function (s){
  return s.split("").reverse().join("");
};


// Question 6
function findLongestWord (arr) {
  var maxLength = 0;
  for (var i=0;i<arr.length;i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  return maxLength;
}

// Question 7
function filterLongWords (arr, i) {
  var ret = [];
  arr.forEach(function(el, index){
    if (el.length > i) {
      ret += [el];
    }
  });
  return ret;
}

// Bonus 1
String.prototype.reverseString = function () {
  return reverseString(this);
};

// Bonus 2
function charactersOccurencesCount(s) {
  var ret = {};
  s.split("").forEach(function(el, index) {
    if (el in ret) {
      ret[el] += 1;
    }
    else {
      ret[el] = 1;
    }
  });
  return ret;
}

// Bonus 3
var numberOfArguments = function(){
  return arguments.legth;
}
