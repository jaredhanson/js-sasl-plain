(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('sasl-plain/lib/mechanism'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-plain/lib/mechanism'], factory);
  }
}(this, function(Mechanism) {

  describe('Mechanism', function() {
    var mech = new Mechanism();
    
    it('shoud be named PLAIN', function() {
      expect(mech.name).to.equal('PLAIN');
    });
    
    it('shoud encode credentials', function() {
      expect(mech.encode({ username: 'johndoe', password: 'secret' })).to.equal('\u0000johndoe\u0000secret');
    });
    
  });
  
  return { name: 'test.sasl-plain.mechanism' };
  
}));
