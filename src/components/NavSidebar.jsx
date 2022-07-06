/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { useHistory, useLocation } from "react-router-dom";
// import Icon from "awesome-react-icons";
import React, { useState, useEffect } from "react";
import DatePicker from "sassy-datepicker";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import areaLists from "../json/areaLists.json"
import tourlistTop20s from "../json/tourlistTop20s.json"
import Dropdown from "./Dropdown";
import '../styles/Dropdown.css'

export const NavSidebar = (props) => {
  // const history = useHistory();
  // const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  //  달력 날짜 선택
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const minDate = new Date(new Date().setDate(new Date().getDate() - 1));
  const maxDate = new Date(new Date().setDate(new Date().getDate() + 11));


  function Calendar() {
    const onChange = (date) => {
      setDate(date);
    };

    return <DatePicker onChange={onChange} selected={date} minDate={minDate} maxDate={maxDate} />;
  }

  // 지역 선택

  const [areaCode, setAreaCode] = useState('');
  const [area, setArea] = useState('');

  function selectArea(e) {
    setAreaCode(e.target.id)
    setArea(e.target.firstChild.data)
  }

  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  const [dropdownVisibility2, setDropdownVisibility2] = React.useState(false);

  return (
    <React.Fragment>
      <div
        className={`fixed inset-y-0 left-0 z-30 w-92 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-black">
            Lazy off
          </span>
        </div>
        <div>
          <div id='NavSidebar'/*style={{border:"1px solid black"}}*/>
            <div onClick={e => setDropdownVisibility(!dropdownVisibility)}>
              <b>
                <h3 >
                  일정 선택 : {year + '-' + month + '-' + day}
                </h3>
              </b>
            </div>
          </div>
        </div>
        <div /*style={{border:"1px solid black"}}*/>
          <Dropdown visibility={dropdownVisibility}>
            <Calendar />
          </Dropdown>
        </div>
        <div>
          <div id='NavSidebar'/*style={{border:"1px solid black"}}*/>
            <div onClick={e => setDropdownVisibility2(!dropdownVisibility2)}>
              <b>
                <h3>
                  지역선택 : &nbsp;
                </h3>
              </b>
            </div>
            <div /*style={{border:"1px solid black"}}*/>

              <h3>
                {area} {areaCode}
              </h3>

            </div>
          </div>
          <div>
            <Dropdown visibility={dropdownVisibility2}>
              <ul>
                {
                  areaLists.map(areaList =>
                    <li id={areaList.areaCode} key={areaList.areaCode} onClick={e => selectArea(e)}>{areaList.area}</li>
                  )
                }
              </ul>
            </Dropdown>
          </div>
          <div /*style={{border:"1px solid black"}}*/>
            <b><h3>제주도 추천여행지 top20</h3></b>
          </div>
          <div>
            <ul>
              {
                tourlistTop20s.map(tourlistTop20 =>
                  <li id={tourlistTop20.contentsid} key={tourlistTop20.contentsid}>{tourlistTop20.title}</li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
