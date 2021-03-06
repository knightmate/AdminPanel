import React from 'react';
import PropTypes from 'prop-types';
 

interface Props{

}

const inputTypes=[{
    placeHolder:"Name",
    inputType:"text"
},{
 placeHolder:"Company",
 inputType:"text"
},{
 placeHolder:"Status",
 inputType:"text"
},{
 placeHolder:"Notes",
 inputType:"text"
}];



function Form({onSubmit}:{onSubmit:Function}) {
   
    const  onChange=()=>{

    };
    const onFormSubmit=(event:any)=>{
        event.preventDefault();

        const elements=event.target;
        const formObject:any={};
        // console.log("onClick ", event);
        // console.log("onClick ", event.elements);
        for(let i=0;i<elements.length;i++){
             if(elements[i].name!=="")
            formObject[elements[i].name.toLowerCase()]=elements[i].value;
    
        };
        console.log("form  object ",formObject);
        onSubmit(formObject);
    
    };

    return (
        <div style={{display:'flex',width:"80%"}}>
        <form onSubmit={onFormSubmit}>
         
         {
         inputTypes.map((inputItem:any)=>{
             return (
                <>
                <InputField
                placeHolder={inputItem.placeHolder}
                inputType={inputItem.inputType}
                onChange={onChange}
                />
                </>
             )
         })
         }
         <button style={{ alignSelf:'center',padding:"10px",backgroundColor:"pink"}}>Save</button>
        </form>
        </div>
    );
}

export default Form;



const InputField=({inputType,onChange,placeHolder}:{inputType:string,onChange:any,placeHolder:string})=>{
    const [state,setState]=React.useState();

    return(
       <div style={{display:"flex",flexDirection:"column"}}>
       <label>{placeHolder}</label>
        <input name={placeHolder} type="text" ></input>
       </div>
    )

}