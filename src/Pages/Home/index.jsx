import React, { useEffect, useState } from "react";
import { BannerHome } from "../../componants/Banner/homeBanner";
import DescriptionPanel from "../../componants/Description/description";

export function Home() {
    const [panel, setPanel] = useState([]);
    console.log(panel);
    useEffect(fetchDescription, []);

    function fetchDescription() {
        fetch("descriptionPanel.json")
            .then((res) => res.json())
            .then((res) => setPanel(res))
            .catch(console.error);
    };

    return (
        <div>
            <BannerHome />
            <div className="home_description">
                <DescriptionPanel title={panel.title} imgUrl={panel.picture} description={panel.description}/>
                <DescriptionPanel title={panel.title} imgUrl={panel.picture} description={panel.description}/>
            </div>
        </div>
    )
};