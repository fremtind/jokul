import{j as n}from"./iframe-CeoSNwav.js";import{c as v}from"./clsx-B-dksMZM.js";import{E as h,S as g,W as y}from"./WarningIcon-BZHcKyDl.js";const I=({id:i,helpLabel:s,errorLabel:e,label:a,labelType:r="help",className:p,srOnly:c,...d})=>{const o=e||s||a,u=r==="help"||s&&!e,m=r==="warning"||e,l=r==="error",t=r==="success",f=o?v("jkl-form-support-label",p,{"jkl-form-support-label--sr-only":c,"jkl-form-support-label--help":u,"jkl-form-support-label--error":l,"jkl-form-support-label--warning":m,"jkl-form-support-label--success":t}):"jkl-dormant-form-support-label",b=o?d:{},k=l?h:t?g:y;return n.jsxs("span",{id:i,className:f,...b,children:[n.jsx(k,{variant:"small",className:"jkl-form-support-label__icon"}),n.jsx("span",{children:e||s||a})]})};I.__docgenInfo={description:"",methods:[],displayName:"SupportLabel",props:{id:{required:!0,tsType:{name:"string"},description:`En ID er påkrevd for å kunne referere til SupportLabel med aria-describedby.

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
     />
   </div>
 );
 \`\`\``},helpLabel:{required:!1,tsType:{name:"ReactNode"},description:"@deprecated Bruk `label` for å få samme resultat."},errorLabel:{required:!1,tsType:{name:"ReactNode"},description:'@deprecated Bruk `label` og `labelType="warning"` for å få samme resultat.'},label:{required:!1,tsType:{name:"ReactNode"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"help" | "error" | "warning" | "success"',elements:[{name:"literal",value:'"help"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'}]},description:`Bestemmer hvilket ikon som skal vises:

- "help" viser ikke noe ikon
- "warning" viser WarningIcon, det som tidligere ble vist med \`errorLabel\`
- "error" viser ErrorIcon
- "success" viser SuccessIcon

@default "help"`,defaultValue:{value:'"help"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},srOnly:{required:!1,tsType:{name:"boolean"},description:""}}};export{I as S};
