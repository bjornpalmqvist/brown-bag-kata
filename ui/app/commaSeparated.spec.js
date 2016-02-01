describe('Comma separator filter', function() {
    var filter;
    beforeEach(module('kata'));
    beforeEach(inject(function(commaSeparatedFilter){
        filter = commaSeparatedFilter;
    }));

    it("canary", function() {
        expect(true).toBe(true);
    });

    it('should display an array of strings comma separated', function() {
        expect(filter(['a'])).toBe('a');
        expect(filter(['a','b'])).toBe('a, b');
        expect(filter(['a','b','c'])).toBe('a, b, c');
    });

    it('should pass-through non-arrays given as input', function() {
        expect(filter()).toBeUndefined();
        expect(filter(null)).toBeNull();
        expect(filter(1)).toBe(1);
        expect(filter(false)).toBe(false);
        expect(filter({})).toEqual({});
        expect('a, b, c').toBe('a, b, c');
    });

    it('should pass through the empty array', function() {
        expect(filter([])).toEqual([]);
    });

    it('should display an array of integers comma-separated', function() {
        expect(filter([1])).toBe('1');
        expect(filter([1,2])).toBe('1, 2');
        expect(filter([2,3,4])).toBe('2, 3, 4');
    });

    it('should be used with a pipe', inject(function($compile, $rootScope) {
        var elm = angular.element('<span>{{a | commaSeparated}}');
        var scope = $rootScope.$new();
        $compile(elm)(scope);
        scope.a = ['a','b','c'];
        scope.$digest();
        expect(elm.text()).toBe('a, b, c');
    }));
});