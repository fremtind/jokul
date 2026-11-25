import{j as n,r as f}from"./iframe-BJ_mJici.js";import{F as b}from"./File-D4c4cpe3.js";import{M as v,D as F,F as c,c as u,r as S}from"./_index-b_S8WvOu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BpARvV0c.js";import"./SlotComponent-C0-Anlfn.js";import"./mergeRefs-_7lZvp9j.js";import"./Text-DpndKmO3.js";import"./Link-o0CeXE2o.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./Button-BSIpUmSM.js";import"./usePreviousValue-C_qketvK.js";import"./Loader-D-6HSL9h.js";import"./useDelayedRender-DYkij-dj.js";import"./TrashCanIcon-DU3W1D2j.js";import"./Icon-B9qwA0Hc.js";import"./SupportLabel-BuImmtdx.js";import"./SuccessIcon-BEeJ4VKh.js";import"./WarningIcon-DbX7k76e.js";import"./FieldGroup-CrQbachv.js";import"./useId-DFpnkjgS.js";import"./Label-BYsnujlo.js";import"./cow-CdXr5BwN.js";const H={title:"Komponenter/File Input",component:c,subcomponents:{File:b,Dropzone:F,MaxSize:v},args:{variant:"flexible",fileVariant:"list",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6},argTypes:{variant:{control:{type:"inline-radio"}},fileVariant:{control:{type:"inline-radio"}}},render:t=>{const[l,p]=f.useState(t.value);return n.jsx(c,{...t,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:l,onChange:(d,s)=>p(m=>[...m,...s]),children:S(l,d=>p(s=>s.filter((m,g)=>g!==d)))})}},a={name:"File Input"},o={name:"Liten",args:{variant:"small"}},i={name:"Med valgte filer",args:{value:u(["bilde-1.png","bilde-2.png","bok.pdf"])}},e={name:"Filer vist som kort",args:{fileVariant:"card",value:u(["bilde-1.png","bilde-2.png","bilde-3.png","bilde-4.png","dokument-1.pdf","dokument-2.pdf"])},parameters:{layout:"fullscreen"},decorators:[t=>n.jsx("div",{style:{padding:"2rem"},children:n.jsx(t,{})})]},r={args:{disabled:!0}},J=["FileInputStory","Small","MedValgteFiler","FilerSomKort","Disabled"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
