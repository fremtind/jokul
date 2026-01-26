import{r as s,j as e}from"./iframe-DtM7RXj6.js";import{c as U}from"./cow-CdXr5BwN.js";import{c as N}from"./clsx-B-dksMZM.js";import{L as w}from"./Link-DZwy3DI7.js";import{f as L}from"./formatBytes-B7RSIuaZ.js";import{B as h}from"./Button-B6z-5Ezn.js";import{T as I}from"./TrashCanIcon-CHNFghtz.js";import{S as H}from"./SupportLabel-DyJuzdLr.js";import{F as f}from"./Flex-Bw_hwLCN.js";const k=s.createContext(null),C=()=>s.useContext(k),q=({context:n,children:t})=>e.jsx(k.Provider,{value:n,children:t});q.__docgenInfo={description:"",methods:[],displayName:"FileInputContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},context:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}},required:!0}}]}},description:""}}};const p=n=>{const{children:t,className:a,fileName:i,fileType:o,fileSize:v,path:u,file:y,state:F,errorLabel:x="Feil",onRemove:_,variant:E="list",...S}=n,j=`jkl-file-preview-${s.useId()}`,R=`${j}-support`,M=C(),b=o.startsWith("image/")&&(y?URL.createObjectURL(y):u),T=e.jsxs("div",{id:j,className:N(a,"jkl-file",`jkl-file--${E}`),"data-state":F,...S,children:[e.jsxs("div",{className:"jkl-file__content",children:[e.jsx("div",{className:"jkl-file__content__thumbnail","data-filetype":o,children:e.jsx("img",{src:b||void 0,alt:""})}),u?e.jsx("p",{className:"jkl-file__content__name",children:e.jsxs(w,{href:u,children:[i," ",e.jsxs("span",{className:"jkl-file__content__name__size",children:["(",L(v),")"]})]})}):e.jsxs("p",{className:"jkl-file__content__name",children:[i," ",e.jsxs("span",{className:"jkl-file__content__name__size",children:["(",L(v),")"]})]}),_&&e.jsx(h,{variant:"ghost",className:"jkl-file__content__button",onClick:_,title:`Fjern ${i}`,icon:e.jsx(I,{})})]}),F==="error"&&x&&e.jsx(H,{className:"jkl-file__support-label",id:R,label:x,labelType:"error"})]});return M?e.jsx("li",{children:T}):T};p.__docgenInfo={description:"",methods:[],displayName:"File",props:{fileName:{required:!0,tsType:{name:"string"},description:""},fileType:{required:!0,tsType:{name:"string"},description:""},fileSize:{required:!0,tsType:{name:"number"},description:""},path:{required:!1,tsType:{name:"string"},description:""},errorLabel:{required:!1,tsType:{name:"string"},description:""},state:{required:!1,tsType:{name:"union",raw:'"error" | "loading"',elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"loading"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"list" | "card"',elements:[{name:"literal",value:'"list"'},{name:"literal",value:'"card"'}]},description:`Velg hvordan filene skal vises for brukeren

@default "list"`},file:{required:!1,tsType:{name:"File"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:"Gjør det mulig å vise en knapp for fjerning av filene ved filopplasting"}}};const{fn:g}=__STORYBOOK_MODULE_TEST__,D={title:"Komponenter/File",component:p,subcomponents:{Button:h},args:{fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:U,variant:"list",onRemove:g()}},r={name:"File"},m={name:"Fil med slettefunksjon"},d={name:"Liste med filer",args:{onRemove:void 0},decorators:(n,t)=>e.jsx(f,{direction:t.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(a=>e.jsx(n,{...t.args,...r.args},a))})},l={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:n=>e.jsxs(f,{direction:"column",gap:"xs",children:[e.jsx(n,{}),e.jsx("p",{style:{fontSize:"0.75em",opacity:.5},children:"Oppdateres automatisk hvert 4. sekund"})]}),render:n=>{const[t,a]=s.useState(n.state==="loading"||!0);return s.useEffect(()=>{setTimeout(()=>a(!t),4e3,"mock"),clearTimeout("mock")},[t]),e.jsx(p,{...r.args,...n,state:t?"loading":void 0,onRemove:t?void 0:g()})}},c={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:n=>e.jsxs(f,{direction:"column",gap:"xs",children:[e.jsx(n,{}),e.jsx("p",{style:{fontSize:"0.75em",opacity:.5},children:"Oppdateres automatisk hvert 2. sekund"})]}),render:n=>{const t=[1,2,3,4,5],[a,i]=s.useState(0);return s.useEffect(()=>{setTimeout(()=>{a>=t.length?i(0):i(a+1)},2e3,"mock"),clearTimeout("mock")},[a]),e.jsx(e.Fragment,{children:t.map(o=>e.jsx(p,{...l.args,...n,state:a<o?"loading":void 0,onRemove:a<o?void 0:g()},o))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Fil med slettefunksjon"
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Liste med filer",
  args: {
    onRemove: undefined
  },
  decorators: (Story, story) => <Flex direction={story.args.variant === "list" ? "column" : "row"} gap="xs m">
            {Array("Fil 1", "Fil 2").map(i => <Story key={i} {...story.args} {...FileStory.args} />)}
        </Flex>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Filopplasting (én fil)",
  args: {
    state: "loading"
  },
  decorators: Story => {
    return <Flex direction="column" gap="xs">
                <Story />
                <p style={{
        fontSize: "0.75em",
        opacity: 0.5
      }}>
                    Oppdateres automatisk hvert 4. sekund
                </p>
            </Flex>;
  },
  render: args => {
    const [fileLoading, setFileLoading] = useState<boolean>(args.state === "loading" || true);
    useEffect(() => {
      setTimeout(() => setFileLoading(!fileLoading), 4000, "mock");
      clearTimeout("mock");
    }, [fileLoading]);
    return <File {...FileStory.args} {...args} state={fileLoading ? "loading" : undefined} onRemove={fileLoading ? undefined : fn()} />;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Filopplasting (flere filer)",
  args: {
    state: "loading"
  },
  decorators: Story => {
    return <Flex direction="column" gap="xs">
                <Story />
                <p style={{
        fontSize: "0.75em",
        opacity: 0.5
      }}>
                    Oppdateres automatisk hvert 2. sekund
                </p>
            </Flex>;
  },
  render: args => {
    const files = [1, 2, 3, 4, 5];
    const [filesUploaded, setFilesUploaded] = useState<number>(0);
    useEffect(() => {
      setTimeout(() => {
        if (filesUploaded >= files.length) {
          setFilesUploaded(0);
        } else {
          setFilesUploaded(filesUploaded + 1);
        }
      }, 2000, "mock");
      clearTimeout("mock");
    }, [filesUploaded]);
    return <>
                {files.map(index => <File key={index} {...FileLoading.args} {...args} state={filesUploaded < index ? "loading" : undefined} onRemove={filesUploaded < index ? undefined : fn()} />)}
            </>;
  }
}`,...c.parameters?.docs?.source}}};const z=["FileStory","FileDelete","FileList","FileLoading","MultifileLoading"],Y=Object.freeze(Object.defineProperty({__proto__:null,FileDelete:m,FileList:d,FileLoading:l,FileStory:r,MultifileLoading:c,__namedExportsOrder:z,default:D},Symbol.toStringTag,{value:"Module"}));export{p as F,q as a,m as b,Y as c,D as m,C as u};
