describe('Spelling', function() {
  var spell;

  beforeEach(module('kata'));
  beforeEach(inject(function(spellFilter) {
      spell = spellFilter;
  }));
});
