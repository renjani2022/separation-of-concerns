import { listHandler } from './handler.js';

export default function () {
  document.getElementById('list-them').addEventListener('click', listHandler);
}
