import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];

const useStyles = makeStyles({
  table: {
    minWidth: 300
  }
});

export default function Region(newList) {
  const rows = newList.location.state.newList;
  // const [data, setData] = useState({ rows });
  const classes = useStyles();

  rows.map((key, index) => key.map(i => console.log("i", i)));

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ФИО</StyledTableCell>
            <StyledTableCell align="right">ИИН)</StyledTableCell>
            <StyledTableCell align="right">Дата рождения</StyledTableCell>
            <StyledTableCell align="right">Номер паспорта</StyledTableCell>
            <StyledTableCell align="right">Дата въезда</StyledTableCell>
            <StyledTableCell align="right">Рейс</StyledTableCell>
            <StyledTableCell align="right">Гражданство</StyledTableCell>
            <StyledTableCell align="right">
              Номер мобильного телефона
            </StyledTableCell>
            <StyledTableCell align="right">Место пребывания</StyledTableCell>
            <StyledTableCell align="right">Регион</StyledTableCell>
            <StyledTableCell align="right">Место жительства</StyledTableCell>
            <StyledTableCell align="right">Место работы</StyledTableCell>
            <StyledTableCell align="right">Найден (да/нет)</StyledTableCell>
            <StyledTableCell align="right">
              Госпитализирован (да/нет)
            </StyledTableCell>
            <StyledTableCell align="right">
              Место госпитализации
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row =>
            row.map(passenger => (
              <StyledTableRow key={passenger.flight_id}>
                <StyledTableCell component="th" scope="row">
                  {passenger.name} {passenger.surname} {passenger.patronymic}
                </StyledTableCell>
                <StyledTableCell align="right">{passenger.iin}</StyledTableCell>
                <StyledTableCell align="right">
                  {passenger.birthday}
                </StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right">
                  {passenger.create_date}
                </StyledTableCell>
                <StyledTableCell align="right">{row.number}</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right">
                  {passenger.phone_number}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {passenger.from}
                </StyledTableCell>
                <StyledTableCell align="right">{passenger.to}</StyledTableCell>
                <StyledTableCell align="right">
                  {passenger.residence}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {passenger.work_place}
                </StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import React from "react";
// import MaterialTable from "material-table";

// export default function Region(newList) {
//   console.log(("sgfsdgsadgs", newList));
//   const [state, setState] = React.useState({
//     columns: [
//       { title: "Дата въезда", field: "create_date" },
//       { title: "Рейс", field: "flight" },
//       { title: "ФИО", field: "nameSurnamePatronymic" },
//       { title: "ИИН", field: "iin" },
//       { title: "Дата рождения", field: "birthDate" },
//       { title: "Номер паспорта", field: "passport" },
//       { title: "Гражданство", field: "citizenship" },
//       { title: "Номер мобильного телефона", field: "phoneNumber" },
//       {
//         title:
//           "Место и сроки пребывания в последние 14 дней до прибытия в Казахстан",
//         field: "from"
//       },
//       { title: "Регион", field: "region" },
//       {
//         title: "Место жительства, либо предполагаемое место проживания",
//         field: "residence"
//       },
//       { title: "Место работы", field: "workPlace" },
//       { title: "Найден (да/нет)", field: "found" },
//       { title: "Госпитализирован (да/нет)", field: "hospitalized" },
//       { title: "Место госпитализации", field: "hospitalizationPlace" }
//     ]
//   });

//   // var data= {newList.location.state.newList.map(key => key.map((passenger, index) => arrivalDate: {passenger.create_date}))}

//   return (
//     <MaterialTable
//       title="Список пассажиров"
//       columns={state.columns}
//       data={state.data}
//       editable={{
//         onRowAdd: newData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.push(newData);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           }),
//         onRowUpdate: (newData, oldData) =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               if (oldData) {
//                 setState(prevState => {
//                   const data = [...prevState.data];
//                   data[data.indexOf(oldData)] = newData;
//                   return { ...prevState, data };
//                 });
//               }
//             }, 600);
//           }),
//         onRowDelete: oldData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.splice(data.indexOf(oldData), 1);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           })
//       }}
//     />
//   );
// }

// import React, { Fragment } from "react";

// function Region(newList) {
//   console.log("list", newList.location.state);
//   return (
//     <Fragment>
//       <a href="/region-list">Вернуться к списку регионов</a>
//       <a href="/logout">Выход</a>
//       <div className="table">
//         <div className="table-row table-header">
//           <div className="table-row-item w-30">№</div>
//           <div className="table-row-item">Дата въезда</div>
//           <div className="table-row-item">Рейс</div>
//           <div className="table-row-item">ФИО</div>
//           <div className="table-row-item">ИИН</div>
//           <div className="table-row-item">Дата рождения</div>
//           <div className="table-row-item">Номер паспорта</div>
//           <div className="table-row-item">Гражданство</div>
//           <div className="table-row-item">Номер мобильного телефона</div>
//           <div className="table-row-item">
//             Место и сроки пребывания в последние 14 дней до прибытия в Казахстан
//           </div>
//           <div className="table-row-item">Регион</div>
//           <div className="table-row-item">
//             Место жительства, либо предполагаемое место проживания
//           </div>
//           <div className="table-row-item">Место работы</div>
//           <div className="table-row-item">Найден (да/нет)</div>
//           <div className="table-row-item">Госпитализирован (да/нет)</div>
//           <div className="table-row-item">Место госпитализации</div>
//         </div>
//         {newList.location.state.newList.map(key =>
//           key.map((passenger, index) => (
//             <div className="table-row" key={index}>
//               <div className="table-row-item">{index}</div>
//               <div className="table-row-item">{passenger.create_date}</div>
//               <div className="table-row-item">
//                 {passenger.from} - {passenger.to} {passenger.flight_id}
//               </div>
//               <div className="table-row-item">
//                 {passenger.name} {passenger.surname} {passenger.patronymic}
//               </div>
//               <div className="table-row-item">{passenger.iin}</div>
//               <div className="table-row-item">{passenger.birthday}</div>
//               <div className="table-row-item">1223334</div>
//               <div className="table-row-item">РК</div>
//               <div className="table-row-item">{passenger.phone_number}</div>
//               <div className="table-row-item">{passenger.from}</div>
//               <div className="table-row-item">{passenger.to}</div>
//               <div className="table-row-item">{passenger.residence}</div>
//               <div className="table-row-item">{passenger.work_place}</div>
//               <div className="table-row-item">Да</div>
//               <div className="table-row-item">Да</div>
//               <div className="table-row-item">
//                 Многопрофильный медицинский центр г. Нур-Султан
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </Fragment>
//   );
// }

// export default Region;
