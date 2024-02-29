class testi{
    constructor(img, quote, by) {
        this.img = img
        this.quote = quote
        this.by = by
    }
}

let myTesti1 = new testi('assets/photo/testi1.jpg', 'mantep sekali jasanya!', 'Surya Eldanto')
let myTesti2 = new testi('assets/photo/testi2.jpg', 'keren lah pokoknya!', 'Dimas Kanjeng')
let myTesti3 = new testi('assets/photo/testi3.jpg', 'wuhuu keren lah!', 'Mamat Alkatiri')
let myTesti4 = new testi('assets/photo/testi4.jpeg', 'karyanya keren banget!', 'dora corbuzier')

const renderTesti = (...assets) => {

    for( let i = 0; i < assets.length; i++ ) {
        document.getElementById('body').innerHTML += `
        <div class="wrap">
        <img id="img" class="img" src="${assets[i].img}" alt="">
        <i id="quote">"${assets[i].quote}"</i>
        <h4 id="by" class="h4">-${assets[i].by}</h4>
        </div>`
    }
}
renderTesti(myTesti1, myTesti2, myTesti3, myTesti4)
