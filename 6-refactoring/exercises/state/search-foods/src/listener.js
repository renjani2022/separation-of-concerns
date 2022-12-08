import { searchFoodsHandler } from './handler.js';


export default function() => {
    document.getElementById('begin-search')
    .addEventListener('click', searchFoodsHandler)

}
  