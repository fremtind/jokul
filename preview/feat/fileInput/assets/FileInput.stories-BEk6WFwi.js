import{j as e,r as u}from"./iframe-DdzKESVa.js";import{F as v}from"./File-1uQmUSpq.js";import{c as x}from"./clsx-B-dksMZM.js";import{I}from"./Icon-D0RjNUF1.js";import{F as j}from"./Flex-C5uZ6mnA.js";import{B as T}from"./Button-C3Htq6Vb.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BHsuElpn.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-BdFgWRGk.js";import"./SupportLabel-DthX4J-b.js";import"./SuccessIcon-RD5j-PrQ.js";import"./WarningIcon-DeIMtJhR.js";import"./SlotComponent-CxbiuVBb.js";import"./mergeRefs-BXCcGfwD.js";import"./usePreviousValue-CGQXf2Ev.js";import"./Loader-KDzCV-em.js";import"./useDelayedRender-DkTKnDQj.js";const h=l=>e.jsx(I,{...l,children:""});h.displayName="UploadIcon";h.__docgenInfo={description:"",methods:[],displayName:"UploadIcon",props:{as:{required:!1,tsType:{name:"union",raw:'"div" | "span"',elements:[{name:"literal",value:'"div"'},{name:"literal",value:'"span"'}]},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"inherit" | "small" | "medium"',elements:[{name:"literal",value:'"inherit"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:'@deprecated Størrelsen settes nå automatisk etter fontstørrelse.\nStørrelsesvarianten til ikonet. `"small"` er 16px med 20px bounding box,\nog `"medium"` er 20px med 24px bounding box.\n`"inherit"` setter størrelsen til ikonet (ikke bounding box) lik skriftstørrelsen (1em).'},bold:{required:!1,tsType:{name:"boolean"},description:`Angir om ikonet skal vises i fet versjon
@default false`},filled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const m=u.forwardRef(({id:l,label:a="Velg fil",className:r,multiple:s=!1,...o},n)=>{const t=u.useId(),p=l??t;return e.jsxs("span",{className:x("jkl-file-input",r),children:[e.jsx("input",{...o,ref:n,id:p,type:"file",multiple:s,className:"jkl-file-input__input"}),e.jsx("label",{htmlFor:p,className:x("jkl-button","jkl-button--secondary","jkl-file-input__button"),children:e.jsxs("div",{className:"jkl-button__label",children:[e.jsx(h,{"aria-hidden":"true"}),e.jsx("span",{className:"jkl-button__text",children:a})]})})]})});m.displayName="FileInput";m.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{label:{required:!1,tsType:{name:"string"},description:`Innholdet i knappen.

@default "Velg fil"`,defaultValue:{value:'"Velg fil"',computed:!1}},multiple:{defaultValue:{value:"false",computed:!1},required:!1}}};const P={title:"Komponenter/File Input",component:m,args:{label:"Velg fil",accept:"image/*,.pdf",multiple:!0}};function k(l){return Array.from(l.currentTarget.files??[])}function F(l="eksempel.png"){return new File(["Eksempelinnhold"],l,{type:"image/png",lastModified:Date.now()})}const f={name:"File Input"},c={name:"File Input med valgte filer",render:l=>{const[a,r]=u.useState([F("forside.png"),F("kvittering.png"),F("vedlegg.png")]);function s(n){r(t=>[...t,...k(n)]),n.currentTarget.value=""}function o(n){r(t=>t.filter(p=>p!==n))}return e.jsxs(j,{direction:"column",children:[e.jsx(m,{...l,id:"file-input-with-files",onChange:s}),a.length>0&&e.jsx("ul",{className:"jkl-file-input-example__files",children:a.map((n,t)=>e.jsx("li",{children:e.jsx(v,{file:n,fileName:n.name,fileType:n.type,fileSize:n.size,path:n.name,onRemove:()=>o(n)})},`${n.name}-${n.lastModified}-${t}`))})]})}},g={name:"File Input og opplastingsknapp",render:l=>{const[a,r]=u.useState([F()]),[s,o]=u.useState(!1);function n(i){r(d=>[...d,...k(i)]),i.currentTarget.value=""}function t(i){r(d=>d.filter(y=>y!==i))}function p(){o(!0),window.setTimeout(()=>{o(!1)},3e3)}return e.jsxs(j,{direction:"column",children:[e.jsx(m,{...l,id:"file-input-with-upload",disabled:s,onChange:n}),a.length>0&&e.jsx("ul",{className:"jkl-file-input-example__files",children:a.map((i,d)=>e.jsx("li",{children:e.jsx(v,{file:i,fileName:i.name,fileType:i.type,fileSize:i.size,path:i.name,state:s?"loading":void 0,onRemove:s?void 0:()=>t(i)})},`${i.name}-${i.lastModified}-${d}`))}),e.jsx(T,{variant:"primary",disabled:a.length===0,onClick:p,loader:{showLoader:s,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "File Input"
}`,...f.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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

                <Button variant="primary" disabled={files.length === 0} onClick={uploadFiles} loader={{
        showLoader: uploading,
        textDescription: "Laster opp fil(er)"
      }}>
                    Last opp
                </Button>
            </Flex>;
  }
}`,...g.parameters?.docs?.source}}};const W=["FileInputStory","FileInputWithFile","FileInputAndUploadButton"];export{g as FileInputAndUploadButton,f as FileInputStory,c as FileInputWithFile,W as __namedExportsOrder,P as default};
