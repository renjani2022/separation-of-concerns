import { replaceWithHandler } from './handler.js';

export default function () {
  document
    .getElementById('replacing')
    .addEventListener('click', replaceWithHandler);
}
