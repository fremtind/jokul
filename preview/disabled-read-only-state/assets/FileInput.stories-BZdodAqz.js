import{r as m,j as t}from"./iframe-EVh4-ZHk.js";import{f as I,u as _,a as z,F as N,m as o,b as L}from"./File.stories-C_t2AcQ4.js";import{c as S}from"./clsx-B-dksMZM.js";import{F as B}from"./FieldGroup-BPFWzxEg.js";import{F as A}from"./Flex-DXb8rWx3.js";import{B as C}from"./Button-ByYzbC9E.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./Text-CwKxdbxn.js";import"./Link-uhhwgIJX.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-Dpbcz9SN.js";import"./Icon-a17Csy1w.js";import"./SupportLabel-Ba7pFx6B.js";import"./SuccessIcon-BpWO4-kD.js";import"./WarningIcon-CtoiD3ZC.js";import"./useId-DZLyYaK3.js";import"./Label-DbmPu22I.js";import"./SlotComponent-DJYhcZUo.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-Cp_mu6-R.js";import"./Loader-ztf0LKe9.js";import"./useDelayedRender-Bw2Qy-QB.js";function D(a,l="",s){const r=l.split(",").map(n=>n.toLowerCase()).map(n=>n.replaceAll("*","")).map(n=>n.trim());let e=r.length===0;if(e=r.some(n=>a.type.toLowerCase().includes(n)||a.name.toLowerCase().endsWith(n)),!e)return{type:"WRONG_TYPE",message:`Filtypen ${a.name?.split(".")[1]||""} støttes ikke`};if(typeof s<"u"&&a.size>s)return{type:"TOO_LARGE",message:`Filen er ${I(a.size)}, men kan maksimalt være ${I(s)}`}}const y=m.forwardRef((a,l)=>{const{children:s,...r}=a,[e,n]=m.useState(""),i=_();if(!i)return t.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:u,accept:d,onChange:g}=i;return t.jsx("div",{...r,ref:l,className:S("jkl-file-input__dropzone",e),onDragEnter:p=>{n("jkl-file-input__dropzone--enter"),p.preventDefault()},onDragOver:p=>{n("jkl-file-input__dropzone--enter"),p.preventDefault()},onDrop:p=>{p.preventDefault(),n(""),p.dataTransfer.files&&g(p,[...p.dataTransfer.files].map(c=>({file:c,state:void 0,validation:D(c,d,u),uploadProgress:0})))},onDragLeave:p=>{n(""),p.preventDefault()},children:s})});y.displayName="Dropzone";try{y.displayName="Dropzone",y.__docgenInfo={description:"",displayName:"Dropzone",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/Dropzone.tsx",methods:[],props:{},tags:{}}}catch{}const h=m.forwardRef((a,l)=>{const{multiple:s,id:r,label:e,...n}=a,i=m.useId(),u=`${r}-description`,d=s?"filer":"fil",g=_();if(!g)return t.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:p,maxSizeBytes:c,onChange:F}=g,f=r||i;return t.jsxs(t.Fragment,{children:[t.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:f,id:`${f}__add-btn`,children:e}),t.jsx("input",{...n,ref:l,id:f,accept:p,"aria-describedby":c?u:void 0,className:"jkl-sr-only",type:"file",multiple:s,value:"",onChange:P=>{P.target.files&&F(P,[...P.target.files].map(E=>({file:E,state:void 0,validation:D(E,p,c),uploadProgress:0})))}}),t.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",d," her"]})," "]})});h.displayName="Input";try{h.displayName="Input",h.__docgenInfo={description:"",displayName:"Input",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/Input.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"id",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!1,tags:{},type:{name:"string"}},label:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"label",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!0,tags:{},type:{name:"string"}},multiple:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"}],description:"",name:"multiple",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/Input.tsx",name:"FileInputProps"},required:!0,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const w=({id:a})=>{const l=_();if(!l)return t.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:s}=l;return typeof s>"u"?!1:t.jsxs("div",{id:a,className:"jkl-file-input__max-size-text",children:["Maks ",I(s)," per fil"]})};try{w.displayName="MaxSize",w.__docgenInfo={description:"",displayName:"MaxSize",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/MaxSize.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/MaxSize.tsx",name:"TypeLiteral"}],description:"",name:"id",required:!0,tags:{},type:{name:"string"}}},tags:{}}}catch{}const k=m.forwardRef((a,l)=>{const{accept:s,className:r,children:e,id:n,value:i,multiple:u=!0,maxSizeBytes:d,onChange:g,variant:p,...c}=a,F=i.length>0,f=m.useId();return p==="small"?t.jsx(z,{context:{accept:s,onChange:g,maxSizeBytes:d,files:i},children:t.jsxs(B,{className:S("jkl-file-input","jkl-file-input--small",r,{"jkl-file-input--has-files":F}),...c,children:[t.jsx(y,{children:t.jsx("div",{className:"jkl-file-input__call-to-action",children:t.jsx(h,{id:n,label:"Legg til fil",multiple:u,ref:l,"aria-describedby":f})})}),t.jsx(w,{id:f}),i.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:e})]})}):t.jsx(z,{context:{accept:s,onChange:g,maxSizeBytes:d,files:i},children:t.jsx(B,{className:S("jkl-file-input",r,{"jkl-file-input--has-files":F}),...c,children:t.jsxs(y,{children:[i.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:e}),t.jsxs("div",{className:"jkl-file-input__call-to-action",children:[t.jsx(h,{id:n,label:u&&F?"Legg til flere filer":"Legg til fil",multiple:u,ref:l,"aria-describedby":f}),t.jsx(w,{id:f})]})]})})})});k.displayName="FileInput";try{k.displayName="FileInput",k.__docgenInfo={description:"",displayName:"FileInput",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/FileInput.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"className",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"string"}},id:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"id",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"string"}},accept:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.`,name:"accept",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{see:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept"},type:{name:"string"}},maxSizeBytes:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"maxSizeBytes",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"number"}},multiple:{defaultValue:{value:"true"},declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"multiple",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}},value:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"value",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!0,tags:{},type:{name:"UploadedFile[]"}},variant:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"variant",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!1,tags:{},type:{name:"enum",raw:'"small" | "flexible"',value:[{value:'"small"'},{value:'"flexible"'}]}},onChange:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"}],description:"",name:"onChange",parent:{fileName:"jokul/packages/jokul/src/components/file-input/types.ts",name:"FileInputProps"},required:!0,tags:{},type:{name:"(e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>, files: UploadedFile[]) => void"}},disabled:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"}],description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`,name:"disabled",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"},required:!1,tags:{},type:{name:"boolean"}},legend:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"legend",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!0,tags:{},type:{name:"string"}},labelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"labelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<LabelProps, "children">'}},supportLabelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"supportLabelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<SupportLabelProps, "id" | "helpLabel" | "errorLabel">'}},tooltip:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"tooltip",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"ReactNode"}},helpLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"helpLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{deprecated:"Bruk heller `description`."},type:{name:"string"}},errorLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"errorLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"description",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},"data-testautoid":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"}],description:"",name:"data-testautoid",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const se={title:"Komponenter/File Input",component:k,subcomponents:{File:N,Dropzone:y,MaxSize:w},args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},x={name:"File Input",render:a=>{const[l,s]=m.useState([]);return t.jsx(k,{...a,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:l,onChange:(r,e)=>{s(n=>[...n,...e])},children:l.map(({state:r,file:e,validation:n},i)=>t.jsx(N,{fileName:e.name,fileType:e.type,fileSize:e.size,path:`/path/fil-${i}`,file:e,state:r,onRemove:r!=="loading"?u=>"":void 0},`${e.name}-${i}`))})}},j={name:"Disabled",args:{disabled:!0}},b={name:"File Input med valgte filer",render:a=>{const[l,s]=m.useState([{file:{...o.args,lastModified:0,name:o.args.fileName,webkitRelativePath:o.args.path,size:o.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...o.args,lastModified:0,name:o.args.fileName,webkitRelativePath:o.args.path,size:o.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...o.args,lastModified:0,name:o.args.fileName,webkitRelativePath:o.args.path,size:o.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,n)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]);return t.jsx(k,{...a,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:l,onChange:(r,e)=>{s(n=>[...n,...e])},children:l.map(({state:r,file:e},n)=>t.jsx(N,{fileName:e.name,fileType:e.type,fileSize:e.size,path:e.webkitRelativePath,file:e,state:r,onRemove:r!=="loading"?i=>"":void 0},`${e.name}-${n}`))})}},v={name:"File Input og opplastingsknapp",render:a=>{const[l,s]=m.useState([{file:{...o.args,lastModified:0,name:o.args.fileName,webkitRelativePath:o.args.path,size:o.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(n,i,u)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]),[r,e]=m.useState(!1);return t.jsxs(A,{gap:"m",direction:"column",children:[t.jsx(k,{...a,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:l,onChange:(n,i)=>{s(u=>[...u,...i])},children:l.map(({state:n,file:i,validation:u},d)=>m.createElement(N,{...o.args,...L.args,key:`${i.name}-${d}`,fileName:i.name,fileType:i.type,fileSize:i.size,path:`/path/fil-${d}`,file:i,state:r?"loading":void 0}))}),t.jsx(C,{variant:"primary",onClick:()=>{e(!0),setTimeout(()=>{e(!1)},3e3)},loader:{showLoader:r,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}},oe=["FileInputStory","Disabled","FileInputWithFile","FileInputAndUploadButton"];x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    disabled: true
  }
}`,...j.parameters?.docs?.source},description:{story:"Rotelementet er et `fieldset`, så `disabled` slår av filvelgeren nativt. Dropsonen dempes\nfordi den er selve kontrollflaten, mens legend og støttetekster beholder full kontrast.",...j.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};export{j as Disabled,v as FileInputAndUploadButton,x as FileInputStory,b as FileInputWithFile,oe as __namedExportsOrder,se as default};
