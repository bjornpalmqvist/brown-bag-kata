describe('Comma separator filter', function() {
  var filter;
  beforeEach(module('kata'));
  beforeEach(inject(function(commaSeparatedFilter){
    filter = commaSeparatedFilter;
  }));

  it("canary", function() {
    expect(true).toBe(true);
  });
});
