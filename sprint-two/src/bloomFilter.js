// //testing git with bloomFilter file
// Read about it here: Bloom Filters. tl;dr: It's a probabalistic hash table that can gain enormous space and speed advantages over traditional hash tables. Downside is it has to accept a false positive rate when looking up whether an item is in the table. Use cases are often for checking against a giant list locally and only doing a full lookup when the local one comes back positive. You may find this tutorial useful.

var BloomFilter = function(filterLength) {
  this.storage = [];
  this.filterLength = filterLength;
  for (var i = 0; i < filterLength; i++) {
    this.storage.push(0);
  }
}

BloomFilter.prototype.add = function(inString) {

  var prestonHash = function(string,arrLength) {
    var letters = string.split('');
    var sum = 0;
    for(var i = 0; i < letters.length; i++) {
      sum += letters[i].charCodeAt(i);
    }
    sum *= letters.charCodeAt(0);
    sum -= letters.charCodeAt(letters.length-1);
    var roughMiddle = Math.round(letters.length/2);
    sum += letters.charCodeAt(roughMiddle);
    return sum % arrLength;
  };


  var mattHash = function(str, arrLength) {
    var char = str.length;
    char = Math.round(Math.cos(char));
    char = char * arrLength;
    return char % arrLength;
  };

  var alanHash = function(str, arrLength) {
    var sum = str.length;
    for(var i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * i;
    }
    return sum % arrLength;
  };

  // this.storage[prestonHash(inString)] = 1;
  this.storage[mattHash(inString,this.filterLength)] = 1;
  this.storage[alanHash(inString,this.filterLength)] = 1;

}

BloomFilter.prototype.lookup = function(inString) {
    var mattHash = function(str, arrLength) {
    var char = str.length;
    char = Math.round(Math.cos(char));
    char = char * arrLength;
    return char % arrLength;
  };

  var alanHash = function(str, arrLength) {
    var sum = str.length;
    for(var i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * i;
    }
    return sum % arrLength;
  };

  return !!this.storage[mattHash(inString,this.filterLength)] && !!this.storage[alanHash(inString,this.filterLength)];
}
