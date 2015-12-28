EnumObject = class {

  constructor(name, options) {
    if (! _.isArray(options.values) || ! options.values.length)
      throw new Error("You didn't pass any values in.");

    this._values = options.values;

    Object.defineProperty(this, "name", {
      value: name,
      configurable: false,
      writable: false
    });
  }

  map(input) {
    // If its not a number(NaN), return the key (index)
    // Otherwise return the value
    return isNaN(input) ?
      _getKey.call(this, input) :
      _getVal.call(this, input);
  }

  values() {
    return this._values;
  }
}

// Private methods
// get the key for the value passed in
var _getKey = function (val) {
  return _.indexOf(this._values, val);
};

// get the value for the key passed in
var _getVal = function (key) {
  return this._values[key];
};
