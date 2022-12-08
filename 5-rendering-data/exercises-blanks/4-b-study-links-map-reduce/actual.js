'use strict';

const actual = (linksData) => {
  const divEl = document.createElement('div');

  const h3El = document.createElement('h3');
  h3El.textContent = linksData.topic;
  divEl.appendChild(h3El);

  const entryToLi = (entry) => {
    const liEl = document.createElement('li');
    const aEl = document.createElement('a');
    aEl.innerHTML = entry[_];
    aEl.href = entry[_];
    aEl.target = '_';
    _.appendChild(_);
    return liEl;
  };

  const appendLiToList = (listEl, nextLi) => {
    _.appendChild(_);
    return listEl;
  };

  const ulEl = Object._(linksData._)._(_)._(_, document.createElement('_'));

  divEl.appendChild(_);

  return divEl;
};
