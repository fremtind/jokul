import{r as n,j as e}from"./iframe-Et2WV6aB.js";import{c as K}from"./cow-CdXr5BwN.js";import{c as W}from"./clsx-B-dksMZM.js";import{C as G,g as H}from"./types-BlFGa32c.js";import{F as f}from"./Flex-C1QjxZQt.js";import{T as F}from"./Text-CLX29PyJ.js";import{L as Y}from"./Link-q8gEpG7S.js";import{f as w}from"./formatNumber-Davy0grG.js";import{n as V}from"./unicode-DWvs0Pen.js";import{B as M}from"./Button-BUiz6gRo.js";import{T as J}from"./TrashCanIcon-D5dobQAy.js";import{S as Q}from"./SupportLabel-DiFZb4D3.js";function q(a,t){return a>=1e5?`${w(Number(a/1e3/1e3),{maximumFractionDigits:1,...t})}${V}MB`:`${w(a/1e3,{maximumFractionDigits:2,...t})}${V}KB`}const $=n.createContext(null),X=()=>n.useContext($),D=({context:a,children:t})=>e.jsx($.Provider,{value:a,children:t});try{D.displayName="FileInputContextProvider",D.__docgenInfo={description:"",displayName:"FileInputContextProvider",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file-input/internal/fileInputContext.tsx",methods:[],props:{context:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file-input/internal/fileInputContext.tsx",name:"FileInputContextProviderProps"}],description:"",name:"context",parent:{fileName:"jokul/packages/jokul/src/components/file-input/internal/fileInputContext.tsx",name:"FileInputContextProviderProps"},required:!0,tags:{},type:{name:"FileInputContext"}}},tags:{}}}catch{}const g=a=>{const{children:t,hideThumbnail:r,className:k,fileName:s,fileType:L,fileSize:v,path:h,file:j,state:x,errorLabel:_="Feil",onRemove:N,variant:y="list",trackingProps:S,...C}=a,E=`jkl-file-preview-${n.useId()}`,I=`${E}-support`,U=x==="error"&&_?I:void 0,B=X(),T=L.startsWith("image/"),[A,R]=n.useState();n.useEffect(()=>{if(!j||!T||r)return;const P=URL.createObjectURL(j);return R(P),()=>{URL.revokeObjectURL(P),R(void 0)}},[j,T,r]);const z=T&&(j?A:h),O=e.jsxs("div",{id:E,className:W(k,"jkl-file",`jkl-file--${y}`),"data-state":x,...C,"data-track-component-name":G.File,"data-track-id":S?.id??s,"data-track-label":s,"data-track-state":x,"data-track-variant":y,"data-track-file-size":v,...H(S?.extra,C),children:[e.jsxs(f,{gap:"8",direction:y==="card"?"column":"row",alignItems:y==="card"?"start":"center",className:"jkl-file__content",children:[!r&&e.jsx("div",{className:"jkl-file__thumbnail","data-filetype":L,children:z&&e.jsx("img",{src:z,alt:""})}),e.jsxs(f,{gap:"8",alignItems:"center",justifyContent:"space-between",className:"jkl-file__info",children:[h?e.jsx(F,{size:"s",className:"jkl-file__name",children:e.jsxs(Y,{href:h,"aria-describedby":U,children:[s," ",e.jsxs("span",{className:"jkl-file__size",children:["(",q(v),")"]})]})}):e.jsxs(F,{size:"s",className:"jkl-file__name",children:[s," ",e.jsxs("span",{className:"jkl-file__size",children:["(",q(v),")"]})]}),N&&e.jsx(M,{variant:"ghost",className:"jkl-file__button",onClick:N,title:`Fjern ${s}`,"aria-label":`Fjern ${s}`,"aria-describedby":U,icon:e.jsx(J,{})})]})]}),x==="error"&&_&&e.jsx(Q,{className:"jkl-file__support-label",id:I,label:_,labelType:"error"})]});return B?e.jsx("li",{children:O}):O};try{g.displayName="File",g.__docgenInfo={description:"",displayName:"File",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/file/File.tsx",methods:[],props:{fileName:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"fileName",required:!0,tags:{},type:{name:"string"}},fileType:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"fileType",required:!0,tags:{},type:{name:"string"}},fileSize:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"fileSize",required:!0,tags:{},type:{name:"number"}},path:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"path",required:!1,tags:{},type:{name:"string"}},errorLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"errorLabel",required:!1,tags:{},type:{name:"string"}},hideThumbnail:{defaultValue:{value:"false"},declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"Du kan skjule forhåndsvisning av bilde/filendelse for å spare plass",name:"hideThumbnail",required:!1,tags:{default:"false"},type:{name:"boolean"}},state:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"state",required:!1,tags:{},type:{name:"enum",raw:'"error" | "loading"',value:[{value:'"error"'},{value:'"loading"'}]}},variant:{defaultValue:{value:'"list"'},declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"Velg hvordan filene skal vises for brukeren",name:"variant",required:!1,tags:{default:'"list"'},type:{name:"enum",raw:'"list" | "card"',value:[{value:'"list"'},{value:'"card"'}]}},file:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"file",required:!1,tags:{},type:{name:"File"}},onRemove:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"Gjør det mulig å vise en knapp for fjerning av filene ved filopplasting",name:"onRemove",required:!1,tags:{},type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},trackingProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/file/types.ts",name:"TypeLiteral"}],description:"",name:"trackingProps",required:!1,tags:{},type:{name:"Tracking"}}},tags:{}}}catch{}const Z=""+new URL("metamorphosis-31-mtN7L.pdf",import.meta.url).href,{fn:b}=__STORYBOOK_MODULE_TEST__,ee={title:"Komponenter/File",component:g,subcomponents:{Button:M},args:{hideThumbnail:!1,fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:K,variant:"list",onRemove:void 0},argTypes:{variant:{control:{type:"inline-radio"}},state:{control:{type:"inline-radio"},options:[void 0,"loading","error"]}}},i={name:"File"},l={name:"Dokument",args:{fileName:"kafka.pdf",fileSize:427e3,fileType:".pdf",path:Z}},c={name:"File vist som kort",args:{variant:"card"}},d={name:"Fil med slettefunksjon",args:{onRemove:b()}},m={name:"Liste med filer",decorators:(a,t)=>e.jsx(f,{direction:t.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(r=>e.jsx(a,{...t.args,...i.args},r))})},o={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:a=>e.jsxs(f,{direction:"column",gap:"xs",children:[e.jsx(a,{}),e.jsx(F,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 4. sekund"})]}),render:a=>{const[t,r]=n.useState(a.state==="loading"||!0);return n.useEffect(()=>{setTimeout(()=>r(!t),4e3,"mock"),clearTimeout("mock")},[t]),e.jsx(g,{...i.args,...a,state:t?"loading":void 0,onRemove:t?void 0:b()})}},p={name:"Fil med feil",args:{state:"error"}},u={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:a=>e.jsxs(f,{direction:"column",gap:"xs",style:{minWidth:"min(24rem, 90vw)"},children:[e.jsx(a,{}),e.jsx(F,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 2. sekund"})]}),render:a=>{const t=[1,2,3,4,5],[r,k]=n.useState(0);return n.useEffect(()=>{setTimeout(()=>{r>=t.length?k(0):k(r+1)},2e3,"mock"),clearTimeout("mock")},[r]),e.jsx(e.Fragment,{children:t.map(s=>e.jsx(g,{...o.args,...a,state:r<s?"loading":void 0,onRemove:r<s?void 0:b()},s))})}},ae=["FileStory","Document","FileCard","FileDelete","FileList","FileLoading","FileError","MultifileLoading"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Fil med slettefunksjon",
  args: {
    onRemove: fn()
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Liste med filer",
  decorators: (Story, story) => <Flex direction={story.args.variant === "list" ? "column" : "row"} gap="xs m">
            {Array("Fil 1", "Fil 2").map(i => <Story key={i} {...story.args} {...FileStory.args} />)}
        </Flex>
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const fe=Object.freeze(Object.defineProperty({__proto__:null,Document:l,FileCard:c,FileDelete:d,FileError:p,FileList:m,FileLoading:o,FileStory:i,MultifileLoading:u,__namedExportsOrder:ae,default:ee},Symbol.toStringTag,{value:"Module"}));export{g as F,D as a,d as b,fe as c,q as f,ee as m,X as u};
