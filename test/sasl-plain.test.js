(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('sasl-plain'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-plain'], factory);
  }
}(this, function(saslplain) {

  describe('sasl-plain', function() {
    
    it('should export Mechanism', function() {
      expect(saslplain.Mechanism).to.be.a('function');
    });
    
    it('should export Mechanism via module', function() {
      expect(saslplain).to.equal(saslplain.Mechanism);
    });
    
  });
  
  return { name: 'test.sasl-plain' };
  
}));
