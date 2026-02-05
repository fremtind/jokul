import{r as d,j as t}from"./iframe-Bv39nkFP.js";import{f as k,u as I,a as T,F as S,m as s,b as R}from"./File.stories-DCY77rFn.js";import{c as z}from"./clsx-B-dksMZM.js";import{F as P}from"./FieldGroup-DCMX9Y-v.js";import{F as B}from"./Flex-CxDikLmz.js";import{B as C}from"./Button-D8ns893p.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./Link-DhUbeivd.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-D5oZ7dRM.js";import"./Icon-CPV6UyZy.js";import"./SupportLabel-DqOSUboz.js";import"./WarningIcon-BdgEIBYS.js";import"./useId-B6ndXlWF.js";import"./Label-CAhqhc09.js";import"./SlotComponent-9LNl1rS-.js";import"./mergeRefs-CvXccv94.js";import"./usePreviousValue-Ld6Jcl5i.js";import"./Loader-_vltwT4M.js";import"./useDelayedRender-2vX_Qt57.js";function _(o,a="",l){const r=a.split(",").map(n=>n.toLowerCase()).map(n=>n.replaceAll("*","")).map(n=>n.trim());let e=r.length===0;if(e=r.some(n=>o.type.toLowerCase().includes(n)||o.name.toLowerCase().endsWith(n)),!e)return{type:"WRONG_TYPE",message:`Filtypen ${o.name?.split(".")[1]||""} støttes ikke`};if(typeof l<"u"&&o.size>l)return{type:"TOO_LARGE",message:`Filen er ${k(o.size)}, men kan maksimalt være ${k(l)}`}}const h=d.forwardRef((o,a)=>{const{children:l,...r}=o,[e,n]=d.useState(""),i=I();if(!i)return t.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:m,accept:u,onChange:g}=i;return t.jsx("div",{...r,ref:a,className:z("jkl-file-input__dropzone",e),onDragEnter:p=>{n("jkl-file-input__dropzone--enter"),p.preventDefault()},onDragOver:p=>{n("jkl-file-input__dropzone--enter"),p.preventDefault()},onDrop:p=>{p.preventDefault(),n(""),p.dataTransfer.files&&g(p,[...p.dataTransfer.files].map(c=>({file:c,state:void 0,validation:_(c,u,m),uploadProgress:0})))},onDragLeave:p=>{n(""),p.preventDefault()},children:l})});h.displayName="Dropzone";h.__docgenInfo={description:"",methods:[],displayName:"Dropzone",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const b=d.forwardRef((o,a)=>{const{multiple:l,id:r,label:e,...n}=o,i=d.useId(),m=`${r}-description`,u=l?"filer":"fil",g=I();if(!g)return t.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:p,maxSizeBytes:c,onChange:y}=g,f=r||i;return t.jsxs(t.Fragment,{children:[t.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:f,id:`${f}__add-btn`,children:e}),t.jsx("input",{...n,ref:a,id:f,accept:p,"aria-describedby":c?m:void 0,className:"jkl-sr-only",type:"file",multiple:l,value:"",onChange:j=>{j.target.files&&y(j,[...j.target.files].map(N=>({file:N,state:void 0,validation:_(N,p,c),uploadProgress:0})))}}),t.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",u," her"]})," "]})});b.displayName="Input";b.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""}}};const E=({id:o})=>{const a=I();if(!a)return t.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:l}=a;return typeof l>"u"?!1:t.jsxs("div",{id:o,className:"jkl-file-input__max-size-text",children:["Maks ",k(l)," per fil"]})};E.__docgenInfo={description:"",methods:[],displayName:"MaxSize",props:{id:{required:!0,tsType:{name:"string"},description:""}}};const F=d.forwardRef((o,a)=>{const{accept:l,className:r,children:e,id:n,value:i,multiple:m=!0,maxSizeBytes:u,onChange:g,variant:p,...c}=o,y=i.length>0,f=d.useId();return p==="small"?t.jsx(T,{context:{accept:l,onChange:g,maxSizeBytes:u,files:i},children:t.jsxs(P,{className:z("jkl-file-input","jkl-file-input--small",r,{"jkl-file-input--has-files":y}),...c,children:[t.jsx(h,{children:t.jsx("div",{className:"jkl-file-input__call-to-action",children:t.jsx(b,{id:n,label:"Legg til fil",multiple:m,ref:a,"aria-describedby":f})})}),t.jsx(E,{id:f}),i.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:e})]})}):t.jsx(T,{context:{accept:l,onChange:g,maxSizeBytes:u,files:i},children:t.jsx(P,{className:z("jkl-file-input",r,{"jkl-file-input--has-files":y}),...c,children:t.jsxs(h,{children:[i.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:e}),t.jsxs("div",{className:"jkl-file-input__call-to-action",children:[t.jsx(b,{id:n,label:m&&y?"Legg til flere filer":"Legg til fil",multiple:m,ref:a,"aria-describedby":f}),t.jsx(E,{id:f})]})]})})})});F.displayName="FileInput";F.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"union",raw:'"image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"]',elements:[{name:"literal",value:'"image/*"'},{name:"literal",value:'".pdf"'},{name:"literal",value:'"image/*,.pdf"'},{name:'HTMLInputElement["accept"]',raw:'HTMLInputElement["accept"]'}]},description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.

@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`},maxSizeBytes:{required:!1,tsType:{name:"number"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"@default true"},value:{required:!0,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.DragEvent<HTMLDivElement>,
    files: UploadedFile[],
) => void`,signature:{arguments:[{type:{name:"union",raw:`| React.ChangeEvent<HTMLInputElement>
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const ie={title:"Komponenter/File Input",component:F,subcomponents:{File:S,Dropzone:h,MaxSize:E},args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},w={name:"File Input",render:o=>{const[a,l]=d.useState([]);return t.jsx(F,{...o,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:a,onChange:(r,e)=>{l(n=>[...n,...e])},children:a.map(({state:r,file:e,validation:n},i)=>t.jsx(S,{fileName:e.name,fileType:e.type,fileSize:e.size,path:`/path/fil-${i}`,file:e,state:r,onRemove:r!=="loading"?m=>"":void 0},`${e.name}-${i}`))})}},v={name:"File Input med valgte filer",render:o=>{const[a,l]=d.useState([{file:{...s.args,lastModified:0,name:s.args.fileName,webkitRelativePath:s.args.path,size:s.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...s.args,lastModified:0,name:s.args.fileName,webkitRelativePath:s.args.path,size:s.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...s.args,lastModified:0,name:s.args.fileName,webkitRelativePath:s.args.path,size:s.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]);return t.jsx(F,{...o,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:a,onChange:(r,e)=>{l(n=>[...n,...e])},children:a.map(({state:r,file:e},n)=>t.jsx(S,{fileName:e.name,fileType:e.type,fileSize:e.size,path:e.webkitRelativePath,file:e,state:r,onRemove:r!=="loading"?i=>"":void 0},`${e.name}-${n}`))})}},x={name:"File Input og opplastingsknapp",render:o=>{const[a,l]=d.useState([{file:{...s.args,lastModified:0,name:s.args.fileName,webkitRelativePath:s.args.path,size:s.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(n,i,m)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]),[r,e]=d.useState(!1);return t.jsxs(B,{direction:"column",children:[t.jsx(F,{...o,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:a,onChange:(n,i)=>{l(m=>[...m,...i])},children:a.map(({state:n,file:i,validation:m},u)=>d.createElement(S,{...s.args,...R.args,key:`${i.name}-${u}`,fileName:i.name,fileType:i.type,fileSize:i.size,path:`/path/fil-${u}`,file:i,state:r?"loading":void 0}))}),t.jsx(C,{variant:"primary",onClick:()=>{e(!0),setTimeout(()=>{e(!1)},3e3)},loader:{showLoader:r,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const ae=["FileInputStory","FileInputWithFile","FileInputAndUploadButton"];export{x as FileInputAndUploadButton,w as FileInputStory,v as FileInputWithFile,ae as __namedExportsOrder,ie as default};
