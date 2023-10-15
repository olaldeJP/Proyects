window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".contenedor").classList.add("mostrar");
  } else {
    document.querySelector(".contenedor").classList.remove("mostrar");
  }
  console.log("hola");
};


