import{j as s}from"./iframe-CjhOYAjm.js";import{c as y}from"./clsx-B-dksMZM.js";import{u as j}from"./useId-BN9niFOX.js";import{D as f}from"./DismissButton-C2kw-uJ2.js";import{S as k,E as x}from"./SuccessIcon-Bt4PTcoQ.js";import{I as _}from"./InfoIcon-DR61ajGH.js";import{W as S}from"./WarningIcon-DYsGWqlb.js";import"./preload-helper-PPVm8Dsz.js";import"./CloseIcon-BxcKpaZ1.js";import"./Icon-CqRapZls.js";const h=({variant:e})=>{switch(e){case"error":return s.jsx(x,{className:"jkl-system-message__icon"});case"info":return s.jsx(_,{className:"jkl-system-message__icon"});case"success":return s.jsx(k,{className:"jkl-system-message__icon"});case"warning":return s.jsx(S,{className:"jkl-system-message__icon"});default:return null}},a=({id:e,className:i,maxContentWidth:l,paddingLeft:c,role:g="status",dismissed:d,variant:o="info",dismissAction:r,children:p,...u})=>{const m=j(e||"jkl-system-message",{generateSuffix:!e});return s.jsx("div",{role:g,...u,id:m,className:y("jkl-system-message",`jkl-system-message--${o}`,i,{"jkl-system-message--dismissed":d}),children:s.jsxs("div",{className:"jkl-system-message__content","data-testid":"system-message-content",style:{maxWidth:l,paddingLeft:c},children:[s.jsx(h,{variant:o}),s.jsx("span",{className:"jkl-system-message__message",children:p}),r?.handleDismiss&&s.jsx(f,{"aria-controls":m,className:"jkl-system-message__dismiss-button",label:r.buttonTitle||"Lukk",onClick:r.handleDismiss})]})})},{fn:v}=__STORYBOOK_MODULE_TEST__,L={title:"Komponenter/SystemMessage",component:a,args:{dismissed:!1,dismissAction:{buttonTitle:"Fjern melding",handleDismiss:v()},children:"Melding om noe som har skjedd i systemet.",maxContentWidth:"120ch",paddingLeft:"24px",role:"status",variant:"info"},argTypes:{role:{options:["status","presentation","none"],control:"select"}}},n={},t={render:e=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[s.jsx(a,{...e,variant:"info",children:"Info: melding om noe som har skjedd i systemet."}),s.jsx(a,{...e,variant:"success",children:"Success: operasjonen ble fullført."}),s.jsx(a,{...e,variant:"warning",children:"Warning: noe kan være galt, ta en kikk."}),s.jsx(a,{...e,variant:"error",children:"Error: noe gikk galt og må rettes opp."})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }}>
            <SystemMessage {...args} variant="info">
                Info: melding om noe som har skjedd i systemet.
            </SystemMessage>
            <SystemMessage {...args} variant="success">
                Success: operasjonen ble fullført.
            </SystemMessage>
            <SystemMessage {...args} variant="warning">
                Warning: noe kan være galt, ta en kikk.
            </SystemMessage>
            <SystemMessage {...args} variant="error">
                Error: noe gikk galt og må rettes opp.
            </SystemMessage>
        </div>
}`,...t.parameters?.docs?.source}}};const B=["_SystemMessage","AlleVarianter"];export{t as AlleVarianter,n as _SystemMessage,B as __namedExportsOrder,L as default};
