/*global kakao*/ 
import {DashboardLayout} from './Layout';
import React, { useEffect, useRef } from 'react'
import { render } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import '../styles/main.css'
import '../json/tourlistTop20s.json'

// https://velog.io/@seokkitdo/React-kakao-map-api-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EB%A7%88%EC%BB%A4%EC%99%80-%EC%BB%A4%EC%8A%A4%ED%85%80%EC%98%A4%EB%B2%84%EB%A0%88%EC%9D%B4

const { kakao } = window;



// const MapContainer= () => {
//   const location = useLocation();
//   useEffect(()=>{
//     let  container = document.getElementById('map');
//     let  options = {
//       center: new kakao.maps.LatLng(33.355, 126.563),
//       level: 10
//     };

//     mapRef.current = new kakao.maps.Map(container, options);
//   }, [location]);


//   const mapRef = useRef();
  
// // tourlistTop20s.map(tourlistTop20 => 
// //   <li id={tourlistTop20.contentsid} key={tourlistTop20.contentsid}>{tourlistTop20.title}</li>
// //   )
//   useEffect(()=>{
//     const tourlistInfo = tourlistTop20s.map(info => {
//       return {
//         title: info.title,
//         // lat: info.latitude,
//         lng: info.longtitude,
//         // img: info.image_url[0],
//         // tag: info.tag,
//         // desc: info.desc,
//     //   };
//     // });

//     // tourlistInfo.forEach(li => {
//     //   let marker = new kakao.maps.Marker({
//     //     map: mapRef.current,
//     //     position: new kakao.maps.LatLng(li.lat, li.lng),
//     //     title: li.title,
//     //   });

//     // let content =
//     //     '<div class="overlayWrap">' +
//     //     `    <img class="overlayImg" src=${li.img}/>` +
//     //     '    <div class="accommInfoWrap">' +
//     //     `        <h1 class="accommName">${li.title}</h1>` +
//     //     `        <p class="accommRegion">${li.region}</p>` +
//     //     `        <p class="accommDesc">${li.desc}</p>` +
//     //     `        <p class="accommPrice">${Number(
//     //       el.price
//     //     ).toLocaleString()}</p>` +
//     //     '    </div>' +
//     //     '    <div class="overlayArrow">' +
//     //     '</div>';
    
//     let content =   '<div class="wrap">' + 
//     '    <div class="info">' + 
//     '        <div class="title">' + 
//     '            포토카드 테스트' + 
//     '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +  
//     '        </div>' + 
//     '        <div class="body">' + 
//     '            <div class="img">' +
//     '                <img src="https://post-phinf.pstatic.net/MjAyMTA0MTJfMTAw/MDAxNjE4MjMwMjQ0Mjcy.UcHomwacpcXaJ8_nUksje4UkxE7UOzZ0gcgdZTnl0eEg.hh6qgDmsklQHWhuV2cyTqb6T0CyRF_IxNxy4RseU95Ag.JPEG/IMG_2379.jpg?type=w1200" width="73" height="70">' +
//     '           </div>' + 
//     '            <div class="desc">' + 
//     '                <div class="ellipsis">#태그 #태그</div>' + 
//     '                <div><a href="#" onclick="moreInfo()">더보기</a></div>' + 
//     '            </div>' + 
//     '        </div>' + 
//     '    </div>' +    
//     '</div>';
    
// //오버레이가 표시될 위치
//     let position= new kakao.maps.LatLng(33.450701, 126.570667)
//      // let position = new kakao.maps.LatLng(el.lat, el.lng);

//     let marker = new window.kakao.maps.Marker({
//       map: mapRef.current, 
//       position: position
     
//   });
//     let overlay = new kakao.maps.CustomOverlay({
//       content: content,
//       position: position,
//       // position: marker.getPosition()       
//   });

//   let  optionsOverlay = {
//     center: new kakao.maps.LatLng(33.3190114, 126.5633023),
//     level: 3

//   };
    
//   // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
//     kakao.maps.event.addListener(marker, 'click', function() {
//       overlay.setMap(mapRef.current);
      
//   });
  
//   // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
//   function closeOverlay() {
//       overlay.setMap(null);     
//   }

  //더보기
//   function moreInfo() {
//     let content2 =   '<div class="wrap">' + 
//     '    <div class="info">' + 
//     '        <div class="title">' + 
//     '            포토카드 테스트' + 
//     '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +  
//     '        </div>' + 
//     '        <div class="body">' + 
//     '            <div class="img">' +
//     '                <img src="https://post-phinf.pstatic.net/MjAyMTA0MTJfMTAw/MDAxNjE4MjMwMjQ0Mjcy.UcHomwacpcXaJ8_nUksje4UkxE7UOzZ0gcgdZTnl0eEg.hh6qgDmsklQHWhuV2cyTqb6T0CyRF_IxNxy4RseU95Ag.JPEG/IMG_2379.jpg?type=w1200" width="73" height="70">' +
//     '           </div>' + 
//     '            <div class="desc">' + 
//     '                <div class="ellipsis">#태그 #태그</div>' + 
//     '                <div><a href="#" onclick="moreInfo()">더보기</a></div>' + 
//     '            </div>' + 
//     '        </div>' + 
//     '    </div>' +    
//     '</div>';


//  // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다

//      overlay.setMap(mapRef.current);


// }
// },[]);
  

//     return (
//       <DashboardLayout>
//         <div className="flex items-center justify-center mt-10 text-center py-56">
//           <div id="map" style={{ display:'flex', justifyContent:'right', width:"69vw", height:"65vh" }}>
//           </div> 
//         </div>
//       </DashboardLayout>
//     );
// };

// export default MapContainer;