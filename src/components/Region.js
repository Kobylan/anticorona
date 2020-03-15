import React, { Fragment } from "react";

function Region(newList) {
  console.log("list", newList.location.state);
  return (
    <Fragment>
      <a href="/">Вернуться к списку регионов</a>
      <a href="/logout">Выход</a>
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
        {newList.location.state.newList.map(key =>
          key.map((passenger, index) => (
            <div className="table-row" key={index}>
              <div className="table-row-item">{index}</div>
              <div className="table-row-item">{passenger.create_date}</div>
              <div className="table-row-item">
                {passenger.from} - {passenger.to} {passenger.flight_id}
              </div>
              <div className="table-row-item">
                {passenger.name} {passenger.surname} {passenger.patronymic}
              </div>
              <div className="table-row-item">{passenger.iin}</div>
              <div className="table-row-item">{passenger.birthday}</div>
              <div className="table-row-item">1223334</div>
              <div className="table-row-item">РК</div>
              <div className="table-row-item">{passenger.phone_number}</div>
              <div className="table-row-item">{passenger.from}</div>
              <div className="table-row-item">{passenger.to}</div>
              <div className="table-row-item">{passenger.residence}</div>
              <div className="table-row-item">{passenger.work_place}</div>
              <div className="table-row-item">Да</div>
              <div className="table-row-item">Да</div>
              <div className="table-row-item">
                Многопрофильный медицинский центр г. Нур-Султан
              </div>
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
}

export default Region;
