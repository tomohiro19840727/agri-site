import React, { useState } from "react";

const Information = () => {
  // 選択された畑の情報をstateとして管理する
  const [selectedFieldInfo, setSelectedFieldInfo] = useState("");

  // プルダウンメニューで選択されたときのハンドラー
  const handleChange = (event) => {
    setSelectedFieldInfo(event.target.value);
  };

  return (
    <div className="flex items-center justify-center m-20">
      <h3>畑の情報を選択してください：</h3>
      <select value={selectedFieldInfo} onChange={handleChange}>
        <option value="">選択してください</option>
        <option value="農薬">農薬</option>
        <option value="肥料">肥料</option>
      </select>
      {selectedFieldInfo && <p>{selectedFieldInfo}</p>}
    </div>
  );
};

export default Information;
