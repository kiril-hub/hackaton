var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        center: [57.92755262, 60.02718296],
        zoom: 16,
    }, {
        searchControlProvider: 'yandex#search'
    });
    myMap.controls.remove("mapTools")
    .remove("trafficControl")
    .remove("miniMap")
    .remove("scaleLine")
    .remove("routeEditor")
    .remove("smallZoomControl")
    .remove("fullscreenControl")
    .remove("rulerControl");

}