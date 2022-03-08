import React, { memo ,useRef} from 'react';
import {useSelector,useDispatch,useStore} from 'react-redux';
import { sortData } from '../../redux/action';
import { root, userData } from '../../redux/types_redux';
import Table from '../Table/Table';
 
const TableWrapper = memo(() => {
    
const {UserReducer,FilterReducer}= useSelector((state:root)=>state);
const dispatch=useDispatch();
 console.log(FilterReducer);

  let tableData=UserReducer.data; 
  const tablerHeaders=Object.keys(tableData[0]);     
  
  if(FilterReducer.sortBy!=="DEFAULT"){
    tableData= _sortData(tableData,FilterReducer.sortBy)
  };

   console.log(tableData);

   const handleClick=(event:any)=>{
     const value= event.target.value;
     console.log("value of clicked",value);
     const sortBy=value==="DEFAULT"?"CLOSED":value==="CLOSED"?"ACTIVE":"CLOSED"
      dispatch(sortData(sortBy));
   }
    return (
        <div>
             <div className='flex-row'>
             <div className='table-filter-box'>Company 
             <button></button>
             </div>
             <div className='table-filter-box'>
                 Status
                 <button value={FilterReducer.sortBy} onClick={handleClick}>up</button>
             </div>
            </div>
          <Table
       tableHeaders={tablerHeaders}
       tableData={tableData}
       ></Table>
        </div>
    );
});

export default TableWrapper;



const _sortData=(data:any,sortingType:"ACTIVE"|"CLOSED")=>{
   

    console.log("sortData is called for sorting...",data);
 
    const sortedArr= data.sort((a:userData,b:userData)=>{
     
         const status=a.status.toLowerCase()==sortingType.toLowerCase()?true:false;
       //  console.log(" STATUS------- ",sortingType);
      if(status){
       return -1;
      }
 
       return 1;
 
     })
     console.log('sorted array',sortedArr);
     return sortedArr;
 }
 