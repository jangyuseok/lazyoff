import React from "react";

import { NavSidebar } from "./NavSidebar";
import BodyWrapper from "./BodyWrapper";
import MapContainer from "./MapContainer"
import Weather from "./Weather";

export const Layout = ({ children }) => {
  return (
    <BodyWrapper>
      <div className="flex h-screen bg-gray-200">
        <NavSidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                <Weather/>
                <MapContainer/>
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};

export default Layout;