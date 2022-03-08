import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Components/Table/Table';
/**Redux setup*/
import ReduxWrapper from './redux/ReduxWrapper';
 

const tableHeaders=["Name","Company","Status","LastUpdate","Notes"];

interface TableData{
  Name:string,
  Company:string,
  Status:"Active" | "Closed",
  LastUpdate:string,
  Notes:string
};

const tableData:TableData[]=[{
  Name:"Meghraj",
  Company:"Razarpay",
  Status:"Active",
  LastUpdate:"1/07/2022",
  Notes:"Hey hi, its working really good....."
},{
  Name:"Meghraj",
  Company:"Razarpay",
  Status:"Active",
  LastUpdate:"1/07/2022",
  Notes:"Hey hi, its working really good....."
}];

function App(){
  return (
   <ReduxWrapper>
      <div className="App">
      <header className="Admin Panel">
       <Table
      //  tableHeaders={tableHeaders}
      //  tableData={tableData}
       ></Table>
      </header>
    </div>
   </ReduxWrapper>
  );
}

export default App;
