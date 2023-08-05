import React, { useState } from 'react'
import GoogleMapReact from "google-map-react";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const About = () => {
  const [ name, setName ] = useState("");
  const [fieldSize, setFieldSize] = useState(0);
  const [clickedCoordinates, setClickedCoordinates] = useState(null);
  const [selectedFieldInfo, setSelectedFieldInfo] = useState("");

  // プルダウンメニューで選択されたときのハンドラー
  const handleChange = (event) => {
    setSelectedFieldInfo(event.target.value);
  };

  const handleMapClick = (event) => {
    const clickedLat = event.lat;
    const clickedLng = event.lng;
    setClickedCoordinates({ lat: clickedLat, lng: clickedLng });

    
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // フォームのデフォルトの送信を防ぐ
    const convertedfieldSize = Number(fieldSize);
  
    try {
      await addDoc(collection(db, 'location'), {
        name: name,
        fieldSize: convertedfieldSize,
        selectedFieldInfo: selectedFieldInfo,
        lat: clickedCoordinates.lat,
        lng: clickedCoordinates.lng,
      });
      alert('追加が完了しました');
    } catch (error) {
      console.error('エラーが発生しました：', error);
      alert('エラーが発生しました');
    }
  };

  return (
    <>
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

      

<div className="flex items-center justify-center m-20">
      <h3>土地の情報を選択してください：</h3>
      <form onSubmit={handleSubmit}>
     <input type="text"
              placeholder="名前を記入"
              onChange={(e) => setName(e.target.value)} />
     <input type="text"
              placeholder="広さを記入"
              onChange={(e) => setFieldSize(e.target.value)} /> a
    <br/>
      <select value={selectedFieldInfo} onChange={handleChange}>
        <option value="">選択してください</option>
        <option value="畑">畑</option>
        <option value="水田">水田</option>
      </select>
      {selectedFieldInfo && <p>{selectedFieldInfo}</p>}
      {clickedCoordinates && (
        <div>
          <p>緯度：{clickedCoordinates.lat}</p>
          <p>経度：{clickedCoordinates.lng}</p>
        </div>
      )}
      <button type="submit" >登録</button>
      </form>
    </div>
        </>
  )
}

export default About