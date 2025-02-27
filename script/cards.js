console.log('Carcagando Cards')

const dataCards=[

    {
           "title": "Juego del año",
           "url_image": "./img/gamegoty.png",
           "desc": "Asombroso y atrapante",
           "cta": "Mostrar mas...",
           "link": "https://www.polygon.com/reviews/23268326/stray-review-cat-game-ps4-ps5-windows-pc-cyberpunk"

    },
       
    {
        "title": "Juego del año",
        "url_image": "./img/gamegoty.png",
        "desc": "Asombroso y atrapante",
        "cta": "Mostrar mas...",
        "link": "https://www.polygon.com/reviews/23268326/stray-review-cat-game-ps4-ps5-windows-pc-cyberpunk"

        


    },

    {
        "title": "Juego del año",
        "url_image": "./img/gamegoty.png",
        "desc": "Asombroso y atrapante",
        "cta": "Mostrar mas...",
        "link": "https://www.polygon.com/reviews/23268326/stray-review-cat-game-ps4-ps5-windows-pc-cyberpunk"

    },

];
(funtion() {

let CARD = {

    init: funtion (
        let _self=this;
        this.insertData(_self)
    
},

insertData: funtion(_selt) {
    dataCards.map(funtion  (ClipboardItem, index){
          document.querySelector('.card-list').insertAdjacenHTML('beforeend', _selt)
    }
)
}

}




)