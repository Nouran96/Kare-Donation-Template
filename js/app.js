window.onscroll = () => {
    const nav = document.querySelector('nav')
    if(window.scrollY >= 100) {
        nav.classList.add('fixed')
    }
    else {
        nav.classList.remove('fixed')
    }
}

const elem = document.querySelector('.main-carousel');
// const elemsArr = [].slice.call(elems)
const elem2 = document.querySelector('.main-carousel-2');

const flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
//   autoPlay: true,
  groupCells: true
});

const flkty2 = new Flickity( elem2, {
    // options
    // cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
  //   autoPlay: true,
    groupCells: true
  });

let amountDonatedDivs = document.querySelectorAll('.donation-amount'),
    amountDonatedArray = [].slice.call(amountDonatedDivs),
    activeDiv = '';

amountDonatedArray.forEach(div => {
    div.onclick = () => {
        if(activeDiv) { // If it is not the first div to be clicked, remove the class from the previous div
            activeDiv.classList.remove('active')
            activeDiv = div;
            div.classList.add('active')
        }
        else {
            activeDiv = div;
            div.classList.add('active')
        }
    }
})

const menuIcon = document.querySelector('.menu-icon')

menuIcon.onclick = () => {
    document.querySelector('.menu-container').classList.toggle('show')
}