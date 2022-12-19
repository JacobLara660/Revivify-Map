let map;
const UnitedStatesLatLong = { lat:40.20612271399455 , lng:-101.68548215531787 }
const appalachianautocareLatLong = { lat:35.52427857203087, lng: -82.98744432518171 }
const BaiasDetailingLatLong = { lat:43.02155562087665, lng: -74.36900354891314 }
const affordableautospaLatLong = { lat:28.251865702793246, lng: -81.2343011040444 }
const TouchUpTeamLatLong = { lat:33.449628375426656, lng: -112.07298223286827 }
const BestShineAutoDetailingLatLong = { lat:41.97364607532042, lng: -83.96501712265818 }
const BNRAutoDetailingLatLong = { lat:40.98757180450213, lng:  -74.13975961763134 }
const BottiniAutoDetailingLatLong = { lat: 39.961005640782346, lng: -75.02547608900727 }
const TheDetailingProsRenoLatLong = { lat: 39.525691871223714, lng: -119.74522298223894 }
const BuckeyeCleanWerksLatLong = { lat: 39.8846453212776, lng: -83.09383933275329 }
const CeramicEliteLLCLatLong = { lat: 34.13040098033725, lng: -83.9762814364741 }
const CeramicLabsLatLong = { Lat: 35.36326779855859, lng: -80.1557351491574 }


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: UnitedStatesLatLong,
      zoom: 5,
    });
  
    const BaiasDetailingMarker = new google.maps.Marker({
      position: appalachianautocareLatLong,
      map: map,
    });
    const appalachianautocareMarker = new google.maps.Marker({
      position: BaiasDetailingLatLong,
      map: map,
    });
  
    const affordableautospaMarker =  new google.maps.Marker({
      position: affordableautospaLatLong,
      map: map,
    });

    const TouchUpTeamMarker = new google.maps.Marker({
        position: TouchUpTeamLatLong,
        map: map,
      });
    
      const BestShineAutoDetailingMarker = new google.maps.Marker({
        position: BestShineAutoDetailingLatLong,
        map: map,
      });
    
      const BNRAutoDetailingMarker = new google.maps.Marker({
        position: BNRAutoDetailingLatLong,
        map: map,
      })
    
      const BottiniAutoDetailingMarker = new google.maps.Marker({
        position: BottiniAutoDetailingLatLong,
        map: map,
      })
    
      const TheDetailingProsRenoMarker = new google.maps.Marker({
        position: TheDetailingProsRenoLatLong,
        map: map,
      })
    
      const BuckeyeCleanWerksMarker = new google.maps.Marker({
        position: BuckeyeCleanWerksLatLong,
        map: map,
      })
    
      const CeramicEliteLLCMarker= new google.maps.Marker({
        position: CeramicEliteLLCLatLong,
        map: map,
      })
    }