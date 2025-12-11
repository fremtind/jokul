import{R as e}from"./index-siqcju79.js";import{C as b}from"./Card-fliJQsdw.js";import{F as j}from"./Flex-DP-fj2ie.js";import{c as C}from"./clsx-B-dksMZM.js";import{u as _}from"./useId-CahK3IZ3.js";import{D as I}from"./DismissButton-C_71uvrR.js";import{E as x}from"./ErrorIcon-BUXYVAIL.js";import{I as N}from"./InfoIcon-BUv3PgcW.js";import{W,S as D}from"./WarningIcon-CnuYLHnq.js";/* empty css               */import"./_commonjsHelpers-DaWZu8wl.js";import"./SlotComponent-CWN6EcE2.js";import"./tokens-CvksrKef.js";import"./CloseIcon-bvBUMA_V.js";import"./Icon-mINJCSxV.js";const g=({messageType:s})=>{switch(s){case"error":return e.createElement(x,{className:"jkl-system-message__icon"});case"info":return e.createElement(N,{className:"jkl-system-message__icon"});case"success":return e.createElement(D,{className:"jkl-system-message__icon"});case"warning":return e.createElement(W,{className:"jkl-system-message__icon"});default:return null}};g.__docgenInfo={description:"",methods:[],displayName:"MessageIcon",props:{messageType:{required:!0,tsType:{name:"union",raw:'"info" | "error" | "success" | "warning"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'}]},description:""}}};function o(s){return({id:i,className:y,density:h,maxContentWidth:k,paddingLeft:f,role:w="status",dismissed:E,dismissAction:l,children:S,...M})=>{const d=_(i||"jkl-system-message",{generateSuffix:!i});return e.createElement("div",{role:w,...M,id:d,className:C("jkl-system-message",`jkl-system-message--${s}`,y,{"jkl-system-message--dismissed":E}),"data-density":h},e.createElement("div",{className:"jkl-system-message__content","data-testid":"system-message-content","data-theme":"light",style:{maxWidth:k,paddingLeft:f}},e.createElement(g,{messageType:s}),e.createElement("span",{className:"jkl-system-message__message"},S),l?.handleDismiss&&e.createElement(I,{"data-theme":"light","aria-controls":d,className:"jkl-system-message__dismiss-button",label:l.buttonTitle||"Lukk",onClick:l.handleDismiss})))}}const u=o("info");u.displayName="InfoSystemMessage";const m=o("error");m.displayName="ErrorSystemMessage";const p=o("warning");p.displayName="WarningSystemMessage";const v=o("success");v.displayName="SuccessSystemMessage";const X={title:"Komponenter/SystemMessage",component:m,parameters:{layout:"centered"},args:{dismissed:!1,dismissAction:{buttonTitle:"Fjern melding",handleDismiss:()=>""},children:"Melding om noe som har skjedd i systemet.",maxContentWidth:"120ch",paddingLeft:"24px",role:"status"},tags:["autodocs"]},F=["Hund og katt","Livsforsikring","Hus","Innbo","Reise","Barneforsikring","Hus 2"],c=e.createElement(j,{gap:24,wrap:!0,direction:"column",alignContent:"center",justifyContent:"center",style:{padding:"24px"}},F.map(s=>e.createElement(b,{key:s,clickable:!0},s))),r={render:s=>e.createElement("div",{style:{width:"70svw",height:"50dvh",backgroundColor:"var(--jkl-color-background-page)",overflow:"scroll"}},e.createElement(m,{...s}),c)},a={render:s=>e.createElement("div",{style:{width:"70svw",height:"50dvh",backgroundColor:"var(--jkl-color-background-page)",overflow:"scroll"}},e.createElement(v,{...s}),c)},t={render:s=>e.createElement("div",{style:{width:"70svw",height:"50dvh",backgroundColor:"var(--jkl-color-background-page)",overflow:"scroll"}},e.createElement(p,{...s}),c)},n={render:s=>e.createElement("div",{style:{width:"70svw",height:"50dvh",backgroundColor:"var(--jkl-color-background-page)",overflow:"scroll"}},e.createElement(u,{...s}),c)};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      width: "70svw",
      height: "50dvh",
      backgroundColor: "var(--jkl-color-background-page)",
      overflow: "scroll"
    }}>
                <ErrorSystemMessage {...args} />
                {exampleContent}
            </div>;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      width: "70svw",
      height: "50dvh",
      backgroundColor: "var(--jkl-color-background-page)",
      overflow: "scroll"
    }}>
                <SuccessSystemMessage {...args} />
                {exampleContent}
            </div>;
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      width: "70svw",
      height: "50dvh",
      backgroundColor: "var(--jkl-color-background-page)",
      overflow: "scroll"
    }}>
                <WarningSystemMessage {...args} />
                {exampleContent}
            </div>;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      width: "70svw",
      height: "50dvh",
      backgroundColor: "var(--jkl-color-background-page)",
      overflow: "scroll"
    }}>
                <InfoSystemMessage {...args} />
                {exampleContent}
            </div>;
  }
}`,...n.parameters?.docs?.source}}};const Y=["ErrorMessage","SuccessMessage","WarningMessage","InfoMessage"];export{r as ErrorMessage,n as InfoMessage,a as SuccessMessage,t as WarningMessage,Y as __namedExportsOrder,X as default};
