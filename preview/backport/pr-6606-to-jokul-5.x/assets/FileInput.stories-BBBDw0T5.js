import{r as u,j as n}from"./iframe-Cd58-eiO.js";import{f as I,u as z,a as P,F as j,m as p,b as D}from"./File.stories-CFVzOc-h.js";import{c as N}from"./clsx-B-dksMZM.js";import{F as _}from"./FieldGroup-BbQe26Mc.js";import{C as M,g as A}from"./types-IsTkoTmK.js";import{F as C}from"./Flex-BbNCUDDJ.js";import{B as L}from"./Button-prACtpDr.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./Text-C_xIqh65.js";import"./Link-ItJddyOm.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-ev4PmIeq.js";import"./Icon-5Ollpz7g.js";import"./SupportLabel-BAvqvobB.js";import"./SuccessIcon-BAJX7sQa.js";import"./WarningIcon-CZpWc3K5.js";import"./useId-x49vx7R9.js";import"./Label-Dj74iRke.js";import"./SlotComponent-CGELayE0.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-B57FAvp0.js";import"./Loader-DIIkvhnA.js";import"./useDelayedRender-CBSjPzx0.js";function B(o,s="",a){const r=s.split(",").map(t=>t.toLowerCase()).map(t=>t.replaceAll("*","")).map(t=>t.trim());let e=r.length===0;if(e=r.some(t=>o.type.toLowerCase().includes(t)||o.name.toLowerCase().endsWith(t)),!e)return{type:"WRONG_TYPE",message:`Filtypen ${o.name?.split(".")[1]||""} støttes ikke`};if(typeof a<"u"&&o.size>a)return{type:"TOO_LARGE",message:`Filen er ${I(o.size)}, men kan maksimalt være ${I(a)}`}}const h=u.forwardRef((o,s)=>{const{children:a,trackingProps:r,multiple:e,variant:t,...i}=o,[m,d]=u.useState(""),y=z();if(!y)return n.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:f,accept:c,onChange:k}=y;return n.jsx("div",{...i,ref:s,className:N("jkl-file-input__dropzone",m),"data-track-component-name":M.FileInput,"data-track-id":r?.id,"data-track-accept":c,"data-track-multiple":e,"data-track-variant":t,...A(r?.extra,i),onDragEnter:l=>{d("jkl-file-input__dropzone--enter"),l.preventDefault()},onDragOver:l=>{d("jkl-file-input__dropzone--enter"),l.preventDefault()},onDrop:l=>{l.preventDefault(),d(""),l.dataTransfer.files&&k(l,[...l.dataTransfer.files].map(g=>({file:g,state:void 0,validation:B(g,c,f),uploadProgress:0})))},onDragLeave:l=>{d(""),l.preventDefault()},children:a})});h.displayName="Dropzone";h.__docgenInfo={description:"",methods:[],displayName:"Dropzone",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * En unik identifikator for komponenten som skal spores. Mappes til \`data-track-id\`.
     */
    id?: string;
    /**
     * Ekstra sporingsfelt utover de faste feltene over, for team som trenger å
     * spore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget
     * \`data-track-<kebab-case-nøkkel>\`-attributt i DOM-en, se \`getExtraTrackingAttributes\`.
     */
    extra?: Record<string, string | number | boolean>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""}}};const x=u.forwardRef((o,s)=>{const{multiple:a,id:r,label:e,trackingProps:t,variant:i,...m}=o,d=u.useId(),y=`${r}-description`,f=a?"filer":"fil",c=z();if(!c)return n.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:k,maxSizeBytes:l,onChange:g}=c,S=r||d;return n.jsxs(n.Fragment,{children:[n.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:S,id:`${S}__add-btn`,children:e}),n.jsx("input",{...m,ref:s,id:S,accept:k,"aria-describedby":l?y:void 0,className:"jkl-sr-only",type:"file",multiple:a,value:"","data-track-component-name":M.FileInput,"data-track-id":t?.id,"data-track-accept":k,"data-track-multiple":a,"data-track-variant":i,...A(t?.extra,m),onChange:T=>{T.target.files&&g(T,[...T.target.files].map(R=>({file:R,state:void 0,validation:B(R,k,l),uploadProgress:0})))}}),n.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",f," her"]})," "]})});x.displayName="Input";x.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * En unik identifikator for komponenten som skal spores. Mappes til \`data-track-id\`.
     */
    id?: string;
    /**
     * Ekstra sporingsfelt utover de faste feltene over, for team som trenger å
     * spore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget
     * \`data-track-<kebab-case-nøkkel>\`-attributt i DOM-en, se \`getExtraTrackingAttributes\`.
     */
    extra?: Record<string, string | number | boolean>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""}}};const E=({id:o})=>{const s=z();if(!s)return n.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:a}=s;return typeof a>"u"?!1:n.jsxs("div",{id:o,className:"jkl-file-input__max-size-text",children:["Maks ",I(a)," per fil"]})};E.__docgenInfo={description:"",methods:[],displayName:"MaxSize",props:{id:{required:!0,tsType:{name:"string"},description:""}}};const F=u.forwardRef((o,s)=>{const{accept:a,className:r,children:e,id:t,value:i,multiple:m=!0,maxSizeBytes:d,onChange:y,variant:f,trackingProps:c,...k}=o,l=i.length>0,g=u.useId();return f==="small"?n.jsx(P,{context:{accept:a,onChange:y,maxSizeBytes:d,files:i},children:n.jsxs(_,{className:N("jkl-file-input","jkl-file-input--small",r,{"jkl-file-input--has-files":l}),...k,children:[n.jsx(h,{trackingProps:c,multiple:m,variant:f,children:n.jsx("div",{className:"jkl-file-input__call-to-action",children:n.jsx(x,{id:t,label:"Legg til fil",multiple:m,trackingProps:c,variant:f,ref:s,"aria-describedby":g})})}),n.jsx(E,{id:g}),i.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:e})]})}):n.jsx(P,{context:{accept:a,onChange:y,maxSizeBytes:d,files:i},children:n.jsx(_,{className:N("jkl-file-input",r,{"jkl-file-input--has-files":l}),...k,children:n.jsxs(h,{trackingProps:c,multiple:m,variant:f,children:[i.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:e}),n.jsxs("div",{className:"jkl-file-input__call-to-action",children:[n.jsx(x,{id:t,label:m&&l?"Legg til flere filer":"Legg til fil",multiple:m,trackingProps:c,variant:f,ref:s,"aria-describedby":g}),n.jsx(E,{id:g})]})]})})})});F.displayName="FileInput";F.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"union",raw:'"image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"]',elements:[{name:"literal",value:'"image/*"'},{name:"literal",value:'".pdf"'},{name:"literal",value:'"image/*,.pdf"'},{name:'HTMLInputElement["accept"]',raw:'HTMLInputElement["accept"]'}]},description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.

@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`},maxSizeBytes:{required:!1,tsType:{name:"number"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"@default true"},value:{required:!0,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.DragEvent<HTMLDivElement>,
    files: UploadedFile[],
) => void`,signature:{arguments:[{type:{name:"union",raw:`| React.ChangeEvent<HTMLInputElement>
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}}},description:""},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * En unik identifikator for komponenten som skal spores. Mappes til \`data-track-id\`.
     */
    id?: string;
    /**
     * Ekstra sporingsfelt utover de faste feltene over, for team som trenger å
     * spore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget
     * \`data-track-<kebab-case-nøkkel>\`-attributt i DOM-en, se \`getExtraTrackingAttributes\`.
     */
    extra?: Record<string, string | number | boolean>;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""}},composes:["Omit"]};const de={title:"Komponenter/File Input",component:F,subcomponents:{File:j,Dropzone:h,MaxSize:E},args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},w={name:"File Input",render:o=>{const[s,a]=u.useState([]);return n.jsx(F,{...o,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:s,onChange:(r,e)=>{a(t=>[...t,...e])},children:s.map(({state:r,file:e,validation:t},i)=>n.jsx(j,{fileName:e.name,fileType:e.type,fileSize:e.size,path:`/path/fil-${i}`,file:e,state:r,onRemove:r!=="loading"?m=>"":void 0},`${e.name}-${i}`))})}},b={name:"File Input med valgte filer",render:o=>{const[s,a]=u.useState([{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]);return n.jsx(F,{...o,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:s,onChange:(r,e)=>{a(t=>[...t,...e])},children:s.map(({state:r,file:e},t)=>n.jsx(j,{fileName:e.name,fileType:e.type,fileSize:e.size,path:e.webkitRelativePath,file:e,state:r,onRemove:r!=="loading"?i=>"":void 0},`${e.name}-${t}`))})}},v={name:"File Input og opplastingsknapp",render:o=>{const[s,a]=u.useState([{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(t,i,m)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]),[r,e]=u.useState(!1);return n.jsxs(C,{direction:"column",children:[n.jsx(F,{...o,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:s,onChange:(t,i)=>{a(m=>[...m,...i])},children:s.map(({state:t,file:i,validation:m},d)=>u.createElement(j,{...p.args,...D.args,key:`${i.name}-${d}`,fileName:i.name,fileType:i.type,fileSize:i.size,path:`/path/fil-${d}`,file:i,state:r?"loading":void 0}))}),n.jsx(L,{variant:"primary",onClick:()=>{e(!0),setTimeout(()=>{e(!1)},3e3)},loader:{showLoader:r,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}},ue=["FileInputStory","FileInputWithFile","FileInputAndUploadButton"];w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};export{v as FileInputAndUploadButton,w as FileInputStory,b as FileInputWithFile,ue as __namedExportsOrder,de as default};
