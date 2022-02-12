# storage

A very simple JavaScript localStorage api for TS.

```
npm i @necolo/storage
```

## Usage

```typescript
import Storage from '@necolo/storage';

// create Storage instance with initialized values
// the default target is localStorage
const storage = new Storage({
  b: false,
  n: 1,
  s: 'sample',
});

// get storage value
const value = storage.get('n'); // 1
// typeof value === 'number'

// set storage value
storage.set('n', 99);
const value2 = storage.get('n'); // 99

// can delete the key
storage.del('n');
storage.get('n'); // will return the default value, which is 1

// clear all
storage.clear();
```

You can also use it for `sessionStorage`
```typescript
const session = new Storage(
  {
    // put initialize value here
    foo: 'bar,
  },
  sessionStorage, // put sessionStorage as the target
);

const value = session.get('foo');
session.set('foo', 'otherValue');
```