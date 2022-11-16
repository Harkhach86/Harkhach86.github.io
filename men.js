const container = [
    {
        image: "./photos/1.jpg",
        dates: "2 января 2020 г. – 7 января 2020 г.",
        title: "ЭКСПО ЕЛКА",
        text: "Парк интерактивных развлечений"
    },
    {
        image: "./photos/2.jpg",
        dates: "5 февраля 2020 г. – 9 февраля 2020 г.",
        title: "Junwex Петербург",
        text: "Выставка ювелирных изделий"
    },
    {
        image: "./photos/3.jpg",
        dates: "7 февраля 2020 г. – 9 февраля 2020 г.",
        title: "Невский ларец",
        text: "Выставка-ярмарка народных художественных промыслов и ремесел"
    },
    {
        image: "./photos/4.jpg",
        dates: "14 февраля 2020 г. – 23 февраля 2020 г.",
        title: "ПОНАЕХАЛИ!",
        text: "Специализированная арт-ярмарка"
    },
    {
        image: "./photos/5.jpg",
        dates: "18 февраля 2020 г. – 21 февраля 2020 г.",
        title: "VET.CAMP",
        text: "Конференция для ветеринарных врачей"
    },
    {
        image: "./photos/6.jpg",
        dates: "26 февраля 2020 г. – 28 февраля 2020 г.",
        title: "ExpoHoReCa",
        text: "Специализированная выставка"
    },
];


let toAdd = document.getElementsByClassName("content-items");

for(let i=0; i < container.length; i++){
   let newDivContent = 
    `<div class="content-item">
        <div class="img">
            <img src="${container[i].image}" alt="Image">
        </div>
        <div class="text">
            <span class="content-first-text">${container[i].dates}</span>
            <h2 class="content-second-text">${container[i].title}</h2>
            <p class="content-thirth-text">${container[i].text}</p>
        </div>
    </div>`;
   toAdd[0].insertAdjacentHTML( "beforeend", newDivContent );
}

console.log("Loop is done Successfully!!!");