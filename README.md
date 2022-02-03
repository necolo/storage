# storage

A very simple JavaScript localStorage api for TS.

```
npm i @necolo/storage
```

## Usage

```typescript
import Storage from '@necolo/storage';

// create Storage instance with initialized values
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
```
