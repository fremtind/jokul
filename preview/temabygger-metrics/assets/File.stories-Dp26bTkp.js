import{r as i,j as e}from"./iframe-BKJJz8iW.js";import{c as P}from"./cow-CdXr5BwN.js";import{c as D}from"./clsx-B-dksMZM.js";import{F as f}from"./Flex-Be7RpCXc.js";import{T as j}from"./Text-VgiNkdNL.js";import{L as M}from"./Link-DKccWGl5.js";import{f as I}from"./formatNumber-Davy0grG.js";import{n as z}from"./unicode-DWvs0Pen.js";import{B as U}from"./Button-DRnQGmqd.js";import{T as $}from"./TrashCanIcon-bWHNxgrM.js";import{S as B}from"./SupportLabel-D1FBkl3g.js";function E(a,t){return a>=1e5?`${I(Number(a/1e3/1e3),{maximumFractionDigits:1,...t})}${z}MB`:`${I(a/1e3,{maximumFractionDigits:2,...t})}${z}KB`}const w=i.createContext(null),K=()=>i.useContext(w),R=({context:a,children:t})=>e.jsx(w.Provider,{value:a,children:t});try{R.displayName="FileInputContextProvider",R.__docgenInfo={description:"",displayName:"FileInputContextProvider",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/fileInputContext.tsx",methods:[],props:{context:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/fileInputContext.tsx",name:"FileInputContextProviderProps"}],description:"",name:"context",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/fileInputContext.tsx",name:"FileInputContextProviderProps"},required:!0,tags:{},type:{name:"FileInputContext"}}},tags:{}}}catch{}const g=a=>{const{children:t,hideThumbnail:s,className:k,fileName:n,fileType:v,fileSize:h,path:x,file:_,state:T,errorLabel:L="Feil",onRemove:N,variant:y="list",...O}=a,S=`jkl-file-preview-${i.useId()}`,V=`${S}-support`,q=K(),b=v.startsWith("image/")&&(_?URL.createObjectURL(_):x),C=e.jsxs("div",{id:S,className:D(k,"jkl-file",`jkl-file--${y}`),"data-state":T,...O,children:[e.jsxs(f,{gap:"8",direction:y==="card"?"column":"row",alignItems:y==="card"?"start":"center",className:"jkl-file__content",children:[!s&&e.jsx("div",{className:"jkl-file__thumbnail","data-filetype":v,children:b&&e.jsx("img",{src:b,alt:""})}),e.jsxs(f,{gap:"8",alignItems:"center",justifyContent:"space-between",className:"jkl-file__info",children:[x?e.jsx(j,{size:"s",className:"jkl-file__name",children:e.jsxs(M,{href:x,children:[n," ",e.jsxs("span",{className:"jkl-file__size",children:["(",E(h),")"]})]})}):e.jsxs(j,{size:"s",className:"jkl-file__name",children:[n," ",e.jsxs("span",{className:"jkl-file__size",children:["(",E(h),")"]})]}),N&&e.jsx(U,{variant:"ghost",className:"jkl-file__button",onClick:N,title:`Fjern ${n}`,icon:e.jsx($,{})})]})]}),T==="error"&&L&&e.jsx(B,{className:"jkl-file__support-label",id:V,label:L,labelType:"error"})]});return q?e.jsx("li",{children:C}):C};try{g.displayName="File",g.__docgenInfo={description:"",displayName:"File",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file/File.tsx",methods:[],props:{fileName:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"fileName",required:!0,tags:{},type:{name:"string"}},fileType:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"fileType",required:!0,tags:{},type:{name:"string"}},fileSize:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"fileSize",required:!0,tags:{},type:{name:"number"}},path:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"path",required:!1,tags:{},type:{name:"string"}},errorLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"errorLabel",required:!1,tags:{},type:{name:"string"}},hideThumbnail:{defaultValue:{value:"false"},declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"Du kan skjule forhåndsvisning av bilde/filendelse for å spare plass",name:"hideThumbnail",required:!1,tags:{default:"false"},type:{name:"boolean"}},state:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"state",required:!1,tags:{},type:{name:"enum",raw:'"error" | "loading"',value:[{value:'"error"'},{value:'"loading"'}]}},variant:{defaultValue:{value:'"list"'},declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"Velg hvordan filene skal vises for brukeren",name:"variant",required:!1,tags:{default:'"list"'},type:{name:"enum",raw:'"list" | "card"',value:[{value:'"list"'},{value:'"card"'}]}},file:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"file",required:!1,tags:{},type:{name:"File"}},onRemove:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"Gjør det mulig å vise en knapp for fjerning av filene ved filopplasting",name:"onRemove",required:!1,tags:{},type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}},tags:{}}}catch{}const W=""+new URL("metamorphosis-31-mtN7L.pdf",import.meta.url).href,{fn:F}=__STORYBOOK_MODULE_TEST__,A={title:"Komponenter/File",component:g,subcomponents:{Button:U},args:{hideThumbnail:!1,fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:P,variant:"list",onRemove:void 0},argTypes:{variant:{control:{type:"inline-radio"}},state:{control:{type:"inline-radio"},options:[void 0,"loading","error"]}}},r={name:"File"},l={name:"Dokument",args:{fileName:"kafka.pdf",fileSize:427e3,fileType:".pdf",path:W}},m={name:"File vist som kort",args:{variant:"card"}},c={name:"Fil med slettefunksjon",args:{onRemove:F()}},d={name:"Liste med filer",decorators:(a,t)=>e.jsx(f,{direction:t.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(s=>e.jsx(a,{...t.args,...r.args},s))})},o={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:a=>e.jsxs(f,{direction:"column",gap:"xs",children:[e.jsx(a,{}),e.jsx(j,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 4. sekund"})]}),render:a=>{const[t,s]=i.useState(a.state==="loading"||!0);return i.useEffect(()=>{setTimeout(()=>s(!t),4e3,"mock"),clearTimeout("mock")},[t]),e.jsx(g,{...r.args,...a,state:t?"loading":void 0,onRemove:t?void 0:F()})}},p={name:"Fil med feil",args:{state:"error"}},u={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:a=>e.jsxs(f,{direction:"column",gap:"xs",style:{minWidth:"min(24rem, 90vw)"},children:[e.jsx(a,{}),e.jsx(j,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 2. sekund"})]}),render:a=>{const t=[1,2,3,4,5],[s,k]=i.useState(0);return i.useEffect(()=>{setTimeout(()=>{s>=t.length?k(0):k(s+1)},2e3,"mock"),clearTimeout("mock")},[s]),e.jsx(e.Fragment,{children:t.map(n=>e.jsx(g,{...o.args,...a,state:s<n?"loading":void 0,onRemove:s<n?void 0:F()},n))})}},G=["FileStory","Document","FileCard","FileDelete","FileList","FileLoading","FileError","MultifileLoading"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Fil med slettefunksjon",
  args: {
    onRemove: fn()
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const re=Object.freeze(Object.defineProperty({__proto__:null,Document:l,FileCard:m,FileDelete:c,FileError:p,FileList:d,FileLoading:o,FileStory:r,MultifileLoading:u,__namedExportsOrder:G,default:A},Symbol.toStringTag,{value:"Module"}));export{g as F,R as a,c as b,re as c,E as f,A as m,K as u};
