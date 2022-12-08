import { saveNoCopiesHandler } from './handler.js';

export default function () {
  document
    .getElementById('no-copies-button')
    .addEventListener('click', saveNoCopiesHandler);
}
