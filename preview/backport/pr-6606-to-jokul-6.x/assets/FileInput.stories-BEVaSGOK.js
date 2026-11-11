import{r as c,j as n}from"./iframe-BRLHYLz7.js";import{f as z,u as _,a as D,F as v,m as p,b as C}from"./File.stories-CYl0uHGp.js";import{c as S}from"./clsx-B-dksMZM.js";import{F as B}from"./FieldGroup-BOBEyt1L.js";import{C as T,g as L}from"./types-BlFGa32c.js";import{F as V}from"./Flex-BlLTrEOO.js";import{B as q}from"./Button-nZsIi3sD.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./Text-XPbyqIjR.js";import"./Link-Da8nX2BF.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-DOn2fg6_.js";import"./Icon-BzQYu2n1.js";import"./SupportLabel-DPsREKkx.js";import"./SuccessIcon-D257efVo.js";import"./WarningIcon-D4xxbGIz.js";import"./useId-1QuYB4oF.js";import"./Label-C-F8Kqyc.js";import"./SlotComponent-BF39QNvf.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-Ds6-pTrW.js";import"./Loader-Bb9Hczak.js";import"./useDelayedRender-DqQ0_9zI.js";function A(r,o="",l){const a=o.split(",").map(t=>t.toLowerCase()).map(t=>t.replaceAll("*","")).map(t=>t.trim());let e=a.length===0;if(e=a.some(t=>r.type.toLowerCase().includes(t)||r.name.toLowerCase().endsWith(t)),!e)return{type:"WRONG_TYPE",message:`Filtypen ${r.name?.split(".")[1]||""} støttes ikke`};if(typeof l<"u"&&r.size>l)return{type:"TOO_LARGE",message:`Filen er ${z(r.size)}, men kan maksimalt være ${z(l)}`}}const j=c.forwardRef((r,o)=>{const{children:l,trackingProps:a,multiple:e,variant:t,...i}=r,[u,m]=c.useState(""),y=_();if(!y)return n.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:f,accept:d,onChange:k}=y;return n.jsx("div",{...i,ref:o,className:S("jkl-file-input__dropzone",u),"data-track-component-name":T.FileInput,"data-track-id":a?.id,"data-track-accept":d,"data-track-multiple":e,"data-track-variant":t,...L(a?.extra,i),onDragEnter:s=>{m("jkl-file-input__dropzone--enter"),s.preventDefault()},onDragOver:s=>{m("jkl-file-input__dropzone--enter"),s.preventDefault()},onDrop:s=>{s.preventDefault(),m(""),s.dataTransfer.files&&k(s,[...s.dataTransfer.files].map(g=>({file:g,state:void 0,validation:A(g,d,f),uploadProgress:0})))},onDragLeave:s=>{m(""),s.preventDefault()},children:l})});j.displayName="Dropzone";try{j.displayName="Dropzone",j.__docgenInfo={description:"",displayName:"Dropzone",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",methods:[],props:{trackingProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"}],description:"",name:"trackingProps",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"},required:!1,tags:{},type:{name:"Tracking"}},multiple:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"}],description:"",name:"multiple",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"},required:!0,tags:{},type:{name:"boolean"}},variant:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"}],description:"",name:"variant",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"},required:!1,tags:{},type:{name:"enum",raw:'"small" | "flexible"',value:[{value:'"small"'},{value:'"flexible"'}]}}},tags:{}}}catch{}const h=c.forwardRef((r,o)=>{const{multiple:l,id:a,label:e,trackingProps:t,variant:i,...u}=r,m=c.useId(),y=`${a}-description`,f=l?"filer":"fil",d=_();if(!d)return n.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:k,maxSizeBytes:s,onChange:g}=d,I=a||m;return n.jsxs(n.Fragment,{children:[n.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:I,id:`${I}__add-btn`,children:e}),n.jsx("input",{...u,ref:o,id:I,accept:k,"aria-describedby":s?y:void 0,className:"jkl-sr-only",type:"file",multiple:l,value:"","data-track-component-name":T.FileInput,"data-track-id":t?.id,"data-track-accept":k,"data-track-multiple":l,"data-track-variant":i,...L(t?.extra,u),onChange:b=>{b.target.files&&g(b,[...b.target.files].map(E=>({file:E,state:void 0,validation:A(E,k,s),uploadProgress:0})))}}),n.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",f," her"]})," "]})});h.displayName="Input";try{h.displayName="Input",h.__docgenInfo={description:"",displayName:"Input",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/Input.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"id",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!1,tags:{},type:{name:"string"}},label:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"label",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!0,tags:{},type:{name:"string"}},multiple:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"multiple",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!0,tags:{},type:{name:"boolean"}},trackingProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"trackingProps",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!1,tags:{},type:{name:"Tracking"}},variant:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"variant",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!1,tags:{},type:{name:"enum",raw:'"small" | "flexible"',value:[{value:'"small"'},{value:'"flexible"'}]}}},tags:{}}}catch{}const x=({id:r})=>{const o=_();if(!o)return n.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:l}=o;return typeof l>"u"?!1:n.jsxs("div",{id:r,className:"jkl-file-input__max-size-text",children:["Maks ",z(l)," per fil"]})};try{x.displayName="MaxSize",x.__docgenInfo={description:"",displayName:"MaxSize",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/MaxSize.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/MaxSize.tsx",name:"TypeLiteral"}],description:"",name:"id",required:!0,tags:{},type:{name:"string"}}},tags:{}}}catch{}const F=c.forwardRef((r,o)=>{const{accept:l,className:a,children:e,id:t,value:i,multiple:u=!0,maxSizeBytes:m,onChange:y,variant:f,trackingProps:d,...k}=r,s=i.length>0,g=c.useId();return f==="small"?n.jsx(D,{context:{accept:l,onChange:y,maxSizeBytes:m,files:i},children:n.jsxs(B,{className:S("jkl-file-input","jkl-file-input--small",a,{"jkl-file-input--has-files":s}),...k,children:[n.jsx(j,{trackingProps:d,multiple:u,variant:f,children:n.jsx("div",{className:"jkl-file-input__call-to-action",children:n.jsx(h,{id:t,label:"Legg til fil",multiple:u,trackingProps:d,variant:f,ref:o,"aria-describedby":g})})}),n.jsx(x,{id:g}),i.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:e})]})}):n.jsx(D,{context:{accept:l,onChange:y,maxSizeBytes:m,files:i},children:n.jsx(B,{className:S("jkl-file-input",a,{"jkl-file-input--has-files":s}),...k,children:n.jsxs(j,{trackingProps:d,multiple:u,variant:f,children:[i.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:e}),n.jsxs("div",{className:"jkl-file-input__call-to-action",children:[n.jsx(h,{id:t,label:u&&s?"Legg til flere filer":"Legg til fil",multiple:u,trackingProps:d,variant:f,ref:o,"aria-describedby":g}),n.jsx(x,{id:g})]})]})})})});F.displayName="FileInput";try{F.displayName="FileInput",F.__docgenInfo={description:"",displayName:"FileInput",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/FileInput.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"className",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"string"}},id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"id",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"string"}},accept:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.`,name:"accept",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{see:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept"},type:{name:"string"}},maxSizeBytes:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"maxSizeBytes",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"number"}},multiple:{defaultValue:{value:"true"},declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"multiple",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}},value:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"value",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!0,tags:{},type:{name:"UploadedFile[]"}},variant:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"variant",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"enum",raw:'"small" | "flexible"',value:[{value:'"small"'},{value:'"flexible"'}]}},onChange:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"onChange",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!0,tags:{},type:{name:"(e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>, files: UploadedFile[]) => void"}},trackingProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"trackingProps",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"Tracking"}},legend:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"legend",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!0,tags:{},type:{name:"string"}},tooltip:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"tooltip",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"ReactNode"}},labelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"labelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<LabelProps, "children">'}},supportLabelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"supportLabelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<SupportLabelProps, "id" | "helpLabel" | "errorLabel">'}},helpLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"helpLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{deprecated:"Bruk heller `description`."},type:{name:"string"}},errorLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"errorLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"description",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},"data-testautoid":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"}],description:"",name:"data-testautoid",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const me={title:"Komponenter/File Input",component:F,subcomponents:{File:v,Dropzone:j,MaxSize:x},args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},w={name:"File Input",render:r=>{const[o,l]=c.useState([]);return n.jsx(F,{...r,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:o,onChange:(a,e)=>{l(t=>[...t,...e])},children:o.map(({state:a,file:e,validation:t},i)=>n.jsx(v,{fileName:e.name,fileType:e.type,fileSize:e.size,path:`/path/fil-${i}`,file:e,state:a,onRemove:a!=="loading"?u=>"":void 0},`${e.name}-${i}`))})}},P={name:"File Input med valgte filer",render:r=>{const[o,l]=c.useState([{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(a,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(a,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(a,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]);return n.jsx(F,{...r,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:o,onChange:(a,e)=>{l(t=>[...t,...e])},children:o.map(({state:a,file:e},t)=>n.jsx(v,{fileName:e.name,fileType:e.type,fileSize:e.size,path:e.webkitRelativePath,file:e,state:a,onRemove:a!=="loading"?i=>"":void 0},`${e.name}-${t}`))})}},N={name:"File Input og opplastingsknapp",render:r=>{const[o,l]=c.useState([{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(t,i,u)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]),[a,e]=c.useState(!1);return n.jsxs(V,{gap:"m",direction:"column",children:[n.jsx(F,{...r,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:o,onChange:(t,i)=>{l(u=>[...u,...i])},children:o.map(({state:t,file:i,validation:u},m)=>c.createElement(v,{...p.args,...C.args,key:`${i.name}-${m}`,fileName:i.name,fileType:i.type,fileSize:i.size,path:`/path/fil-${m}`,file:i,state:a?"loading":void 0}))}),n.jsx(q,{variant:"primary",onClick:()=>{e(!0),setTimeout(()=>{e(!1)},3e3)},loader:{showLoader:a,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}},ce=["FileInputStory","FileInputWithFile","FileInputAndUploadButton"];w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
    return <Flex gap="m" direction="column">
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
}`,...N.parameters?.docs?.source}}};export{N as FileInputAndUploadButton,w as FileInputStory,P as FileInputWithFile,ce as __namedExportsOrder,me as default};
