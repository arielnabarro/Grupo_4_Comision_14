const getById = (element) => document.getElementById(element);

let nos = getById("#home__main__nosotros")

let mediaNos = function(id) {
  if (window.matchMedia("(min-width: 600px)").matches) {
     id.style.display = 'none'
  } 
}

mediaNos(nos);


