// 네이버 지도 초기화 및 마커/팝업
let map, markers = [];
const busData = [
  {
    id: "DVCID001", lat: 36.487294, lng: 127.250688,
    info: "차량 001의 상세 정보입니다."
  },
  {
    id: "DVCID002", lat: 36.491327, lng: 127.259536,
    info: "차량 002의 상세 정보입니다."
  },
  {
    id: "DVCID003", lat: 36.495072, lng: 127.265020,
    info: "차량 003의 상세 정보입니다."
  },
  {
    id: "DVCID004", lat: 36.491115, lng: 127.256059,
    info: "차량 004의 상세 정보입니다."
  }
];

function initMap() {
  map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(36.491, 127.256),
    zoom: 15
  });
  // 버스 마커
  busData.forEach((bus) => {
    let marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(bus.lat, bus.lng),
      map,
      icon: {
        url: "https://cdn-icons-png.flaticon.com/512/61/61166.png", // 버스 아이콘 예시
        size: new naver.maps.Size(36, 36),
        scaledSize: new naver.maps.Size(36, 36),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(18, 36)
      },
      title: bus.id
    });
    markers.push(marker);
    naver.maps.Event.addListener(marker, 'click', function () {
      showPopup(bus.id, bus.info);
    });
  });
}

function showPopup(id, info) {
  const popup = document.getElementById('bus-popup');
  const content = document.getElementById('popup-info');
  content.innerHTML = `<b>${id}</b><br>${info}`;
  popup.style.display = 'block';
}
document.getElementById('close-popup').onclick = function() {
  document.getElementById('bus-popup').style.display = 'none';
}

// 지도 로드
window.initMap = initMap;
window.addEventListener('DOMContentLoaded', function () {
  if (window.naver && naver.maps) initMap();
});