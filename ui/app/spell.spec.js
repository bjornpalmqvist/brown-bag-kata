describe('Spelling', function() {
  var spell;

  beforeEach(module('kata'));
  beforeEach(inject(function(spellFilter) {
      spell = spellFilter;
  }));

  it('canary', function() {
    expect(true).toBe(true);
  });

  it('should spell out a word for a character', function() {
    expect(spell('A')).toEqual(['Alpha']);
    expect(spell('Z')).toEqual(['Zulu']);
  });

  it('should be case insensitive', function() {
    expect(spell('a')).toEqual(['Alpha']);
  });

  it('should spell out several words for a string of characters', function() {
    expect(spell('ABC')).toEqual(['Alpha','Bravo','Charlie']);
    expect(spell('BMO')).toEqual(['Bravo','Mike','Oscar']);
  });

  it('should return the input as is when not a string', function() {
    [0,false,true,[],{},undefined,null].forEach(function(notString) {
      expect(spell(notString)).toEqual(notString);
    });
  });

  it('should strip out numbers', function() {
    expect(spell('0')).toEqual([]);
    expect(spell('21')).toEqual([]);
    expect(spell('3a1')).toEqual(['Alpha']);
  });
});
