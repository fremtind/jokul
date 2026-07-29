import{j as n,r as F}from"./iframe-B6x1XYmx.js";import{F as y}from"./File-DsH5kKrC.js";import{c as j}from"./clsx-B-dksMZM.js";import{B as k}from"./Button-JTxCzsQW.js";import{I as b}from"./Icon-D4K1M1lv.js";import{I as S}from"./InputGroup-C5RpvIkl.js";import{F as T}from"./Flex-CRAVfXSQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-sa1lklGq.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-D8UXYDjU.js";import"./SupportLabel-BF4RN0IW.js";import"./SuccessIcon-D7lf9DYS.js";import"./WarningIcon-C94l5-IQ.js";import"./usePreviousValue-DPrPvbnX.js";import"./Loader-BegR2D8p.js";import"./useDelayedRender-BwT8R6l7.js";import"./useId-D1gxQ_bV.js";import"./Label-CaAqp9cl.js";import"./SlotComponent-fEI8cWwl.js";import"./mergeRefs-ypQMJXlL.js";const x=t=>n.jsx(b,{...t,children:""});x.displayName="UploadIcon";x.__docgenInfo={description:"",methods:[],displayName:"UploadIcon",props:{as:{required:!1,tsType:{name:"union",raw:'"div" | "span"',elements:[{name:"literal",value:'"div"'},{name:"literal",value:'"span"'}]},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"inherit" | "small" | "medium"',elements:[{name:"literal",value:'"inherit"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:'@deprecated Størrelsen settes nå automatisk etter fontstørrelse.\nStørrelsesvarianten til ikonet. `"small"` er 16px med 20px bounding box,\nog `"medium"` er 20px med 24px bounding box.\n`"inherit"` setter størrelsen til ikonet (ikke bounding box) lik skriftstørrelsen (1em).'},bold:{required:!1,tsType:{name:"boolean"},description:`Angir om ikonet skal vises i fet versjon
@default false`},filled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const m=F.forwardRef(({id:t,label:a,buttonLabel:s,className:r,multiple:p=!1,description:e,disabled:l,errorLabel:d,helpLabel:i,...o},h)=>n.jsx(S,{id:t,label:a||"Last opp dokumenter",description:e,errorLabel:d,helpLabel:i,className:r,render:v=>n.jsxs("span",{className:j("jkl-file-input",{"jkl-file-input--error":!!d}),children:[n.jsx(k,{htmlFor:v.id,as:"label",variant:"secondary",icon:n.jsx(x,{"aria-hidden":"true"}),className:"jkl-file-input__button",children:s||"Velg fil"}),n.jsx("input",{...o,...v,ref:h,type:"file",multiple:p,disabled:l,className:"jkl-file-input__input"})]})}));m.displayName="FileInput";m.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{label:{required:!0,tsType:{name:"string"},description:""},buttonLabel:{required:!0,tsType:{name:"string"},description:`Tekst på label til InputGroup.

@default "Last opp dokumenter"`},description:{required:!1,tsType:{name:"string"},description:`Tekst på knappen.

@default "Velg fil"`},errorLabel:{required:!1,tsType:{name:"string"},description:""},helpLabel:{required:!1,tsType:{name:"string"},description:""},multiple:{defaultValue:{value:"false",computed:!1},required:!1}}};const O={title:"Komponenter/File Input",component:m,args:{label:"Last opp dokumenter",description:"Tillatte formater: JPG, PNG",buttonLabel:"Velg fil",accept:"image/*,.pdf",multiple:!1}};function I(t){return Array.from(t.currentTarget.files??[])}function g(t="eksempel.png"){return new File(["Eksempelinnhold"],t,{type:"image/png",lastModified:Date.now()})}const u={name:"File Input"},f={name:"File Input med valgte filer",render:t=>{const[a,s]=F.useState([g("forside.png"),g("kvittering.png"),g("vedlegg.png")]);function r(e){s(l=>[...l,...I(e)]),e.currentTarget.value=""}function p(e){s(l=>l.filter(d=>d!==e))}return n.jsxs(T,{direction:"column",children:[n.jsx(m,{...t,id:"file-input-with-files",onChange:r}),a.length>0&&n.jsx("ul",{className:"jkl-file-input-example__files",children:a.map((e,l)=>n.jsx("li",{children:n.jsx(y,{file:e,fileName:e.name,fileType:e.type,fileSize:e.size,path:e.name,onRemove:()=>p(e)})},`${e.name}-${e.lastModified}-${l}`))})]})}},c={name:"File Input og opplastingsknapp",render:t=>{const[a,s]=F.useState([g()]),[r,p]=F.useState(!1);function e(i){s(o=>[...o,...I(i)]),i.currentTarget.value=""}function l(i){s(o=>o.filter(h=>h!==i))}function d(){p(!0),window.setTimeout(()=>{p(!1)},3e3)}return n.jsxs(T,{direction:"column",children:[n.jsx(m,{...t,id:"file-input-with-upload",disabled:r,onChange:e}),a.length>0&&n.jsx("ul",{className:"jkl-file-input-example__files",children:a.map((i,o)=>n.jsx("li",{children:n.jsx(y,{file:i,fileName:i.name,fileType:i.type,fileSize:i.size,path:i.name,state:r?"loading":void 0,onRemove:r?void 0:()=>l(i)})},`${i.name}-${i.lastModified}-${o}`))}),n.jsx(k,{variant:"secondary",disabled:a.length===0,onClick:d,loader:{showLoader:r,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "File Input"
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "File Input med valgte filer",
  render: args => {
    const [files, setFiles] = useState<File[]>([createExampleFile("forside.png"), createExampleFile("kvittering.png"), createExampleFile("vedlegg.png")]);
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setFiles(currentFiles => [...currentFiles, ...getFiles(event)]);
      event.currentTarget.value = "";
    }
    function removeFile(fileToRemove: File) {
      setFiles(currentFiles => currentFiles.filter(file => file !== fileToRemove));
    }
    return <Flex direction="column">
                <FileInput {...args} id="file-input-with-files" onChange={handleChange} />

                {files.length > 0 && <ul className="jkl-file-input-example__files">
                        {files.map((file, index) => <li key={\`\${file.name}-\${file.lastModified}-\${index}\`}>
                                <FileComponent file={file} fileName={file.name} fileType={file.type} fileSize={file.size} path={file.name} onRemove={() => removeFile(file)} />
                            </li>)}
                    </ul>}
            </Flex>;
  }
}`,...f.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "File Input og opplastingsknapp",
  render: args => {
    const [files, setFiles] = useState<File[]>([createExampleFile()]);
    const [uploading, setUploading] = useState(false);
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setFiles(currentFiles => [...currentFiles, ...getFiles(event)]);
      event.currentTarget.value = "";
    }
    function removeFile(fileToRemove: File) {
      setFiles(currentFiles => currentFiles.filter(file => file !== fileToRemove));
    }
    function uploadFiles() {
      setUploading(true);
      window.setTimeout(() => {
        setUploading(false);
      }, 3000);
    }
    return <Flex direction="column">
                <FileInput {...args} id="file-input-with-upload" disabled={uploading} onChange={handleChange} />

                {files.length > 0 && <ul className="jkl-file-input-example__files">
                        {files.map((file, index) => <li key={\`\${file.name}-\${file.lastModified}-\${index}\`}>
                                <FileComponent file={file} fileName={file.name} fileType={file.type} fileSize={file.size} path={file.name} state={uploading ? "loading" : undefined} onRemove={uploading ? undefined : () => removeFile(file)} />
                            </li>)}
                    </ul>}

                <Button variant="secondary" disabled={files.length === 0} onClick={uploadFiles} loader={{
        showLoader: uploading,
        textDescription: "Laster opp fil(er)"
      }}>
                    Last opp
                </Button>
            </Flex>;
  }
}`,...c.parameters?.docs?.source}}};const Q=["FileInputStory","FileInputWithFile","FileInputAndUploadButton"];export{c as FileInputAndUploadButton,u as FileInputStory,f as FileInputWithFile,Q as __namedExportsOrder,O as default};
