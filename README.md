#kütüphaneler

 json-server son sürümünde db dosyasında id string türünde olmalıdır.
 
 package.json dosyasında scripts altında json server' i 4000 portundan çalıştıracağımız için api fetch isteklerinde de 4000 portunu vermeliyiz. .env adında bir dosya oluşturup içerisine 
 
 REACT_APP_API_URL=http://localhost:4000 yazılarak port no dinamik hale getirildi.


"server": "json-server --watch db.json --port 4000" ekleyip npm start server yapmalıyız buradaki port no env içerisine kaç yazılmışsa o yazılmalı

react-icons

react-toastify Aşağıdaki importları layout içerisine eklemeyi unutmamalıyız. import "react-toastify/dist/ReactToastify.css"; import { ToastContainer } from "react-toastify";

npm install chart.js

npm i react-chartjs-2# dashboard
