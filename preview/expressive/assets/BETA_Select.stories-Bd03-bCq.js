import{r as u,R as e}from"./index-siqcju79.js";import{c as d}from"./clsx-B-dksMZM.js";import{S as g}from"./SupportLabel-Bm3W2hYF.js";import{B as E}from"./Button-Bm5jRD6q.js";import{I as V}from"./Icon-mINJCSxV.js";/* empty css               *//* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";const r=({children:l,className:i,placeholder:a="Velg",label:s="Label",description:n,errorMessage:p,helpMessage:c,...m})=>{const t=u.useId();return e.createElement("div",{className:d("BETA_jkl-select",i)},e.createElement("label",{htmlFor:`${t}-select`},s),n&&e.createElement("p",{id:`${t}-select-description`,className:"description"},n),e.createElement("select",{id:`${t}-select`,"aria-describedby":`${t}-select-error ${t}-select-description`,"aria-details":`${t}-select-help`,...m},a&&e.createElement("option",{disabled:!0,selected:!0,value:""},a),l),p&&e.createElement(g,{id:`${t}-select-error`,className:"error",label:p,labelType:"error"}),c&&e.createElement(E,{variant:"ghost",icon:e.createElement(V,null,"help"),iconPosition:"left",className:"help",id:`${t}-select-help`},"Hvorfor spør vi om dette?"))};r.__docgenInfo={description:"",methods:[],displayName:"BETA_Select",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Label"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Velg"',computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:""},helpMessage:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Expressive/Select",component:r,parameters:{layout:"centered"},args:{placeholder:"Velg",label:"Skriv noe her"},tags:["autodocs","forms"]},o={render:l=>e.createElement(r,{...l},e.createElement("optgroup",{label:"Gruppe 1"},e.createElement("option",null,"Valg 1.1"),e.createElement("option",null,"Valg 1.2"),e.createElement("option",null,"Valg 1.3"),e.createElement("option",null,"Valg 1.4"),e.createElement("option",null,"Valg 1.5")),e.createElement("optgroup",{label:"Gruppe 2"},e.createElement("option",null,"Valg 2.1"),e.createElement("option",null,"Valg 2.2"),e.createElement("option",null,"Valg 2.3")),e.createElement("optgroup",{label:"Gruppe 3"},e.createElement("option",null,"Valg 3.1")))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <BETA_Select {...args}>
            <optgroup label="Gruppe 1">
                <option>Valg 1.1</option>
                <option>Valg 1.2</option>
                <option>Valg 1.3</option>
                <option>Valg 1.4</option>
                <option>Valg 1.5</option>
            </optgroup>
            <optgroup label="Gruppe 2">
                <option>Valg 2.1</option>
                <option>Valg 2.2</option>
                <option>Valg 2.3</option>
            </optgroup>
            <optgroup label="Gruppe 3">
                <option>Valg 3.1</option>
            </optgroup>
        </BETA_Select>
}`,...o.parameters?.docs?.source}}};const N=["_Select"];export{o as _Select,N as __namedExportsOrder,A as default};
