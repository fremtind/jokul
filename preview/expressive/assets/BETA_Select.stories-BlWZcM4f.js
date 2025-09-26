import{R as e}from"./index-siqcju79.js";import{c}from"./clsx-B-dksMZM.js";import{S as m}from"./SupportLabel-Bm3W2hYF.js";/* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";const r=({children:l,className:i,placeholder:n="Velg",label:t="Label",description:a,errorMessage:p,...s})=>e.createElement("div",{className:c("BETA_jkl-select",i)},e.createElement("label",{htmlFor:`${t}-select`},t),a&&e.createElement("p",{id:`${t}-select-description`,className:"description"},a),e.createElement("select",{id:`${t}-select`,"aria-describedby":`${t}-select-error ${t}-select-description`,...s},n&&e.createElement("option",{disabled:!0,selected:!0,value:""},n),l),p&&e.createElement(m,{id:`${t}-select-error`,className:"error",label:p,labelType:"error"}));r.__docgenInfo={description:"",methods:[],displayName:"BETA_Select",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Label"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Velg"',computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"Expressive/Select",component:r,parameters:{layout:"centered"},args:{placeholder:"Velg",label:"Skriv noe her"},tags:["autodocs","forms"]},o={name:"Beta Select",render:l=>e.createElement(r,{...l},e.createElement("optgroup",{label:"Gruppe 1"},e.createElement("option",null,"Valg 1.1"),e.createElement("option",null,"Valg 1.2"),e.createElement("option",null,"Valg 1.3"),e.createElement("option",null,"Valg 1.4"),e.createElement("option",null,"Valg 1.5")),e.createElement("optgroup",{label:"Gruppe 2"},e.createElement("option",null,"Valg 2.1"),e.createElement("option",null,"Valg 2.2"),e.createElement("option",null,"Valg 2.3")),e.createElement("optgroup",{label:"Gruppe 3"},e.createElement("option",null,"Valg 3.1")))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Beta Select",
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
}`,...o.parameters?.docs?.source}}};const T=["_Select"];export{o as _Select,T as __namedExportsOrder,_ as default};
