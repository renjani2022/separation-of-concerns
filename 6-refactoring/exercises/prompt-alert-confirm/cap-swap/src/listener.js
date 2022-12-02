import { capSwapHandler } from './handler.js';

export default function () {
  document
    .getElementById('swap-button')
    .addEventListener('click', capSwapHandler);
}
