import{r as c,j as n}from"./iframe-CyZt68Cb.js";import{f as S,u as E,a as B,F as b,m as p,b as V}from"./File.stories-CjBzgfNI.js";import{c as _}from"./clsx-B-dksMZM.js";import{F as T}from"./FieldGroup-DFRT5vRf.js";import{C as L,g as A}from"./types-BlFGa32c.js";import{F as q}from"./Flex-CmyoT1p4.js";import{B as R}from"./Button-DUihIcex.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./Text-Bt3Wk31A.js";import"./Link-BkXRYAeX.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-DLB0Mf0S.js";import"./Icon-CCjS3LuR.js";import"./SupportLabel-DnJNswT-.js";import"./SuccessIcon-D__WDc9V.js";import"./WarningIcon-BU32-oLZ.js";import"./useId-C86xha4J.js";import"./Label-D0WMzdoW.js";import"./SlotComponent-qfYoY-0d.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-BYA0q3eY.js";import"./Loader-CjaX7HtT.js";import"./useDelayedRender-CXAsV25o.js";function C(r,s="",l){const a=s.split(",").map(t=>t.toLowerCase()).map(t=>t.replaceAll("*","")).map(t=>t.trim());let e=a.length===0;if(e=a.some(t=>r.type.toLowerCase().includes(t)||r.name.toLowerCase().endsWith(t)),!e)return{type:"WRONG_TYPE",message:`Filtypen ${r.name?.split(".")[1]||""} støttes ikke`};if(typeof l<"u"&&r.size>l)return{type:"TOO_LARGE",message:`Filen er ${S(r.size)}, men kan maksimalt være ${S(l)}`}}const j=c.forwardRef((r,s)=>{const{children:l,trackingProps:a,multiple:e,variant:t,...i}=r,[u,m]=c.useState(""),y=E();if(!y)return n.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:f,accept:d,onChange:k}=y;return n.jsx("div",{...i,ref:s,className:_("jkl-file-input__dropzone",u),"data-track-component-name":L.FileInput,"data-track-id":a?.id,"data-track-accept":d,"data-track-multiple":e,"data-track-variant":t,...A(a?.extra,i),onDragEnter:o=>{m("jkl-file-input__dropzone--enter"),o.preventDefault()},onDragOver:o=>{m("jkl-file-input__dropzone--enter"),o.preventDefault()},onDrop:o=>{o.preventDefault(),m(""),o.dataTransfer.files&&k(o,[...o.dataTransfer.files].map(g=>({file:g,state:void 0,validation:C(g,d,f),uploadProgress:0})))},onDragLeave:o=>{m(""),o.preventDefault()},children:l})});j.displayName="Dropzone";try{j.displayName="Dropzone",j.__docgenInfo={description:"",displayName:"Dropzone",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",methods:[],props:{trackingProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"}],description:"",name:"trackingProps",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"},required:!1,tags:{},type:{name:"Tracking"}},multiple:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"}],description:"",name:"multiple",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"},required:!0,tags:{},type:{name:"boolean"}},variant:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"}],description:"",name:"variant",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"},required:!1,tags:{},type:{name:"enum",raw:'"small" | "flexible"',value:[{value:'"small"'},{value:'"flexible"'}]}}},tags:{}}}catch{}const x=c.forwardRef((r,s)=>{const{multiple:l,id:a,label:e,trackingProps:t,variant:i,...u}=r,m=c.useId(),y=`${a}-description`,f=l?"filer":"fil",d=E();if(!d)return n.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:k,maxSizeBytes:o,onChange:g}=d,I=a||m;return n.jsxs(n.Fragment,{children:[n.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:I,id:`${I}__add-btn`,children:e}),n.jsx("input",{...u,ref:s,id:I,accept:k,"aria-describedby":o?y:void 0,className:"jkl-sr-only",type:"file",multiple:l,value:"","data-track-component-name":L.FileInput,"data-track-id":t?.id,"data-track-accept":k,"data-track-multiple":l,"data-track-variant":i,...A(t?.extra,u),onChange:z=>{z.target.files&&g(z,[...z.target.files].map(D=>({file:D,state:void 0,validation:C(D,k,o),uploadProgress:0})))}}),n.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",f," her"]})," "]})});x.displayName="Input";try{x.displayName="Input",x.__docgenInfo={description:"",displayName:"Input",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/Input.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"id",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!1,tags:{},type:{name:"string"}},label:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"label",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!0,tags:{},type:{name:"string"}},multiple:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"multiple",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!0,tags:{},type:{name:"boolean"}},trackingProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"trackingProps",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!1,tags:{},type:{name:"Tracking"}},variant:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"variant",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!1,tags:{},type:{name:"enum",raw:'"small" | "flexible"',value:[{value:'"small"'},{value:'"flexible"'}]}}},tags:{}}}catch{}const w=({id:r})=>{const s=E();if(!s)return n.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:l}=s;return typeof l>"u"?!1:n.jsxs("div",{id:r,className:"jkl-file-input__max-size-text",children:["Maks ",S(l)," per fil"]})};try{w.displayName="MaxSize",w.__docgenInfo={description:"",displayName:"MaxSize",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/MaxSize.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/MaxSize.tsx",name:"TypeLiteral"}],description:"",name:"id",required:!0,tags:{},type:{name:"string"}}},tags:{}}}catch{}const F=c.forwardRef((r,s)=>{const{accept:l,className:a,children:e,id:t,value:i,multiple:u=!0,maxSizeBytes:m,onChange:y,variant:f,trackingProps:d,...k}=r,o=i.length>0,g=c.useId();return f==="small"?n.jsx(B,{context:{accept:l,onChange:y,maxSizeBytes:m,files:i},children:n.jsxs(T,{className:_("jkl-file-input","jkl-file-input--small",a,{"jkl-file-input--has-files":o}),...k,children:[n.jsx(j,{trackingProps:d,multiple:u,variant:f,children:n.jsx("div",{className:"jkl-file-input__call-to-action",children:n.jsx(x,{id:t,label:"Legg til fil",multiple:u,trackingProps:d,variant:f,ref:s,"aria-describedby":g})})}),n.jsx(w,{id:g}),i.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:e})]})}):n.jsx(B,{context:{accept:l,onChange:y,maxSizeBytes:m,files:i},children:n.jsx(T,{className:_("jkl-file-input",a,{"jkl-file-input--has-files":o}),...k,children:n.jsxs(j,{trackingProps:d,multiple:u,variant:f,children:[i.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:e}),n.jsxs("div",{className:"jkl-file-input__call-to-action",children:[n.jsx(x,{id:t,label:u&&o?"Legg til flere filer":"Legg til fil",multiple:u,trackingProps:d,variant:f,ref:s,"aria-describedby":g}),n.jsx(w,{id:g})]})]})})})});F.displayName="FileInput";try{F.displayName="FileInput",F.__docgenInfo={description:"",displayName:"FileInput",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/FileInput.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"className",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"string"}},id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"id",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"string"}},accept:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.`,name:"accept",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{see:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept"},type:{name:"string"}},maxSizeBytes:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"maxSizeBytes",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"number"}},multiple:{defaultValue:{value:"true"},declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"multiple",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}},value:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"value",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!0,tags:{},type:{name:"UploadedFile[]"}},variant:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"variant",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"enum",raw:'"small" | "flexible"',value:[{value:'"small"'},{value:'"flexible"'}]}},onChange:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"onChange",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!0,tags:{},type:{name:"(e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>, files: UploadedFile[]) => void"}},trackingProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"trackingProps",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"Tracking"}},legend:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"legend",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!0,tags:{},type:{name:"string"}},disabled:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"}],description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`,name:"disabled",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"},required:!1,tags:{},type:{name:"boolean"}},helpLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"helpLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{deprecated:"Bruk heller `description`."},type:{name:"string"}},supportLabelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"supportLabelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<SupportLabelProps, "id" | "helpLabel" | "errorLabel">'}},errorLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"errorLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},tooltip:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"tooltip",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"ReactNode"}},labelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"labelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<LabelProps, "children">'}},description:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"description",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},"data-testautoid":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"}],description:"",name:"data-testautoid",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const ce={title:"Komponenter/File Input",component:F,subcomponents:{File:b,Dropzone:j,MaxSize:w},args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},v={name:"File Input",render:r=>{const[s,l]=c.useState([]);return n.jsx(F,{...r,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:s,onChange:(a,e)=>{l(t=>[...t,...e])},children:s.map(({state:a,file:e,validation:t},i)=>n.jsx(b,{fileName:e.name,fileType:e.type,fileSize:e.size,path:`/path/fil-${i}`,file:e,state:a,onRemove:a!=="loading"?u=>"":void 0},`${e.name}-${i}`))})}},h={name:"Disabled",args:{disabled:!0}},P={name:"File Input med valgte filer",render:r=>{const[s,l]=c.useState([{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(a,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(a,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(a,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]);return n.jsx(F,{...r,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:s,onChange:(a,e)=>{l(t=>[...t,...e])},children:s.map(({state:a,file:e},t)=>n.jsx(b,{fileName:e.name,fileType:e.type,fileSize:e.size,path:e.webkitRelativePath,file:e,state:a,onRemove:a!=="loading"?i=>"":void 0},`${e.name}-${t}`))})}},N={name:"File Input og opplastingsknapp",render:r=>{const[s,l]=c.useState([{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(t,i,u)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]),[a,e]=c.useState(!1);return n.jsxs(q,{gap:"m",direction:"column",children:[n.jsx(F,{...r,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:s,onChange:(t,i)=>{l(u=>[...u,...i])},children:s.map(({state:t,file:i,validation:u},m)=>c.createElement(b,{...p.args,...V.args,key:`${i.name}-${m}`,fileName:i.name,fileType:i.type,fileSize:i.size,path:`/path/fil-${m}`,file:i,state:a?"loading":void 0}))}),n.jsx(R,{variant:"primary",onClick:()=>{e(!0),setTimeout(()=>{e(!1)},3e3)},loader:{showLoader:a,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}},de=["FileInputStory","Disabled","FileInputWithFile","FileInputAndUploadButton"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source},description:{story:"Rotelementet er et `fieldset`, så `disabled` slår av filvelgeren nativt. Dropsonen dempes\nfordi den er selve kontrollflaten, mens legend og støttetekster beholder full kontrast.",...h.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};export{h as Disabled,N as FileInputAndUploadButton,v as FileInputStory,P as FileInputWithFile,de as __namedExportsOrder,ce as default};
