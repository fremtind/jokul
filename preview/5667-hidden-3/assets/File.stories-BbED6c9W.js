import{r as m,j as e}from"./iframe-DYCcelEZ.js";import{c as R}from"./cow-CdXr5BwN.js";import{c as k}from"./clsx-B-dksMZM.js";import{L as M}from"./Link-DdD7nwde.js";import{f as _}from"./formatBytes-B7RSIuaZ.js";import{B as j}from"./Button-CAbzkOuG.js";import{T as S}from"./TrashCanIcon-OhL2_5gy.js";import{S as b}from"./SupportLabel-CXLpBFV-.js";const x=m.createContext(null),C=()=>m.useContext(x),I=({context:t,children:s})=>e.jsx(x.Provider,{value:t,children:s});I.__docgenInfo={description:"",methods:[],displayName:"FileInputContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},context:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}},required:!0}}]}},description:""}}};const i=t=>{const{children:s,className:T,fileName:l,fileType:c,fileSize:p,path:o,file:d,state:u,errorLabel:f="Feil",onRemove:g,variant:E="list",...F}=t,v=`jkl-file-preview-${m.useId()}`,h=`${v}-support`,L=C(),N=c.startsWith("image/")&&(d?URL.createObjectURL(d):o),y=e.jsxs("div",{id:v,className:k(T,"jkl-file",`jkl-file--${E}`),"data-state":u,...F,children:[e.jsxs("div",{className:"jkl-file__content",children:[e.jsx("div",{className:"jkl-file__content__thumbnail","data-filetype":c,children:e.jsx("img",{src:N||void 0,alt:""})}),o?e.jsx("p",{className:"jkl-file__content__name",children:e.jsxs(M,{href:o,children:[l," ",e.jsxs("span",{className:"jkl-file__content__name__size",children:["(",_(p),")"]})]})}):e.jsxs("p",{className:"jkl-file__content__name",children:[l," ",e.jsxs("span",{className:"jkl-file__content__name__size",children:["(",_(p),")"]})]}),g&&e.jsx(j,{variant:"ghost",className:"jkl-file__content__button",onClick:g,title:`Fjern ${l}`,icon:e.jsx(S,{})})]}),u==="error"&&f&&e.jsx(b,{className:"jkl-file__support-label",id:h,label:f,labelType:"error"})]});return L?e.jsx("li",{children:y}):y};i.__docgenInfo={description:"",methods:[],displayName:"File",props:{fileName:{required:!0,tsType:{name:"string"},description:""},fileType:{required:!0,tsType:{name:"string"},description:""},fileSize:{required:!0,tsType:{name:"number"},description:""},path:{required:!1,tsType:{name:"string"},description:""},errorLabel:{required:!1,tsType:{name:"string"},description:""},state:{required:!1,tsType:{name:"union",raw:'"error" | "loading"',elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"loading"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"list" | "card"',elements:[{name:"literal",value:'"list"'},{name:"literal",value:'"card"'}]},description:""},file:{required:!1,tsType:{name:"File"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:""}}};const w={title:"Komponenter/File",component:i,subcomponents:{Button:j},args:{fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:R,variant:"list"}},n={name:"File"},a={name:"File med slettefunksjon",args:{onRemove:()=>""}},r={decorators:(t,s)=>e.jsx("div",{style:{display:"grid",gap:"12px",gridTemplateColumns:s.args.variant==="list"?"1fr":"repeat(2, 1fr)"},children:e.jsx(t,{})}),render:t=>e.jsxs(e.Fragment,{children:[e.jsx(i,{...n.args,...t}),e.jsx(i,{...n.args,...t,fileName:`${t.fileName} 2`})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "File med slettefunksjon",
  args: {
    onRemove: () => ""
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const H=["FileStory","FileDelete","FileList"],A=Object.freeze(Object.defineProperty({__proto__:null,FileDelete:a,FileList:r,FileStory:n,__namedExportsOrder:H,default:w},Symbol.toStringTag,{value:"Module"}));export{i as F,I as a,a as b,A as c,w as m,C as u};
