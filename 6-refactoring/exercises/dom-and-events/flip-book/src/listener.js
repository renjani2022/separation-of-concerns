// import { reverseAndUpperHandler } from './handler.js';

import { reverseAndUpperHandler } from './handler';

export default function() => {
document.getElementById('input')
        .addEventListener('keyup', reverseAndUpperHandler)
}