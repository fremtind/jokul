import{j as n}from"./jsx-runtime-DqZpzl9T.js";import{r as g}from"./index-siqcju79.js";import{u as k,a as T,F as w}from"./File-DA8xQUJ7.js";import{c as _}from"./clsx-B-dksMZM.js";import{F as E}from"./FieldGroup-4QcUrmjz.js";import{f as h}from"./formatBytes-CR-O9sah.js";import{B as z}from"./Button-fpmiG8ZH.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./Link-uanxgvhJ.js";import"./TrashCanIcon-vF7KDsXX.js";import"./Icon-DnRkF4CO.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./useId-CahK3IZ3.js";import"./Label-Ct8Bs2e9.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";function C(r,l="",a){const i=l.split(",").map(e=>e.toLowerCase()).map(e=>e.replaceAll("*","")).map(e=>e.trim());let t=i.length===0;if(t=i.some(e=>r.type.toLowerCase().includes(e)||r.name.toLowerCase().endsWith(e)),!t)return{type:"WRONG_TYPE",message:`Filtypen ${r.name?.split(".")[1]||""} støttes ikke`};if(typeof a<"u"&&r.size>a)return{type:"TOO_LARGE",message:`Filen er ${h(r.size)}, men kan maksimalt være ${h(a)}`}}const v=g.forwardRef((r,l)=>{const{children:a,...i}=r,[t,e]=g.useState(""),o=k();if(!o)return n.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:d,accept:p,onChange:u}=o;return n.jsx("div",{...i,ref:l,className:_("jkl-file-input__dropzone",t),onDragEnter:s=>{e("jkl-file-input__dropzone--enter"),s.preventDefault()},onDragOver:s=>{e("jkl-file-input__dropzone--enter"),s.preventDefault()},onDrop:s=>{s.preventDefault(),e(""),s.dataTransfer.files&&u(s,[...s.dataTransfer.files].map(f=>({file:f,state:void 0,validation:C(f,p,d),uploadProgress:0})))},onDragLeave:s=>{e(""),s.preventDefault()},children:a})});v.displayName="Dropzone";v.__docgenInfo={description:"",methods:[],displayName:"Dropzone",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const j=g.forwardRef((r,l)=>{const{multiple:a,id:i,label:t,...e}=r,o=g.useId(),d="file-info",p=a?"filer":"fil",u=k();if(!u)return n.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:s,maxSizeBytes:f,onChange:y,files:m}=u,c=i||o,D=[d,f?e["aria-describedby"]:void 0].filter(Boolean).join(" "),L=()=>m.length===0?a?"Velg én eller flere filer for opplasting.":"Velg en fil for opplasting.":`${m.length} ${m.length===1?"fil":"filer"} valgt.`;return n.jsxs(n.Fragment,{children:[n.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:c,id:`${c}__add-btn`,children:t}),n.jsx("input",{...e,ref:l,id:c,accept:s,"aria-describedby":D,className:"jkl-sr-only",type:"file",multiple:a,onChange:I=>{I.target.files&&y(I,[...I.target.files].map(N=>({file:N,state:void 0,validation:C(N,s,f),uploadProgress:0})))}}),n.jsx("output",{"aria-live":"polite",id:d,className:"jkl-sr-only",children:L()}),n.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",p," her"]})," "]})});j.displayName="Input";j.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""}}};const F=({id:r})=>{const l=k();if(!l)return n.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:a,multiple:i}=l;if(typeof a>"u")return!1;const t=i?`Maks ${h(a)} per fil`:`Maks ${h(a)}`;return n.jsx("p",{id:r,className:"jkl-file-input__max-size-text",children:t})};F.__docgenInfo={description:"",methods:[],displayName:"MaxSize",props:{id:{required:!0,tsType:{name:"string"},description:""}}};const b=g.forwardRef((r,l)=>{const{accept:a,className:i,children:t,id:e,value:o,density:d,multiple:p=!0,maxSizeBytes:u,onChange:s,variant:f,...y}=r,m=o.length>0,c=g.useId();return f==="small"?n.jsx(T,{context:{accept:a,onChange:s,maxSizeBytes:u,multiple:p,files:o},children:n.jsxs(E,{className:_("jkl-file-input","jkl-file-input--small",i,{"jkl-file-input--has-files":m}),"data-layout-density":d||"compact",...y,children:[n.jsx(v,{children:n.jsx("div",{className:"jkl-file-input__call-to-action",children:n.jsx(j,{id:e,label:p&&m?"Velg flere filer":"Velg fil",multiple:p,ref:l,"aria-describedby":c})})}),n.jsx(F,{id:c}),o.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:t})]})}):n.jsx(T,{context:{accept:a,onChange:s,maxSizeBytes:u,multiple:p,files:o},children:n.jsx(E,{className:_("jkl-file-input",i,{"jkl-file-input--has-files":m}),"data-layout-density":d,...y,children:n.jsxs(v,{children:[o.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:t}),n.jsxs("div",{className:"jkl-file-input__call-to-action",children:[n.jsx(j,{id:e,label:p&&m?"Velg flere filer":"Velg fil",multiple:p,ref:l,"aria-describedby":c}),n.jsx(F,{id:c})]})]})})})});b.displayName="FileInput";b.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},accept:{required:!1,tsType:{name:"union",raw:'"image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"]',elements:[{name:"literal",value:'"image/*"'},{name:"literal",value:'".pdf"'},{name:"literal",value:'"image/*,.pdf"'},{name:'HTMLInputElement["accept"]',raw:'HTMLInputElement["accept"]'}]},description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.

@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`},maxSizeBytes:{required:!1,tsType:{name:"number"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"@default true"},value:{required:!0,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.DragEvent<HTMLDivElement>,
    files: UploadedFile[],
) => void`,signature:{arguments:[{type:{name:"union",raw:`| React.ChangeEvent<HTMLInputElement>
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const X={title:"Komponenter/File/FileInput",component:b,subcomponents:{File:w,Dropzone:v,MaxSize:F,Button:z},parameters:{layout:"centered"},tags:["autodocs","forms"]},x={name:"FileInput",args:{variant:"flexible",value:[],onChange:console.info,legend:"Last opp vedlegg",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6},render:r=>{const[l,a]=g.useState([]);return n.jsxs("div",{children:[n.jsx(b,{...r,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:l,onChange:(i,t)=>{a(e=>[...e,...t])},children:l.map(({state:i,file:t,validation:e},o)=>n.jsx(w,{fileName:t.name,fileType:t.type,fileSize:t.size,path:`/path/fil-${o}`,file:t,state:i,onRemove:i!=="loading"?d=>"":void 0},`${t.name}-${o}`))}),n.jsx(z,{variant:"primary",className:"jkl-spacing-16--top",type:"button",onClick:async()=>{const i=l.filter(e=>typeof e.validation>"u"),t=l.map(e=>i.includes(e)?{...e}:e);a(t.map(e=>({...e,state:"loading"}))),await Promise.all(t)},children:"Last opp"})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "FileInput",
  args: {
    variant: "flexible",
    value: [],
    onChange: console.info,
    legend: "Last opp vedlegg",
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
                <Button variant="primary" className="jkl-spacing-16--top" type="button" onClick={async () => {
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
                </Button>
            </div>;
  }
}`,...x.parameters?.docs?.source}}};const Z=["FileInputStory"];export{x as FileInputStory,Z as __namedExportsOrder,X as default};
