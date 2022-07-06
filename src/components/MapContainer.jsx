/*global kakao*/ 
import {DashboardLayout} from '../components/Layout';
import React, { useEffect, useRef } from 'react'
import { render } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import '../styles/main.css'
import tourlistTop20s from '../json/tourlistTop20s.json'

const { kakao } = window;


// https://velog.io/@seokkitdo/React-kakao-map-api-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EB%A7%88%EC%BB%A4%EC%99%80-%EC%BB%A4%EC%8A%A4%ED%85%80%EC%98%A4%EB%B2%84%EB%A0%88%EC%9D%B4

const MapContainer= () => {

  useEffect(()=>{
    let  container = document.getElementById('map');
    let  options = {
      center: new kakao.maps.LatLng(33.355, 126.563),
      level: 10
    };

    mapRef.current = new kakao.maps.Map(container, options);
  }, []);


  const mapRef = useRef();
  

  useEffect(()=>{
   
    const tourlistInfo = tourlistTop20s.map(info => {
      return {
        title: info.title,
        lat: info.latitude,
        lng: info.longitude,
        road: info.roadaddress1,
        img: info.thumbnailpath,
        tag: info.tag,
        desc: info.introduction,
        rank: info.rank
      };
    });

    tourlistInfo.forEach(elm => {
      let marker = new kakao.maps.Marker({
        map: mapRef.current,
        position: new kakao.maps.LatLng(elm.lat, elm.lng),
        title: elm.title,
        // 즉시실행함수
        // func : (() => {
        //   console.log(elm);
        //  })(),
      });
      

    let content =   '<div class="wrap">' + 
    '    <div class="info">' + 
    '        <div class="title">' + 
    '           '+elm.title+'' + 
    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +  
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="img">' +
    '                <img src='+elm.img+'>' +
    '           </div>' + 
    '            <div class="tag">' + 
    '                <div class="ellipsis">'+elm.tag+'</div>' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">'+elm.desc+'</div>' + 
    '                <div onclick="moreInfo()">더보기</div>' + 
    '                <div onclick="toMap()">지도연결</div>' +     
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>';

    let contentMore =   '<div class="wrap">' + 
    '    <div class="info">' + 
    '        <div class="title">' + 
    '           '+elm.title+'' + 
    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +  
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="img">' +
    '                <img src='+elm.img+'>' +
    '           </div>' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">'+elm.tag+'</div>' + 
    '            <div class="road">' + 
    '                <div class="ellipsis">'+elm.road+'</div>' + 
    '                <div> <a href="#" onclick="moreInfo()">더보기</a></div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>';
    
//오버레이가 표시될 위치
    let position= new kakao.maps.LatLng(elm.lat, elm.lng)


    let overlay = new kakao.maps.CustomOverlay({
      content: content,
      position: position,
  });


//   // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, 'click', function() {
      let  container = document.getElementById('map');
      let  optionsOverlay = {
        center: new kakao.maps.LatLng(elm.lat, elm.lng),
        level: 5

      };
  
    mapRef.current = new kakao.maps.Map(container, optionsOverlay);

    overlay.setMap(mapRef.current);
      
  });
  
//   // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
  function closeOverlay() {
    console.log('종료')
    overlay.setMap(null);     
  }


});

// }
});

    return (

        <div className="flex items-center justify-center mt-10 text-center py-56">
          <div id="map" style={{ display:'flex', justifyContent:'right', width:"69vw", height:"65vh" }}>
          </div> 
        </div>

    );
};


export default MapContainer;