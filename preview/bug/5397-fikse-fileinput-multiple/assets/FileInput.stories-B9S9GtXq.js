import{j as e}from"./jsx-runtime-DqZpzl9T.js";import{r as f}from"./index-siqcju79.js";import{u as b,a as z,F as C}from"./File-COvcuPmX.js";import{c as I}from"./clsx-B-dksMZM.js";import{F as w}from"./FieldGroup-4QcUrmjz.js";import{f as _}from"./formatBytes-CR-O9sah.js";import{B as R,P as S}from"./Button-fpmiG8ZH.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./Link-uanxgvhJ.js";import"./TrashCanIcon-vF7KDsXX.js";import"./Icon-DnRkF4CO.js";import"./SupportLabel-DqvOe-qA.js";import"./WarningIcon-C-dhPw1h.js";import"./useId-CahK3IZ3.js";import"./Label-Ct8Bs2e9.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";function D(r,i="",a){const l=i.split(",").map(t=>t.toLowerCase()).map(t=>t.replaceAll("*","")).map(t=>t.trim());let n=l.length===0;if(n=l.some(t=>r.type.toLowerCase().includes(t)||r.name.toLowerCase().endsWith(t)),!n)return{type:"WRONG_TYPE",message:`Filtypen ${r.name?.split(".")[1]||""} støttes ikke`};if(typeof a<"u"&&r.size>a)return{type:"TOO_LARGE",message:`Filen er ${_(r.size)}, men kan maksimalt være ${_(a)}`}}const y=f.forwardRef((r,i)=>{const{children:a,...l}=r,[n,t]=f.useState(""),o=b();if(!o)return e.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:p,accept:m,onChange:c}=o;return e.jsx("div",{...l,ref:i,className:I("jkl-file-input__dropzone",n),onDragEnter:s=>{t("jkl-file-input__dropzone--enter"),s.preventDefault()},onDragOver:s=>{t("jkl-file-input__dropzone--enter"),s.preventDefault()},onDrop:s=>{s.preventDefault(),t(""),s.dataTransfer.files&&c(s,[...s.dataTransfer.files].map(u=>({file:u,state:void 0,validation:D(u,m,p),uploadProgress:0})))},onDragLeave:s=>{t(""),s.preventDefault()},children:a})});y.displayName="Dropzone";y.__docgenInfo={description:"",methods:[],displayName:"Dropzone",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const h=f.forwardRef((r,i)=>{const{multiple:a,id:l,label:n,...t}=r,o=f.useId(),p=`${l}-description`,m=a?"filer":"fil",c=b();if(!c)return e.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:s,maxSizeBytes:u,files:v,onChange:g}=c,d=l||o;return e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:d,id:`${d}__add-btn`,children:n}),e.jsx("input",{...t,ref:i,id:d,accept:s,"aria-describedby":u?p:void 0,className:"jkl-sr-only",type:"file",multiple:a,value:"",onChange:N=>{const{files:k}=N.target;if(!k)return;const T=Array.from(k).map(E=>({file:E,state:void 0,validation:D(E,s,u),uploadProgress:0})),L=a?[...v,...T]:T;g(N,L)}}),e.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",m," her"]})," "]})});h.displayName="Input";h.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""}}};const j=({id:r})=>{const i=b();if(!i)return e.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:a}=i;return typeof a>"u"?!1:e.jsxs("div",{id:r,className:"jkl-file-input__max-size-text",children:["Maks ",_(a)," per fil"]})};j.__docgenInfo={description:"",methods:[],displayName:"MaxSize",props:{id:{required:!0,tsType:{name:"string"},description:""}}};const F=f.forwardRef((r,i)=>{const{accept:a,className:l,children:n,id:t,value:o,density:p,multiple:m=!0,maxSizeBytes:c,onChange:s,variant:u,...v}=r,g=o.length>0,d=f.useId();return u==="small"?e.jsx(z,{context:{accept:a,onChange:s,maxSizeBytes:c,files:o},children:e.jsxs(w,{className:I("jkl-file-input","jkl-file-input--small",l,{"jkl-file-input--has-files":g}),"data-layout-density":p||"compact",...v,children:[e.jsx(y,{children:e.jsx("div",{className:"jkl-file-input__call-to-action",children:e.jsx(h,{id:t,label:"Legg til fil",multiple:m,ref:i,"aria-describedby":d})})}),e.jsx(j,{id:d}),o.length>0&&e.jsx("ul",{className:"jkl-file-input__files",children:n})]})}):e.jsx(z,{context:{accept:a,onChange:s,maxSizeBytes:c,files:o},children:e.jsx(w,{className:I("jkl-file-input",l,{"jkl-file-input--has-files":g}),"data-layout-density":p,...v,children:e.jsxs(y,{children:[o.length>0&&e.jsx("ul",{className:"jkl-file-input__files",children:n}),e.jsxs("div",{className:"jkl-file-input__call-to-action",children:[e.jsx(h,{id:t,label:m&&g?"Legg til flere filer":"Legg til fil",multiple:m,ref:i,"aria-describedby":d}),e.jsx(j,{id:d})]})]})})})});F.displayName="FileInput";F.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},accept:{required:!1,tsType:{name:"union",raw:'"image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"]',elements:[{name:"literal",value:'"image/*"'},{name:"literal",value:'".pdf"'},{name:"literal",value:'"image/*,.pdf"'},{name:'HTMLInputElement["accept"]',raw:'HTMLInputElement["accept"]'}]},description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.

@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`},maxSizeBytes:{required:!1,tsType:{name:"number"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"@default true"},value:{required:!0,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.DragEvent<HTMLDivElement>,
    files: UploadedFile[],
) => void`,signature:{arguments:[{type:{name:"union",raw:`| React.ChangeEvent<HTMLInputElement>
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const ee={title:"Komponenter/File/FileInput",component:F,subcomponents:{File:C,Dropzone:y,MaxSize:j,Button:R},parameters:{layout:"centered"},tags:["autodocs","forms"]},x={name:"FileInput",args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6},render:r=>{const[i,a]=f.useState([]);return e.jsxs("div",{children:[e.jsx(F,{...r,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:i,onChange:(l,n)=>{a(n)},children:i.map(({state:l,file:n,validation:t},o)=>e.jsx(C,{fileName:n.name,fileType:n.type,fileSize:n.size,path:`/path/fil-${o}`,file:n,state:l,onRemove:l!=="loading"?p=>"":void 0},`${n.name}-${o}`))}),e.jsx(S,{className:"jkl-spacing-16--top",type:"button",onClick:async()=>{const l=i.filter(t=>typeof t.validation>"u"),n=i.map(t=>l.includes(t)?{...t}:t);a(n.map(t=>({...t,state:"loading"}))),await Promise.all(n)},children:"Last opp"})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
                <FileInput {...args} id="file-input-example" className="jkl-spacing-16-24--bottom" value={files} onChange={(_e, updatedFiles) => {
        setFiles(updatedFiles);
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
}`,...x.parameters?.docs?.source}}};const te=["FileInputStory"];export{x as FileInputStory,te as __namedExportsOrder,ee as default};
