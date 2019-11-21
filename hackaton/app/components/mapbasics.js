var myMap

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

// private WebChromeClient mWebChromeClient = new WebChromeClient () { 
// }; 

// @Override
// public void onGeolocationPermissionsShowPrompt(final String origin, final onGeolocationPermissions.Callback callback){
//     mGeoLocationRequestOrigin=null;
//     mGeoLocationCallBack=null;
//     if (ContextCompat.checkSelfPermission(MainActivity.this,
//         Manifest.permission.ACCESS_FINE_LOCATION)
//         !=PackageManager.PERMISSION_GRANTED)
// }
// webView.setWebChromeClient (mWebChromeClient);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    // var geolocation = require("nativescript-geolocation"),
    var geolocation = ymaps.geolocation,
    myMap = new ymaps.Map('map', {
        center: [57.92755262, 60.02718296],
        zoom: 16,

    }, {
        searchControlProvider: 'yandex#search'
    });
        // if (!geolocation.isEnabled()){
        //     geolocation.enableLocationRequest();
        // }
        geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
    });
    myMap.controls.remove("mapTools")
    .remove("trafficControl")
    .remove("miniMap")
    .remove("scaleLine")
    .remove("smallZoomControl")
    .remove("fullscreenControl")
    .remove("rulerControl");
    var myPlacemark = new ymaps.GeoObject({
geometry: {
type: "Point",
coordinates: [59.03, 60.03]
}
});
var myPlacemark = new ymaps.Placemark([59.03, 60.03]);
}
