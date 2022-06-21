const elBox = document.querySelector('.site-header__navigation-inner')
    const elBtn = document.querySelector('.site-header__gamburger')

    elBtn.addEventListener('click', () => {
      elBox.classList.toggle('site-header__navigation-inner--active')
    })