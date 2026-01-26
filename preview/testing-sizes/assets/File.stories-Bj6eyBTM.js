import{r as m,j as e}from"./iframe-B2o9WWXz.js";import{c as k}from"./cow-CdXr5BwN.js";import{c as S}from"./clsx-B-dksMZM.js";import{L as b}from"./Link-BuRYiJaq.js";import{f as _}from"./formatNumber-Davy0grG.js";import{n as j}from"./unicode-DWvs0Pen.js";import{B as T}from"./Button-DCVfsySz.js";import{T as C}from"./TrashCanIcon-BkvVmo_l.js";import{S as I}from"./SupportLabel-HQ87Jwym.js";function x(t,n){return t>=1e5?`${_(Number(t/1e3/1e3),{maximumFractionDigits:1,...n})}${j}MB`:`${_(t/1e3,{maximumFractionDigits:2,...n})}${j}KB`}const F=m.createContext(null),w=()=>m.useContext(F),H=({context:t,children:n})=>e.jsx(F.Provider,{value:t,children:n});H.__docgenInfo={description:"",methods:[],displayName:"FileInputContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},context:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    accept?: "image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"];
    maxSizeBytes?: number;
    files: UploadedFile[];
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.DragEvent<HTMLDivElement>,
        files: UploadedFile[],
    ) => void;
}`,signature:{properties:[{key:"accept",value:{name:"union",raw:'"image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"]',elements:[{name:"literal",value:'"image/*"'},{name:"literal",value:'".pdf"'},{name:"literal",value:'"image/*,.pdf"'},{name:'HTMLInputElement["accept"]',raw:'HTMLInputElement["accept"]'}],required:!1}},{key:"maxSizeBytes",value:{name:"number",required:!1}},{key:"files",value:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]",required:!0}},{key:"onChange",value:{name:"signature",type:"function",raw:`(
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.DragEvent<HTMLDivElement>,
    files: UploadedFile[],
) => void`,signature:{arguments:[{type:{name:"union",raw:`| React.ChangeEvent<HTMLInputElement>
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}},required:!0}}]}},description:""}}};const s=t=>{const{children:n,className:E,fileName:l,fileType:c,fileSize:p,path:o,file:d,state:u,errorLabel:f="Feil",onRemove:g,variant:h="list",...L}=t,v=`jkl-file-preview-${m.useId()}`,N=`${v}-support`,M=w(),R=c.startsWith("image/")&&(d?URL.createObjectURL(d):o),y=e.jsxs("div",{id:v,className:S(E,"jkl-file",`jkl-file--${h}`),"data-state":u,...L,children:[e.jsxs("div",{className:"jkl-file__content",children:[e.jsx("div",{className:"jkl-file__content__thumbnail","data-filetype":c,children:e.jsx("img",{src:R||void 0,alt:""})}),o?e.jsx("p",{className:"jkl-file__content__name",children:e.jsxs(b,{href:o,children:[l," ",e.jsxs("span",{className:"jkl-file__content__name__size",children:["(",x(p),")"]})]})}):e.jsxs("p",{className:"jkl-file__content__name",children:[l," ",e.jsxs("span",{className:"jkl-file__content__name__size",children:["(",x(p),")"]})]}),g&&e.jsx(T,{variant:"ghost",className:"jkl-file__content__button",onClick:g,title:`Fjern ${l}`,icon:e.jsx(C,{})})]}),u==="error"&&f&&e.jsx(I,{className:"jkl-file__support-label",id:N,label:f,labelType:"error"})]});return M?e.jsx("li",{children:y}):y};s.__docgenInfo={description:"",methods:[],displayName:"File",props:{fileName:{required:!0,tsType:{name:"string"},description:""},fileType:{required:!0,tsType:{name:"string"},description:""},fileSize:{required:!0,tsType:{name:"number"},description:""},path:{required:!1,tsType:{name:"string"},description:""},errorLabel:{required:!1,tsType:{name:"string"},description:""},state:{required:!1,tsType:{name:"union",raw:'"error" | "loading"',elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"loading"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"list" | "card"',elements:[{name:"literal",value:'"list"'},{name:"literal",value:'"card"'}]},description:""},file:{required:!1,tsType:{name:"File"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:""}}};const q={title:"Komponenter/File",component:s,subcomponents:{Button:T},args:{fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:k,variant:"list"}},a={name:"File"},r={name:"File med slettefunksjon",args:{onRemove:()=>""}},i={decorators:(t,n)=>e.jsx("div",{style:{display:"grid",gap:"12px",gridTemplateColumns:n.args.variant==="list"?"1fr":"repeat(2, 1fr)"},children:e.jsx(t,{})}),render:t=>e.jsxs(e.Fragment,{children:[e.jsx(s,{...a.args,...t}),e.jsx(s,{...a.args,...t,fileName:`${t.fileName} 2`})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "File med slettefunksjon",
  args: {
    onRemove: () => ""
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: (Story, story) => <div style={{
    display: "grid",
    gap: "12px",
    gridTemplateColumns: story.args.variant === "list" ? "1fr" : "repeat(2, 1fr)"
  }}>
            <Story />
        </div>,
  render: args => {
    return <>
                <File {...FileStory.args} {...args} />
                <File {...FileStory.args} {...args} fileName={\`\${args.fileName} 2\`} />
            </>;
  }
}`,...i.parameters?.docs?.source}}};const D=["FileStory","FileDelete","FileList"],G=Object.freeze(Object.defineProperty({__proto__:null,FileDelete:r,FileList:i,FileStory:a,__namedExportsOrder:D,default:q},Symbol.toStringTag,{value:"Module"}));export{s as F,H as a,r as b,G as c,x as f,q as m,w as u};
