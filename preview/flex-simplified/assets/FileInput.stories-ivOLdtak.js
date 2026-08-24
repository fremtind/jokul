import{r as m,j as t}from"./iframe-QtBp4egp.js";import{f as E,u as k,a as I,F as _,m as s,b as L}from"./File.stories-rTpEiR2-.js";import{c as z}from"./clsx-B-dksMZM.js";import{F as P}from"./FieldGroup-Dc_5STtq.js";import{F as C}from"./Flex-BS-Hvl3j.js";import{B as R}from"./Button-HThwQfSQ.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./Text-Bgzezs4W.js";import"./Link-8yDZvlgs.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-4cvpUXBh.js";import"./Icon-DJQmj-nB.js";import"./SupportLabel-DtQH7vY0.js";import"./SuccessIcon-BKunpZaE.js";import"./WarningIcon-K3CJmTRp.js";import"./useId-Dc_xERX8.js";import"./Label-48hlu1bR.js";import"./SlotComponent-D8hBxJlv.js";import"./mergeRefs-ciCz3-9q.js";import"./usePreviousValue-BKHZpGds.js";import"./Loader-CcqSFiRF.js";import"./useDelayedRender-Vr_PMH5J.js";function B(i,l="",o){const r=l.split(",").map(n=>n.toLowerCase()).map(n=>n.replaceAll("*","")).map(n=>n.trim());let e=r.length===0;if(e=r.some(n=>i.type.toLowerCase().includes(n)||i.name.toLowerCase().endsWith(n)),!e)return{type:"WRONG_TYPE",message:`Filtypen ${i.name?.split(".")[1]||""} støttes ikke`};if(typeof o<"u"&&i.size>o)return{type:"TOO_LARGE",message:`Filen er ${E(i.size)}, men kan maksimalt være ${E(o)}`}}const F=m.forwardRef((i,l)=>{const{children:o,...r}=i,[e,n]=m.useState(""),a=k();if(!a)return t.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:d,accept:u,onChange:g}=a;return t.jsx("div",{...r,ref:l,className:z("jkl-file-input__dropzone",e),onDragEnter:p=>{n("jkl-file-input__dropzone--enter"),p.preventDefault()},onDragOver:p=>{n("jkl-file-input__dropzone--enter"),p.preventDefault()},onDrop:p=>{p.preventDefault(),n(""),p.dataTransfer.files&&g(p,[...p.dataTransfer.files].map(c=>({file:c,state:void 0,validation:B(c,u,d),uploadProgress:0})))},onDragLeave:p=>{n(""),p.preventDefault()},children:o})});F.displayName="Dropzone";try{F.displayName="Dropzone",F.__docgenInfo={description:"",displayName:"Dropzone",props:{}}}catch{}const w=m.forwardRef((i,l)=>{const{multiple:o,id:r,label:e,...n}=i,a=m.useId(),d=`${r}-description`,u=o?"filer":"fil",g=k();if(!g)return t.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:p,maxSizeBytes:c,onChange:h}=g,f=r||a;return t.jsxs(t.Fragment,{children:[t.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:f,id:`${f}__add-btn`,children:e}),t.jsx("input",{...n,ref:l,id:f,accept:p,"aria-describedby":c?d:void 0,className:"jkl-sr-only",type:"file",multiple:o,value:"",onChange:j=>{j.target.files&&h(j,[...j.target.files].map(N=>({file:N,state:void 0,validation:B(N,p,c),uploadProgress:0})))}}),t.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",u," her"]})," "]})});w.displayName="Input";try{w.displayName="Input",w.__docgenInfo={description:"",displayName:"Input",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!0,type:{name:"boolean"}}}}}catch{}const x=({id:i})=>{const l=k();if(!l)return t.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:o}=l;return typeof o>"u"?!1:t.jsxs("div",{id:i,className:"jkl-file-input__max-size-text",children:["Maks ",E(o)," per fil"]})};try{x.displayName="MaxSize",x.__docgenInfo={description:"",displayName:"MaxSize",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}}}catch{}const y=m.forwardRef((i,l)=>{const{accept:o,className:r,children:e,id:n,value:a,multiple:d=!0,maxSizeBytes:u,onChange:g,variant:p,...c}=i,h=a.length>0,f=m.useId();return p==="small"?t.jsx(I,{context:{accept:o,onChange:g,maxSizeBytes:u,files:a},children:t.jsxs(P,{className:z("jkl-file-input","jkl-file-input--small",r,{"jkl-file-input--has-files":h}),...c,children:[t.jsx(F,{children:t.jsx("div",{className:"jkl-file-input__call-to-action",children:t.jsx(w,{id:n,label:"Legg til fil",multiple:d,ref:l,"aria-describedby":f})})}),t.jsx(x,{id:f}),a.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:e})]})}):t.jsx(I,{context:{accept:o,onChange:g,maxSizeBytes:u,files:a},children:t.jsx(P,{className:z("jkl-file-input",r,{"jkl-file-input--has-files":h}),...c,children:t.jsxs(F,{children:[a.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:e}),t.jsxs("div",{className:"jkl-file-input__call-to-action",children:[t.jsx(w,{id:n,label:d&&h?"Legg til flere filer":"Legg til fil",multiple:d,ref:l,"aria-describedby":f}),t.jsx(x,{id:f})]})]})})})});y.displayName="FileInput";try{y.displayName="FileInput",y.__docgenInfo={description:"",displayName:"FileInput",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},accept:{defaultValue:null,description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.
@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`,name:"accept",required:!1,type:{name:"string"}},maxSizeBytes:{defaultValue:null,description:"",name:"maxSizeBytes",required:!1,type:{name:"number"}},multiple:{defaultValue:{value:"true"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"UploadedFile[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"flexible"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>, files: UploadedFile[]) => void"}},legend:{defaultValue:null,description:"",name:"legend",required:!0,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},"data-testautoid":{defaultValue:null,description:"",name:"data-testautoid",required:!1,type:{name:"string"}},errorLabel:{defaultValue:null,description:"",name:"errorLabel",required:!1,type:{name:"string"}},helpLabel:{defaultValue:null,description:"@deprecated Bruk heller `description`.",name:"helpLabel",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:'Omit<LabelProps, "children">'}},supportLabelProps:{defaultValue:null,description:"",name:"supportLabelProps",required:!1,type:{name:'Omit<SupportLabelProps, "id" | "errorLabel" | "helpLabel">'}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}}}catch{}const le={title:"Komponenter/File Input",component:y,subcomponents:{File:_,Dropzone:F,MaxSize:x},args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},b={name:"File Input",render:i=>{const[l,o]=m.useState([]);return t.jsx(y,{...i,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:l,onChange:(r,e)=>{o(n=>[...n,...e])},children:l.map(({state:r,file:e,validation:n},a)=>t.jsx(_,{fileName:e.name,fileType:e.type,fileSize:e.size,path:`/path/fil-${a}`,file:e,state:r,onRemove:r!=="loading"?d=>"":void 0},`${e.name}-${a}`))})}},v={name:"File Input med valgte filer",render:i=>{const[l,o]=m.useState([{file:{...s.args,lastModified:0,name:s.args.fileName,webkitRelativePath:s.args.path,size:s.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...s.args,lastModified:0,name:s.args.fileName,webkitRelativePath:s.args.path,size:s.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...s.args,lastModified:0,name:s.args.fileName,webkitRelativePath:s.args.path,size:s.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]);return t.jsx(y,{...i,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:l,onChange:(r,e)=>{o(n=>[...n,...e])},children:l.map(({state:r,file:e},n)=>t.jsx(_,{fileName:e.name,fileType:e.type,fileSize:e.size,path:e.webkitRelativePath,file:e,state:r,onRemove:r!=="loading"?a=>"":void 0},`${e.name}-${n}`))})}},S={name:"File Input og opplastingsknapp",render:i=>{const[l,o]=m.useState([{file:{...s.args,lastModified:0,name:s.args.fileName,webkitRelativePath:s.args.path,size:s.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(n,a,d)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]),[r,e]=m.useState(!1);return t.jsxs(C,{direction:"column",children:[t.jsx(y,{...i,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:l,onChange:(n,a)=>{o(d=>[...d,...a])},children:l.map(({state:n,file:a,validation:d},u)=>m.createElement(_,{...s.args,...L.args,key:`${a.name}-${u}`,fileName:a.name,fileType:a.type,fileSize:a.size,path:`/path/fil-${u}`,file:a,state:r?"loading":void 0}))}),t.jsx(R,{variant:"primary",onClick:()=>{e(!0),setTimeout(()=>{e(!1)},3e3)},loader:{showLoader:r,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "File Input",
  render: args => {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    return <FileInput {...args} id="file-input-example" className="jkl-spacing-16-24--bottom" value={files} onChange={(_e, newFiles) => {
      setFiles(currentFiles => [...currentFiles, ...newFiles]);
    }}>
                {files.map(({
        state,
        file,
        validation
      }, index) => {
        return <File key={\`\${file.name}-\${index}\`} fileName={file.name} fileType={file.type} fileSize={file.size} path={\`/path/fil-\${index}\`} file={file} state={state} onRemove={state !== "loading" ? e => "" : undefined} />;
      })}
            </FileInput>;
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "File Input med valgte filer",
  render: args => {
    const [files, setFiles] = useState<UploadedFile[]>([{
      file: {
        ...FileStory.args,
        lastModified: 0,
        name: FileStory.args.fileName,
        webkitRelativePath: FileStory.args.path,
        size: FileStory.args.fileSize,
        type: "png",
        arrayBuffer: (): Promise<ArrayBuffer> => {
          throw new Error("Function not implemented.");
        },
        bytes: (): Promise<Uint8Array<ArrayBuffer>> => {
          throw new Error("Function not implemented.");
        },
        slice: (start?: number, end?: number, contentType?: string): Blob => {
          throw new Error("Function not implemented.");
        },
        stream: (): ReadableStream<Uint8Array<ArrayBuffer>> => {
          throw new Error("Function not implemented.");
        },
        text: (): Promise<string> => {
          throw new Error("Function not implemented.");
        }
      },
      state: undefined,
      uploadProgress: 0
    }, {
      file: {
        ...FileStory.args,
        lastModified: 0,
        name: FileStory.args.fileName,
        webkitRelativePath: FileStory.args.path,
        size: FileStory.args.fileSize,
        type: "png",
        arrayBuffer: (): Promise<ArrayBuffer> => {
          throw new Error("Function not implemented.");
        },
        bytes: (): Promise<Uint8Array<ArrayBuffer>> => {
          throw new Error("Function not implemented.");
        },
        slice: (start?: number, end?: number, contentType?: string): Blob => {
          throw new Error("Function not implemented.");
        },
        stream: (): ReadableStream<Uint8Array<ArrayBuffer>> => {
          throw new Error("Function not implemented.");
        },
        text: (): Promise<string> => {
          throw new Error("Function not implemented.");
        }
      },
      state: undefined,
      uploadProgress: 0
    }, {
      file: {
        ...FileStory.args,
        lastModified: 0,
        name: FileStory.args.fileName,
        webkitRelativePath: FileStory.args.path,
        size: FileStory.args.fileSize,
        type: "png",
        arrayBuffer: (): Promise<ArrayBuffer> => {
          throw new Error("Function not implemented.");
        },
        bytes: (): Promise<Uint8Array<ArrayBuffer>> => {
          throw new Error("Function not implemented.");
        },
        slice: (start?: number, end?: number, contentType?: string): Blob => {
          throw new Error("Function not implemented.");
        },
        stream: (): ReadableStream<Uint8Array<ArrayBuffer>> => {
          throw new Error("Function not implemented.");
        },
        text: (): Promise<string> => {
          throw new Error("Function not implemented.");
        }
      },
      state: undefined,
      uploadProgress: 0
    }]);
    return <FileInput {...args} id="file-input-example" className="jkl-spacing-16-24--bottom" value={files} onChange={(_, newFiles) => {
      setFiles(currentFiles => [...currentFiles, ...newFiles]);
    }}>
                {files.map(({
        state,
        file
      }, index) => {
        return <File key={\`\${file.name}-\${index}\`} fileName={file.name} fileType={file.type} fileSize={file.size} path={file.webkitRelativePath} file={file} state={state} onRemove={state !== "loading" ? e => "" : undefined} />;
      })}
            </FileInput>;
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "File Input og opplastingsknapp",
  render: args => {
    const [files, setFiles] = useState<UploadedFile[]>([{
      file: {
        ...FileStory.args,
        lastModified: 0,
        name: FileStory.args.fileName,
        webkitRelativePath: FileStory.args.path,
        size: FileStory.args.fileSize,
        type: "png",
        arrayBuffer: (): Promise<ArrayBuffer> => {
          throw new Error("Function not implemented.");
        },
        bytes: (): Promise<Uint8Array<ArrayBuffer>> => {
          throw new Error("Function not implemented.");
        },
        slice: (start?: number, end?: number, contentType?: string): Blob => {
          throw new Error("Function not implemented.");
        },
        stream: (): ReadableStream<Uint8Array<ArrayBuffer>> => {
          throw new Error("Function not implemented.");
        },
        text: (): Promise<string> => {
          throw new Error("Function not implemented.");
        }
      },
      state: undefined,
      uploadProgress: 0
    }]);
    const [uploading, setUploading] = useState(false);
    return <Flex direction="column">
                <FileInput {...args} id="file-input-example" className="jkl-spacing-16-24--bottom" value={files} onChange={(_e, newFiles) => {
        setFiles(currentFiles => [...currentFiles, ...newFiles]);
      }}>
                    {files.map(({
          state,
          file,
          validation
        }, index) => {
          return <File {...FileStory.args} {...FileDelete.args} key={\`\${file.name}-\${index}\`} fileName={file.name} fileType={file.type} fileSize={file.size} path={\`/path/fil-\${index}\`} file={file} state={uploading ? "loading" : undefined} />;
        })}
                </FileInput>
                <Button variant="primary" onClick={() => {
        setUploading(true);
        setTimeout(() => {
          setUploading(false);
        }, 3000);
      }} loader={{
        showLoader: uploading,
        textDescription: "Laster opp fil(er)"
      }}>
                    Last opp
                </Button>
            </Flex>;
  }
}`,...S.parameters?.docs?.source}}};const oe=["FileInputStory","FileInputWithFile","FileInputAndUploadButton"];export{S as FileInputAndUploadButton,b as FileInputStory,v as FileInputWithFile,oe as __namedExportsOrder,le as default};
