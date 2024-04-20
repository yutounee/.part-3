const item = (each, i, currentIndex, mode) => {
  return `
    <li class="cycle-li ${i === currentIndex && mode === 'fade' ? 'cycle-fadeIn' : ''}">
      ${each.href ? `<a target="_blank" href="${each.href}">` : ''}
        <picture>
          <source media="(min-width: 801px)" srcset="./images/${each.src.desktop}">
          <source media="(max-width: 800px)" srcset="./images/${each.src.mobile}">
          <img class="cycle-img" src="./images/d${each.src.desktop}" alt="${each.title}">
        </picture>
      ${each.href ? '</a>' : ''}
    </li>`;
};

const paginationItem = (_, i, currentIndex) => {
  return `<span class="cycle-pagination ${i === currentIndex ? 'cycle-pagination-active' : ''}">${i + 1}</span>`
};

export {
  item,
  paginationItem,
}