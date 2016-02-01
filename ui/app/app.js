angular.module('kata', [])

.controller('ItemCtrl', function ($scope) {
  $scope.items = ['Alpha','Bravo','Charlie','Delta'];
})

.filter('commaSeparated', function() {
  return function(items) {
    if(angular.isArray(items) && items.length) {
      return items.join(', ');
    }
    return items;
  };
})

.filter('spell', function(phoneticAlphabet) {
  return function(str) {
    if(!angular.isString(str)) {
      return str;
    }
    var phonetics = [];
    str.toUpperCase().split('').forEach(function(alpha) {
      var phonetic = phoneticAlphabet[alpha];
      if(phonetic) {
        phonetics.push(phonetic);
      }
    });
    return phonetics;
  };
})

.constant('phoneticAlphabet', {
  'A': 'Alpha',
  'B': 'Bravo',
  'C': 'Charlie',
  'D': 'Delta',
  'E': 'Echo',
  'F': 'Foxtrot',
  'G': 'Golf',
  'H': 'Hotel',
  'I': 'Indigo',
  'J': 'Juliet',
  'K': 'Kilo',
  'L': 'Lima',
  'M': 'Mike',
  'N': 'November',
  'O': 'Oscar',
  'P': 'Papa',
  'Q': 'Quebec',
  'R': 'Romeo',
  'S': 'Sierra',
  'T': 'Tango',
  'U': 'Uniform',
  'V': 'Victor',
  'W': 'Whiskey',
  'X': 'X-ray',
  'Y': 'Yankee',
  'Z': 'Zulu'
});
