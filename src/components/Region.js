import React, { Fragment } from "react";

function Region(state) {
  console.log("list", state);
  return (
    <Fragment>
      <a href="#">Вернуться к списку регионов</a>
      <a href="#">Выход</a>
      <div className="table">
        <div className="table-row table-header">
          <div className="table-row-item w-30">№</div>
          <div className="table-row-item">Дата въезда</div>
          <div className="table-row-item">Рейс</div>
          <div className="table-row-item">ФИО</div>
          <div className="table-row-item">ИИН</div>
          <div className="table-row-item">Дата рождения</div>
          <div className="table-row-item">Номер паспорта</div>
          <div className="table-row-item">Гражданство</div>
          <div className="table-row-item">Номер мобильного телефона</div>
          <div className="table-row-item">
            Место и сроки пребывания в последние 14 дней до прибытия в Казахстан
          </div>
          <div className="table-row-item">Регион</div>
          <div className="table-row-item">
            Место жительства, либо предполагаемое место проживания
          </div>
          <div className="table-row-item">Место работы</div>
          <div className="table-row-item">Найден (да/нет)</div>
          <div className="table-row-item">Госпитализирован (да/нет)</div>
          <div className="table-row-item">Место госпитализации</div>
        </div>

        <div className="table-row">
          <div className="table-row-item">1</div>
          <div className="table-row-item">01.03.2020</div>
          <div className="table-row-item">Москва - Нур-Султан 1956</div>
          <div className="table-row-item">Асетов Асет Асетович</div>
          <div className="table-row-item">900101654321</div>
          <div className="table-row-item">01.01.1990</div>
          <div className="table-row-item">1223334</div>
          <div className="table-row-item">РК</div>
          <div className="table-row-item">87771112233</div>
          <div className="table-row-item">Италия</div>
          <div className="table-row-item">Нур-Султан</div>
          <div className="table-row-item">
            г. Нур-Султан, пр. Туран, 1000, кв. 1000
          </div>
          <div className="table-row-item">Школа Алем</div>
          <div className="table-row-item">Да</div>
          <div className="table-row-item">Да</div>
          <div className="table-row-item">
            Многопрофильный медицинский центр г. Нур-Султан
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Region;
