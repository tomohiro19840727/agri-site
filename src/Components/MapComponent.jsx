// MapComponent.js
import React from "react";
import GoogleMapReact from "google-map-react";


const MapComponent = () => {

 
  return (
    <div className="flex items-center" style={{ height: "500px", width: "70%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAMNJ3wqU7bYnWiRVRe_D-YTWcLU3i2yag" }}
        defaultCenter={{ lat: 42.84976, lng: 140.39758 }} // ここはデフォルトの中心位置を指定
        
        defaultZoom={16}
        options={{ mapTypeId: "hybrid" }}
      >
        {userLocation && (
          <Marker lat={userLocation.lat} lng={userLocation.lng} text="You are here" />
        )}
      </GoogleMapReact>

     
    </div>
  );
};

const Marker = ({ text }) => <div>{text}</div>;

export default MapComponent;
