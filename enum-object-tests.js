// EnumObject tests
Tinytest.add('name-is-readonly', function (test) {
  var e = new EnumObject('test', {
    values: [
      "a",
      "b"
    ]
  });

  var a = e.name;

  var b;
  try {
    e.name = "changed"
  } catch (err) { /* Ignore */ }

  test.equal(a, e.name);
});

Tinytest.add('map-to-val', function (test) {
  var e = new EnumObject('test', {
    values: [
      "a",
      "b"
    ]
  });

  var tester = e.map(1);

  test.equal(tester, "b");
});

Tinytest.add('map-to-key', function (test) {
  var e = new EnumObject('test', {
    values: [
      "a",
      "b"
    ]
  });

  var tester = e.map("a");

  test.equal(tester, 0);
});

Tinytest.add('can-have-multiple', function (test) {
  var e = new EnumObject('test1', {
    values: [
      "a",
      "b"
    ]
  });

  var e1 = new EnumObject('test2', {
    values: [
      "c",
      "d"
    ]
  });

  var test1 = e.map(1);
  var test2 = e1.map(0);

  test.notEqual(test1, test2);
});
