import{j as r}from"./iframe-_1pRzrQ9.js";import{c as j}from"./clsx-B-dksMZM.js";import{E as y,S}from"./SuccessIcon-DhJLGs3I.js";import{W as L}from"./WarningIcon-BcLLj30z.js";const u=({id:o,helpLabel:a,errorLabel:e,label:p,labelType:s="help",className:c,srOnly:i,...m})=>{const n=e||a||p,d=s==="help"||a&&!e,k=s==="warning"||e,t=s==="error",l=s==="success",g=n?j("jkl-form-support-label",c,{"jkl-form-support-label--sr-only":i,"jkl-form-support-label--help":d,"jkl-form-support-label--error":t,"jkl-form-support-label--warning":k,"jkl-form-support-label--success":l}):"jkl-dormant-form-support-label",f=n?m:{},b=t?y:l?S:L;return r.jsxs("span",{id:o,className:g,...f,children:[r.jsx(b,{variant:"small",className:"jkl-form-support-label__icon"}),r.jsx("span",{children:e||a||p})]})};try{u.displayName="SupportLabel",u.__docgenInfo={description:"",displayName:"SupportLabel",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/input-group/SupportLabel.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"}],description:"En ID er påkrevd for å kunne referere til SupportLabel med aria-describedby.",name:"id",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"},required:!0,tags:{example:`\`\`\`tsx
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
 \`\`\``},type:{name:"string"}},helpLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"}],description:"",name:"helpLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"},required:!1,tags:{deprecated:"Bruk `label` for å få samme resultat."},type:{name:"ReactNode"}},errorLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"}],description:"",name:"errorLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"},required:!1,tags:{deprecated:'Bruk `label` og `labelType="warning"` for å få samme resultat.'},type:{name:"ReactNode"}},label:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"}],description:"",name:"label",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"},required:!1,tags:{},type:{name:"ReactNode"}},labelType:{defaultValue:{value:"help"},declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"}],description:`Bestemmer hvilket ikon som skal vises:

- "help" viser ikke noe ikon
- "warning" viser WarningIcon, det som tidligere ble vist med \`errorLabel\`
- "error" viser ErrorIcon
- "success" viser SuccessIcon`,name:"labelType",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"},required:!1,tags:{default:'"help"'},type:{name:"enum",raw:"SupportLabelType",value:[{value:'"error"'},{value:'"warning"'},{value:'"success"'},{value:'"help"'}]}},className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"}],description:"",name:"className",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"},required:!1,tags:{},type:{name:"string"}},srOnly:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"}],description:"",name:"srOnly",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"},required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}export{u as S};
