import{r as l,j as n}from"./iframe-DEp7TuSU.js";import{F as m,c,r as g}from"./_index-D7qVWn19.js";import{F as f}from"./Flex-BNfjuLsj.js";import{B as F}from"./Button-Yb6JANyb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./FieldGroup-Doj1UwLe.js";import"./useId-nteQJo5V.js";import"./Label-Dx_W1dhF.js";import"./SupportLabel-DwKTrBGC.js";import"./SuccessIcon-joNuZVhC.js";import"./Icon-Ch5N_p1U.js";import"./types-BlFGa32c.js";import"./WarningIcon-DT-qy095.js";import"./File-Kw-8abhr.js";import"./Text-B6-sKVFu.js";import"./Link-Dd_ByTQ6.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-SQ8p7TY4.js";import"./cow-CdXr5BwN.js";import"./SlotComponent-BdtRrqjQ.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-CN26swNn.js";import"./Loader-DDkyYrxb.js";import"./useDelayedRender-BBpUSCvU.js";const G={title:"Komponenter/File Input/Eksempler",component:m,args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},t={name:"File Input og opplastingsknapp",render:d=>{const[o,r]=l.useState(c(["bilde-1.png"])),[a,p]=l.useState(!1);return n.jsxs(f,{gap:"m",direction:"column",children:[n.jsx(m,{...d,id:"file-input-upload-example",className:"jkl-spacing-16-24--bottom",value:o,onChange:(e,i)=>r(s=>[...s,...i]),children:g(o.map(e=>({...e,state:a?"loading":void 0})),e=>r(i=>i.filter((s,u)=>u!==e)))}),n.jsx(F,{variant:"primary",onClick:()=>{p(!0),setTimeout(()=>p(!1),3e3)},loader:{showLoader:a,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}},H=["FileInputOgOpplastingsknapp"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
