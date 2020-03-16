import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { useHistory } from "react-router-dom";

let api = "http://10.11.1.207:4000/api/";

export default function MaterialTableDemo() {
  const [columns] = React.useState([{ title: "Рейс", field: "number" }]);
  const [passengers, setPassengers] = React.useState([]);

  const history = useHistory();

  function handleClick(id) {
    history.push("/flight/" + id);
  }

  let getData = () =>
    fetch("http://10.11.1.207:4000/api/flights")
      .then(resp => resp.json())
      .then(resp => setPassengers(resp));

  useEffect(() => {
    getData();
  }, []);

  return (
    <MaterialTable
      onRowClick={(event, selectedRow) => {
        handleClick(selectedRow.ID);
        // window.location.replace("/flight/" + selectedRow.ID);
      }}
      options={{
        actionsColumnIndex: -1,
        exportButton: true
      }}
      title="Editable Example"
      columns={columns}
      data={passengers}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            fetch(api + "flights", {
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
            fetch(api + "flights/" + oldData.ID, {
              method: "PUT",
              body: JSON.stringify(newData)
            })
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
            fetch(api + "flights/" + oldData.ID, {
              method: "DELETE"
            }).then(() => {
              const updatedItems = passengers.filter(
                resp => resp.ID !== oldData.ID
              );
              setPassengers(updatedItems);
              resolve();
            });
          })
      }}
    />
  );
}
