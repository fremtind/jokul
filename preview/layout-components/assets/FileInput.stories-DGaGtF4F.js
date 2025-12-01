import{j as t}from"./jsx-runtime-BbjHj44Y.js";import{r as y}from"./index-C6mWTJJr.js";import{f as v,u as b,a as _,F as C}from"./File-f7wVFmjn.js";import{c as T}from"./clsx-B-dksMZM.js";import{F as j}from"./FieldGroup-jMM48IpO.js";import{B as N,P as O}from"./Button-V_7JZhcr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./IconButton-DhDUYojH.js";import"./SupportLabel-uWZp44mj.js";import"./ErrorIcon-B0wgdey8.js";import"./Icon-CZwjvlw8.js";import"./WarningIcon-B6VvEiHT.js";import"./formatNumber-DzIwhxNg.js";import"./TrashCanIcon-B9RdHG1z.js";import"./useId-Cim48cX5.js";import"./Label-BPOuC4mL.js";import"./usePreviousValue-ByfnePFg.js";import"./Loader-BdwWmQR7.js";import"./useDelayedRender-B8sMdCvv.js";function R(o,r="",s){var n;const a=r.split(",").map(e=>e.toLowerCase()).map(e=>e.replaceAll("*","")).map(e=>e.trim());let l=a.length===0;if(l=a.some(e=>o.type.toLowerCase().includes(e)||o.name.toLowerCase().endsWith(e)),!l)return{type:"WRONG_TYPE",message:`Filtypen ${((n=o.name)==null?void 0:n.split(".")[1])||""} støttes ikke`};if(typeof s<"u"&&o.size>s)return{type:"TOO_LARGE",message:`Filen er ${v(o.size)}, men kan maksimalt være ${v(s)}`}}const g=y.forwardRef((o,r)=>{const{children:s,...a}=o,[l,n]=y.useState(""),e=b();if(!e)return t.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:p,accept:m,onChange:d}=e;return t.jsx("div",{...a,ref:r,className:T("jkl-file-input__dropzone",l),onDragEnter:i=>{n("jkl-file-input__dropzone--enter"),i.preventDefault()},onDragOver:i=>{n("jkl-file-input__dropzone--enter"),i.preventDefault()},onDrop:i=>{i.preventDefault(),n(""),i.dataTransfer.files&&d(i,[...i.dataTransfer.files].map(c=>({file:c,state:"SELECTED",validation:R(c,m,p),uploadProgress:0})))},onDragLeave:i=>{n(""),i.preventDefault()},children:s})});g.displayName="Dropzone";g.__docgenInfo={description:"",methods:[],displayName:"Dropzone",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const E=y.forwardRef((o,r)=>{const{multiple:s,id:a,label:l,...n}=o,e=y.useId(),p=`${a}-description`,m=s?"filer":"fil",d=b();if(!d)return t.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:i,maxSizeBytes:c,onChange:x}=d,f=a||e;return t.jsxs(t.Fragment,{children:[t.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:f,id:`${f}__add-btn`,children:l}),t.jsx("input",{...n,ref:r,id:f,accept:i,"aria-describedby":c?p:void 0,className:"jkl-sr-only",type:"file",multiple:s,value:"",onChange:u=>{u.target.files&&x(u,[...u.target.files].map(h=>({file:h,state:"SELECTED",validation:R(h,i,c),uploadProgress:0})))}}),t.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",m," her"]})," "]})});E.displayName="Input";E.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""}}};const L=({id:o})=>{const r=b();if(!r)return t.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:s}=r;return typeof s>"u"?!1:t.jsxs("div",{id:o,className:"jkl-file-input__max-size-text",children:["Maks ",v(s)," per fil"]})};L.__docgenInfo={description:"",methods:[],displayName:"MaxSize",props:{id:{required:!0,tsType:{name:"string"},description:""}}};const S=y.forwardRef((o,r)=>{const{accept:s,className:a,children:l,id:n,value:e,density:p,multiple:m=!0,maxSizeBytes:d,onChange:i,variant:c,...x}=o,f=e.length>0,u=y.useId();return c==="small"?t.jsx(_,{context:{accept:s,onChange:i,maxSizeBytes:d,files:e},children:t.jsxs(j,{className:T("jkl-file-input","jkl-file-input--small",a,{"jkl-file-input--has-files":f}),"data-layout-density":p||"compact",...x,children:[t.jsx(g,{children:t.jsx("div",{className:"jkl-file-input__call-to-action",children:t.jsx(E,{id:n,label:"Legg til fil",multiple:m,ref:r,"aria-describedby":u})})}),t.jsx(L,{id:u}),e.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:l})]})}):t.jsx(_,{context:{accept:s,onChange:i,maxSizeBytes:d,files:e},children:t.jsx(j,{className:T("jkl-file-input",a,{"jkl-file-input--has-files":f}),"data-layout-density":p,...x,children:t.jsxs(g,{children:[e.length>0&&t.jsx("ul",{className:"jkl-file-input__files",children:l}),t.jsxs("div",{className:"jkl-file-input__call-to-action",children:[t.jsx(E,{id:n,label:m&&f?"Legg til flere filer":"Legg til fil",multiple:m,ref:r,"aria-describedby":u}),t.jsx(L,{id:u})]})]})})})});S.displayName="FileInput";S.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},accept:{required:!1,tsType:{name:"union",raw:'"image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"]',elements:[{name:"literal",value:'"image/*"'},{name:"literal",value:'".pdf"'},{name:"literal",value:'"image/*,.pdf"'},{name:'HTMLInputElement["accept"]',raw:'HTMLInputElement["accept"]'}]},description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.

@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`},maxSizeBytes:{required:!1,tsType:{name:"number"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"@default true"},value:{required:!0,tsType:{name:"Array",elements:[{name:"FileInputFile"}],raw:"FileInputFile[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.DragEvent<HTMLDivElement>,
    files: FileInputFile[],
) => void`,signature:{arguments:[{type:{name:"union",raw:`| React.ChangeEvent<HTMLInputElement>
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"FileInputFile"}],raw:"FileInputFile[]"},name:"files"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const ee={title:"Komponenter/FileInput",component:S,subcomponents:{File:C,Dropzone:g,MaxSize:L,Button:N},parameters:{layout:"centered"},tags:["autodocs"]},F={name:"FileInput",args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6},render:o=>{const[r,s]=y.useState([]);return t.jsxs("div",{children:[t.jsx(S,{...o,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:r,onChange:(a,l)=>{s(n=>[...n,...l])},children:r.map(({state:a,file:l,validation:n},e)=>{var c;let p,m,d=a;const i=a==="UPLOADING";return(n==null?void 0:n.type)==="WRONG_TYPE"?(m="warning",p=`Filtypen ${((c=l.name)==null?void 0:c.split(".")[1])||""} støttes ikke`):a==="UPLOAD_SUCCESS"?(m="success",p="Lastet opp",d="UPLOAD_SUCCESS"):a==="UPLOAD_ERROR"?(m="error",p="Filen lot seg ikke laste opp",d="UPLOAD_ERROR"):(n==null?void 0:n.type)==="TOO_LARGE"&&o.maxSizeBytes?(m="error",p=`Filen er større enn ${v(o.maxSizeBytes)} og kan ikke lastes opp`):i&&(p="Laster opp…",d="UPLOADING"),t.jsx(C,{fileName:l.name,fileType:l.type,fileSize:l.size,path:`/path/fil-${e}`,file:l,state:d,supportLabel:p,supportLabelType:m,onRemove:["UPLOAD_ERROR","SELECTED"].includes(a)?()=>{s([...r.slice(0,e),...r.slice(e+1)])}:void 0},`${l.name}-${e}`)})}),t.jsx(O,{className:"jkl-spacing-16--top",type:"button",onClick:async()=>{const a=r.filter(e=>e.state==="SELECTED"&&typeof e.validation>"u"),l=a.map(e=>new Promise(p=>{setTimeout(()=>{s(d=>d.map(i=>i.file.name===e.file.name?{...i,state:"UPLOAD_SUCCESS"}:i)),p()},5e3)})),n=r.map(e=>a.includes(e)?{...e,state:"UPLOADING"}:e);s(n),await Promise.all(l)},children:"Last opp"})]})}};var I,D,k;F.parameters={...F.parameters,docs:{...(I=F.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    const [files, setFiles] = useState<FileInputFile[]>([]);
    return <div>
                <FileInput {...args} id="file-input-example" className="jkl-spacing-16-24--bottom" value={files} onChange={(_e, newFiles) => {
        setFiles(currentFiles => [...currentFiles, ...newFiles]);
      }}>
                    {files.map(({
          state,
          file,
          validation
        }, index) => {
          let label: string | undefined = undefined;
          let labelType: SupportLabelType | undefined = undefined;
          let demoState: FileInputFileState = state;
          const isUploading = state === "UPLOADING";
          if (validation?.type === "WRONG_TYPE") {
            labelType = "warning";
            label = \`Filtypen \${file.name?.split(".")[1] || ""} støttes ikke\`;
          } else if (state === "UPLOAD_SUCCESS") {
            labelType = "success";
            label = "Lastet opp";
            demoState = "UPLOAD_SUCCESS";
          } else if (state === "UPLOAD_ERROR") {
            labelType = "error";
            label = "Filen lot seg ikke laste opp";
            demoState = "UPLOAD_ERROR";
          } else if (validation?.type === "TOO_LARGE" && args.maxSizeBytes) {
            labelType = "error";
            label = \`Filen er større enn \${formatBytes(args.maxSizeBytes)} og kan ikke lastes opp\`;
          } else if (isUploading) {
            label = "Laster opp…";
            demoState = "UPLOADING";
          }
          return <File key={\`\${file.name}-\${index}\`} fileName={file.name} fileType={file.type} fileSize={file.size} path={\`/path/fil-\${index}\`} file={file} state={demoState} supportLabel={label} supportLabelType={labelType} onRemove={["UPLOAD_ERROR", "SELECTED"].includes(state) ? () => {
            setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
          } : undefined} />;
        })}
                </FileInput>
                <PrimaryButton className="jkl-spacing-16--top" type="button" onClick={async () => {
        const toUpload = files.filter(fileState => fileState.state === "SELECTED" && typeof fileState.validation === "undefined");
        const promises = toUpload.map(fileToUpload => new Promise<void>(resolve => {
          const timeout = 5000;
          setTimeout(() => {
            setFiles(currentFiles => currentFiles.map(file => file.file.name === fileToUpload.file.name ? {
              ...file,
              state: "UPLOAD_SUCCESS"
            } : file));
            resolve();
          }, timeout);
        }));
        const newFiles = files.map(file => toUpload.includes(file) ? {
          ...file,
          state: "UPLOADING" as FileInputFileState
        } : file);
        setFiles(newFiles);
        await Promise.all(promises);
      }}>
                    Last opp
                </PrimaryButton>
            </div>;
  }
}`,...(k=(D=F.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const te=["FileInputStory"];export{F as FileInputStory,te as __namedExportsOrder,ee as default};
