ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [53.89036144, 27.57456948],
            controls: ['zoomControl'],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        });

        var myPlacemark = new ymaps.Placemark([53.89036144, 27.57456948], {
            balloonContentHeader: 'Минск',
            balloonContentBody: 'Здесь находится наша студия',
            balloonContentFooter: 'Присоединяйтесь',
            hintContent: 'Будет весело'
        }, {
                iconLayout: 'default#image',
                iconImageHref: 'assets/images/marker.png',
                iconImageSize: [116, 134],
                iconImageOffset: [-23, -57],
        });

        myMap.geoObjects.add(myPlacemark);
    }