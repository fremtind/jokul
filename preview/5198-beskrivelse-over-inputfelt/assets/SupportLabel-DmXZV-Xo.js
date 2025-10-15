import{c as y}from"./clsx-B-dksMZM.js";import{R as s}from"./index-siqcju79.js";import{E as g}from"./ErrorIcon-BUXYVAIL.js";import{S as h,W as I}from"./WarningIcon-CnuYLHnq.js";const w=({id:i,helpLabel:n,errorLabel:e,label:l,labelType:r="help",density:p,className:d,srOnly:c,...u})=>{const a=e||n||l,m=r==="help"||n&&!e,f=r==="warning"||e,t=r==="error",o=r==="success",b=a?y("jkl-form-support-label",d,{"jkl-form-support-label--sr-only":c,"jkl-form-support-label--help":m,"jkl-form-support-label--error":t,"jkl-form-support-label--warning":f,"jkl-form-support-label--success":o}):"jkl-dormant-form-support-label",v=a?u:{},k=t?g:o?h:I;return s.createElement("span",{id:i,className:b,...v,"data-density":p},s.createElement(k,{variant:"small",className:"jkl-form-support-label__icon"}),s.createElement("span",null,e||n||l))};w.__docgenInfo={description:"",methods:[],displayName:"SupportLabel",props:{id:{required:!0,tsType:{name:"string"},description:`En ID er påkrevd for å kunne referere til SupportLabel med aria-describedby.

@example
 \`\`\`tsx
 const uid = useId();
 const supportId = useId();
 const hasSupportText = helpLabel || errorLabel;
 const describedBy = hasSupportText ? supportId : undefined;

 return (
   <div>
     <Label standAlone htmlFor={uid}>
       Velg en tekst
     </Label>
     <select
       id={uid}
       aria-describedby={describedBy}
     >
       <option value="e">Example</option>
     </select>
     <SupportLabel
       id={supportId}
       label={errorLabel}
       labelType="error"
       density={density}
     />
   </div>
 );
 \`\`\``},helpLabel:{required:!1,tsType:{name:"ReactNode"},description:"@deprecated Bruk `label` for å få samme resultat."},errorLabel:{required:!1,tsType:{name:"ReactNode"},description:'@deprecated Bruk `label` og `labelType="warning"` for å få samme resultat.'},label:{required:!1,tsType:{name:"ReactNode"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"help" | "error" | "warning" | "success"',elements:[{name:"literal",value:'"help"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'}]},description:`Bestemmer hvilket ikon som skal vises:

- "help" viser ikke noe ikon
- "warning" viser WarningIcon, det som tidligere ble vist med \`errorLabel\`
- "error" viser ErrorIcon
- "success" viser SuccessIcon

@default "help"`,defaultValue:{value:'"help"',computed:!1}},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},srOnly:{required:!1,tsType:{name:"boolean"},description:""},position:{required:!1,tsType:{name:"union",raw:'"above-field" | "below-field"',elements:[{name:"literal",value:'"above-field"'},{name:"literal",value:'"below-field"'}]},description:`Bestemmer om support label rendres over eller under input-feltet
hvis den brukes i InputGroup eller FieldGroup-komponentene.
@default "below-field"`}}};export{w as S};
