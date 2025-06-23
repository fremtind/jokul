import{j as e}from"./jsx-runtime-BbjHj44Y.js";import{r as g}from"./index-C6mWTJJr.js";import{f as I,u as b,a as k,F as C}from"./File-BEbvjq4g.js";import{c as _}from"./clsx-B-dksMZM.js";import{F as T}from"./FieldGroup-jMM48IpO.js";import{B as L,P as R}from"./Button-V_7JZhcr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Link-BlbHBxXw.js";import"./formatNumber-DzIwhxNg.js";import"./TrashCanIcon-B9RdHG1z.js";import"./Icon-CZwjvlw8.js";import"./SupportLabel-uWZp44mj.js";import"./ErrorIcon-B0wgdey8.js";import"./WarningIcon-B6VvEiHT.js";import"./useId-Cim48cX5.js";import"./Label-BPOuC4mL.js";import"./usePreviousValue-ByfnePFg.js";import"./Loader-BdwWmQR7.js";import"./useDelayedRender-B8sMdCvv.js";function D(o,l="",i){var t;const s=l.split(",").map(n=>n.toLowerCase()).map(n=>n.replaceAll("*","")).map(n=>n.trim());let a=s.length===0;if(a=s.some(n=>o.type.toLowerCase().includes(n)||o.name.toLowerCase().endsWith(n)),!a)return{type:"WRONG_TYPE",message:`Filtypen ${((t=o.name)==null?void 0:t.split(".")[1])||""} støttes ikke`};if(typeof i<"u"&&o.size>i)return{type:"TOO_LARGE",message:`Filen er ${I(o.size)}, men kan maksimalt være ${I(i)}`}}const y=g.forwardRef((o,l)=>{const{children:i,...s}=o,[a,t]=g.useState(""),n=b();if(!n)return e.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:p,accept:d,onChange:c}=n;return e.jsx("div",{...s,ref:l,className:_("jkl-file-input__dropzone",a),onDragEnter:r=>{t("jkl-file-input__dropzone--enter"),r.preventDefault()},onDragOver:r=>{t("jkl-file-input__dropzone--enter"),r.preventDefault()},onDrop:r=>{r.preventDefault(),t(""),r.dataTransfer.files&&c(r,[...r.dataTransfer.files].map(u=>({file:u,state:void 0,validation:D(u,d,p),uploadProgress:0})))},onDragLeave:r=>{t(""),r.preventDefault()},children:i})});y.displayName="Dropzone";y.__docgenInfo={description:"",methods:[],displayName:"Dropzone",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const h=g.forwardRef((o,l)=>{const{multiple:i,id:s,label:a,...t}=o,n=g.useId(),p=`${s}-description`,d=i?"filer":"fil",c=b();if(!c)return e.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:r,maxSizeBytes:u,onChange:v}=c,f=s||n;return e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:f,id:`${f}__add-btn`,children:a}),e.jsx("input",{...t,ref:l,id:f,accept:r,"aria-describedby":u?p:void 0,className:"jkl-sr-only",type:"file",multiple:i,value:"",onChange:m=>{m.target.files&&v(m,[...m.target.files].map(N=>({file:N,state:void 0,validation:D(N,r,u),uploadProgress:0})))}}),e.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",d," her"]})," "]})});h.displayName="Input";h.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""}}};const j=({id:o})=>{const l=b();if(!l)return e.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:i}=l;return typeof i>"u"?!1:e.jsxs("div",{id:o,className:"jkl-file-input__max-size-text",children:["Maks ",I(i)," per fil"]})};j.__docgenInfo={description:"",methods:[],displayName:"MaxSize",props:{id:{required:!0,tsType:{name:"string"},description:""}}};const F=g.forwardRef((o,l)=>{const{accept:i,className:s,children:a,id:t,value:n,density:p,multiple:d=!0,maxSizeBytes:c,onChange:r,variant:u,...v}=o,f=n.length>0,m=g.useId();return u==="small"?e.jsx(k,{context:{accept:i,onChange:r,maxSizeBytes:c,files:n},children:e.jsxs(T,{className:_("jkl-file-input","jkl-file-input--small",s,{"jkl-file-input--has-files":f}),"data-layout-density":p||"compact",...v,children:[e.jsx(y,{children:e.jsx("div",{className:"jkl-file-input__call-to-action",children:e.jsx(h,{id:t,label:"Legg til fil",multiple:d,ref:l,"aria-describedby":m})})}),e.jsx(j,{id:m}),n.length>0&&e.jsx("ul",{className:"jkl-file-input__files",children:a})]})}):e.jsx(k,{context:{accept:i,onChange:r,maxSizeBytes:c,files:n},children:e.jsx(T,{className:_("jkl-file-input",s,{"jkl-file-input--has-files":f}),"data-layout-density":p,...v,children:e.jsxs(y,{children:[n.length>0&&e.jsx("ul",{className:"jkl-file-input__files",children:a}),e.jsxs("div",{className:"jkl-file-input__call-to-action",children:[e.jsx(h,{id:t,label:d&&f?"Legg til flere filer":"Legg til fil",multiple:d,ref:l,"aria-describedby":m}),e.jsx(j,{id:m})]})]})})})});F.displayName="FileInput";F.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},accept:{required:!1,tsType:{name:"union",raw:'"image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"]',elements:[{name:"literal",value:'"image/*"'},{name:"literal",value:'".pdf"'},{name:"literal",value:'"image/*,.pdf"'},{name:'HTMLInputElement["accept"]',raw:'HTMLInputElement["accept"]'}]},description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.

@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`},maxSizeBytes:{required:!1,tsType:{name:"number"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"@default true"},value:{required:!0,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.DragEvent<HTMLDivElement>,
    files: UploadedFile[],
) => void`,signature:{arguments:[{type:{name:"union",raw:`| React.ChangeEvent<HTMLInputElement>
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const ee={title:"Komponenter/File/FileInput",component:F,subcomponents:{File:C,Dropzone:y,MaxSize:j,Button:L},parameters:{layout:"centered"},tags:["autodocs"]},x={name:"FileInput",args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6},render:o=>{const[l,i]=g.useState([]);return e.jsxs("div",{children:[e.jsx(F,{...o,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:l,onChange:(s,a)=>{i(t=>[...t,...a])},children:l.map(({state:s,file:a,validation:t},n)=>e.jsx(C,{fileName:a.name,fileType:a.type,fileSize:a.size,path:`/path/fil-${n}`,file:a,state:s,onRemove:s!=="loading"?p=>"":void 0},`${a.name}-${n}`))}),e.jsx(R,{className:"jkl-spacing-16--top",type:"button",onClick:async()=>{const s=l.filter(t=>typeof t.validation>"u"),a=l.map(t=>s.includes(t)?{...t}:t);i(a.map(t=>({...t,state:"loading"}))),await Promise.all(a)},children:"Last opp"})]})}};var E,w,z;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(z=(w=x.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const te=["FileInputStory"];export{x as FileInputStory,te as __namedExportsOrder,ee as default};
