import{j as n,R as g}from"./iframe-B_B0ix9j.js";import{c as b}from"./clsx-B-dksMZM.js";import{S as f,E as j}from"./SuccessIcon-Bd91T-IY.js";import{W as y}from"./WarningIcon-BGlrY9UE.js";import{T as L}from"./Text-C5toct4a.js";const S={error:j,success:f,warning:y,help:g.Fragment},l=({id:s,helpLabel:e,errorLabel:a,label:r,labelType:o="help",className:u,srOnly:c,...i})=>{const p=o==="help"||e&&!a,t=a||e||r,m=t?b("jkl-form-support-label",u,{"jkl-sr-only":c}):"jkl-dormant-form-support-label",d=t?i:{},k=S[o];return n.jsxs(L,{short:!0,size:"s",subdued:!!p,id:s,...d,className:m,"data-color":p?void 0:o,children:[n.jsx(k,{className:"jkl-form-support-label__icon"}),a||e||r]})};try{l.displayName="SupportLabel",l.__docgenInfo={description:"",displayName:"SupportLabel",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/input-group/SupportLabel.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"}],description:"En ID er påkrevd for å kunne referere til SupportLabel med aria-describedby.",name:"id",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"},required:!0,tags:{example:`\`\`\`tsx
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
- "success" viser SuccessIcon`,name:"labelType",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"},required:!1,tags:{default:'"help"'},type:{name:"enum",raw:"SupportLabelType",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"help"'}]}},className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"}],description:"",name:"className",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"},required:!1,tags:{},type:{name:"string"}},srOnly:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"}],description:"",name:"srOnly",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"SupportLabelProps"},required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}export{l as S};
