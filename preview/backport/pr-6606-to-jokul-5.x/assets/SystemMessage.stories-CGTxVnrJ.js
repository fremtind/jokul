import{j as e}from"./iframe-DP8Xf_qW.js";import{c as y}from"./clsx-B-dksMZM.js";import{u as v}from"./useId-DCOUoPrx.js";import{D as j}from"./DismissButton-C-Rz7cVw.js";import{C as x,g as b}from"./types-IsTkoTmK.js";import{S as _,E as S}from"./SuccessIcon-CbZ15OhW.js";import{I as w}from"./InfoIcon-DKErNC0B.js";import{W as M}from"./WarningIcon-1AHRTzaM.js";import"./preload-helper-PPVm8Dsz.js";import"./CloseIcon-DOvl4PHi.js";import"./Icon-k8xo1fZn.js";const g=({variant:s})=>{switch(s){case"error":return e.jsx(S,{className:"jkl-system-message__icon"});case"info":return e.jsx(w,{className:"jkl-system-message__icon"});case"success":return e.jsx(_,{className:"jkl-system-message__icon"});case"warning":return e.jsx(M,{className:"jkl-system-message__icon"});default:return null}};g.__docgenInfo={description:"",methods:[],displayName:"MessageIcon",props:{variant:{required:!0,tsType:{name:"union",raw:'"info" | "error" | "success" | "warning"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'}]},description:""}}};const a=({id:s,className:p,maxContentWidth:o,paddingLeft:k,role:f="status",dismissed:m,variant:l="info",dismissAction:r,children:i,trackingProps:d,...c})=>{const u=v(s||"jkl-system-message",{generateSuffix:!s});return e.jsx("div",{...c,role:f,id:u,className:y("jkl-system-message",p,{"jkl-system-message--dismissed":m}),"data-color":l,"data-testid":"jkl-system-message","data-track-component-name":x.SystemMessage,"data-track-id":d?.id,"data-track-label":typeof i=="string"?i:void 0,"data-track-dismissed":m,"data-track-max-content-width":o,...b(d?.extra,c),children:e.jsxs("div",{className:"jkl-system-message__content","data-testid":"system-message-content",style:{maxWidth:o,paddingLeft:k},children:[e.jsx(g,{variant:l}),e.jsx("span",{className:"jkl-system-message__message",children:i}),r?.handleDismiss&&e.jsx(j,{"aria-controls":u,className:"jkl-system-message__dismiss-button",label:r.buttonTitle||"Lukk",onClick:r.handleDismiss})]})})};a.__docgenInfo={description:"",methods:[],displayName:"SystemMessage",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},maxContentWidth:{required:!1,tsType:{name:"string"},description:""},paddingLeft:{required:!1,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"union",raw:"AriaRole | string",elements:[{name:"AriaRole"},{name:"string"}]},description:'Overstyr standardrollen til meldingen. Om du ønsker å "skru av" rollen kan du bruke verdien `none` eller `presentation`.\n\n@see https://www.w3.org/TR/wai-aria-1.2/#role_definitions',defaultValue:{value:'"status"',computed:!1}},dismissed:{required:!1,tsType:{name:"boolean"},description:""},dismissAction:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    handleDismiss: () => void;
    buttonTitle?: string;
}`,signature:{properties:[{key:"handleDismiss",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"buttonTitle",value:{name:"string",required:!1}}]}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:`Setter type melding.

@default "info"`,defaultValue:{value:'"info"',computed:!1}},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * En unik identifikator for komponenten som skal spores. Mappes til \`data-track-id\`.
     */
    id?: string;
    /**
     * Ekstra sporingsfelt utover de faste feltene over, for team som trenger å
     * spore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget
     * \`data-track-<kebab-case-nøkkel>\`-attributt i DOM-en, se \`getExtraTrackingAttributes\`.
     */
    extra?: Record<string, string | number | boolean>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""}}};const{fn:T}=__STORYBOOK_MODULE_TEST__,L={title:"Komponenter/SystemMessage",component:a,args:{dismissed:!1,dismissAction:{buttonTitle:"Fjern melding",handleDismiss:T()},children:"Melding om noe som har skjedd i systemet.",maxContentWidth:"120ch",paddingLeft:"24px",role:"status",variant:"info"},argTypes:{role:{options:["status","presentation","none"],control:"select"}}},n={},t={render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{...s,variant:"info",children:"Info: melding om noe som har skjedd i systemet."}),e.jsx(a,{...s,variant:"success",children:"Success: operasjonen ble fullført."}),e.jsx(a,{...s,variant:"warning",children:"Warning: noe kan være galt, ta en kikk."}),e.jsx(a,{...s,variant:"error",children:"Error: noe gikk galt og må rettes opp."})]})},V=["_SystemMessage","AlleVarianter"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{t as AlleVarianter,n as _SystemMessage,V as __namedExportsOrder,L as default};
