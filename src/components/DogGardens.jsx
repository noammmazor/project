import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "../style/DogGardens.css"
const locations = [
  { name: "Location 1", coords: [34.8455345, 32.0765742] },
  { name: "Location 2", coords: [34.808812, 32.0723416] },
  { name: "Location 3", coords: [34.8505147, 32.0699404] },
  { name: "Location 4", coords: [34.8104817, 32.0738204] },
  { name: "Location 5", coords: [34.7814156, 32.0952722] },
  { name: "Location 6", coords: [34.8164403, 32.0952571] },
  { name: "Location 7", coords: [34.8448371, 32.0694906] },
  { name: "Location 8", coords: [34.8320702, 32.0662535] },
  { name: "Location 9", coords: [34.7856559, 32.0512663] },
  { name: "Location 10", coords: [34.8401869, 32.0774168] },
  { name: "Location 16", coords: [34.8183692, 32.0786234] },
  { name: "Location 11", coords: [34.8418401, 32.0245821] },
  { name: "Location 12", coords: [34.8480705, 32.0760122] },
  { name: "Location 13", coords: [34.8133621, 32.0574586] },
  { name: "Location 14", coords: [34.8145223, 32.0820207] },
  { name: "Location 15", coords: [34.8075934, 32.0694957] },
  { name: "Location 17", coords: [34.795445, 32.0483427] },
  { name: "Location 18", coords: [34.8238928, 32.0611628] },
  { name: "Location 19", coords: [34.759479, 32.037666] },
  { name: "Location 20", coords: [34.8196723, 32.0783065] },
  { name: "Location 21", coords: [34.8720699, 32.0648603] },
  { name: "Location 22", coords: [34.8343832, 32.0644736] },
  { name: "Location 23", coords: [34.8276955, 32.1019313] },
  { name: "Location 24", coords: [34.7993576, 32.0564025] },
  { name: "Location 25", coords: [34.8138761, 32.0876903] },
  { name: "Location 26", coords: [34.7977564, 32.0886671] },
  { name: "Location 27", coords: [34.7704287, 32.0759952] },
  { name: "Location 28", coords: [34.8374004, 32.0706458] },
  { name: "Location 29", coords: [34.8961495, 32.0699716] },
  { name: "Location 30", coords: [34.9411261, 32.0810794] },
  { name: "Location 31", coords: [34.7968467, 32.0610634] },
  { name: "Location 32", coords: [34.8576323, 32.052262] },
  { name: "Location 33", coords: [34.8828397, 32.0671728] },
  { name: "Location 34", coords: [34.8738911, 31.9803626] },
  { name: "Location 35", coords: [34.7876766, 31.9604311] },
  { name: "Location 36", coords: [34.8096334, 31.9601932] },
  { name: "Location 37", coords: [34.8173773, 31.9467453] },
  { name: "Location 38", coords: [35.6287834, 32.6837252] },
  { name: "Location 39", coords: [35.6610746, 32.9699341] },
  { name: "Location 40", coords: [34.9771389, 31.5851015] },
  { name: "Location 41", coords: [34.7877447, 31.2672511] },
  { name: "Location 42", coords: [34.6333921,31.7837984] },
  { name: "Location 43", coords: [34.6707035,31.8079724] },
  { name: "Location 44", coords: [34.662847,31.7765638] },
  { name: "Location 45", coords: [34.6578749,31.8092798] },
  { name: "Location 46", coords: [34.7047395,31.667639] },
  { name: "Location 47", coords: [35.0089797,31.8650447] },
  { name: "Location 48", coords: [34.8053664,32.0494455] },
  { name: "Location 49", coords: [35.0812434,32.0565162] },
  { name: "Location 50", coords: [34.8076292,32.0595006] },
  { name: "Location 51", coords: [34.8493906,32.1353859] },
  { name: "Location 52", coords: [34.8966555,32.1300034] },
  { name: "Location 53", coords: [34.8304742,32.1244545] },
  { name: "Location 54", coords: [35.0517956,32.7996078] },
  { name: "Location 55", coords: [34.9568972,32.8215491] },
  { name: "Location 56", coords: [35.0671738,32.7833819] },
  { name: "Location 57", coords: [35.0411584,32.771172] },
  { name: "Location 58", coords: [35.2453994,31.7962611] },
  { name: "Location 59", coords: [35.1270657,31.8968625] },
  { name: "Location 60", coords: [35.3464203,31.7593056] },
];

export default function DogGardens() {



  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();
  const [zoom] = useState(14);
  const [API_KEY] = useState("jkXm0dXGYyjeSwGzYWIU");

  const addMarker = (map, location) => {
    new maplibregl.Marker({ color: "#FF0000" }).setLngLat(location).addTo(map);
  };


  useEffect(() => {
    if (map.current) return; //stops map from initializing more than once
    
    navigator.geolocation.getCurrentPosition((position) => {
      let lng = position.coords.longitude;
      let lat = position.coords.latitude;
      setLng(lng);
      setLat(lat);
      
      
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
        center: [lng, lat],
        zoom: zoom,
      });
      new maplibregl.Marker({ color: "blue" })
      .setLngLat([lng, lat])
      .addTo(map.current);
      map.current.jumpTo({ center: [lng, lat] });
      map.current.addControl(new maplibregl.NavigationControl(), "top-right");
      locations.forEach((location) => addMarker(map.current, location.coords));
    });
  }, []);
  
  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
