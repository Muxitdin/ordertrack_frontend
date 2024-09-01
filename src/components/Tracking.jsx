import React from 'react';
import {MdBlockFlipped} from "react-icons/md";
import {SlBag, SlWallet, SlCalender} from "react-icons/sl";
import { MdOutlineCalculate } from "react-icons/md";
import { GrGift } from "react-icons/gr";
import { RiSignpostLine } from "react-icons/ri";

export const Tracking = () => {
    return (
        <div id={'track'} className="container px-44 h-fit py-[80px]">
            <h1 className="text-2xl font-semibold text-center text-red-600 pb-[2rem]">ОТСЛЕЖИВАНИЕ</h1>
            <form className="flex justify-center gap-6">
                <input type="text" placeholder="Введите отслеживание"
                       className="min-w-[500px] border border-gray-300 p-2 rounded"/>
                <button type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Искать
                </button>
            </form>

            <h2 id={"service"} className="text-2xl font-semibold text-center text-red-600 pt-[80px] pb-4">УСЛУГИ</h2>
            <p className="text-light-gray text-center max-w-[420px] mx-auto">
                Мы перевозим груз любого размера и веса из Америки в Грузию по оптимальной цене и в кратчайшие
                сроки. <br/><br/>
                Стоимость доставки всего 8 долларов за килограмм. <br/><br/>
                Обратите внимание, что американский офис закрыт по воскресеньям.
            </p>

            <div className="flex gap-10 mt-[80px]">
                <div>
                    <MdBlockFlipped className="mt-3 scale-[300%] text-gray-600 font-medium"/>
                </div>
                <div className="text-light-gray">
                    <p className='text-red-600 pb-4'>Внимание</p>
                    <p>Поскольку случаев мошеннического заказа посылок из Америки было несколько, компания USSHOP.GE
                        оставляет за собой право запросить в случае необходимости квитанцию, подтверждающую оплату
                        стоимости посылки, заверенную печатью банка.</p><br/>
                    <p>Если на сайте американской почтовой компании статус посылки указан как «доставлено», а также
                        указано, что посылка передана «подписано…», но клиент не увидел код отслеживания посылки на
                        личном сайте в течение 24 часов, это означает, что посылка физически не была доставлена ​​Почтой
                        США. В этом случае пользователю необходимо связаться с отправителем и пожаловаться на непринятие
                        посылки. После подачи жалобы проводится так называемая Трейсер, то есть статус поиска, который
                        означает, что по посылке объявлен розыск. Пользователь обязан пройти указанные процедуры.
                        Компания usshop.ge не несет ответственности за посылки, физически не поступившие на американский
                        склад, даже если на сайте почтовой компании стоит статус «Доставлено» и «Подписано…». В случае
                        возникновения спорной ситуации компания usshop.ge, а также ее партнерская американская компания
                        подтвердят компании-отправителю и почтовому отделению США в письменной форме или по факсу, что
                        посылка физически не прибыла по адресу клиента.</p><br/>
                    <p>Указанное расписание рейсов не является фиксированным и компания Usshop не несет ответственности
                        за задержку рейсов в случае форс-мажорных обстоятельств, отмены или изменения расписания
                        авиакомпанией. Также о перегрузках авиакомпаний в связи с праздниками.</p>
                </div>
            </div>

            <div className="flex gap-10 mt-10">
                <div>
                    <MdBlockFlipped className="mt-3 scale-[300%] text-gray-600 font-medium"/>
                </div>
                <div className="text-light-gray">
                    <p className='text-red-600 pb-4'>Список запрещенных предметов</p>
                    <p>Арбалет, стрелы, лук. Взрывоопасные вещества. токсичные вещества. Огнестрельное оружие, части или
                        принадлежности огнестрельного оружия. Продукты, содержащие наркотические вещества. Реальные
                        деньги, монеты. Парфюмерия, ароматизаторы. Автомобильный амортизатор. Пневматические пистолеты с
                        накачиваемым газовым баллоном и принадлежности к ним. В общем, любой надувной шар, любого
                        размера, любой электрошокер..</p><br/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div className="flex gap-10">
                    <div>
                        <SlBag className="mt-3 scale-[300%] text-gray-600 font-medium"/>
                    </div>
                    <div className="text-light-gray">
                        <p className='text-red-600 pb-4'>Бесплатная услуга упаковки</p>
                        <p>При желании мы бесплатно упакуем для вас хрупкие посылки.</p><br/>
                    </div>
                </div>
                <div className="flex gap-10">
                    <div>
                        <SlCalender className="mt-3 scale-[300%] text-gray-600 font-medium"/>
                    </div>
                    <div className="text-light-gray">
                        <p className='text-red-600 pb-4'>Один рейс в неделю</p>
                        <p>В неделю выполняется один рейс. каждую пятницу.</p><br/>
                    </div>
                </div>
                <div className="flex gap-10">
                    <div>
                        <SlWallet className="mt-3 scale-[300%] text-gray-600 font-medium"/>
                    </div>
                    <div className="text-light-gray">
                        <p className='text-red-600 pb-4'>Гибкая ставка</p>
                        <p>Скидки на тяжелые грузы.</p><br/>
                    </div>
                </div>
                <div className="flex gap-10">
                    <div>
                        <MdOutlineCalculate className="mt-3 scale-[300%] text-gray-600 font-medium"/>
                    </div>
                    <div className="text-light-gray">
                        <p className='text-red-600 pb-4'>Посылки рассматриваются только по фактическому весу</p>
                        <p>Посылки рассматриваются только по фактическому весу, за исключением габаритных частей
                            автомобиля (бампер, щиток, капот). Свяжитесь с нами для уточнения цен. <span
                                className="font-bold">Вес посылки округляется до 200 грамм.</span></p><br/>
                    </div>
                </div>
                <div className="flex gap-10">
                    <div>
                        <GrGift className="mt-3 scale-[300%] text-gray-600 font-medium"/>
                    </div>
                    <div className="text-light-gray">
                        <p className='text-red-600 pb-4'>Мы поможем Вам подписаться на нужный товар</p>
                        <p>Услуга бесплатная. Вы платите только за стоимость и доставку. Отправьте ссылку на желаемый
                            товар на адрес support@usshop.ge
                            тел: 574 754466</p><br/>
                    </div>
                </div>
                <div className="flex gap-10">
                    <div>
                        <RiSignpostLine className="mt-3 scale-[300%] text-gray-600 font-medium"/>
                    </div>
                    <div className="text-light-gray">
                        <p className='text-red-600 pb-4'>Курьерская служба</p>
                        <p>В течение 2-х дней после оплаты курьерской услуги вы получите посылку по нужному адресу.</p><br/>
                    </div>
                </div>
            </div>
        </div>
    );
};
