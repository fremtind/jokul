import{r as d,j as t}from"./iframe-DkWzlxd-.js";import{f as j,u as N,a as I,F as b,m as l,b as A}from"./File.stories-B7zfPztQ.js";import{c as E}from"./clsx-B-dksMZM.js";import{F as B}from"./FieldGroup-flbewP91.js";import{F as R}from"./Flex-DgR9zN_l.js";import{B as C}from"./Button-CMyYvT5D.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./Text-DH-bTwj1.js";import"./Link-bWEz236F.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-mfkRbdoP.js";import"./Icon-CEH0yyGC.js";import"./SupportLabel-Ec81dW36.js";import"./SuccessIcon-DfDVkpsR.js";import"./WarningIcon-BBmxHX54.js";import"./useId-Bh0TjDrf.js";import"./Label-B0iIqUDx.js";import"./SlotComponent-H_cWLzDU.js";import"./mergeRefs-DlasLgYa.js";import"./usePreviousValue-DJEfkI-V.js";import"./Loader-rp8cfTm2.js";import"./useDelayedRender-Da02rP2Z.js";function _(s,a="",o){const r=a.split(",").map(n=>n.toLowerCase()).map(n=>n.replaceAll("*","")).map(n=>n.trim());let e=r.length===0;if(e=r.some(n=>s.type.toLowerCase().includes(n)||s.name.toLowerCase().endsWith(n)),!e)return{type:"WRONG_TYPE",message:`Filtypen ${s.name?.split(".")[1]||""} støttes ikke`};if(typeof o<"u"&&s.size>o)return{type:"TOO_LARGE",message:`Filen er ${j(s.size)}, men kan maksimalt være ${j(o)}`}}const v=d.forwardRef((s,a)=>{const{children:o,...r}=s,[e,n]=d.useState(""),i=N();if(!i)return t.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:m,accept:u,onChange:g}=i;return t.jsx("div",{...r,ref:a,className:E("jkl-file-input__dropzone",e),onDragEnter:p=>{n("jkl-file-input__dropzone--enter"),p.preventDefault()},onDragOver:p=>{n("jkl-file-input__dropzone--enter"),p.preventDefault()},onDrop:p=>{p.preventDefault(),n(""),p.dataTransfer.files&&g(p,[...p.dataTransfer.files].map(c=>({file:c,state:void 0,validation:_(c,u,m),uploadProgress:0})))},onDragLeave:p=>{n(""),p.preventDefault()},children:o})});v.displayName="Dropzone";const k=d.forwardRef((s,a)=>{const{multiple:o,id:r,label:e,...n}=s,i=d.useId(),m=`${r}-description`,u=o?"filer":"fil",g=N();if(!g)return t.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:p,maxSizeBytes:c,onChange:F}=g,f=r||i;return t.jsxs(t.Fragment,{children:[t.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:f,id:`${f}__add-btn`,children:e}),t.jsx("input",{...n,ref:a,id:f,accept:p,"aria-describedby":c?m:void 0,className:"jkl-sr-only",type:"file",multiple:o,value:"",onChange:S=>{S.target.files&&F(S,[...S.target.files].map(P=>({file:P,state:void 0,validation:_(P,p,c),uploadProgress:0})))}}),t.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",u," her"]})," "]})});k.displayName="Input";const z=({id:s})=>{const a=N();if(!a)return t.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:o}=a;return typeof o>"u"?!1:t.jsxs("div",{id:s,className:"jkl-file-input__max-size-text",children:["Maks ",j(o)," per fil"]})},h=d.forwardRef((s,a)=>{const{accept:o,className:r,children:e,id:n,value:i,multiple:m=!0,maxSizeBytes:u,onChange:g,variant:p,...c}=s,F=i.length>0,f=d.useId();return p==="small"?t.jsx(I,{context:{accept:o,onChange:g,maxSizeBytes:u,files:i},children:t.jsxs(B,{className:E("jkl-file-input","jkl-file-input--small",r,{"jkl-file-input--has-files":F}),...c,children:[t.jsx(v,{children:t.jsx("div",{className:"jkl-file-input__call-to-action",children:t.jsx(k,{id:n,label:"Legg til fil",multiple:m,ref:a,"aria-describedby":f})})}),t.jsx(z,{id:f}),i.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:e})]})}):t.jsx(I,{context:{accept:o,onChange:g,maxSizeBytes:u,files:i},children:t.jsx(B,{className:E("jkl-file-input",r,{"jkl-file-input--has-files":F}),...c,children:t.jsxs(v,{children:[i.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:e}),t.jsxs("div",{className:"jkl-file-input__call-to-action",children:[t.jsx(k,{id:n,label:m&&F?"Legg til flere filer":"Legg til fil",multiple:m,ref:a,"aria-describedby":f}),t.jsx(z,{id:f})]})]})})})});h.displayName="FileInput";const oe={title:"Komponenter/File Input",component:h,subcomponents:{File:b,Dropzone:v,MaxSize:z},args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},y={name:"File Input",render:s=>{const[a,o]=d.useState([]);return t.jsx(h,{...s,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:a,onChange:(r,e)=>{o(n=>[...n,...e])},children:a.map(({state:r,file:e,validation:n},i)=>t.jsx(b,{fileName:e.name,fileType:e.type,fileSize:e.size,path:`/path/fil-${i}`,file:e,state:r,onRemove:r!=="loading"?m=>"":void 0},`${e.name}-${i}`))})}},w={name:"File Input med valgte filer",render:s=>{const[a,o]=d.useState([{file:{...l.args,lastModified:0,name:l.args.fileName,webkitRelativePath:l.args.path,size:l.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...l.args,lastModified:0,name:l.args.fileName,webkitRelativePath:l.args.path,size:l.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...l.args,lastModified:0,name:l.args.fileName,webkitRelativePath:l.args.path,size:l.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]);return t.jsx(h,{...s,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:a,onChange:(r,e)=>{o(n=>[...n,...e])},children:a.map(({state:r,file:e},n)=>t.jsx(b,{fileName:e.name,fileType:e.type,fileSize:e.size,path:e.webkitRelativePath,file:e,state:r,onRemove:r!=="loading"?i=>"":void 0},`${e.name}-${n}`))})}},x={name:"File Input og opplastingsknapp",render:s=>{const[a,o]=d.useState([{file:{...l.args,lastModified:0,name:l.args.fileName,webkitRelativePath:l.args.path,size:l.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(n,i,m)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]),[r,e]=d.useState(!1);return t.jsxs(R,{direction:"column",children:[t.jsx(h,{...s,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:a,onChange:(n,i)=>{o(m=>[...m,...i])},children:a.map(({state:n,file:i,validation:m},u)=>d.createElement(b,{...l.args,...A.args,key:`${i.name}-${u}`,fileName:i.name,fileType:i.type,fileSize:i.size,path:`/path/fil-${u}`,file:i,state:r?"loading":void 0}))}),t.jsx(C,{variant:"primary",onClick:()=>{e(!0),setTimeout(()=>{e(!1)},3e3)},loader:{showLoader:r,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const se=["FileInputStory","FileInputWithFile","FileInputAndUploadButton"];export{x as FileInputAndUploadButton,y as FileInputStory,w as FileInputWithFile,se as __namedExportsOrder,oe as default};
