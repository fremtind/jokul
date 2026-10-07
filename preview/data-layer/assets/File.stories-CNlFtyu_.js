import{r as i,j as e}from"./iframe-CDa7pJma.js";import{c as w}from"./cow-CdXr5BwN.js";import{c as B}from"./clsx-B-dksMZM.js";import{C as $,g as P}from"./types-YjSsgwWY.js";import{F as f}from"./Flex-CWnLdXBE.js";import{T as k}from"./Text-OzFw203v.js";import{L as A}from"./Link-CG1chhdD.js";import{f as C}from"./formatNumber-Davy0grG.js";import{n as z}from"./unicode-DWvs0Pen.js";import{B as O}from"./Button-CFUv8Zis.js";import{T as K}from"./TrashCanIcon-fpE5unM4.js";import{S as W}from"./SupportLabel-DFPHlsxV.js";function I(a,r){return a>=1e5?`${C(Number(a/1e3/1e3),{maximumFractionDigits:1,...r})}${z}MB`:`${C(a/1e3,{maximumFractionDigits:2,...r})}${z}KB`}const V=i.createContext(null),G=()=>i.useContext(V),U=({context:a,children:r})=>e.jsx(V.Provider,{value:a,children:r});try{U.displayName="FileInputContextProvider",U.__docgenInfo={description:"",displayName:"FileInputContextProvider",props:{context:{defaultValue:null,description:"",name:"context",required:!0,type:{name:"FileInputContext"}}}}}catch{}const g=a=>{const{children:r,hideThumbnail:t,className:x,fileName:n,fileType:_,fileSize:v,path:y,file:b,state:h,errorLabel:S="Feil",onRemove:T,variant:F="list",tracking:L,...q}=a,N=`jkl-file-preview-${i.useId()}`,D=`${N}-support`,M=G(),E=_.startsWith("image/")&&(b?URL.createObjectURL(b):y),R=e.jsxs("div",{id:N,className:B(x,"jkl-file",`jkl-file--${F}`),"data-state":h,...q,"data-track-component-name":$.File,"data-track-id":L?.id??n,"data-track-label":n,"data-track-state":h,"data-track-variant":F,"data-track-file-size":v,...P(L?.extra),children:[e.jsxs(f,{gap:"8",direction:F==="card"?"column":"row",alignItems:F==="card"?"start":"center",className:"jkl-file__content",children:[!t&&e.jsx("div",{className:"jkl-file__thumbnail","data-filetype":_,children:E&&e.jsx("img",{src:E,alt:""})}),e.jsxs(f,{gap:"8",alignItems:"center",justifyContent:"space-between",className:"jkl-file__info",children:[y?e.jsx(k,{size:"s",className:"jkl-file__name",children:e.jsxs(A,{href:y,children:[n," ",e.jsxs("span",{className:"jkl-file__size",children:["(",I(v),")"]})]})}):e.jsxs(k,{size:"s",className:"jkl-file__name",children:[n," ",e.jsxs("span",{className:"jkl-file__size",children:["(",I(v),")"]})]}),T&&e.jsx(O,{variant:"ghost",className:"jkl-file__button",onClick:T,title:`Fjern ${n}`,icon:e.jsx(K,{})})]})]}),h==="error"&&S&&e.jsx(W,{className:"jkl-file__support-label",id:D,label:S,labelType:"error"})]});return M?e.jsx("li",{children:R}):R};try{g.displayName="File",g.__docgenInfo={description:"",displayName:"File",props:{fileName:{defaultValue:null,description:"",name:"fileName",required:!0,type:{name:"string"}},fileType:{defaultValue:null,description:"",name:"fileType",required:!0,type:{name:"string"}},fileSize:{defaultValue:null,description:"",name:"fileSize",required:!0,type:{name:"number"}},path:{defaultValue:null,description:"",name:"path",required:!1,type:{name:"string"}},errorLabel:{defaultValue:null,description:"",name:"errorLabel",required:!1,type:{name:"string"}},hideThumbnail:{defaultValue:{value:"false"},description:"Du kan skjule forhåndsvisning av bilde/filendelse for å spare plass",name:"hideThumbnail",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"loading"'},{value:'"error"'}]}},variant:{defaultValue:{value:'"list"'},description:"Velg hvordan filene skal vises for brukeren",name:"variant",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"card"'}]}},file:{defaultValue:null,description:"",name:"file",required:!1,type:{name:"File"}},onRemove:{defaultValue:null,description:"Gjør det mulig å vise en knapp for fjerning av filene ved filopplasting",name:"onRemove",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},children:{defaultValue:null,description:"@deprecated Blir ikke brukt, vil fjernes i neste major-release",name:"children",required:!1,type:{name:"((string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal) & (string | ... 5 more ... | Iterable<...>)) | null"}},tracking:{defaultValue:null,description:"",name:"tracking",required:!1,type:{name:"Tracking"}}}}}catch{}const H=""+new URL("metamorphosis-31-mtN7L.pdf",import.meta.url).href,{fn:j}=__STORYBOOK_MODULE_TEST__,J={title:"Komponenter/File",component:g,subcomponents:{Button:O},args:{hideThumbnail:!1,fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:w,variant:"list",onRemove:void 0},argTypes:{variant:{control:{type:"inline-radio"}},state:{control:{type:"inline-radio"},options:[void 0,"loading","error"]}}},s={name:"File"},l={name:"Dokument",args:{fileName:"kafka.pdf",fileSize:427e3,fileType:".pdf",path:H}},d={name:"File vist som kort",args:{variant:"card"}},m={name:"Fil med slettefunksjon",args:{onRemove:j()}},c={name:"Liste med filer",decorators:(a,r)=>e.jsx(f,{direction:r.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(t=>e.jsx(a,{...r.args,...s.args},t))})},o={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:a=>e.jsxs(f,{direction:"column",gap:"xs",children:[e.jsx(a,{}),e.jsx(k,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 4. sekund"})]}),render:a=>{const[r,t]=i.useState(a.state==="loading"||!0);return i.useEffect(()=>{setTimeout(()=>t(!r),4e3,"mock"),clearTimeout("mock")},[r]),e.jsx(g,{...s.args,...a,state:r?"loading":void 0,onRemove:r?void 0:j()})}},u={name:"Fil med feil",args:{state:"error"}},p={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:a=>e.jsxs(f,{direction:"column",gap:"xs",style:{minWidth:"min(24rem, 90vw)"},children:[e.jsx(a,{}),e.jsx(k,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 2. sekund"})]}),render:a=>{const r=[1,2,3,4,5],[t,x]=i.useState(0);return i.useEffect(()=>{setTimeout(()=>{t>=r.length?x(0):x(t+1)},2e3,"mock"),clearTimeout("mock")},[t]),e.jsx(e.Fragment,{children:r.map(n=>e.jsx(g,{...o.args,...a,state:t<n?"loading":void 0,onRemove:t<n?void 0:j()},n))})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const X=["FileStory","Document","FileCard","FileDelete","FileList","FileLoading","FileError","MultifileLoading"],de=Object.freeze(Object.defineProperty({__proto__:null,Document:l,FileCard:d,FileDelete:m,FileError:u,FileList:c,FileLoading:o,FileStory:s,MultifileLoading:p,__namedExportsOrder:X,default:J},Symbol.toStringTag,{value:"Module"}));export{g as F,U as a,m as b,de as c,I as f,J as m,G as u};
