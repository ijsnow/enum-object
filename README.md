### A package to help manage enums.

DISCLAIMER: I wrote this package to learn how to write packages while solving a simple problem.

This object is used in [```ijsnow:enum-manager```](https://github.com/ijsnow/enum-manager).

```meteor add ijsnow:enum-object```

## EnumObject API

#### ```EnumObject.map(in)```

```in``` is a string if you want to map to the key, or it is a number if you want to map to the value.

  *Generally, pass the value to be mapped to the key if you are inserting into the database and pass the key to be mapped to the value if you are reading the object out of the database for a view on the client.*

#### ```EnumObject.values()```

Returns array with the values in the enum.
