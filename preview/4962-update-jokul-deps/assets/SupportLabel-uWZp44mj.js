import{j as n}from"./jsx-runtime-BbjHj44Y.js";import{c as y}from"./clsx-B-dksMZM.js";import"./index-C6mWTJJr.js";import{E as h}from"./ErrorIcon-B0wgdey8.js";import{S as g,W as I}from"./WarningIcon-B6VvEiHT.js";const j=({id:i,helpLabel:s,errorLabel:e,label:a,labelType:r="help",density:p,className:c,srOnly:d,...u})=>{const o=e||s||a,m=r==="help"||s&&!e,f=r==="warning"||e,t=r==="error",l=r==="success",b=o?y("jkl-form-support-label",c,{"jkl-form-support-label--sr-only":d,"jkl-form-support-label--help":m,"jkl-form-support-label--error":t,"jkl-form-support-label--warning":f,"jkl-form-support-label--success":l}):"jkl-dormant-form-support-label",k=o?u:{},v=t?h:l?g:I;return n.jsxs("span",{id:i,className:b,...k,"data-density":p,children:[n.jsx(v,{variant:"small",className:"jkl-form-support-label__icon"}),n.jsx("span",{children:e||s||a})]})};j.__docgenInfo={description:"",methods:[],displayName:"SupportLabel",props:{id:{required:!0,tsType:{name:"string"},description:`En ID er påkrevd for å kunne referere til SupportLabel med aria-describedby.

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

@default "help"`,defaultValue:{value:'"help"',computed:!1}},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},srOnly:{required:!1,tsType:{name:"boolean"},description:""}}};export{j as S};
