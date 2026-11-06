import{r as i,j as e}from"./iframe-Ckso1DLj.js";import{c as D}from"./cow-CdXr5BwN.js";import{c as M}from"./clsx-B-dksMZM.js";import{C as $,g as B}from"./types-BlFGa32c.js";import{F as f}from"./Flex-CO9dyTkX.js";import{T as x}from"./Text-DniyLSvv.js";import{L as A}from"./Link-DJ64YU-O.js";import{f as z}from"./formatNumber-Davy0grG.js";import{n as P}from"./unicode-DWvs0Pen.js";import{B as O}from"./Button-BQKxk7HP.js";import{T as K}from"./TrashCanIcon-C1dpr1ZX.js";import{S as W}from"./SupportLabel-BoN_OFZM.js";function R(a,t){return a>=1e5?`${z(Number(a/1e3/1e3),{maximumFractionDigits:1,...t})}${P}MB`:`${z(a/1e3,{maximumFractionDigits:2,...t})}${P}KB`}const w=i.createContext(null),G=()=>i.useContext(w),U=({context:a,children:t})=>e.jsx(w.Provider,{value:a,children:t});try{U.displayName="FileInputContextProvider",U.__docgenInfo={description:"",displayName:"FileInputContextProvider",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/fileInputContext.tsx",methods:[],props:{context:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/fileInputContext.tsx",name:"FileInputContextProviderProps"}],description:"",name:"context",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/fileInputContext.tsx",name:"FileInputContextProviderProps"},required:!0,tags:{},type:{name:"FileInputContext"}}},tags:{}}}catch{}const g=a=>{const{children:t,hideThumbnail:s,className:k,fileName:r,fileType:_,fileSize:y,path:F,file:T,state:v,errorLabel:L="Feil",onRemove:N,variant:j="list",trackingProps:S,...b}=a,C=`jkl-file-preview-${i.useId()}`,V=`${C}-support`,q=G(),E=_.startsWith("image/")&&(T?URL.createObjectURL(T):F),I=e.jsxs("div",{id:C,className:M(k,"jkl-file",`jkl-file--${j}`),"data-state":v,...b,"data-track-component-name":$.File,"data-track-id":S?.id??r,"data-track-label":r,"data-track-state":v,"data-track-variant":j,"data-track-file-size":y,...B(S?.extra,b),children:[e.jsxs(f,{gap:"8",direction:j==="card"?"column":"row",alignItems:j==="card"?"start":"center",className:"jkl-file__content",children:[!s&&e.jsx("div",{className:"jkl-file__thumbnail","data-filetype":_,children:E&&e.jsx("img",{src:E,alt:""})}),e.jsxs(f,{gap:"8",alignItems:"center",justifyContent:"space-between",className:"jkl-file__info",children:[F?e.jsx(x,{size:"s",className:"jkl-file__name",children:e.jsxs(A,{href:F,children:[r," ",e.jsxs("span",{className:"jkl-file__size",children:["(",R(y),")"]})]})}):e.jsxs(x,{size:"s",className:"jkl-file__name",children:[r," ",e.jsxs("span",{className:"jkl-file__size",children:["(",R(y),")"]})]}),N&&e.jsx(O,{variant:"ghost",className:"jkl-file__button",onClick:N,title:`Fjern ${r}`,icon:e.jsx(K,{})})]})]}),v==="error"&&L&&e.jsx(W,{className:"jkl-file__support-label",id:V,label:L,labelType:"error"})]});return q?e.jsx("li",{children:I}):I};try{g.displayName="File",g.__docgenInfo={description:"",displayName:"File",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file/File.tsx",methods:[],props:{fileName:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"fileName",required:!0,tags:{},type:{name:"string"}},fileType:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"fileType",required:!0,tags:{},type:{name:"string"}},fileSize:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"fileSize",required:!0,tags:{},type:{name:"number"}},path:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"path",required:!1,tags:{},type:{name:"string"}},errorLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"errorLabel",required:!1,tags:{},type:{name:"string"}},hideThumbnail:{defaultValue:{value:"false"},declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"Du kan skjule forhåndsvisning av bilde/filendelse for å spare plass",name:"hideThumbnail",required:!1,tags:{default:"false"},type:{name:"boolean"}},state:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"state",required:!1,tags:{},type:{name:"enum",raw:'"error" | "loading"',value:[{value:'"error"'},{value:'"loading"'}]}},variant:{defaultValue:{value:'"list"'},declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"Velg hvordan filene skal vises for brukeren",name:"variant",required:!1,tags:{default:'"list"'},type:{name:"enum",raw:'"list" | "card"',value:[{value:'"list"'},{value:'"card"'}]}},file:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"file",required:!1,tags:{},type:{name:"File"}},onRemove:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"Gjør det mulig å vise en knapp for fjerning av filene ved filopplasting",name:"onRemove",required:!1,tags:{},type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},trackingProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"trackingProps",required:!1,tags:{},type:{name:"Tracking"}}},tags:{}}}catch{}const H=""+new URL("metamorphosis-31-mtN7L.pdf",import.meta.url).href,{fn:h}=__STORYBOOK_MODULE_TEST__,Y={title:"Komponenter/File",component:g,subcomponents:{Button:O},args:{hideThumbnail:!1,fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:D,variant:"list",onRemove:void 0},argTypes:{variant:{control:{type:"inline-radio"}},state:{control:{type:"inline-radio"},options:[void 0,"loading","error"]}}},n={name:"File"},l={name:"Dokument",args:{fileName:"kafka.pdf",fileSize:427e3,fileType:".pdf",path:H}},c={name:"File vist som kort",args:{variant:"card"}},m={name:"Fil med slettefunksjon",args:{onRemove:h()}},d={name:"Liste med filer",decorators:(a,t)=>e.jsx(f,{direction:t.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(s=>e.jsx(a,{...t.args,...n.args},s))})},o={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:a=>e.jsxs(f,{direction:"column",gap:"xs",children:[e.jsx(a,{}),e.jsx(x,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 4. sekund"})]}),render:a=>{const[t,s]=i.useState(a.state==="loading"||!0);return i.useEffect(()=>{setTimeout(()=>s(!t),4e3,"mock"),clearTimeout("mock")},[t]),e.jsx(g,{...n.args,...a,state:t?"loading":void 0,onRemove:t?void 0:h()})}},p={name:"Fil med feil",args:{state:"error"}},u={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:a=>e.jsxs(f,{direction:"column",gap:"xs",style:{minWidth:"min(24rem, 90vw)"},children:[e.jsx(a,{}),e.jsx(x,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 2. sekund"})]}),render:a=>{const t=[1,2,3,4,5],[s,k]=i.useState(0);return i.useEffect(()=>{setTimeout(()=>{s>=t.length?k(0):k(s+1)},2e3,"mock"),clearTimeout("mock")},[s]),e.jsx(e.Fragment,{children:t.map(r=>e.jsx(g,{...o.args,...a,state:s<r?"loading":void 0,onRemove:s<r?void 0:h()},r))})}},J=["FileStory","Document","FileCard","FileDelete","FileList","FileLoading","FileError","MultifileLoading"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Dokument",
  args: {
    fileName: "kafka.pdf",
    fileSize: 427_000,
    fileType: ".pdf",
    path: book.default
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "File vist som kort",
  args: {
    variant: "card"
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Fil med slettefunksjon",
  args: {
    onRemove: fn()
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Liste med filer",
  decorators: (Story, story) => <Flex direction={story.args.variant === "list" ? "column" : "row"} gap="xs m">
            {Array("Fil 1", "Fil 2").map(i => <Story key={i} {...story.args} {...FileStory.args} />)}
        </Flex>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ce=Object.freeze(Object.defineProperty({__proto__:null,Document:l,FileCard:c,FileDelete:m,FileError:p,FileList:d,FileLoading:o,FileStory:n,MultifileLoading:u,__namedExportsOrder:J,default:Y},Symbol.toStringTag,{value:"Module"}));export{g as F,U as a,m as b,ce as c,R as f,Y as m,G as u};
