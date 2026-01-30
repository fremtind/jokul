import{j as t}from"./jsx-runtime-DqZpzl9T.js";import{r as g}from"./index-siqcju79.js";import{u as b,a as k,F as E}from"./File-BvClhVZu.js";import{c as I}from"./clsx-B-dksMZM.js";import{F as T}from"./FieldGroup-BeC1Moop.js";import{f as _}from"./formatBytes-B7RSIuaZ.js";import{B as z,P as C}from"./Button-ezu_9wT-.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./Link-D9hs758h.js";import"./TrashCanIcon-Bp_QffP_.js";import"./Icon-CqyKskc7.js";import"./SupportLabel-clkk2LvH.js";import"./WarningIcon-BIoPmEbd.js";import"./useId-CahK3IZ3.js";import"./Label-Ct8Bs2e9.js";import"./formatNumber-C5i6XT6A.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-CDpFE6wc.js";import"./useDelayedRender-CQprwS1c.js";function w(r,i="",a){const l=i.split(",").map(e=>e.toLowerCase()).map(e=>e.replaceAll("*","")).map(e=>e.trim());let n=l.length===0;if(n=l.some(e=>r.type.toLowerCase().includes(e)||r.name.toLowerCase().endsWith(e)),!n)return{type:"WRONG_TYPE",message:`Filtypen ${r.name?.split(".")[1]||""} støttes ikke`};if(typeof a<"u"&&r.size>a)return{type:"TOO_LARGE",message:`Filen er ${_(r.size)}, men kan maksimalt være ${_(a)}`}}const y=g.forwardRef((r,i)=>{const{children:a,...l}=r,[n,e]=g.useState(""),o=b();if(!o)return t.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:p,accept:d,onChange:c}=o;return t.jsx("div",{...l,ref:i,className:I("jkl-file-input__dropzone",n),onDragEnter:s=>{e("jkl-file-input__dropzone--enter"),s.preventDefault()},onDragOver:s=>{e("jkl-file-input__dropzone--enter"),s.preventDefault()},onDrop:s=>{s.preventDefault(),e(""),s.dataTransfer.files&&c(s,[...s.dataTransfer.files].map(u=>({file:u,state:void 0,validation:w(u,d,p),uploadProgress:0})))},onDragLeave:s=>{e(""),s.preventDefault()},children:a})});y.displayName="Dropzone";y.__docgenInfo={description:"",methods:[],displayName:"Dropzone",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const h=g.forwardRef((r,i)=>{const{multiple:a,id:l,label:n,...e}=r,o=g.useId(),p=`${l}-description`,d=a?"filer":"fil",c=b();if(!c)return t.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:s,maxSizeBytes:u,onChange:v}=c,f=l||o;return t.jsxs(t.Fragment,{children:[t.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:f,id:`${f}__add-btn`,children:n}),t.jsx("input",{...e,ref:i,id:f,accept:s,"aria-describedby":u?p:void 0,className:"jkl-sr-only",type:"file",multiple:a,value:"",onChange:m=>{m.target.files&&v(m,[...m.target.files].map(N=>({file:N,state:void 0,validation:w(N,s,u),uploadProgress:0})))}}),t.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",d," her"]})," "]})});h.displayName="Input";h.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""}}};const j=({id:r})=>{const i=b();if(!i)return t.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:a}=i;return typeof a>"u"?!1:t.jsxs("div",{id:r,className:"jkl-file-input__max-size-text",children:["Maks ",_(a)," per fil"]})};j.__docgenInfo={description:"",methods:[],displayName:"MaxSize",props:{id:{required:!0,tsType:{name:"string"},description:""}}};const F=g.forwardRef((r,i)=>{const{accept:a,className:l,children:n,id:e,value:o,density:p,multiple:d=!0,maxSizeBytes:c,onChange:s,variant:u,...v}=r,f=o.length>0,m=g.useId();return u==="small"?t.jsx(k,{context:{accept:a,onChange:s,maxSizeBytes:c,files:o},children:t.jsxs(T,{className:I("jkl-file-input","jkl-file-input--small",l,{"jkl-file-input--has-files":f}),"data-layout-density":p||"compact",...v,children:[t.jsx(y,{children:t.jsx("div",{className:"jkl-file-input__call-to-action",children:t.jsx(h,{id:e,label:"Legg til fil",multiple:d,ref:i,"aria-describedby":m})})}),t.jsx(j,{id:m}),o.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:n})]})}):t.jsx(k,{context:{accept:a,onChange:s,maxSizeBytes:c,files:o},children:t.jsx(T,{className:I("jkl-file-input",l,{"jkl-file-input--has-files":f}),"data-layout-density":p,...v,children:t.jsxs(y,{children:[o.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:n}),t.jsxs("div",{className:"jkl-file-input__call-to-action",children:[t.jsx(h,{id:e,label:d&&f?"Legg til flere filer":"Legg til fil",multiple:d,ref:i,"aria-describedby":m}),t.jsx(j,{id:m})]})]})})})});F.displayName="FileInput";F.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},accept:{required:!1,tsType:{name:"union",raw:'"image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"]',elements:[{name:"literal",value:'"image/*"'},{name:"literal",value:'".pdf"'},{name:"literal",value:'"image/*,.pdf"'},{name:'HTMLInputElement["accept"]',raw:'HTMLInputElement["accept"]'}]},description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.

@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`},maxSizeBytes:{required:!1,tsType:{name:"number"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"@default true"},value:{required:!0,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.DragEvent<HTMLDivElement>,
    files: UploadedFile[],
) => void`,signature:{arguments:[{type:{name:"union",raw:`| React.ChangeEvent<HTMLInputElement>
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const Q={title:"Komponenter/File/FileInput",component:F,subcomponents:{File:E,Dropzone:y,MaxSize:j,Button:z},parameters:{layout:"centered"},tags:["autodocs","forms"]},x={name:"FileInput",args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6},render:r=>{const[i,a]=g.useState([]);return t.jsxs("div",{children:[t.jsx(F,{...r,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:i,onChange:(l,n)=>{a(e=>[...e,...n])},children:i.map(({state:l,file:n,validation:e},o)=>t.jsx(E,{fileName:n.name,fileType:n.type,fileSize:n.size,path:`/path/fil-${o}`,file:n,state:l,onRemove:l!=="loading"?p=>"":void 0},`${n.name}-${o}`))}),t.jsx(C,{className:"jkl-spacing-16--top",type:"button",onClick:async()=>{const l=i.filter(e=>typeof e.validation>"u"),n=i.map(e=>l.includes(e)?{...e}:e);a(n.map(e=>({...e,state:"loading"}))),await Promise.all(n)},children:"Last opp"})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const X=["FileInputStory"];export{x as FileInputStory,X as __namedExportsOrder,Q as default};
