import{c as y}from"./clsx-B-dksMZM.js";import{R as s}from"./index-siqcju79.js";import{E as g}from"./ErrorIcon-DGsYbkdO.js";import{S as h,W as I}from"./WarningIcon-C_fFKyVL.js";const S=({id:i,helpLabel:n,errorLabel:e,label:a,labelType:r="help",density:p,className:c,srOnly:d,...m})=>{const t=e||n||a,u=r==="help"||n&&!e,f=r==="warning"||e,l=r==="error",o=r==="success",b=t?y("jkl-form-support-label",c,{"jkl-form-support-label--sr-only":d,"jkl-form-support-label--help":u,"jkl-form-support-label--error":l,"jkl-form-support-label--warning":f,"jkl-form-support-label--success":o}):"jkl-dormant-form-support-label",k=t?m:{},v=l?g:o?h:I;return s.createElement("span",{id:i,className:b,...k,"data-density":p},s.createElement(v,{variant:"small",className:"jkl-form-support-label__icon"}),s.createElement("span",null,e||n||a))};S.__docgenInfo={description:"",methods:[],displayName:"SupportLabel",props:{id:{required:!0,tsType:{name:"string"},description:`En ID er påkrevd for å kunne referere til SupportLabel med aria-describedby.

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

@default "help"`,defaultValue:{value:'"help"',computed:!1}},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},srOnly:{required:!1,tsType:{name:"boolean"},description:""}}};export{S};
