describe('Spelling', function() {
  var spell;

  beforeEach(module('kata'));
  beforeEach(inject(function(spellFilter) {
      spell = spellFilter;
  }));

  it('canary', function() {
    expect(true).toBe(true);
  });
});
