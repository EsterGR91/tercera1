console.log("Cargando Acordion");

const dataAcordion = [
  {
    title: "Nuevos Lanzamientos",
    desc: "Ofrecemos lo último en VideoJuegos",
  },

  {
    title: "Juegos Retro",
    desc: "Contamos con una gran extencion de juegos retro",
  },

];

let ACCORDION = {
  init: function () {
    let _self = this;
    this.insertData(_self);
    this.eventhandler(_self);
  },

  insertData: function (_self) {
    dataAcordion.forEach(function (item) {
      document
        .querySelector(".main-accordion-container")
        .insertAdjacentHTML("beforeend", _self.tplAccordionItem(item));
    });
  },

  eventhandler: function (_self) {
    let arrayRefs = document.querySelectorAll(".accordion-title");
    for (let x = 0; x < arrayRefs.length; x++) {
      arrayRefs[x].addEventListener("click", function (event) {
        console.log("Evento Click: ", event);
        _self.showTab(event.target);
      });
    }
  },

  tplAccordionItem: function (item) {
    return `<div class="accordion-item">
              <div class="accordion-title"><p>${item.title}</p></div>
              <div class="accordion-desc"><p>${item.desc}</p></div>
            </div>`;
  },

  showTab: function (refItem) {
    let activeTab = document.querySelector(".tab-active");
    if (activeTab) {
      activeTab.classList.remove("tab-active");
    }
    console.log("Mostrando Tab: ", refItem);
    refItem.parentElement.classList.toggle("tab-active");
  },
};

// Asegurar que el script se ejecute después de que cargue el DOM
document.addEventListener("DOMContentLoaded", function() {
    ACCORDION.init();
});
