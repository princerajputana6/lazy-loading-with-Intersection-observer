const cards =  document.querySelectorAll(".card");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry =>{
      entry.target.classList.toggle("show", entry.isIntersecting)
      if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  },
  {
    threshold: .3,
  }
)

const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute('data-src');
      img.setAttribute('src', src);
      imgObserver.unobserve(img);
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
});


document.querySelectorAll('img[data-src]').forEach(img => {
  imgObserver.observe(img);
});

cards.forEach(card =>{
  observer.observe(card)
})