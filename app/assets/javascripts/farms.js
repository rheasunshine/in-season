function initMap() {
  var farm = window.farm;
  var farm_position = {lat: farm.lat, lng: farm.lng}
  var markets = window.markets;
  var map = new google.maps.Map(document.getElementById('map'), {
    // disableDefaultUI: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 9,
    center: farm_position
  });

  var marker = new google.maps.Marker({
    position: farm_position,
    icon: '/assets/farm-2.png',
    map: map,
    zIndex: 2
  });

  var latLngList = [marker];
  var prevInfoWindow = false;

  markets.forEach(function(market) {
    var m = new google.maps.Marker({
      position: (({lat, lng}) => ({lat, lng}))(market),
      map: map,
      zIndex: 1
    });

    var infoWindowContent = `<strong>${market.name}</strong><br>${market.address}<br>`

    if (window.admin_check) {
      infoWindowContent += `<form action="/markets/${market.id}/delete" method="post">
                              <input type="hidden" name="authenticity_token" value="fUpAryQUjWIksIVE1gs+jFjf9zMXZapGYzQyjoWgKRqqckvw5w/QvokuOs8odH8BDnJwr98QGj0a5CHRXqC7XQ==">
                              <input type="hidden" value=${farm.id} name="farm_id">
                              <input type="submit" value="Remove">
                            </form>`
    }

    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });



    m.addListener('click', function() {
      if (prevInfoWindow) {
        prevInfoWindow.close();
      }
      infoWindow.open(map, m);
      prevInfoWindow = infoWindow;
    });

    latLngList.push(m);
  });

  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < latLngList.length; i++) {
    bounds.extend(latLngList[i].getPosition());
  }

  if (latLngList.length > 1) {
    map.fitBounds(bounds);
  }
}

$(document).on('turbolinks:load', function() {
  $('#market_name').bind('railsAutocomplete.select', (event, data) => {
    $('#market_address').attr('value', data.item.parsed_address);
    $('#market_market_day').val(data.item.market_day);
  });

  $('.carousel').carousel();
  $('.parallax').parallax();

  $('select').material_select();

  $('.modal').modal();

  $(".lever").on('click', function() {
    $("#csa_availability_checked_true").slideToggle('300');
  })

  $('#locate-user').on('click', function(event) {
    event.preventDefault();
    $('#location-progress').show();
    navigator.geolocation.getCurrentPosition(function(pos) {

      $.ajax({
        type: 'POST',
        url: '/current_location',
        dataType: 'json',
        data: {
          latlng: [pos.coords.latitude, pos.coords.longitude]
        },
        success: function(address) {
          $('#q').val(address.full_address); 
        }
      })
      $('#location-progress').hide();
    });
  })

  $('#autocomplete-market-name').keyup(function() {
    $.ajax({
      type: 'POST',
      url: '/markets/search',
      dataType: 'json',
      data: {
        query: $('#autocomplete-market-name').val()
      },
      success: function(data){
        var marketNames = {};
        for (market in data) {
          marketNames[data[market].name] = null
        }

        $('#autocomplete-market-name').autocomplete({
          data: marketNames
        });

        $('.autocomplete-content li').on('click', function(e) {
          $.ajax({
            type: 'POST',
            url: '/markets/search_name',
            dataType: 'json',
            data: {
              query: e.target.innerText
            },
            success: function(selectedMarket) {
              $('#market_address').val(selectedMarket.parsed_address);
              $('.market-day-dropdown input').val(selectedMarket.market_day)
            }
          });
        })
      }
    });
  });
});