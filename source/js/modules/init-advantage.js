const iniAdvantage = () => {
  const items = document.querySelectorAll('.advantage');

  if (items.length) {
    items.forEach((item) => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault();

        if (evt.target.className.indexOf('advantage__btn') !== -1) {
          for (let sibling of items) {
            if (sibling !== item) sibling.classList.remove('is-active');
          }

          item.classList.toggle('is-active');
        }
      });
    });
  }
};

export {iniAdvantage};
