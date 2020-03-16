import React, { useEffect } from "react";
import MaterialTable from "material-table";
import Cookies from "universal-cookie";
let api = "http://10.11.1.207:4000/api/";
let cookies = new Cookies();
let cookie = cookies.get("auth");
let array = cookie.split(".");
let role = atob(array[1]);
role = JSON.parse(role);
console.log(role.Region);
export default function MaterialTableDemo(props) {
  const [columns] = React.useState([
    { title: "Фамилия", field: "surname" },
    { title: "Имя", field: "name" },
    { title: "Отчество", field: "patronymic" },
    { title: "Гражданство", field: "residence" },
    { title: "Дата рождения", field: "birthday" },
    { title: "ИИН", field: "iin" },
    { title: "Номер паспорта", field: "pasport_number" },
    { title: "Место работы", field: "work_place" },
    { title: "Страны (последние 14 дней)", field: "been_counties" },
    { title: "Контакт с больными", field: "contactWithPatient" },
    { title: "Место жительства", field: "place_of_residence" },
    { title: "Телефон", field: "phone_number" },
    { title: "Откуда", field: "from" },
    { title: "Куда", field: "to" },
    { title: "Регион", field: "region" },
    { title: "Дата", field: "create_date" }
  ]);
  const [passengers, setPassengers] = React.useState([]);

  let getData = id =>
    fetch("http://10.11.1.207:4000/api/passengers/" + id)
      .then(resp => resp.json())
      .then(resp => setPassengers(resp));

  useEffect(() => {
    console.log();
    getData();
  }, []);

  return (
    <MaterialTable
      title="Анкета"
      options={{
        actionsColumnIndex: -1,
        exportButton: true
      }}
      columns={columns}
      data={passengers}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            fetch(api + "flights/" + props.id.id + "/passengers", {
              method: "POST",
              body: JSON.stringify(newData)
            })
              .then(resp => resp.json())
              .then(resp => {
                setPassengers([resp, ...passengers]);
                resolve();
              });
          }),

        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            fetch(
              api + "flights/" + props.id.id + "/passengers/" + oldData.ID,
              {
                method: "PUT",
                body: JSON.stringify(newData)
              }
            )
              .then(resp => resp.json())
              .then(resp => {
                const itemIndex = passengers.findIndex(
                  data => data.ID === resp.ID
                );
                const newArray = [
                  ...passengers.slice(0, itemIndex),
                  resp,
                  ...passengers.slice(itemIndex + 1)
                ];
                setPassengers(newArray);
                resolve();
              });
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            fetch(
              api + "flights/" + props.id.id + "/passengers/" + oldData.ID,
              {
                method: "DELETE"
              }
            ).then(() => {
              const updatedItems = passengers.filter(
                resp => resp.ID !== oldData.ID
              );
              setPassengers(updatedItems);
              resolve();
            });
          })
      }}
      localization={{
        header: { actions: "Редактирование" }
      }}
    />
  );
}
