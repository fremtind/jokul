import{r as l,j as n}from"./iframe-BHADvndi.js";import{F as m,c,r as g}from"./_index-BRJfuSzQ.js";import{F as f}from"./Flex-BBde5oQY.js";import{B as F}from"./Button-0obiQhwq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-DPTpGBH7.js";import"./useId-D4zZq3bp.js";import"./Label-OxjBp0tI.js";import"./SupportLabel-8D0cWmh0.js";import"./SuccessIcon-88Vkx6G9.js";import"./Icon-CvrtQvf2.js";import"./types-BlFGa32c.js";import"./WarningIcon-gsnPOr0R.js";import"./File-AvFByKQc.js";import"./Text-8ge8OUwa.js";import"./Link-BuwATNSv.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-DtRuC4-z.js";import"./cow-CdXr5BwN.js";import"./SlotComponent-CiLeYweY.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-Pa9_YHPZ.js";import"./Loader-CR-48PYa.js";import"./useDelayedRender-DYMAe9Nd.js";const G={title:"Komponenter/File Input/Eksempler",component:m,args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},t={name:"File Input og opplastingsknapp",render:d=>{const[o,r]=l.useState(c(["bilde-1.png"])),[a,p]=l.useState(!1);return n.jsxs(f,{gap:"m",direction:"column",children:[n.jsx(m,{...d,id:"file-input-upload-example",className:"jkl-spacing-16-24--bottom",value:o,onChange:(e,i)=>r(s=>[...s,...i]),children:g(o.map(e=>({...e,state:a?"loading":void 0})),e=>r(i=>i.filter((s,u)=>u!==e)))}),n.jsx(F,{variant:"primary",onClick:()=>{p(!0),setTimeout(()=>p(!1),3e3)},loader:{showLoader:a,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}},H=["FileInputOgOpplastingsknapp"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "File Input og opplastingsknapp",
  render: args => {
    const [files, setFiles] = useState<UploadedFile[]>(createUploadedFiles(["bilde-1.png"]));
    const [uploading, setUploading] = useState(false);
    return <Flex gap="m" direction="column">
                <FileInput {...args} id="file-input-upload-example" className="jkl-spacing-16-24--bottom" value={files} onChange={(_e, newFiles) => setFiles(current => [...current, ...newFiles])}>
                    {renderFiles(files.map(f => ({
          ...f,
          state: uploading ? "loading" : undefined
        })), index => setFiles(current => current.filter((_, i) => i !== index)))}
                </FileInput>
                <Button variant="primary" onClick={() => {
        setUploading(true);
        setTimeout(() => setUploading(false), 3000);
      }} loader={{
        showLoader: uploading,
        textDescription: "Laster opp fil(er)"
      }}>
                    Last opp
                </Button>
            </Flex>;
  }
}`,...t.parameters?.docs?.source}}};export{t as FileInputOgOpplastingsknapp,H as __namedExportsOrder,G as default};
