import React from "react";
import iata from "../assets/iata.png";

export function About() {
    return (
        <div id={"about"} className="flex flex-col items-center text-center px-44 py-20">
            <h1 className="text-2xl font-semibold text-center text-red-600 pb-[2rem]">О НАС</h1>
            <p className="text-light-gray">GEORGIAN EXPRESS — дочерняя компания американской транспортной компании USSHOP, которая с 2011 года
                осуществляет авиаперевозки грузов и посылок любого размера и веса из Америки в Грузию. Мы предлагаем!
                Самый быстрый сервис и самые низкие тарифы на рынке Грузии. Заказанные Вами вещи и личные вещи из нашего
                американского офиса доставляются в Грузию не позднее 3-5 дней.
            </p>
            <img src={iata} alt="#"/>
        </div>
    )
}
