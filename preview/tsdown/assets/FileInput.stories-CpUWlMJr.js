import{r as g,j as n}from"./iframe-DVuwCucA.js";import{u as b,a as k,F as E}from"./File-BIU929UO.js";import{c as I}from"./clsx-B-dksMZM.js";import{F as T}from"./FieldGroup-SbVfDfJc.js";import{f as _}from"./formatBytes-B7RSIuaZ.js";import{B as z,P as C}from"./Button-DB5r_dXF.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-i4jYg0W7.js";import"./TrashCanIcon-DBIqxEGZ.js";import"./Icon-BvCYJseA.js";import"./SupportLabel-Rzski8XH.js";import"./WarningIcon-CajCtnwA.js";import"./useId-x7qrK8aY.js";import"./Label-DvCgVV4-.js";import"./formatNumber-C5i6XT6A.js";import"./usePreviousValue-B-gSGwjc.js";import"./Loader-C4LBy92m.js";import"./useDelayedRender-BlEZZ8Ry.js";function w(r,a="",i){const l=a.split(",").map(e=>e.toLowerCase()).map(e=>e.replaceAll("*","")).map(e=>e.trim());let t=l.length===0;if(t=l.some(e=>r.type.toLowerCase().includes(e)||r.name.toLowerCase().endsWith(e)),!t)return{type:"WRONG_TYPE",message:`Filtypen ${r.name?.split(".")[1]||""} støttes ikke`};if(typeof i<"u"&&r.size>i)return{type:"TOO_LARGE",message:`Filen er ${_(r.size)}, men kan maksimalt være ${_(i)}`}}const v=g.forwardRef((r,a)=>{const{children:i,...l}=r,[t,e]=g.useState(""),o=b();if(!o)return n.jsx("p",{children:"Dropzone must be placed inside a FileInputContextProvider."});const{maxSizeBytes:p,accept:d,onChange:c}=o;return n.jsx("div",{...l,ref:a,className:I("jkl-file-input__dropzone",t),onDragEnter:s=>{e("jkl-file-input__dropzone--enter"),s.preventDefault()},onDragOver:s=>{e("jkl-file-input__dropzone--enter"),s.preventDefault()},onDrop:s=>{s.preventDefault(),e(""),s.dataTransfer.files&&c(s,[...s.dataTransfer.files].map(u=>({file:u,state:void 0,validation:w(u,d,p),uploadProgress:0})))},onDragLeave:s=>{e(""),s.preventDefault()},children:i})});v.displayName="Dropzone";v.__docgenInfo={description:"",methods:[],displayName:"Dropzone",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const h=g.forwardRef((r,a)=>{const{multiple:i,id:l,label:t,...e}=r,o=g.useId(),p=`${l}-description`,d=i?"filer":"fil",c=b();if(!c)return n.jsx("p",{children:"Input must be placed inside a FileInputContextProvider."});const{accept:s,maxSizeBytes:u,onChange:y}=c,f=l||o;return n.jsxs(n.Fragment,{children:[n.jsx("label",{className:"jkl-button jkl-button--secondary",htmlFor:f,id:`${f}__add-btn`,children:t}),n.jsx("input",{...e,ref:a,id:f,accept:s,"aria-describedby":u?p:void 0,className:"jkl-sr-only",type:"file",multiple:i,value:"",onChange:m=>{m.target.files&&y(m,[...m.target.files].map(N=>({file:N,state:void 0,validation:w(N,s,u),uploadProgress:0})))}}),n.jsxs("p",{className:"jkl-file-input__dropzone-hint",children:["eller slipp ",d," her"]})," "]})});h.displayName="Input";h.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""}}};const j=({id:r})=>{const a=b();if(!a)return n.jsx("p",{children:"MaxSize must be placed inside a FileInputContextProvider."});const{maxSizeBytes:i}=a;return typeof i>"u"?!1:n.jsxs("div",{id:r,className:"jkl-file-input__max-size-text",children:["Maks ",_(i)," per fil"]})};j.__docgenInfo={description:"",methods:[],displayName:"MaxSize",props:{id:{required:!0,tsType:{name:"string"},description:""}}};const F=g.forwardRef((r,a)=>{const{accept:i,className:l,children:t,id:e,value:o,density:p,multiple:d=!0,maxSizeBytes:c,onChange:s,variant:u,...y}=r,f=o.length>0,m=g.useId();return u==="small"?n.jsx(k,{context:{accept:i,onChange:s,maxSizeBytes:c,files:o},children:n.jsxs(T,{className:I("jkl-file-input","jkl-file-input--small",l,{"jkl-file-input--has-files":f}),"data-layout-density":p||"compact",...y,children:[n.jsx(v,{children:n.jsx("div",{className:"jkl-file-input__call-to-action",children:n.jsx(h,{id:e,label:"Legg til fil",multiple:d,ref:a,"aria-describedby":m})})}),n.jsx(j,{id:m}),o.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:t})]})}):n.jsx(k,{context:{accept:i,onChange:s,maxSizeBytes:c,files:o},children:n.jsx(T,{className:I("jkl-file-input",l,{"jkl-file-input--has-files":f}),"data-layout-density":p,...y,children:n.jsxs(v,{children:[o.length>0&&n.jsx("ul",{className:"jkl-file-input__files",children:t}),n.jsxs("div",{className:"jkl-file-input__call-to-action",children:[n.jsx(h,{id:e,label:d&&f?"Legg til flere filer":"Legg til fil",multiple:d,ref:a,"aria-describedby":m}),n.jsx(j,{id:m})]})]})})})});F.displayName="FileInput";F.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},accept:{required:!1,tsType:{name:"union",raw:'"image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"]',elements:[{name:"literal",value:'"image/*"'},{name:"literal",value:'".pdf"'},{name:"literal",value:'"image/*,.pdf"'},{name:'HTMLInputElement["accept"]',raw:'HTMLInputElement["accept"]'}]},description:`En string som begrenser hvilke filtyper som kan velges.

Flere filtyper kan defineres som en kommaseparert liste.

@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`},maxSizeBytes:{required:!1,tsType:{name:"number"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"@default true"},value:{required:!0,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"flexible" | "small"',elements:[{name:"literal",value:'"flexible"'},{name:"literal",value:'"small"'}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.DragEvent<HTMLDivElement>,
    files: UploadedFile[],
) => void`,signature:{arguments:[{type:{name:"union",raw:`| React.ChangeEvent<HTMLInputElement>
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const J={title:"Komponenter/File/FileInput",component:F,subcomponents:{File:E,Dropzone:v,MaxSize:j,Button:z}},x={name:"FileInput",args:{variant:"flexible",value:[],onChange:console.info,legend:"Legg til fil",labelProps:{variant:"medium"},accept:"image/*,.pdf",maxSizeBytes:8e6},render:r=>{const[a,i]=g.useState([]);return n.jsxs("div",{children:[n.jsx(F,{...r,id:"file-input-example",className:"jkl-spacing-16-24--bottom",value:a,onChange:(l,t)=>{i(e=>[...e,...t])},children:a.map(({state:l,file:t,validation:e},o)=>n.jsx(E,{fileName:t.name,fileType:t.type,fileSize:t.size,path:`/path/fil-${o}`,file:t,state:l,onRemove:l!=="loading"?p=>"":void 0},`${t.name}-${o}`))}),n.jsx(C,{className:"jkl-spacing-16--top",type:"button",onClick:async()=>{const l=a.filter(e=>typeof e.validation>"u"),t=a.map(e=>l.includes(e)?{...e}:e);i(t.map(e=>({...e,state:"loading"}))),await Promise.all(t)},children:"Last opp"})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const Q=["FileInputStory"];export{x as FileInputStory,Q as __namedExportsOrder,J as default};
