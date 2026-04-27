import{r as s,j as e}from"./iframe-DRzrw8Nv.js";import{c as I}from"./cow-CdXr5BwN.js";import{c as H}from"./clsx-B-dksMZM.js";import{L as q}from"./Link-B2jsvL_z.js";import{f as h}from"./formatNumber-Davy0grG.js";import{n as E}from"./unicode-DWvs0Pen.js";import{B as R}from"./Button-DBIo5kvm.js";import{T as D}from"./TrashCanIcon-C3InpYMJ.js";import{S as z}from"./SupportLabel-BEFrcCpA.js";import{F as v}from"./Flex-LOmdI584.js";function S(n,t){return n>=1e5?`${h(Number(n/1e3/1e3),{maximumFractionDigits:1,...t})}${E}MB`:`${h(n/1e3,{maximumFractionDigits:2,...t})}${E}KB`}const M=s.createContext(null),O=()=>s.useContext(M),B=({context:n,children:t})=>e.jsx(M.Provider,{value:n,children:t});B.__docgenInfo={description:"",methods:[],displayName:"FileInputContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},context:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}},required:!0}}]}},description:""}}};const f=n=>{const{children:t,className:a,fileName:i,fileType:o,fileSize:y,path:g,file:x,state:_,errorLabel:j="Feil",onRemove:T,variant:b="list",...N}=n,k=`jkl-file-preview-${s.useId()}`,U=`${k}-support`,w=O(),C=o.startsWith("image/")&&(x?URL.createObjectURL(x):g),L=e.jsxs("div",{id:k,className:H(a,"jkl-file",`jkl-file--${b}`),"data-state":_,...N,children:[e.jsxs("div",{className:"jkl-file__content",children:[e.jsx("div",{className:"jkl-file__content__thumbnail","data-filetype":o,children:e.jsx("img",{src:C||void 0,alt:""})}),g?e.jsx("p",{className:"jkl-file__content__name",children:e.jsxs(q,{href:g,children:[i," ",e.jsxs("span",{className:"jkl-file__content__name__size",children:["(",S(y),")"]})]})}):e.jsxs("p",{className:"jkl-file__content__name",children:[i," ",e.jsxs("span",{className:"jkl-file__content__name__size",children:["(",S(y),")"]})]}),T&&e.jsx(R,{variant:"ghost",className:"jkl-file__content__button",onClick:T,title:`Fjern ${i}`,icon:e.jsx(D,{})})]}),_==="error"&&j&&e.jsx(z,{className:"jkl-file__support-label",id:U,label:j,labelType:"error"})]});return w?e.jsx("li",{children:L}):L};f.__docgenInfo={description:"",methods:[],displayName:"File",props:{fileName:{required:!0,tsType:{name:"string"},description:""},fileType:{required:!0,tsType:{name:"string"},description:""},fileSize:{required:!0,tsType:{name:"number"},description:""},path:{required:!1,tsType:{name:"string"},description:""},errorLabel:{required:!1,tsType:{name:"string"},description:""},state:{required:!1,tsType:{name:"union",raw:'"error" | "loading"',elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"loading"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"list" | "card"',elements:[{name:"literal",value:'"list"'},{name:"literal",value:'"card"'}]},description:`Velg hvordan filene skal vises for brukeren

@default "list"`},file:{required:!1,tsType:{name:"File"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:"Gjør det mulig å vise en knapp for fjerning av filene ved filopplasting"}}};const{fn:F}=__STORYBOOK_MODULE_TEST__,$={title:"Komponenter/File",component:f,subcomponents:{Button:R},args:{fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:I,variant:"list",onRemove:F()}},r={name:"File"},m={name:"File vist som kort",args:{variant:"card"}},d={name:"Fil med slettefunksjon"},c={name:"Liste med filer",args:{onRemove:void 0},decorators:(n,t)=>e.jsx(v,{direction:t.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(a=>e.jsx(n,{...t.args,...r.args},a))})},l={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:n=>e.jsxs(v,{direction:"column",gap:"xs",children:[e.jsx(n,{}),e.jsx("p",{style:{fontSize:"0.75em",opacity:.5},children:"Oppdateres automatisk hvert 4. sekund"})]}),render:n=>{const[t,a]=s.useState(n.state==="loading"||!0);return s.useEffect(()=>{setTimeout(()=>a(!t),4e3,"mock"),clearTimeout("mock")},[t]),e.jsx(f,{...r.args,...n,state:t?"loading":void 0,onRemove:t?void 0:F()})}},p={name:"Fil med feil",args:{state:"error"}},u={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:n=>e.jsxs(v,{direction:"column",gap:"xs",children:[e.jsx(n,{}),e.jsx("p",{style:{fontSize:"0.75em",opacity:.5},children:"Oppdateres automatisk hvert 2. sekund"})]}),render:n=>{const t=[1,2,3,4,5],[a,i]=s.useState(0);return s.useEffect(()=>{setTimeout(()=>{a>=t.length?i(0):i(a+1)},2e3,"mock"),clearTimeout("mock")},[a]),e.jsx(e.Fragment,{children:t.map(o=>e.jsx(f,{...l.args,...n,state:a<o?"loading":void 0,onRemove:a<o?void 0:F()},o))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "File vist som kort",
  args: {
    variant: "card"
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Fil med slettefunksjon"
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Liste med filer",
  args: {
    onRemove: undefined
  },
  decorators: (Story, story) => <Flex direction={story.args.variant === "list" ? "column" : "row"} gap="xs m">
            {Array("Fil 1", "Fil 2").map(i => <Story key={i} {...story.args} {...FileStory.args} />)}
        </Flex>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Fil med feil",
  args: {
    state: "error"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const A=["FileStory","FileCard","FileDelete","FileList","FileLoading","FileError","MultifileLoading"],ee=Object.freeze(Object.defineProperty({__proto__:null,FileCard:m,FileDelete:d,FileError:p,FileList:c,FileLoading:l,FileStory:r,MultifileLoading:u,__namedExportsOrder:A,default:$},Symbol.toStringTag,{value:"Module"}));export{f as F,B as a,d as b,ee as c,S as f,$ as m,O as u};
