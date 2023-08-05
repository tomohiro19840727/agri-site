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

    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">土地の情報を選択してください</h2>
    </div>
    

    
    <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
      <div>
        <label for="first-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">土地の名称</label>
        <input name="土地の名称" type="text"
              placeholder="名前を記入"
              onChange={(e) => setName(e.target.value)} class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label for="last-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">土地の面積</label>
        <input name="土地の面積" type="text"
              placeholder="広さを記入"
              onChange={(e) => setFieldSize(e.target.value)}  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="company" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Company</label>
        <input name="company" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email*</label>
        <input name="email" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="subject" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Subject*</label>
        <input name="subject" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="message" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Message*</label>
        <textarea name="message" class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
      </div>

      <div class="flex items-center justify-between sm:col-span-2">
        <button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>

        <span class="text-sm text-gray-500">*Required</span>
      </div>

      <p class="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
    </form>
    
  </div>
</div>
        </>
  )
}

export default About