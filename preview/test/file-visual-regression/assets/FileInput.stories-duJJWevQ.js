import{j as n,r as f}from"./iframe-DEp7TuSU.js";import{F as b}from"./File-Kw-8abhr.js";import{M as v,D as F,F as c,c as u,r as S}from"./_index-D7qVWn19.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BNfjuLsj.js";import"./SlotComponent-BdtRrqjQ.js";import"./mergeRefs-_7lZvp9j.js";import"./Text-B6-sKVFu.js";import"./Link-Dd_ByTQ6.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./Button-Yb6JANyb.js";import"./usePreviousValue-CN26swNn.js";import"./Loader-DDkyYrxb.js";import"./useDelayedRender-BBpUSCvU.js";import"./TrashCanIcon-SQ8p7TY4.js";import"./Icon-Ch5N_p1U.js";import"./SupportLabel-DwKTrBGC.js";import"./SuccessIcon-joNuZVhC.js";import"./WarningIcon-DT-qy095.js";import"./FieldGroup-Doj1UwLe.js";import"./useId-nteQJo5V.js";import"./Label-Dx_W1dhF.js";import"./cow-CdXr5BwN.js";const H={title:"Komponenter/File Input",component:c,subcomponents:{File:b,Dropzone:F,MaxSize:v},args:{variant:"flexible",fileVariant:"list",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6},argTypes:{variant:{control:{type:"inline-radio"}},fileVariant:{control:{type:"inline-radio"}}},render:t=>{const[l,p]=f.useState(t.value);return n.jsx(c,{...t,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:l,onChange:(d,s)=>p(m=>[...m,...s]),children:S(l,d=>p(s=>s.filter((m,g)=>g!==d)))})}},a={name:"File Input"},o={name:"Liten",args:{variant:"small"}},i={name:"Med valgte filer",args:{value:u(["bilde-1.png","bilde-2.png","bok.pdf"])}},e={name:"Filer vist som kort",args:{fileVariant:"card",value:u(["bilde-1.png","bilde-2.png","bilde-3.png","bilde-4.png","dokument-1.pdf","dokument-2.pdf"])},parameters:{layout:"fullscreen"},decorators:[t=>n.jsx("div",{style:{padding:"2rem"},children:n.jsx(t,{})})]},r={args:{disabled:!0}},J=["FileInputStory","Small","MedValgteFiler","FilerSomKort","Disabled"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "File Input"
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Liten",
  args: {
    variant: "small"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Med valgte filer",
  args: {
    value: createUploadedFiles(["bilde-1.png", "bilde-2.png", "bok.pdf"])
  }
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Filer vist som kort",
  args: {
    fileVariant: "card",
    value: createUploadedFiles(["bilde-1.png", "bilde-2.png", "bilde-3.png", "bilde-4.png", "dokument-1.pdf", "dokument-2.pdf"])
  },
  parameters: {
    layout: "fullscreen"
  },
  decorators: [Story => <div style={{
    padding: "2rem"
  }}>
                <Story />
            </div>]
}`,...e.parameters?.docs?.source},description:{story:'Med `fileVariant="card"` vises filene alltid som et rutenett, side om side.',...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Rotelementet er et `fieldset`, så `disabled` slår av filvelgeren nativt. Dropsonen dempes\nfordi den er selve kontrollflaten, mens legend og støttetekster beholder full kontrast.",...r.parameters?.docs?.description}}};export{r as Disabled,a as FileInputStory,e as FilerSomKort,i as MedValgteFiler,o as Small,J as __namedExportsOrder,H as default};
