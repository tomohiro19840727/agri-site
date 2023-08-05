// MapComponent.js
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';



const Home = () => {
  const [location, setLocation] = useState("")
  
  const distanceThreshold = 0.001; // クリックとの距離の閾値

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(query(collection(db, 'location')));
      setLocation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
    
   },[]);

   const targetCoordinates = location.length > 0 ? { lat: location[0].lat, lng: location[0].lng } : null;;

  const handleMapClick = (event) => {
    // クリック位置の座標
    const clickCoordinates = {
      lat: event.lat,
      lng: event.lng,
    };

    // クリックした位置と目標の位置の距離を計算
    const distance = calculateDistance(targetCoordinates, clickCoordinates);

    // 距離が閾値以下の場合、特定の処理を行う
    if (distance <= distanceThreshold) {
      // ここに特定の処理を記述
      alert("特定の地点をクリックしました！");
      window.location.href = "/information";
    }
  };

  const calculateDistance = (coord1, coord2) => {
    // 2点間の距離を計算する関数（簡易的な計算）
    const latDiff = coord1.lat - coord2.lat;
    const lngDiff = coord1.lng - coord2.lng;
    return Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
  };


  console.log(targetCoordinates)
  return (
    <div style={{ height: "500px", width: "70%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:process.env.REACT_APP_KEY}}
        defaultCenter={{ lat: 42.84976, lng: 140.39758 }} // ここはデフォルトの中心位置を指定
        
        defaultZoom={16}
        options={{ mapTypeId: "hybrid" }}
        onClick={handleMapClick} // 地図をクリックしたときのイベントハンドラを指定
      >
      </GoogleMapReact>

     
    </div>
  );
};



export default Home;
