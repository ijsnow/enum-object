// In this file, I am making the same object, but using the object.prototype to implement
// it as well as abstracting out my functions into higher level functions

var _values = [];

EnumObject = function constructor (name, options) {
  var self = this;

  _init.call(self, options.values, name);

  return self;
};

EnumObject.prototype.map = function (input) {
  // If its not a number(NaN), return the key (index)
  // Otherwise return the value
  return isNaN(input) ?
    _getKey(input) :
    _getVal(input);
};

EnumObject.prototype.values = function () {
  return values
}

// Private methods
// @summary: Initializes the object
var _init = function (vals, name) {
  if (! vals.length)
    throw new Error("You didn't pass any values in.");

  _values = vals;

  _defineName.call(this, name);
};

// get the key for the value passed in
var _getKey = function (val) {
  return _.indexOf(_values, val);
};

// get the value for the key passed in
var _getVal = function (key) {
  return _values[key];
};

var _defineName = function (name) {
  var self = this;

  if (!name)
    throw new Error("You need to pass in a name for the EnumObject");

  Object.defineProperty(self, "name", {
    value: name,
    configurable: false,
    writable: false
  });
}
