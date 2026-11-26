import{r as m,j as t}from"./iframe-Et2WV6aB.js";import{f as _,u as B,a as T,F as E,m as u,b as $}from"./File.stories-DUtQEbQ3.js";import{c as D}from"./clsx-B-dksMZM.js";import{F as C}from"./FieldGroup-CJj6KWj1.js";import{C as L,g as V}from"./types-BlFGa32c.js";import{F as M}from"./Flex-C1QjxZQt.js";import{B as U}from"./Button-BUiz6gRo.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./Text-CLX29PyJ.js";import"./Link-q8gEpG7S.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-D5dobQAy.js";import"./Icon-DCryJJU8.js";import"./SupportLabel-DiFZb4D3.js";import"./SuccessIcon-B6JSWvUF.js";import"./WarningIcon-C5GrpSFj.js";import"./useId-BdrES44_.js";import"./Label-Cir1Hllg.js";import"./SlotComponent-C9Em50xw.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-BC6Tdpad.js";import"./Loader-yEQOM5cG.js";import"./useDelayedRender-CHWufaa9.js";function R(r,o="",s){const i=r.name.toLowerCase(),e=r.type.toLowerCase(),l=o.split(",").map(a=>a.trim().toLowerCase()).filter(Boolean);if(!(l.length===0||l.some(a=>a.endsWith("/*")?e.startsWith(a.slice(0,-1)):a.includes("/")?e===a:i.endsWith(a.startsWith(".")?a:`.${a}`)))){const a=r.name.includes(".")?r.name.split(".").pop():void 0;return{type:"WRONG_TYPE",message:a?`Filtypen ${a} støttes ikke`:"Filtypen støttes ikke"}}if(s!==void 0&&r.size>s)return{type:"TOO_LARGE",message:`Filen er ${_(r.size)}, men kan maksimalt være ${_(s)}`}}const h=m.forwardRef((r,o)=>{const{children:s,trackingProps:i,multiple:e,variant:l,...n}=r,[a,c]=m.useState(""),F=B();if(!F)return t.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:k,accept:f,onChange:y}=F,g=p=>p.currentTarget.closest("fieldset:disabled")!==null;return t.jsx("div",{...n,ref:o,className:D("jkl-file-input__dropzone",a),"data-track-component-name":L.FileInput,"data-track-id":i?.id,"data-track-accept":f,"data-track-multiple":e,"data-track-variant":l,...V(i?.extra,n),onDragOver:p=>{if(p.preventDefault(),g(p)){p.dataTransfer.dropEffect="none";return}c("jkl-file-input__dropzone--enter")},onDrop:p=>{p.preventDefault(),c(""),!g(p)&&p.dataTransfer.files.length>0&&y(p,[...p.dataTransfer.files].slice(0,e?void 0:1).map(d=>({file:d,state:void 0,validation:R(d,f,k),uploadProgress:0})))},onDragLeave:p=>{p.currentTarget.contains(p.relatedTarget)||c("")},children:s})});h.displayName="Dropzone";try{h.displayName="Dropzone",h.__docgenInfo={description:"",displayName:"Dropzone",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",methods:[],props:{trackingProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"}],description:"",name:"trackingProps",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"},required:!1,tags:{},type:{name:"Tracking"}},multiple:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"}],description:"",name:"multiple",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"},required:!0,tags:{},type:{name:"boolean"}},variant:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"}],description:"",name:"variant",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",name:"DropzoneProps"},required:!1,tags:{},type:{name:"enum",raw:'"small" | "flexible"',value:[{value:'"small"'},{value:'"flexible"'}]}}},tags:{}}}catch{}const b=m.forwardRef((r,o)=>{const{multiple:s,id:i,label:e,trackingProps:l,variant:n,...a}=r,c=m.useId(),F=`${i}-description`,k=s?"filer":"fil",f=B();if(!f)return t.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:y,maxSizeBytes:g,onChange:p}=f,d=i||c;return t.jsxs(t.Fragment,{children:[t.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:d,id:`${d}__add-btn`,children:e}),t.jsx("input",{...a,ref:o,id:d,accept:y,"aria-describedby":g?F:void 0,className:"jkl-sr-only",type:"file",multiple:s,value:"","data-track-component-name":L.FileInput,"data-track-id":l?.id,"data-track-accept":y,"data-track-multiple":s,"data-track-variant":n,...V(l?.extra,a),onChange:x=>{x.target.files&&p(x,[...x.target.files].map(v=>({file:v,state:void 0,validation:R(v,y,g),uploadProgress:0})))}}),t.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",k," her"]})," "]})});b.displayName="Input";try{b.displayName="Input",b.__docgenInfo={description:"",displayName:"Input",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/Input.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"id",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!1,tags:{},type:{name:"string"}},label:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"label",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!0,tags:{},type:{name:"string"}},multiple:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"multiple",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!0,tags:{},type:{name:"boolean"}},trackingProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"trackingProps",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!1,tags:{},type:{name:"Tracking"}},variant:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"variant",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!1,tags:{},type:{name:"enum",raw:'"small" | "flexible"',value:[{value:'"small"'},{value:'"flexible"'}]}}},tags:{}}}catch{}const N=({id:r})=>{const o=B();if(!o)return t.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:s}=o;return typeof s>"u"?!1:t.jsxs("div",{id:r,className:"jkl-file-input__max-size-text",children:["Maks ",_(s)," per fil"]})};try{N.displayName="MaxSize",N.__docgenInfo={description:"",displayName:"MaxSize",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/MaxSize.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/MaxSize.tsx",name:"TypeLiteral"}],description:"",name:"id",required:!0,tags:{},type:{name:"string"}}},tags:{}}}catch{}const j=m.forwardRef((r,o)=>{const{accept:s,className:i,children:e,id:l,value:n,multiple:a=!0,maxSizeBytes:c,onChange:F,variant:k,trackingProps:f,...y}=r,g=m.useRef(null);m.useImperativeHandle(o,()=>g.current);const p=m.useRef(n.length);m.useEffect(()=>{const A=n.length<p.current;p.current=n.length;const q=!document.activeElement||document.activeElement===document.body;A&&q&&g.current?.focus()},[n.length]);const d=n.length>0,x=d?`${n.length} ${n.length===1?"fil":"filer"} valgt`:"Ingen filer valgt",v=t.jsx("p",{className:"jkl-sr-only","aria-live":"polite",children:x}),P=m.useId();return k==="small"?t.jsx(T,{context:{accept:s,onChange:F,maxSizeBytes:c,files:n},children:t.jsxs(C,{className:D("jkl-file-input","jkl-file-input--small",i,{"jkl-file-input--has-files":d}),...y,children:[t.jsx(h,{trackingProps:f,multiple:a,variant:k,children:t.jsx("div",{className:"jkl-file-input__call-to-action",children:t.jsx(b,{id:l,label:"Legg til fil",multiple:a,trackingProps:f,variant:k,ref:g,"aria-describedby":P})})}),t.jsx(N,{id:P}),n.length>0&&t.jsx("ul",{className:"jkl-file-input__files","aria-label":"Valgte filer",children:e}),v]})}):t.jsx(T,{context:{accept:s,onChange:F,maxSizeBytes:c,files:n},children:t.jsxs(C,{className:D("jkl-file-input",i,{"jkl-file-input--has-files":d}),...y,children:[t.jsxs(h,{trackingProps:f,multiple:a,variant:k,children:[n.length>0&&t.jsx("ul",{className:"jkl-file-input__files","aria-label":"Valgte filer",children:e}),t.jsxs("div",{className:"jkl-file-input__call-to-action",children:[t.jsx(b,{id:l,label:a&&d?"Legg til flere filer":"Legg til fil",multiple:a,trackingProps:f,variant:k,ref:g,"aria-describedby":P}),t.jsx(N,{id:P})]})]}),v]})})});j.displayName="FileInput";try{j.displayName="FileInput",j.__docgenInfo={description:"",displayName:"FileInput",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/FileInput.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"className",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"string"}},id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"id",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"string"}},accept:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.`,name:"accept",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{see:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept"},type:{name:"string"}},maxSizeBytes:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"maxSizeBytes",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"number"}},multiple:{defaultValue:{value:"true"},declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"multiple",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}},value:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"value",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!0,tags:{},type:{name:"UploadedFile[]"}},variant:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"variant",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"enum",raw:'"small" | "flexible"',value:[{value:'"small"'},{value:'"flexible"'}]}},onChange:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"onChange",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!0,tags:{},type:{name:"(e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>, files: UploadedFile[]) => void"}},trackingProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"trackingProps",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"Tracking"}},legend:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"legend",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!0,tags:{},type:{name:"string"}},disabled:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"}],description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`,name:"disabled",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"},required:!1,tags:{},type:{name:"boolean"}},tooltip:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"tooltip",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"ReactNode"}},"data-testautoid":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"}],description:"",name:"data-testautoid",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"},required:!1,tags:{},type:{name:"string"}},errorLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"errorLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},helpLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"helpLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{deprecated:"Bruk heller `description`."},type:{name:"string"}},labelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"labelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<LabelProps, "children">'}},supportLabelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"supportLabelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<SupportLabelProps, "id" | "errorLabel" | "helpLabel">'}},description:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"description",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const ge={title:"Komponenter/File Input",component:j,subcomponents:{File:E,Dropzone:h,MaxSize:N},args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},I={name:"File Input",render:r=>{const[o,s]=m.useState([]);return t.jsx(j,{...r,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:o,onChange:(i,e)=>{s(l=>[...l,...e])},children:o.map(({state:i,file:e,validation:l},n)=>t.jsx(E,{fileName:e.name,fileType:e.type,fileSize:e.size,path:`/path/fil-${n}`,file:e,state:i,onRemove:i!=="loading"?a=>"":void 0},`${e.name}-${n}`))})}},w={name:"Disabled",args:{disabled:!0}},S={name:"File Input med valgte filer",render:r=>{const[o,s]=m.useState([{file:{...u.args,lastModified:0,name:u.args.fileName,webkitRelativePath:u.args.path,size:u.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(i,e,l)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...u.args,lastModified:0,name:u.args.fileName,webkitRelativePath:u.args.path,size:u.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(i,e,l)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...u.args,lastModified:0,name:u.args.fileName,webkitRelativePath:u.args.path,size:u.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(i,e,l)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]);return t.jsx(j,{...r,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:o,onChange:(i,e)=>{s(l=>[...l,...e])},children:o.map(({state:i,file:e},l)=>t.jsx(E,{fileName:e.name,fileType:e.type,fileSize:e.size,path:e.webkitRelativePath,file:e,state:i,onRemove:i!=="loading"?n=>"":void 0},`${e.name}-${l}`))})}},z={name:"File Input og opplastingsknapp",render:r=>{const[o,s]=m.useState([{file:{...u.args,lastModified:0,name:u.args.fileName,webkitRelativePath:u.args.path,size:u.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(l,n,a)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]),[i,e]=m.useState(!1);return t.jsxs(M,{gap:"m",direction:"column",children:[t.jsx(j,{...r,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:o,onChange:(l,n)=>{s(a=>[...a,...n])},children:o.map(({state:l,file:n,validation:a},c)=>m.createElement(E,{...u.args,...$.args,key:`${n.name}-${c}`,fileName:n.name,fileType:n.type,fileSize:n.size,path:`/path/fil-${c}`,file:n,state:i?"loading":void 0}))}),t.jsx(U,{variant:"primary",onClick:()=>{e(!0),setTimeout(()=>{e(!1)},3e3)},loader:{showLoader:i,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}},ke=["FileInputStory","Disabled","FileInputWithFile","FileInputAndUploadButton"];I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    disabled: true
  }
}`,...w.parameters?.docs?.source},description:{story:"Rotelementet er et `fieldset`, så `disabled` slår av filvelgeren nativt. Dropsonen dempes\nfordi den er selve kontrollflaten, mens legend og støttetekster beholder full kontrast.",...w.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};export{w as Disabled,z as FileInputAndUploadButton,I as FileInputStory,S as FileInputWithFile,ke as __namedExportsOrder,ge as default};
