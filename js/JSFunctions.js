/* console.log fallback */
if (typeof console === "undefined" || typeof console.log === "undefined") {
	console = { log: function(){} }; //fallback console ie7
}

/* string trim function */
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, "$1");
  };
}

/* string capitalize function */
if (!String.prototype.capitalize) {
  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
}

/* string pad function */
if (!String.prototype.pad) {
  String.prototype.pad = function (len, pad, dir) {
    str = this;
    var STR_PAD_LEFT = 1;
    var STR_PAD_RIGHT = 2;
    var STR_PAD_BOTH = 3;
    if (len + 1 >= str.length) {
      switch (dir){
          case STR_PAD_LEFT:
              str = Array(len + 1 - str.length).join(pad) + str;
          break;
          case STR_PAD_BOTH:
              var right = Math.ceil((padlen = len - str.length) / 2);
              var left = padlen - right;
              str = Array(left+1).join(pad) + str + Array(right+1).join(pad);
          break;
          default:
              str = str + Array(len + 1 - str.length).join(pad);
          break;
      }
  }
    return str;
  };
}

/* check if element is in array. May return the index */
if (!Array.prototype.contains) {
  Array.prototype.contains = function(element, return_key) {
    if (typeof return_key == "undefined" || return_key !== true ) return_key = false;
    var i = this.length;
    while (i--) {
      if (this[i] === element) {
        if (return_key) {
          return i;
        }else{
          return true;
        }
      }
    }
    if (return_key) {
      return -1;
    }else{
      return false;
    }
  };
}

/* Crockford Object create shim */
if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    function F() {};
    F.prototype = o;
    return new F();
  };
}


/* check if browser is Internet Explorer */
function isIE() {
  return '\v' == 'v';
}

/* save and display info */
console.multilog = {
  arr: {},
  add: function(name, item){
    if (this.arr[name] == "undefined"){ this.arr[name] = []; }
    this.arr[name].push(item);
  },
  log: function(name){
    //foreach arr del tipo giusto, console.log
    for (i=0; i<this.arr[name].length; i++) {
      console.log(this.arr[name][i]);
    }
  }
};

/* simple message handler */
//to do
var messenger = {
  error: function(title, message){
    
  },
  success: function(title, message){
    
  },
  normal: function(title, message){
    
  }
};

/* read GET variables */
//to do