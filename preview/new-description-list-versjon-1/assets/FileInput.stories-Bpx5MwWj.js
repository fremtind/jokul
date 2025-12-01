import{r as g,R as t}from"./index-siqcju79.js";import{u as k,a as N,F as w}from"./File-CB2Pv7oT.js";import{c as _}from"./clsx-B-dksMZM.js";import{F as T}from"./FieldGroup-ThhHt0Sp.js";import{f as b}from"./formatBytes-B7RSIuaZ.js";import{B as C,P as D}from"./Button-Dng0c-UK.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./Link-Dwdm3rDB.js";import"./TrashCanIcon-6vv0VZFo.js";import"./Icon-mINJCSxV.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./WarningIcon-CnuYLHnq.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./formatNumber-C5i6XT6A.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";function z(s,i="",a){const l=i.split(",").map(e=>e.toLowerCase()).map(e=>e.replaceAll("*","")).map(e=>e.trim());let n=l.length===0;if(n=l.some(e=>s.type.toLowerCase().includes(e)||s.name.toLowerCase().endsWith(e)),!n)return{type:"WRONG_TYPE",message:`Filtypen ${s.name?.split(".")[1]||""} støttes ikke`};if(typeof a<"u"&&s.size>a)return{type:"TOO_LARGE",message:`Filen er ${b(s.size)}, men kan maksimalt være ${b(a)}`}}const y=g.forwardRef((s,i)=>{const{children:a,...l}=s,[n,e]=g.useState(""),o=k();if(!o)return t.createElement("p",null,"Dropzone must be placed inside a FileInputContextProvider.");const{maxSizeBytes:p,accept:c,onChange:d}=o;return t.createElement("div",{...l,ref:i,className:_("jkl-file-input__dropzone",n),onDragEnter:r=>{e("jkl-file-input__dropzone--enter"),r.preventDefault()},onDragOver:r=>{e("jkl-file-input__dropzone--enter"),r.preventDefault()},onDrop:r=>{r.preventDefault(),e(""),r.dataTransfer.files&&d(r,[...r.dataTransfer.files].map(u=>({file:u,state:void 0,validation:z(u,c,p),uploadProgress:0})))},onDragLeave:r=>{e(""),r.preventDefault()}},a)});y.displayName="Dropzone";y.__docgenInfo={description:"",methods:[],displayName:"Dropzone",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const F=g.forwardRef((s,i)=>{const{multiple:a,id:l,label:n,...e}=s,o=g.useId(),p=`${l}-description`,c=a?"filer":"fil",d=k();if(!d)return t.createElement("p",null,"Input must be placed inside a FileInputContextProvider.");const{accept:r,maxSizeBytes:u,onChange:v}=d,f=l||o;return t.createElement(t.Fragment,null,t.createElement("label",{className:"jkl-button jkl-button--secondary",htmlFor:f,id:`${f}__add-btn`},n),t.createElement("input",{...e,ref:i,id:f,accept:r,"aria-describedby":u?p:void 0,className:"jkl-sr-only",type:"file",multiple:a,value:"",onChange:m=>{m.target.files&&v(m,[...m.target.files].map(x=>({file:x,state:void 0,validation:z(x,r,u),uploadProgress:0})))}}),t.createElement("p",{className:"jkl-file-input__dropzone-hint"},"eller slipp ",c," her")," ")});F.displayName="Input";F.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""}}};const h=({id:s})=>{const i=k();if(!i)return t.createElement("p",null,"MaxSize must be placed inside a FileInputContextProvider.");const{maxSizeBytes:a}=i;return typeof a>"u"?!1:t.createElement("div",{id:s,className:"jkl-file-input__max-size-text"},"Maks ",b(a)," per fil")};h.__docgenInfo={description:"",methods:[],displayName:"MaxSize",props:{id:{required:!0,tsType:{name:"string"},description:""}}};const I=g.forwardRef((s,i)=>{const{accept:a,className:l,children:n,id:e,value:o,density:p,multiple:c=!0,maxSizeBytes:d,onChange:r,variant:u,...v}=s,f=o.length>0,m=g.useId();return u==="small"?t.createElement(N,{context:{accept:a,onChange:r,maxSizeBytes:d,files:o}},t.createElement(T,{className:_("jkl-file-input","jkl-file-input--small",l,{"jkl-file-input--has-files":f}),"data-layout-density":p||"compact",...v},t.createElement(y,null,t.createElement("div",{className:"jkl-file-input__call-to-action"},t.createElement(F,{id:e,label:"Legg til fil",multiple:c,ref:i,"aria-describedby":m}))),t.createElement(h,{id:m}),o.length>0&&t.createElement("ul",{className:"jkl-file-input__files"},n))):t.createElement(N,{context:{accept:a,onChange:r,maxSizeBytes:d,files:o}},t.createElement(T,{className:_("jkl-file-input",l,{"jkl-file-input--has-files":f}),"data-layout-density":p,...v},t.createElement(y,null,o.length>0&&t.createElement("ul",{className:"jkl-file-input__files"},n),t.createElement("div",{className:"jkl-file-input__call-to-action"},t.createElement(F,{id:e,label:c&&f?"Legg til flere filer":"Legg til fil",multiple:c,ref:i,"aria-describedby":m}),t.createElement(h,{id:m})))))});I.displayName="FileInput";I.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},accept:{required:!1,tsType:{name:"union",raw:'"image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"]',elements:[{name:"literal",value:'"image/*"'},{name:"literal",value:'".pdf"'},{name:"literal",value:'"image/*,.pdf"'},{name:'HTMLInputElement["accept"]',raw:'HTMLInputElement["accept"]'}]},description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.

@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`},maxSizeBytes:{required:!1,tsType:{name:"number"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"@default true"},value:{required:!0,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.DragEvent<HTMLDivElement>,
    files: UploadedFile[],
) => void`,signature:{arguments:[{type:{name:"union",raw:`| React.ChangeEvent<HTMLInputElement>
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const Q={title:"Komponenter/File/FileInput",component:I,subcomponents:{File:w,Dropzone:y,MaxSize:h,Button:C},parameters:{layout:"centered"},tags:["autodocs","forms"]},E={name:"FileInput",args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6},render:s=>{const[i,a]=g.useState([]);return t.createElement("div",null,t.createElement(I,{...s,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:i,onChange:(l,n)=>{a(e=>[...e,...n])}},i.map(({state:l,file:n,validation:e},o)=>t.createElement(w,{key:`${n.name}-${o}`,fileName:n.name,fileType:n.type,fileSize:n.size,path:`/path/fil-${o}`,file:n,state:l,onRemove:l!=="loading"?p=>"":void 0}))),t.createElement(D,{className:"jkl-spacing-16--top",type:"button",onClick:async()=>{const l=i.filter(e=>typeof e.validation>"u"),n=i.map(e=>l.includes(e)?{...e}:e);a(n.map(e=>({...e,state:"loading"}))),await Promise.all(n)}},"Last opp"))}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "FileInput",
  args: {
    variant: "flexible",
    value: [],
    onChange: console.info,
    legend: "Legg til fil",
    labelProps: {
      variant: "medium"
    },
    accept: "image/*,.pdf",
    maxSizeBytes: 8_000_000
  },
  render: args => {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    return <div>
                <FileInput {...args} id="file-input-example" className="jkl-spacing-16-24--bottom" value={files} onChange={(_e, newFiles) => {
        setFiles(currentFiles => [...currentFiles, ...newFiles]);
      }}>
                    {files.map(({
          state,
          file,
          validation
        }, index) => {
          return <File key={\`\${file.name}-\${index}\`} fileName={file.name} fileType={file.type} fileSize={file.size} path={\`/path/fil-\${index}\`} file={file} state={state} onRemove={state !== "loading" ? e => "" : undefined} />;
        })}
                </FileInput>
                <PrimaryButton className="jkl-spacing-16--top" type="button" onClick={async () => {
        const toUpload = files.filter(fileState => typeof fileState.validation === "undefined");
        const newFiles = files.map(file => toUpload.includes(file) ? {
          ...file
        } : file);
        setFiles(newFiles.map(file => {
          return {
            ...file,
            state: "loading"
          };
        }));
        await Promise.all(newFiles);
      }}>
                    Last opp
                </PrimaryButton>
            </div>;
  }
}`,...E.parameters?.docs?.source}}};const X=["FileInputStory"];export{E as FileInputStory,X as __namedExportsOrder,Q as default};
