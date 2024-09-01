import React from 'react';
import {CiMail, CiLocationOn} from "react-icons/ci";
import {PiLifebuoyLight} from "react-icons/pi";

export const Contact = () => {
    return (
        <div id={"contact"} className="container mx-auto py-20 px-44">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col justify-center items-center px-8 py-6">
                    <CiMail className="scale-[250%] mb-4 ml-2 text-blue-900"/>
                    <h3 className="text-xl font-bold mb-4">Связаться с нами</h3>
                    <ul>
                        <li className="mb-2">Электронная почта: info@usshop.ge</li>
                        <li className="mb-2">Телефон: +995 (032) 221 21 28</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-center px-8 py-6">
                    <CiLocationOn className="scale-[250%] mb-4 ml-2 text-blue-900"/>
                    <h3 className="text-xl font-bold mb-4">Адрес</h3>
                    <ul>
                        <li className="mb-2">USSHOPGE</li>
                        <li className="mb-2">с. Улица Канделаки 17,</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-center px-8 py-6">
                    <PiLifebuoyLight className="scale-[250%] mb-4 ml-2 text-blue-900"/>
                    <h3 className="text-xl font-bold mb-4">Рабочее время</h3>
                    <ul>
                        <li className="mb-2">Понедельник-пятница с 10:30 до 19:00</li>
                        <li className="mb-2">Суббота с 10:30 до 16:00</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};