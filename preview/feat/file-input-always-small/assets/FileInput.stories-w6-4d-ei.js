import{j as l,r as g}from"./iframe-5zgp32xy.js";import{F as v}from"./File-DEEMj1lm.js";import{F as c,c as f,r as b}from"./_index-BdnJilNr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-B_xXK38T.js";import"./SlotComponent-D5ZqbIGZ.js";import"./mergeRefs-_7lZvp9j.js";import"./Text-3EBBho2z.js";import"./Link-CC6wrBYn.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./Button-Xx5RZTTQ.js";import"./usePreviousValue-CxdHZD8H.js";import"./Loader-DiE3LyNl.js";import"./useDelayedRender--CbPFqg8.js";import"./TrashCanIcon-BNbobogv.js";import"./Icon-B5sT_CSn.js";import"./SupportLabel-CQFH7Kun.js";import"./SuccessIcon-CXbLeWU9.js";import"./WarningIcon-WLHrh0Kb.js";import"./cow-CdXr5BwN.js";import"./FieldGroup-BeOoUraj.js";import"./useId-CTi1mkrH.js";import"./Label-CHW3Ku3Z.js";const{fn:k}=__STORYBOOK_MODULE_TEST__,e={table:{category:"Avansert"}},q={title:"Komponenter/File Input",component:c,subcomponents:{File:v},args:{legend:"Legg til fil",description:"",errorLabel:"",labelProps:{variant:"medium"},value:[],accept:"image/*,.pdf",maxSizeBytes:8e6,multiple:!0,fileVariant:"list",disabled:!1,onChange:k()},argTypes:{legend:{description:"Overskriften til feltet. Rendres som `<legend>`."},description:{description:"Hjelpetekst under overskriften. Maks filstørrelse legges til automatisk når `maxSizeBytes` er satt."},errorLabel:{description:"Feilmelding for hele feltet, f.eks. når det er påkrevd. Feil på enkeltfiler vises på `File`."},tooltip:{description:"Tooltip som vises ved siden av overskriften.",control:!1},labelProps:{description:"Props til overskriften, f.eks. `variant` for størrelse."},helpLabel:{...e,description:"**Deprecated.** Bruk `description` i stedet.",control:!1},value:{control:!1},accept:{table:{type:{summary:'"image/*" | ".pdf" | "image/*,.pdf" | string'}}},fileVariant:{control:{type:"inline-radio"},table:{defaultValue:{summary:'"list"'}}},onChange:{control:!1},id:{...e,control:!1},className:{...e,control:!1},supportLabelProps:{...e,description:"Props til støtteteksten under feltet.",control:!1},trackingProps:{...e,control:!1},"data-testautoid":{...e,control:!1}},render:r=>{const[p,d]=g.useState(r.value);return l.jsx(c,{...r,value:p,onChange:(n,o)=>{r.onChange(n,o),d(m=>[...m,...o])},children:b(p,n=>d(o=>o.filter((m,u)=>u!==n)))})}},i={name:"File Input"},a={name:"Med valgte filer",args:{value:f(["bilde-1.png","bilde-2.png","bok.pdf"])}},t={name:"Filer vist som kort",args:{fileVariant:"card",value:f(["bilde-1.png","bilde-2.png","bilde-3.png","bilde-4.png","dokument-1.pdf","dokument-2.pdf"])},parameters:{layout:"fullscreen"},decorators:[r=>l.jsx("div",{style:{padding:"2rem"},children:l.jsx(r,{})})]},s={args:{disabled:!0}},G=["FileInputStory","MedValgteFiler","FilerSomKort","Disabled"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "File Input"
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Med valgte filer",
  args: {
    value: createUploadedFiles(["bilde-1.png", "bilde-2.png", "bok.pdf"])
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:'Med `fileVariant="card"` vises filene alltid som et rutenett, side om side.',...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Rotelementet er et `fieldset`, så `disabled` slår av filvelgeren nativt. Dropsonen dempes\nfordi den er selve kontrollflaten, mens legend og støttetekster beholder full kontrast.",...s.parameters?.docs?.description}}};export{s as Disabled,i as FileInputStory,t as FilerSomKort,a as MedValgteFiler,G as __namedExportsOrder,q as default};
