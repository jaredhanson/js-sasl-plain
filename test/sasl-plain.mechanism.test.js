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
    
    it('should be named PLAIN', function() {
      expect(mech.name).to.equal('PLAIN');
    });
    
    it('should encode credentials', function() {
      expect(mech.encode({ username: 'johndoe', password: 'secret' })).to.equal('\u0000johndoe\u0000secret');
    });
    
    it('should encode credentials with authzid', function() {
      expect(mech.encode({ username: 'Kurt', password: 'xipj3plmq', authzid: 'Ursel' })).to.equal('Ursel\u0000Kurt\u0000xipj3plmq');
    });
    
  });
  
  return { name: 'test.sasl-plain.mechanism' };
  
}));
