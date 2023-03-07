import React from "react";
import { Link } from "react-router-dom";
import Conseil from "../../assets/HomeConseil.jpg";
import Promo from "../../assets/HomePromo.webp";
import CoinsSympas from "../../assets/HomeCoins.webp";
import Materiel from "../../assets/HomeMatos.jpg";

function WhatElse() {
    return (
        <div className="div__sommaire">
                <h2>Quoi d'autre ?</h2>
                <div className="sommaire__flex">
                    <div className="item__sommaire">
                        <Link to="/coins-sympas">
                            <img src={CoinsSympas} alt="" className="img__sommaire"/>
                            <h3>Les coins sympas !</h3>
                            <p>Venez découvrir nos plans d'eau préférés par chez nous (37).</p>
                        </Link>
                    </div>
                    <div className="item__sommaire">
                        <Link to="/checklists">
                            <img src={Materiel} alt="" className="img__sommaire" />
                            <h3>Les checklists !</h3>
                            <p>Novice ou Habitué ? 24H ou plus ? Nous vous avons préparé quelques petites idées pour le matériel à emporter.</p>
                        </Link>
                    </div>
                    <div className="item__sommaire">
                        <Link to="/conseils">
                            <img src={Conseil} alt="" className="img__sommaire" />
                            <h3>Les conseils !</h3>
                            <p>Vous hésitez ? Vous avez des questions ? Venez voir, vous trouverez surement des réponses.</p>
                        </Link>
                    </div>
                    <div className="item__sommaire">
                        <Link to="/articles-vedettes">
                            <img src={Promo} alt="" className="img__sommaire" />
                            <h3>Les articles vedettes !</h3>
                            <p>Ici vous pourrez découvrir une liste d'articles que nous avons choisi pour vous. Venez jeter un coup d'oeil.</p>
                        </Link>
                    </div>
                </div>
                <div className="contact__sommaire">
                    <p>Et si vous avez besoin de nous joindre, n'hésitez pas !</p>
                    <Link to="/contact">
                        <button className="btn__sommaire">Contact</button>
                    </Link>
                </div>
        </div>
    )
};

export default WhatElse;