import{r as m,j as i}from"./iframe-B-nSori2.js";import{F as d,c,r as g}from"./_index-DpugEcpW.js";import{F as f}from"./Flex-B0Ak0vhd.js";import{B as F}from"./Button-BZD-B4EM.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./File-54q2ysD5.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Text-B8gZsiOs.js";import"./Link-D1g5_uNm.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-Cbw5RF77.js";import"./Icon-BV2me0SG.js";import"./SupportLabel-B-mkj_Od.js";import"./SuccessIcon-CVUXNYEU.js";import"./WarningIcon-BMDZZg0C.js";import"./FieldGroup-Ds0CFbAi.js";import"./useId-59BUdYcS.js";import"./Label-DCcYgmLk.js";import"./SlotComponent-B51aY1wL.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-CiekwCsx.js";import"./Loader-DhlofV_G.js";import"./useDelayedRender-C8fiDYlW.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,A={title:"Komponenter/File Input/Eksempler",component:d,args:{value:[],onChange:x(),legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},n={name:"File Input og opplastingsknapp",render:o=>{const[r,a]=m.useState(c(["bilde-1.png"])),[p,s]=m.useState(!1);return i.jsxs(f,{gap:"m",direction:"column",children:[i.jsx(d,{...o,id:"file-input-upload-example",className:"jkl-spacing-16-24--bottom",value:r,onChange:(e,t)=>{o.onChange(e,t),a(l=>[...l,...t])},children:g(r.map(e=>({...e,state:p?"loading":void 0})),e=>a(t=>t.filter((l,u)=>u!==e)))}),i.jsx(F,{variant:"primary",onClick:()=>{s(!0),setTimeout(()=>s(!1),3e3)},loader:{showLoader:p,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}},G=["FileInputOgOpplastingsknapp"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "File Input og opplastingsknapp",
  render: args => {
    const [files, setFiles] = useState<UploadedFile[]>(createUploadedFiles(["bilde-1.png"]));
    const [uploading, setUploading] = useState(false);
    return <Flex gap="m" direction="column">
                <FileInput {...args} id="file-input-upload-example" className="jkl-spacing-16-24--bottom" value={files} onChange={(e, newFiles) => {
        args.onChange(e, newFiles);
        setFiles(current => [...current, ...newFiles]);
      }}>
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
}`,...n.parameters?.docs?.source}}};export{n as FileInputOgOpplastingsknapp,G as __namedExportsOrder,A as default};
