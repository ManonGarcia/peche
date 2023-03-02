import React from "react";
import { BannerHome } from "../../componants/Banner/homeBanner"
import { Description } from "../../componants/Description/description"

export function Home() {
    return (
        <div>
            <BannerHome />
            <div className="home_description">
                <Description className="introduction"/>
                <Description className="presentation"/>
                <Description className="quoi_d_autre"/>
            </div>
        </div>
    )
};