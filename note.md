## Ajaxとは
- Javascriptの`XMLHttpRequest`を利用した非同期通信を行う技のこと
- JavaScriptで記述しなければならない
## 同期通信とは
例えば地図アプリにて...  
見たい地点をクリックするたびに、サーバーからリロードすること。  
データをリクエストして、  
レスポンスが来て、  
表示する。  
以上の3処理が順序立てて実行される。  
同期通信では、**リクエストからレスポンスまでの時間は他の処理をすることができません**。  
## Ajaxの基本
```javascript
$.ajax({
  type: "get", //HTTP通信の種類を指定(get, post)
  url: "test.json", //request送信先のURL(hoge.json, huga.js, ...)
  data: {name: 'chara'},
  dataType: "json", //serverから返ってくるデータ型(xml, html, json, ...)
  success: function(data, dataType){} //通信成功時に呼ばれるコールバック関数
});
```