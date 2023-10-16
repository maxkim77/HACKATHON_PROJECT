Kakao.init('14bed98573841b1c1c57db6ce73b116a');

var map;
function initMap() {
    var mapContainer = document.getElementById('map'),
        mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3
        };
    map = new kakao.maps.Map(mapContainer, mapOption);
}

initMap();  // 지도 초기화

var markers = [];
var ps = new kakao.maps.services.Places();  
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

function searchPlaces() {
    var keyword = document.getElementById('keyword').value;

    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }

    ps.keywordSearch(keyword, placesSearchCB); 
}

function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        displayPlaces(data);
        displayPagination(pagination);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
    } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
    }
}

function displayPlaces(places) {
    // ... (이전 코드와 동일)
}

function displayPagination(pagination) {
    // ... (이전 코드와 동일)
}

function addMarker(position, idx, title) {
    // ... (이전 코드와 동일)
}

function removeMarker() {
    // ... (이전 코드와 동일)
}

function displayInfowindow(marker, title) {
    // ... (이전 코드와 동일)
}

function removeAllChildNods(el) {
    // ... (이전 코드와 동일)
}
