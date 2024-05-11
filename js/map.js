function init1 () {
    const map = new ymaps.Map('schedule_map', {
        center: [55.754187615820115,37.6235521217041],
        zoom: '11.5',
        controls: []
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');
}

if (document.querySelector('#schedule_map')) {
    ymaps.ready(init1)
}

function init2 () {
    const map = new ymaps.Map('reach_map', {
        center: [56.302307490774986,38.13722410327845],
        zoom: 17.5,
        controls: []
    });

    let placemark = new ymaps.Placemark([56.302241877655014,38.135947371787374], {}, {
		iconLayout: 'default#image',
		iconImageHref: './images/location_icon.svg',
		iconImageSize: [66.67, 83.33],
		iconImageOffset: [-33, -83]
	});

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');

    map.geoObjects.add(placemark);
}

if (document.querySelector('#reach_map')) {
    ymaps.ready(init2)
}