import{r as d,j as t}from"./iframe-CO-6u7ty.js";import{u as I,a as T,F as j,m as s,b as R}from"./File.stories-IPbivCJD.js";import{c as k}from"./clsx-B-dksMZM.js";import{F as P}from"./FieldGroup-Cse5KNVK.js";import{f as z}from"./formatBytes-B7RSIuaZ.js";import{F as B}from"./Flex-Ccr10uO2.js";import{B as C}from"./Button-rd2RGWrh.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./Link-DCb_xN1n.js";import"./TrashCanIcon-CM6b4aX3.js";import"./Icon-CiI2KeTo.js";import"./SupportLabel-Cna44SEe.js";import"./WarningIcon-BvXE7Nnw.js";import"./useId-DIVYmsrS.js";import"./Label-CKBpQodC.js";import"./formatNumber-C5i6XT6A.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-BZGHAbbD.js";import"./mergeRefs-B7jCi3CL.js";import"./usePreviousValue-BSTfMP7p.js";import"./Loader-euIIQTMQ.js";import"./useDelayedRender-CFellfV2.js";function _(l,a="",o){const r=a.split(",").map(n=>n.toLowerCase()).map(n=>n.replaceAll("*","")).map(n=>n.trim());let e=r.length===0;if(e=r.some(n=>l.type.toLowerCase().includes(n)||l.name.toLowerCase().endsWith(n)),!e)return{type:"WRONG_TYPE",message:`Filtypen ${l.name?.split(".")[1]||""} støttes ikke`};if(typeof o<"u"&&l.size>o)return{type:"TOO_LARGE",message:`Filen er ${z(l.size)}, men kan maksimalt være ${z(o)}`}}const h=d.forwardRef((l,a)=>{const{children:o,...r}=l,[e,n]=d.useState(""),i=I();if(!i)return t.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:m,accept:u,onChange:f}=i;return t.jsx("div",{...r,ref:a,className:k("jkl-file-input__dropzone",e),onDragEnter:p=>{n("jkl-file-input__dropzone--enter"),p.preventDefault()},onDragOver:p=>{n("jkl-file-input__dropzone--enter"),p.preventDefault()},onDrop:p=>{p.preventDefault(),n(""),p.dataTransfer.files&&f(p,[...p.dataTransfer.files].map(g=>({file:g,state:void 0,validation:_(g,u,m),uploadProgress:0})))},onDragLeave:p=>{n(""),p.preventDefault()},children:o})});h.displayName="Dropzone";h.__docgenInfo={description:"",methods:[],displayName:"Dropzone",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const E=d.forwardRef((l,a)=>{const{multiple:o,id:r,label:e,...n}=l,i=d.useId(),m=`${r}-description`,u=o?"filer":"fil",f=I();if(!f)return t.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:p,maxSizeBytes:g,onChange:w}=f,y=r||i;return t.jsxs(t.Fragment,{children:[t.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:y,id:`${y}__add-btn`,children:e}),t.jsx("input",{...n,ref:a,id:y,accept:p,"aria-describedby":g?m:void 0,className:"jkl-sr-only",type:"file",multiple:o,value:"",onChange:c=>{c.target.files&&w(c,[...c.target.files].map(N=>({file:N,state:void 0,validation:_(N,p,g),uploadProgress:0})))}}),t.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",u," her"]})," "]})});E.displayName="Input";E.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""}}};const S=({id:l})=>{const a=I();if(!a)return t.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:o}=a;return typeof o>"u"?!1:t.jsxs("div",{id:l,className:"jkl-file-input__max-size-text",children:["Maks ",z(o)," per fil"]})};S.__docgenInfo={description:"",methods:[],displayName:"MaxSize",props:{id:{required:!0,tsType:{name:"string"},description:""}}};const F=d.forwardRef((l,a)=>{const{accept:o,className:r,children:e,id:n,value:i,density:m,multiple:u=!0,maxSizeBytes:f,onChange:p,variant:g,...w}=l,y=i.length>0,c=d.useId();return g==="small"?t.jsx(T,{context:{accept:o,onChange:p,maxSizeBytes:f,files:i},children:t.jsxs(P,{className:k("jkl-file-input","jkl-file-input--small",r,{"jkl-file-input--has-files":y}),"data-layout-density":m||"compact",...w,children:[t.jsx(h,{children:t.jsx("div",{className:"jkl-file-input__call-to-action",children:t.jsx(E,{id:n,label:"Legg til fil",multiple:u,ref:a,"aria-describedby":c})})}),t.jsx(S,{id:c}),i.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:e})]})}):t.jsx(T,{context:{accept:o,onChange:p,maxSizeBytes:f,files:i},children:t.jsx(P,{className:k("jkl-file-input",r,{"jkl-file-input--has-files":y}),"data-layout-density":m,...w,children:t.jsxs(h,{children:[i.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:e}),t.jsxs("div",{className:"jkl-file-input__call-to-action",children:[t.jsx(E,{id:n,label:u&&y?"Legg til flere filer":"Legg til fil",multiple:u,ref:a,"aria-describedby":c}),t.jsx(S,{id:c})]})]})})})});F.displayName="FileInput";F.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},accept:{required:!1,tsType:{name:"union",raw:'"image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"]',elements:[{name:"literal",value:'"image/*"'},{name:"literal",value:'".pdf"'},{name:"literal",value:'"image/*,.pdf"'},{name:'HTMLInputElement["accept"]',raw:'HTMLInputElement["accept"]'}]},description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.

@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`},maxSizeBytes:{required:!1,tsType:{name:"number"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"@default true"},value:{required:!0,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.DragEvent<HTMLDivElement>,
    files: UploadedFile[],
) => void`,signature:{arguments:[{type:{name:"union",raw:`| React.ChangeEvent<HTMLInputElement>
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const ae={title:"Komponenter/File Input",component:F,subcomponents:{File:j,Dropzone:h,MaxSize:S},args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},v={name:"File Input",render:l=>{const[a,o]=d.useState([]);return t.jsx(F,{...l,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:a,onChange:(r,e)=>{o(n=>[...n,...e])},children:a.map(({state:r,file:e,validation:n},i)=>t.jsx(j,{fileName:e.name,fileType:e.type,fileSize:e.size,path:`/path/fil-${i}`,file:e,state:r,onRemove:r!=="loading"?m=>"":void 0},`${e.name}-${i}`))})}},x={name:"File Input med valgte filer",render:l=>{const[a,o]=d.useState([{file:{...s.args,lastModified:0,name:s.args.fileName,webkitRelativePath:s.args.path,size:s.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...s.args,lastModified:0,name:s.args.fileName,webkitRelativePath:s.args.path,size:s.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...s.args,lastModified:0,name:s.args.fileName,webkitRelativePath:s.args.path,size:s.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]);return t.jsx(F,{...l,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:a,onChange:(r,e)=>{o(n=>[...n,...e])},children:a.map(({state:r,file:e},n)=>t.jsx(j,{fileName:e.name,fileType:e.type,fileSize:e.size,path:e.webkitRelativePath,file:e,state:r,onRemove:r!=="loading"?i=>"":void 0},`${e.name}-${n}`))})}},b={name:"File Input og opplastingsknapp",render:l=>{const[a,o]=d.useState([{file:{...s.args,lastModified:0,name:s.args.fileName,webkitRelativePath:s.args.path,size:s.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(n,i,m)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]),[r,e]=d.useState(!1);return t.jsxs(B,{direction:"column",children:[t.jsx(F,{...l,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:a,onChange:(n,i)=>{o(m=>[...m,...i])},children:a.map(({state:n,file:i,validation:m},u)=>d.createElement(j,{...s.args,...R.args,key:`${i.name}-${u}`,fileName:i.name,fileType:i.type,fileSize:i.size,path:`/path/fil-${u}`,file:i,state:r?"loading":void 0}))}),t.jsx(C,{variant:"primary",onClick:()=>{e(!0),setTimeout(()=>{e(!1)},3e3)},loader:{showLoader:r,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const oe=["FileInputStory","FileInputWithFile","FileInputAndUploadButton"];export{b as FileInputAndUploadButton,v as FileInputStory,x as FileInputWithFile,oe as __namedExportsOrder,ae as default};
