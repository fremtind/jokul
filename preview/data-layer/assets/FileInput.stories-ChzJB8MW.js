import{r as u,j as n}from"./iframe-C5mqiCLF.js";import{f as z,u as I,a as B,F as _,m as p,b as q}from"./File.stories-hLQktwt6.js";import{c as N}from"./clsx-B-dksMZM.js";import{F as C}from"./FieldGroup-pac7nFRV.js";import{C as L,g as T}from"./types-YjSsgwWY.js";import{F as A}from"./Flex-CZmtP9Dk.js";import{B as R}from"./Button-1LkMbjoO.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./Text-C-WU8Dzm.js";import"./Link-B2M-bbWA.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-ChsQhSyv.js";import"./Icon-CSRiLZ8e.js";import"./SupportLabel-IUODpl5q.js";import"./SuccessIcon-CWAgkxzi.js";import"./WarningIcon-CXvAnsoL.js";import"./useId-DtC_nmmh.js";import"./Label-XUot8IJ4.js";import"./SlotComponent-caqVP8EM.js";import"./mergeRefs-BlpLjbDu.js";import"./usePreviousValue-Sh4cdfzP.js";import"./Loader-CnOMqVGx.js";import"./useDelayedRender-D1D5cNNG.js";function V(a,o="",l){const r=o.split(",").map(t=>t.toLowerCase()).map(t=>t.replaceAll("*","")).map(t=>t.trim());let e=r.length===0;if(e=r.some(t=>a.type.toLowerCase().includes(t)||a.name.toLowerCase().endsWith(t)),!e)return{type:"WRONG_TYPE",message:`Filtypen ${a.name?.split(".")[1]||""} støttes ikke`};if(typeof l<"u"&&a.size>l)return{type:"TOO_LARGE",message:`Filen er ${z(a.size)}, men kan maksimalt være ${z(l)}`}}const w=u.forwardRef((a,o)=>{const{children:l,tracking:r,multiple:e,variant:t,...i}=a,[d,m]=u.useState(""),F=I();if(!F)return n.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:f,accept:c,onChange:y}=F;return n.jsx("div",{...i,ref:o,className:N("jkl-file-input__dropzone",d),"data-track-component-name":L.FileInput,"data-track-id":r?.id,"data-track-accept":c,"data-track-multiple":e,"data-track-variant":t,...T(r?.extra),onDragEnter:s=>{m("jkl-file-input__dropzone--enter"),s.preventDefault()},onDragOver:s=>{m("jkl-file-input__dropzone--enter"),s.preventDefault()},onDrop:s=>{s.preventDefault(),m(""),s.dataTransfer.files&&y(s,[...s.dataTransfer.files].map(g=>({file:g,state:void 0,validation:V(g,c,f),uploadProgress:0})))},onDragLeave:s=>{m(""),s.preventDefault()},children:l})});w.displayName="Dropzone";try{w.displayName="Dropzone",w.__docgenInfo={description:"",displayName:"Dropzone",props:{tracking:{defaultValue:null,description:"",name:"tracking",required:!1,type:{name:"Tracking"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!0,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"flexible"'}]}}}}}catch{}const v=u.forwardRef((a,o)=>{const{multiple:l,id:r,label:e,tracking:t,variant:i,...d}=a,m=u.useId(),F=`${r}-description`,f=l?"filer":"fil",c=I();if(!c)return n.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:y,maxSizeBytes:s,onChange:g}=c,E=r||m;return n.jsxs(n.Fragment,{children:[n.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:E,id:`${E}__add-btn`,children:e}),n.jsx("input",{...d,ref:o,id:E,accept:y,"aria-describedby":s?F:void 0,className:"jkl-sr-only",type:"file",multiple:l,value:"","data-track-component-name":L.FileInput,"data-track-id":t?.id,"data-track-accept":y,"data-track-multiple":l,"data-track-variant":i,...T(t?.extra),onChange:j=>{j.target.files&&g(j,[...j.target.files].map(P=>({file:P,state:void 0,validation:V(P,y,s),uploadProgress:0})))}}),n.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",f," her"]})," "]})});v.displayName="Input";try{v.displayName="Input",v.__docgenInfo={description:"",displayName:"Input",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!0,type:{name:"boolean"}},tracking:{defaultValue:null,description:"",name:"tracking",required:!1,type:{name:"Tracking"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"flexible"'}]}}}}}catch{}const x=({id:a})=>{const o=I();if(!o)return n.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:l}=o;return typeof l>"u"?!1:n.jsxs("div",{id:a,className:"jkl-file-input__max-size-text",children:["Maks ",z(l)," per fil"]})};try{x.displayName="MaxSize",x.__docgenInfo={description:"",displayName:"MaxSize",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}}}catch{}const h=u.forwardRef((a,o)=>{const{accept:l,className:r,children:e,id:t,value:i,multiple:d=!0,maxSizeBytes:m,onChange:F,variant:f,tracking:c,...y}=a,s=i.length>0,g=u.useId();return f==="small"?n.jsx(B,{context:{accept:l,onChange:F,maxSizeBytes:m,files:i},children:n.jsxs(C,{className:N("jkl-file-input","jkl-file-input--small",r,{"jkl-file-input--has-files":s}),...y,children:[n.jsx(w,{tracking:c,multiple:d,variant:f,children:n.jsx("div",{className:"jkl-file-input__call-to-action",children:n.jsx(v,{id:t,label:"Legg til fil",multiple:d,tracking:c,variant:f,ref:o,"aria-describedby":g})})}),n.jsx(x,{id:g}),i.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:e})]})}):n.jsx(B,{context:{accept:l,onChange:F,maxSizeBytes:m,files:i},children:n.jsx(C,{className:N("jkl-file-input",r,{"jkl-file-input--has-files":s}),...y,children:n.jsxs(w,{tracking:c,multiple:d,variant:f,children:[i.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:e}),n.jsxs("div",{className:"jkl-file-input__call-to-action",children:[n.jsx(v,{id:t,label:d&&s?"Legg til flere filer":"Legg til fil",multiple:d,tracking:c,variant:f,ref:o,"aria-describedby":g}),n.jsx(x,{id:g})]})]})})})});h.displayName="FileInput";try{h.displayName="FileInput",h.__docgenInfo={description:"",displayName:"FileInput",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},accept:{defaultValue:null,description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.
@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`,name:"accept",required:!1,type:{name:"string"}},maxSizeBytes:{defaultValue:null,description:"",name:"maxSizeBytes",required:!1,type:{name:"number"}},multiple:{defaultValue:{value:"true"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"UploadedFile[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"flexible"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>, files: UploadedFile[]) => void"}},tracking:{defaultValue:null,description:"",name:"tracking",required:!1,type:{name:"Tracking"}},legend:{defaultValue:null,description:"",name:"legend",required:!0,type:{name:"string"}},"data-testautoid":{defaultValue:null,description:"",name:"data-testautoid",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},errorLabel:{defaultValue:null,description:"",name:"errorLabel",required:!1,type:{name:"string"}},helpLabel:{defaultValue:null,description:"@deprecated Bruk heller `description`.",name:"helpLabel",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:'Omit<LabelProps, "children">'}},supportLabelProps:{defaultValue:null,description:"",name:"supportLabelProps",required:!1,type:{name:'Omit<SupportLabelProps, "id" | "errorLabel" | "helpLabel">'}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}}}catch{}const me={title:"Komponenter/File Input",component:h,subcomponents:{File:_,Dropzone:w,MaxSize:x},args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},b={name:"File Input",render:a=>{const[o,l]=u.useState([]);return n.jsx(h,{...a,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:o,onChange:(r,e)=>{l(t=>[...t,...e])},children:o.map(({state:r,file:e,validation:t},i)=>n.jsx(_,{fileName:e.name,fileType:e.type,fileSize:e.size,path:`/path/fil-${i}`,file:e,state:r,onRemove:r!=="loading"?d=>"":void 0},`${e.name}-${i}`))})}},k={name:"File Input med valgte filer",render:a=>{const[o,l]=u.useState([{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]);return n.jsx(h,{...a,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:o,onChange:(r,e)=>{l(t=>[...t,...e])},children:o.map(({state:r,file:e},t)=>n.jsx(_,{fileName:e.name,fileType:e.type,fileSize:e.size,path:e.webkitRelativePath,file:e,state:r,onRemove:r!=="loading"?i=>"":void 0},`${e.name}-${t}`))})}},S={name:"File Input og opplastingsknapp",render:a=>{const[o,l]=u.useState([{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(t,i,d)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]),[r,e]=u.useState(!1);return n.jsxs(A,{gap:"m",direction:"column",children:[n.jsx(h,{...a,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:o,onChange:(t,i)=>{l(d=>[...d,...i])},children:o.map(({state:t,file:i,validation:d},m)=>u.createElement(_,{...p.args,...q.args,key:`${i.name}-${m}`,fileName:i.name,fileType:i.type,fileSize:i.size,path:`/path/fil-${m}`,file:i,state:r?"loading":void 0}))}),n.jsx(R,{variant:"primary",onClick:()=>{e(!0),setTimeout(()=>{e(!1)},3e3)},loader:{showLoader:r,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const ue=["FileInputStory","FileInputWithFile","FileInputAndUploadButton"];export{S as FileInputAndUploadButton,b as FileInputStory,k as FileInputWithFile,ue as __namedExportsOrder,me as default};
