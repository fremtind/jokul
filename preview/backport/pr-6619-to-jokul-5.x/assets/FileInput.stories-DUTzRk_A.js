import{r as u,j as n}from"./iframe-bZjd5nQc.js";import{f as N,u as R,a as D,F as S,m as p,b as C}from"./File.stories-C56_ZMTd.js";import{c as z}from"./clsx-B-dksMZM.js";import{F as _}from"./FieldGroup-DvCdx3ZL.js";import{C as M,g as A}from"./types-IsTkoTmK.js";import{F as L}from"./Flex-CKMnuUKf.js";import{B as q}from"./Button-pfNZJUzF.js";import"./preload-helper-PPVm8Dsz.js";import"./cow-CdXr5BwN.js";import"./Text-BKkkLRAF.js";import"./Link-Cls-aThn.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-BpgxLrVb.js";import"./Icon-BxLlLgud.js";import"./SupportLabel-2m9ieIZu.js";import"./SuccessIcon-C-xIXmG5.js";import"./WarningIcon-Dz-U58Do.js";import"./useId-B70GVnSD.js";import"./Label-DN-fX9C-.js";import"./SlotComponent-BdhLlCAs.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-Nn7mUyBi.js";import"./Loader-C5Olidp4.js";import"./useDelayedRender-BYG5RtFZ.js";function B(o,s="",i){const r=s.split(",").map(t=>t.toLowerCase()).map(t=>t.replaceAll("*","")).map(t=>t.trim());let e=r.length===0;if(e=r.some(t=>o.type.toLowerCase().includes(t)||o.name.toLowerCase().endsWith(t)),!e)return{type:"WRONG_TYPE",message:`Filtypen ${o.name?.split(".")[1]||""} støttes ikke`};if(typeof i<"u"&&o.size>i)return{type:"TOO_LARGE",message:`Filen er ${N(o.size)}, men kan maksimalt være ${N(i)}`}}const h=u.forwardRef((o,s)=>{const{children:i,trackingProps:r,multiple:e,variant:t,...a}=o,[m,d]=u.useState(""),y=R();if(!y)return n.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:f,accept:c,onChange:k}=y;return n.jsx("div",{...a,ref:s,className:z("jkl-file-input__dropzone",m),"data-track-component-name":M.FileInput,"data-track-id":r?.id,"data-track-accept":c,"data-track-multiple":e,"data-track-variant":t,...A(r?.extra,a),onDragEnter:l=>{d("jkl-file-input__dropzone--enter"),l.preventDefault()},onDragOver:l=>{d("jkl-file-input__dropzone--enter"),l.preventDefault()},onDrop:l=>{l.preventDefault(),d(""),l.dataTransfer.files&&k(l,[...l.dataTransfer.files].map(g=>({file:g,state:void 0,validation:B(g,c,f),uploadProgress:0})))},onDragLeave:l=>{d(""),l.preventDefault()},children:i})});h.displayName="Dropzone";h.__docgenInfo={description:"",methods:[],displayName:"Dropzone",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""}}};const E=u.forwardRef((o,s)=>{const{multiple:i,id:r,label:e,trackingProps:t,variant:a,...m}=o,d=u.useId(),y=`${r}-description`,f=i?"filer":"fil",c=R();if(!c)return n.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:k,maxSizeBytes:l,onChange:g}=c,T=r||d;return n.jsxs(n.Fragment,{children:[n.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:T,id:`${T}__add-btn`,children:e}),n.jsx("input",{...m,ref:s,id:T,accept:k,"aria-describedby":l?y:void 0,className:"jkl-sr-only",type:"file",multiple:i,value:"","data-track-component-name":M.FileInput,"data-track-id":t?.id,"data-track-accept":k,"data-track-multiple":i,"data-track-variant":a,...A(t?.extra,m),onChange:I=>{I.target.files&&g(I,[...I.target.files].map(P=>({file:P,state:void 0,validation:B(P,k,l),uploadProgress:0})))}}),n.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",f," her"]})," "]})});E.displayName="Input";E.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},trackingProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""}}};const j=({id:o})=>{const s=R();if(!s)return n.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:i}=s;return typeof i>"u"?!1:n.jsxs("div",{id:o,className:"jkl-file-input__max-size-text",children:["Maks ",N(i)," per fil"]})};j.__docgenInfo={description:"",methods:[],displayName:"MaxSize",props:{id:{required:!0,tsType:{name:"string"},description:""}}};const F=u.forwardRef((o,s)=>{const{accept:i,className:r,children:e,id:t,value:a,multiple:m=!0,maxSizeBytes:d,onChange:y,variant:f,trackingProps:c,...k}=o,l=a.length>0,g=u.useId();return f==="small"?n.jsx(D,{context:{accept:i,onChange:y,maxSizeBytes:d,files:a},children:n.jsxs(_,{className:z("jkl-file-input","jkl-file-input--small",r,{"jkl-file-input--has-files":l}),...k,children:[n.jsx(h,{trackingProps:c,multiple:m,variant:f,children:n.jsx("div",{className:"jkl-file-input__call-to-action",children:n.jsx(E,{id:t,label:"Legg til fil",multiple:m,trackingProps:c,variant:f,ref:s,"aria-describedby":g})})}),n.jsx(j,{id:g}),a.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:e})]})}):n.jsx(D,{context:{accept:i,onChange:y,maxSizeBytes:d,files:a},children:n.jsx(_,{className:z("jkl-file-input",r,{"jkl-file-input--has-files":l}),...k,children:n.jsxs(h,{trackingProps:c,multiple:m,variant:f,children:[a.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:e}),n.jsxs("div",{className:"jkl-file-input__call-to-action",children:[n.jsx(E,{id:t,label:m&&l?"Legg til flere filer":"Legg til fil",multiple:m,trackingProps:c,variant:f,ref:s,"aria-describedby":g}),n.jsx(j,{id:g})]})]})})})});F.displayName="FileInput";F.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"union",raw:'"image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"]',elements:[{name:"literal",value:'"image/*"'},{name:"literal",value:'".pdf"'},{name:"literal",value:'"image/*,.pdf"'},{name:'HTMLInputElement["accept"]',raw:'HTMLInputElement["accept"]'}]},description:`En string som begrenser hvilke filtyper som kan velges.

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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"En unik identifikator for komponenten som skal spores. Mappes til `data-track-id`."},{key:"extra",value:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>",required:!1},description:"Ekstra sporingsfelt utover de faste feltene over, for team som trenger å\nspore egne, prosjektspesifikke detaljer. Hver nøkkel rendres som et eget\n`data-track-<kebab-case-nøkkel>`-attributt i DOM-en, se `getExtraTrackingAttributes`."}]}},description:""}},composes:["Omit"]};const ue={title:"Komponenter/File Input",component:F,subcomponents:{File:S,Dropzone:h,MaxSize:j},args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6}},w={name:"File Input",render:o=>{const[s,i]=u.useState([]);return n.jsx(F,{...o,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:s,onChange:(r,e)=>{i(t=>[...t,...e])},children:s.map(({state:r,file:e,validation:t},a)=>n.jsx(S,{fileName:e.name,fileType:e.type,fileSize:e.size,path:`/path/fil-${a}`,file:e,state:r,onRemove:r!=="loading"?m=>"":void 0},`${e.name}-${a}`))})}},b={name:"Disabled",args:{disabled:!0}},v={name:"File Input med valgte filer",render:o=>{const[s,i]=u.useState([{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0},{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(r,e,t)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]);return n.jsx(F,{...o,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:s,onChange:(r,e)=>{i(t=>[...t,...e])},children:s.map(({state:r,file:e},t)=>n.jsx(S,{fileName:e.name,fileType:e.type,fileSize:e.size,path:e.webkitRelativePath,file:e,state:r,onRemove:r!=="loading"?a=>"":void 0},`${e.name}-${t}`))})}},x={name:"File Input og opplastingsknapp",render:o=>{const[s,i]=u.useState([{file:{...p.args,lastModified:0,name:p.args.fileName,webkitRelativePath:p.args.path,size:p.args.fileSize,type:"png",arrayBuffer:()=>{throw new Error("Function not implemented.")},bytes:()=>{throw new Error("Function not implemented.")},slice:(t,a,m)=>{throw new Error("Function not implemented.")},stream:()=>{throw new Error("Function not implemented.")},text:()=>{throw new Error("Function not implemented.")}},state:void 0,uploadProgress:0}]),[r,e]=u.useState(!1);return n.jsxs(L,{direction:"column",children:[n.jsx(F,{...o,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:s,onChange:(t,a)=>{i(m=>[...m,...a])},children:s.map(({state:t,file:a,validation:m},d)=>u.createElement(S,{...p.args,...C.args,key:`${a.name}-${d}`,fileName:a.name,fileType:a.type,fileSize:a.size,path:`/path/fil-${d}`,file:a,state:r?"loading":void 0}))}),n.jsx(q,{variant:"primary",onClick:()=>{e(!0),setTimeout(()=>{e(!1)},3e3)},loader:{showLoader:r,textDescription:"Laster opp fil(er)"},children:"Last opp"})]})}},ce=["FileInputStory","Disabled","FileInputWithFile","FileInputAndUploadButton"];w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
  name: "Disabled",
  args: {
    disabled: true
  }
}`,...b.parameters?.docs?.source},description:{story:"Rotelementet er et `fieldset`, så `disabled` slår av filvelgeren nativt. Dropsonen dempes\nfordi den er selve kontrollflaten, mens legend og støttetekster beholder full kontrast.",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};export{b as Disabled,x as FileInputAndUploadButton,w as FileInputStory,v as FileInputWithFile,ce as __namedExportsOrder,ue as default};
