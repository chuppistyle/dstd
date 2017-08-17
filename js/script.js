//slider  in section-equipment
$('.slick-equipment').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
});
//slider  in section-reviews
$('.slick-slider-reviews').slick({
    arrows:false,
    dots:true
});
// slider in section-gallery
    $(document).ready(function () {
        var carousel = $("#carousel").waterwheelCarousel({
            flankingItems: 1,
            movingToCenter: function ($item) {
                $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
            },
            activeClassName: 'border',
            separation: 350
        });

          var leftValue = parseInt($('p.left').text());
          var SliderImgCount =  $('#carousel a').length;
          $('p.right').text(SliderImgCount);

        $('#prev').bind('click', function () {
            carousel.prev();
            var leftValue = parseInt($('p.left').text());
            $('p.right').text(SliderImgCount);
            if(leftValue == 1){
                $('p.left').text(SliderImgCount)
            }
            else {
                $('p.left').text(leftValue-1);
            };
            return false
        });

        $('#next').bind('click', function () {
            carousel.next();
            var leftValue = parseInt($('p.left').text());
            var SliderImgCount =  $('#carousel a').length;
            $('p.right').text(SliderImgCount);
            if(leftValue < SliderImgCount){
                $('p.left').text(leftValue+1);
            }
            else{
                $('p.left').text(1);
            }
            return false;
        });

        $('#reload').bind('click', function () {
            newOptions = eval("(" + $('#newoptions').val() + ")");
            carousel.reload(newOptions);
            return false;
        });

    });
///Google Map//
var map;
var coords={
    'l14':{lat:55.924708, lng:37.504808},
    'l15':{lat:55.924119, lng:37.503349}
};
function openMap() {
    document.querySelector('#open-map').onclick= function () {
        document.querySelector('.contact-form').style.display="none";
        document.querySelector('#map-canvas').classList.add('before-none');
    };
}
openMap();
function initMap() {
    var map, map2;
    map = new google.maps.Map(document.getElementById('map'), {
        center: coords['l14'],
        zoom: 16,
        disableDefaultUI: true
    });
    document.querySelector("#d14").onclick=function () {
        map.setCenter(coords['l14']);
    };
    document.querySelector("#d15").onclick=function () {
        map.setCenter(coords['l15']);
    };
    map2 = new google.maps.Map(document.getElementById('map-canvas'), {
        center: coords['l14'],
        zoom: 16
    });

    var marker = new google.maps.Marker({
        position: coords['l14'],
        map: map,
        title: 'ДСДТ',
        icon:"../img/map-marker.png"
    });
    var markerBot = new google.maps.Marker({
        position: coords['l14'],
        map: map2,
        title: 'ДСДТ',
        icon:"../img/map-marker.png"
    });
    var marker2 = new google.maps.Marker({
        position: coords['l15'],
        map: map,
        title: 'ДСДТ',
        icon:"../img/map-marker.png"
    });
    var markerBot2 = new google.maps.Marker({
        position: coords['l15'],
        map: map2,
        title: 'ДСДТ',
        icon:"../img/map-marker.png"
    });

    var contentString = '<div id="content-info">'+
        '<h4>Москва</h4>'+
        '<p>141707,Московская область,<br>' +
        'г. Догопрудный,<br>'+
        'Промышленный проезд, д. 14</p>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
       /* pixelOffset: new google.maps.Size(-150,100),
        disableAutoPan: true*/
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);

    });
    markerBot.addListener('click', function() {
        infowindow.open(map2, markerBot);

    });

};
