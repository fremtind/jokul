import{r as i,j as e}from"./iframe-QtBp4egp.js";import{c as w}from"./cow-CdXr5BwN.js";import{c as B}from"./clsx-B-dksMZM.js";import{F as f}from"./Flex-BS-Hvl3j.js";import{T as F}from"./Text-Bgzezs4W.js";import{L as M}from"./Link-8yDZvlgs.js";import{f as R}from"./formatNumber-Davy0grG.js";import{n as z}from"./unicode-DWvs0Pen.js";import{B as U}from"./Button-HThwQfSQ.js";import{T as $}from"./TrashCanIcon-4cvpUXBh.js";import{S as P}from"./SupportLabel-DtQH7vY0.js";function C(a,r){return a>=1e5?`${R(Number(a/1e3/1e3),{maximumFractionDigits:1,...r})}${z}MB`:`${R(a/1e3,{maximumFractionDigits:2,...r})}${z}KB`}const V=i.createContext(null),K=()=>i.useContext(V),I=({context:a,children:r})=>e.jsx(V.Provider,{value:a,children:r});try{I.displayName="FileInputContextProvider",I.__docgenInfo={description:"",displayName:"FileInputContextProvider",props:{context:{defaultValue:null,description:"",name:"context",required:!0,type:{name:"FileInputContext"}}}}}catch{}const g=a=>{const{children:r,hideThumbnail:n,className:x,fileName:t,fileType:k,fileSize:j,path:v,file:_,state:b,errorLabel:S="Feil",onRemove:T,variant:h="list",...q}=a,L=`jkl-file-preview-${i.useId()}`,O=`${L}-support`,D=K(),N=k.startsWith("image/")&&(_?URL.createObjectURL(_):v),E=e.jsxs("div",{id:L,className:B(x,"jkl-file",`jkl-file--${h}`),"data-state":b,...q,children:[e.jsxs(f,{gap:"8",direction:h==="card"?"column":"row",alignItems:h==="card"?"start":"center",className:"jkl-file__content",children:[!n&&e.jsx("div",{className:"jkl-file__thumbnail","data-filetype":k,children:N&&e.jsx("img",{src:N,alt:""})}),e.jsxs(f,{gap:"8",alignItems:"center",justifyContent:"space-between",className:"jkl-file__info",children:[v?e.jsx(F,{size:"s",className:"jkl-file__name",children:e.jsxs(M,{href:v,children:[t," ",e.jsxs("span",{className:"jkl-file__size",children:["(",C(j),")"]})]})}):e.jsxs(F,{size:"s",className:"jkl-file__name",children:[t," ",e.jsxs("span",{className:"jkl-file__size",children:["(",C(j),")"]})]}),T&&e.jsx(U,{variant:"ghost",className:"jkl-file__button",onClick:T,title:`Fjern ${t}`,icon:e.jsx($,{})})]})]}),b==="error"&&S&&e.jsx(P,{className:"jkl-file__support-label",id:O,label:S,labelType:"error"})]});return D?e.jsx("li",{children:E}):E};try{g.displayName="File",g.__docgenInfo={description:"",displayName:"File",props:{fileName:{defaultValue:null,description:"",name:"fileName",required:!0,type:{name:"string"}},fileType:{defaultValue:null,description:"",name:"fileType",required:!0,type:{name:"string"}},fileSize:{defaultValue:null,description:"",name:"fileSize",required:!0,type:{name:"number"}},path:{defaultValue:null,description:"",name:"path",required:!1,type:{name:"string"}},errorLabel:{defaultValue:null,description:"",name:"errorLabel",required:!1,type:{name:"string"}},hideThumbnail:{defaultValue:{value:"false"},description:"Du kan skjule forhåndsvisning av bilde/filendelse for å spare plass",name:"hideThumbnail",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"loading"'},{value:'"error"'}]}},variant:{defaultValue:{value:'"list"'},description:"Velg hvordan filene skal vises for brukeren",name:"variant",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"card"'}]}},file:{defaultValue:null,description:"",name:"file",required:!1,type:{name:"File"}},onRemove:{defaultValue:null,description:"Gjør det mulig å vise en knapp for fjerning av filene ved filopplasting",name:"onRemove",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},children:{defaultValue:null,description:"@deprecated Blir ikke brukt, vil fjernes i neste major-release",name:"children",required:!1,type:{name:"((string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal) & (string | ... 5 more ... | Iterable<...>)) | null"}}}}}catch{}const W=""+new URL("metamorphosis-31-mtN7L.pdf",import.meta.url).href,{fn:y}=__STORYBOOK_MODULE_TEST__,A={title:"Komponenter/File",component:g,subcomponents:{Button:U},args:{hideThumbnail:!1,fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:w,variant:"list",onRemove:void 0},argTypes:{variant:{control:{type:"inline-radio"}},state:{control:{type:"inline-radio"},options:[void 0,"loading","error"]}}},s={name:"File"},l={name:"Dokument",args:{fileName:"kafka.pdf",fileSize:427e3,fileType:".pdf",path:W}},d={name:"File vist som kort",args:{variant:"card"}},m={name:"Fil med slettefunksjon",args:{onRemove:y()}},c={name:"Liste med filer",decorators:(a,r)=>e.jsx(f,{direction:r.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(n=>e.jsx(a,{...r.args,...s.args},n))})},o={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:a=>e.jsxs(f,{direction:"column",gap:"xs",children:[e.jsx(a,{}),e.jsx(F,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 4. sekund"})]}),render:a=>{const[r,n]=i.useState(a.state==="loading"||!0);return i.useEffect(()=>{setTimeout(()=>n(!r),4e3,"mock"),clearTimeout("mock")},[r]),e.jsx(g,{...s.args,...a,state:r?"loading":void 0,onRemove:r?void 0:y()})}},u={name:"Fil med feil",args:{state:"error"}},p={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:a=>e.jsxs(f,{direction:"column",gap:"xs",style:{minWidth:"min(24rem, 90vw)"},children:[e.jsx(a,{}),e.jsx(F,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 2. sekund"})]}),render:a=>{const r=[1,2,3,4,5],[n,x]=i.useState(0);return i.useEffect(()=>{setTimeout(()=>{n>=r.length?x(0):x(n+1)},2e3,"mock"),clearTimeout("mock")},[n]),e.jsx(e.Fragment,{children:r.map(t=>e.jsx(g,{...o.args,...a,state:n<t?"loading":void 0,onRemove:n<t?void 0:y()},t))})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Dokument",
  args: {
    fileName: "kafka.pdf",
    fileSize: 427_000,
    fileType: ".pdf",
    path: book.default
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "File vist som kort",
  args: {
    variant: "card"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Fil med slettefunksjon",
  args: {
    onRemove: fn()
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Fil med feil",
  args: {
    state: "error"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const G=["FileStory","Document","FileCard","FileDelete","FileList","FileLoading","FileError","MultifileLoading"],se=Object.freeze(Object.defineProperty({__proto__:null,Document:l,FileCard:d,FileDelete:m,FileError:u,FileList:c,FileLoading:o,FileStory:s,MultifileLoading:p,__namedExportsOrder:G,default:A},Symbol.toStringTag,{value:"Module"}));export{g as F,I as a,m as b,se as c,C as f,A as m,K as u};
