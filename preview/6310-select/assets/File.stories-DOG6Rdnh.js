import{r as i,j as e}from"./iframe-DnyE-E3F.js";import{c as H}from"./cow-CdXr5BwN.js";import{c as z}from"./clsx-B-dksMZM.js";import{F as f}from"./Flex-_tPsJH3M.js";import{T as v}from"./Text-C4osHSPB.js";import{L as B}from"./Link-BmUEJYY8.js";import{f as N}from"./formatNumber-Davy0grG.js";import{n as M}from"./unicode-DWvs0Pen.js";import{B as U}from"./Button-da672nX6.js";import{T as O}from"./TrashCanIcon-Bgu27Fl_.js";import{S as $}from"./SupportLabel-Ts8wCra6.js";function w(n,a){return n>=1e5?`${N(Number(n/1e3/1e3),{maximumFractionDigits:1,...a})}${M}MB`:`${N(n/1e3,{maximumFractionDigits:2,...a})}${M}KB`}const D=i.createContext(null),A=()=>i.useContext(D),P=({context:n,children:a})=>e.jsx(D.Provider,{value:n,children:a});P.__docgenInfo={description:"",methods:[],displayName:"FileInputContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},context:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| React.DragEvent<HTMLDivElement>`,elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"e"},{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}},required:!0}}]}},description:""}}};const F=n=>{const{children:a,hideThumbnail:t,className:g,fileName:r,fileType:h,fileSize:k,path:x,file:j,state:L,errorLabel:E="Feil",onRemove:S,variant:y="list",...I}=n,_=`jkl-file-preview-${i.useId()}`,C=`${_}-support`,q=A(),b=h.startsWith("image/")&&(j?URL.createObjectURL(j):x),R=e.jsxs("div",{id:_,className:z(g,"jkl-file",`jkl-file--${y}`),"data-state":L,...I,children:[e.jsxs(f,{gap:"8",direction:y==="card"?"column":"row",alignItems:y==="card"?"start":"center",className:"jkl-file__content",children:[!t&&e.jsx("div",{className:"jkl-file__thumbnail","data-filetype":h,children:b&&e.jsx("img",{src:b,alt:""})}),e.jsxs(f,{gap:"8",alignItems:"center",justifyContent:"space-between",className:"jkl-file__info",children:[x?e.jsx(v,{size:"s",className:"jkl-file__name",children:e.jsxs(B,{href:x,children:[r," ",e.jsxs("span",{className:"jkl-file__size",children:["(",w(k),")"]})]})}):e.jsxs(v,{size:"s",className:"jkl-file__name",children:[r," ",e.jsxs("span",{className:"jkl-file__size",children:["(",w(k),")"]})]}),S&&e.jsx(U,{variant:"ghost",className:"jkl-file__button",onClick:S,title:`Fjern ${r}`,icon:e.jsx(O,{})})]})]}),L==="error"&&E&&e.jsx($,{className:"jkl-file__support-label",id:C,label:E,labelType:"error"})]});return q?e.jsx("li",{children:R}):R};F.__docgenInfo={description:"",methods:[],displayName:"File",props:{fileName:{required:!0,tsType:{name:"string"},description:""},fileType:{required:!0,tsType:{name:"string"},description:""},fileSize:{required:!0,tsType:{name:"number"},description:""},path:{required:!1,tsType:{name:"string"},description:""},errorLabel:{required:!1,tsType:{name:"string"},description:""},hideThumbnail:{required:!1,tsType:{name:"boolean"},description:`Du kan skjule forhåndsvisning av bilde/filendelse for å spare plass
@default false`},state:{required:!1,tsType:{name:"union",raw:'"error" | "loading"',elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"loading"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"list" | "card"',elements:[{name:"literal",value:'"list"'},{name:"literal",value:'"card"'}]},description:`Velg hvordan filene skal vises for brukeren

@default "list"`},file:{required:!1,tsType:{name:"File"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:"Gjør det mulig å vise en knapp for fjerning av filene ved filopplasting"},children:{required:!1,tsType:{name:"ReactNode"},description:"@deprecated Blir ikke brukt, vil fjernes i neste major-release"}}};const K=""+new URL("metamorphosis-31-mtN7L.pdf",import.meta.url).href,{fn:T}=__STORYBOOK_MODULE_TEST__,W={title:"Komponenter/File",component:F,subcomponents:{Button:U},args:{hideThumbnail:!1,fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:H,variant:"list",onRemove:void 0},argTypes:{variant:{control:{type:"inline-radio"}},state:{control:{type:"inline-radio"},options:[void 0,"loading","error"]}}},s={name:"File"},l={name:"Dokument",args:{fileName:"kafka.pdf",fileSize:427e3,fileType:".pdf",path:K}},m={name:"File vist som kort",args:{variant:"card"}},d={name:"Fil med slettefunksjon",args:{onRemove:T()}},c={name:"Liste med filer",decorators:(n,a)=>e.jsx(f,{direction:a.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(t=>e.jsx(n,{...a.args,...s.args},t))})},o={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:n=>e.jsxs(f,{direction:"column",gap:"xs",children:[e.jsx(n,{}),e.jsx(v,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 4. sekund"})]}),render:n=>{const[a,t]=i.useState(n.state==="loading"||!0);return i.useEffect(()=>{setTimeout(()=>t(!a),4e3,"mock"),clearTimeout("mock")},[a]),e.jsx(F,{...s.args,...n,state:a?"loading":void 0,onRemove:a?void 0:T()})}},p={name:"Fil med feil",args:{state:"error"}},u={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:n=>e.jsxs(f,{direction:"column",gap:"xs",style:{minWidth:"min(24rem, 90vw)"},children:[e.jsx(n,{}),e.jsx(v,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 2. sekund"})]}),render:n=>{const a=[1,2,3,4,5],[t,g]=i.useState(0);return i.useEffect(()=>{setTimeout(()=>{t>=a.length?g(0):g(t+1)},2e3,"mock"),clearTimeout("mock")},[t]),e.jsx(e.Fragment,{children:a.map(r=>e.jsx(F,{...o.args,...n,state:t<r?"loading":void 0,onRemove:t<r?void 0:T()},r))})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Dokument",
  args: {
    fileName: "kafka.pdf",
    fileSize: 427_000,
    fileType: ".pdf",
    path: book.default
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "File vist som kort",
  args: {
    variant: "card"
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Fil med slettefunksjon",
  args: {
    onRemove: fn()
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Liste med filer",
  decorators: (Story, story) => <Flex direction={story.args.variant === "list" ? "column" : "row"} gap="xs m">
            {Array("Fil 1", "Fil 2").map(i => <Story key={i} {...story.args} {...FileStory.args} />)}
        </Flex>
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Filopplasting (én fil)",
  args: {
    state: "loading"
  },
  decorators: Story => {
    return <Flex direction="column" gap="xs">
                <Story />
                <Text size="xs" subdued>
                    Oppdateres automatisk hvert 4. sekund
                </Text>
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
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    return <Flex direction="column" gap="xs" style={{
      minWidth: "min(24rem, 90vw)"
    }}>
                <Story />
                <Text size="xs" subdued>
                    Oppdateres automatisk hvert 2. sekund
                </Text>
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
}`,...u.parameters?.docs?.source}}};const G=["FileStory","Document","FileCard","FileDelete","FileList","FileLoading","FileError","MultifileLoading"],se=Object.freeze(Object.defineProperty({__proto__:null,Document:l,FileCard:m,FileDelete:d,FileError:p,FileList:c,FileLoading:o,FileStory:s,MultifileLoading:u,__namedExportsOrder:G,default:W},Symbol.toStringTag,{value:"Module"}));export{F,P as a,d as b,se as c,w as f,W as m,A as u};
