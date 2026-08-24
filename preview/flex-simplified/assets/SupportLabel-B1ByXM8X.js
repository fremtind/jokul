import{j as s}from"./iframe-uPNgk1Tq.js";import{c as v}from"./clsx-B-dksMZM.js";import{E as g,S as h}from"./SuccessIcon-DUyIxYqh.js";import{W as I}from"./WarningIcon-CaPkp4OG.js";const u=({id:a,helpLabel:n,errorLabel:e,label:l,labelType:r="help",className:i,srOnly:c,...d})=>{const o=e||n||l,m=r==="help"||n&&!e,f=r==="warning"||e,t=r==="error",p=r==="success",b=o?v("jkl-form-support-label",i,{"jkl-form-support-label--sr-only":c,"jkl-form-support-label--help":m,"jkl-form-support-label--error":t,"jkl-form-support-label--warning":f,"jkl-form-support-label--success":p}):"jkl-dormant-form-support-label",k=o?d:{},y=t?g:p?h:I;return s.jsxs("span",{id:a,className:b,...k,children:[s.jsx(y,{variant:"small",className:"jkl-form-support-label__icon"}),s.jsx("span",{children:e||n||l})]})};try{u.displayName="SupportLabel",u.__docgenInfo={description:"",displayName:"SupportLabel",props:{id:{defaultValue:null,description:`En ID er påkrevd for å kunne referere til SupportLabel med aria-describedby.
@example  \`\`\`tsx
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
     />
   </div>
 );
 \`\`\``,name:"id",required:!0,type:{name:"string"}},helpLabel:{defaultValue:null,description:"@deprecated Bruk `label` for å få samme resultat.",name:"helpLabel",required:!1,type:{name:"ReactNode"}},errorLabel:{defaultValue:null,description:'@deprecated Bruk `label` og `labelType="warning"` for å få samme resultat.',name:"errorLabel",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},labelType:{defaultValue:{value:"help"},description:`Bestemmer hvilket ikon som skal vises:

- "help" viser ikke noe ikon
- "warning" viser WarningIcon, det som tidligere ble vist med \`errorLabel\`
- "error" viser ErrorIcon
- "success" viser SuccessIcon`,name:"labelType",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"help"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},srOnly:{defaultValue:null,description:"",name:"srOnly",required:!1,type:{name:"boolean"}}}}}catch{}export{u as S};
