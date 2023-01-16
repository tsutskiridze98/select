const select = document.getElementById('select');
const shenishvna = document.getElementById('shenishvna'); 

const cars = [
    'BMW', "Mercedes", "Nissan", "Toyota"
]

cars.forEach(car => {
    const html = `<option value="${car}">${car}</option>`
    select.insertAdjacentHTML('beforeend', html);
});

const shenishvnebi = ['ფაუტი', 'ზეხმელი', 'ხმობადი', 'გადაბერებული', 'მრუდეღეროიანი', 'თავღორი', 'ძირიდან', 'განტოტილი', 'დაავადებული', 'ფუღურო', 'ტეხილი', ];

shenishvnebi.forEach((el) => {
    const htmlShenishvnaOptions = `<option value="${el}"></option>`;
    shenishvna.insertAdjacentHTML('beforeend', htmlShenishvnaOptions);
});


/////////// მიწის კატეგორია /////////////////////
const categoryLand = document.getElementById('miwis_kategoria');
const arr = [{num: "ერთი", letter: 'A'}, {num: "ორი", letter: 'B'}, {num: "სამი", letter: "C"}];

arr.forEach(number => {
    const htmlNumber = `<option value="${number.letter}">${number.num}</option>`;
    categoryLand.insertAdjacentHTML('beforeend', htmlNumber);
})