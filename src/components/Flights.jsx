import React from 'react';
import {LuPlane} from "react-icons/lu";

const flightData = [
    {
        flightNumber: 'ГЭК-30.08.2024',
        departureDate: '30.08.2024',
        estimatedArrivalDate: '06.09.2024',
        releaseDate: '26.08.2024 с 15:00 до 17:00',
    },
    {
        flightNumber: 'ГЭК-30.08.2024',
        departureDate: '30.08.2024',
        estimatedArrivalDate: '06.09.2024',
        releaseDate: '26.08.2024 с 15:00 до 17:00',
    },
    {
        flightNumber: 'ГЭК-30.08.2024',
        departureDate: '30.08.2024',
        estimatedArrivalDate: '06.09.2024',
        releaseDate: '26.08.2024 с 15:00 до 17:00',
    },
    {
        flightNumber: 'ГЭК-30.08.2024',
        departureDate: '30.08.2024',
        estimatedArrivalDate: '06.09.2024',
        releaseDate: '26.08.2024 с 15:00 до 17:00',
    },
    {
        flightNumber: 'ГЭК-30.08.2024',
        departureDate: '30.08.2024',
        estimatedArrivalDate: '06.09.2024',
        releaseDate: '26.08.2024 с 15:00 до 17:00',
    },
    {
        flightNumber: 'ГЭК-30.08.2024',
        departureDate: '30.08.2024',
        estimatedArrivalDate: '06.09.2024',
        releaseDate: '26.08.2024 с 15:00 до 17:00',
    },
];

const FlightItem = ({flightNumber, departureDate, estimatedArrivalDate, releaseDate}) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <LuPlane className="text-4xl text-blue-900"/>
            <div className="bg-white px-4 py-2 mb-4">
                <h2 className="text-lg font-medium text-red-600">{flightNumber}</h2>
                <p className="text-gray-700 font-bold">Дата выезда: {departureDate}</p>
                <p className="text-gray-700">Предполагаемая дата прибытия: {estimatedArrivalDate}</p>
            </div>
        </div>
    )
};

export const FlightList = () => {
    return (
        <div id={"flights"} className="w-full h-[500px] px-44 py-14 ">
            <h1 className="text-3xl font-bold text-center mb-8 text-red-600">ПОЛЕТЫ</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {flightData.map((flight) => (
                    <FlightItem key={flight.flightNumber} {...flight} />
                ))}
            </div>
        </div>
    );
};