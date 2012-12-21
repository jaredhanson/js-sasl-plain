(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(exports, module);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['exports', 'module'], factory);
  }
}(this, function(exports, module) {

  function Mechanism() {
  }
  
  Mechanism.prototype.name = 'PLAIN';
  
  Mechanism.prototype.encode = function(credential) {
    var str = '';
    str += '\0';
    str += credential.username;
    str += '\0';
    str += credential.password;
    return str;
  };

  exports = module.exports = Mechanism;
  
}));
