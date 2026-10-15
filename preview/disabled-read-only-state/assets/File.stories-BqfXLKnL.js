import{r as p,j as e}from"./iframe-Cc0lsbEP.js";import{c as q}from"./cow-CdXr5BwN.js";import{c as w}from"./clsx-B-dksMZM.js";import{u as I,f as R}from"./fileInputContext-BFcc7P1a.js";import{F as f}from"./Flex-BcrmyNfa.js";import{T as v}from"./Text-CuHi8qQB.js";import{L as C}from"./Link-Bvf24nGJ.js";import{B as z}from"./Button-qZbBNQgb.js";import{T as D}from"./TrashCanIcon-BhNo2R3t.js";import{S as M}from"./SupportLabel-D8Vv-TW6.js";const g=a=>{const{children:r,hideThumbnail:n,className:F,fileName:s,fileType:j,fileSize:y,path:x,file:_,state:S,errorLabel:b="Feil",onRemove:T,variant:h="list",...U}=a,L=`jkl-file-preview-${p.useId()}`,O=`${L}-support`,V=I(),N=j.startsWith("image/")&&(_?URL.createObjectURL(_):x),E=e.jsxs("div",{id:L,className:w(F,"jkl-file",`jkl-file--${h}`),"data-state":S,...U,children:[e.jsxs(f,{gap:"8",direction:h==="card"?"column":"row",alignItems:h==="card"?"start":"center",className:"jkl-file__content",children:[!n&&e.jsx("div",{className:"jkl-file__thumbnail","data-filetype":j,children:N&&e.jsx("img",{src:N,alt:""})}),e.jsxs(f,{gap:"8",alignItems:"center",justifyContent:"space-between",className:"jkl-file__info",children:[x?e.jsx(v,{size:"s",className:"jkl-file__name",children:e.jsxs(C,{href:x,children:[s," ",e.jsxs("span",{className:"jkl-file__size",children:["(",R(y),")"]})]})}):e.jsxs(v,{size:"s",className:"jkl-file__name",children:[s," ",e.jsxs("span",{className:"jkl-file__size",children:["(",R(y),")"]})]}),T&&e.jsx(z,{variant:"ghost",className:"jkl-file__button",onClick:T,title:`Fjern ${s}`,icon:e.jsx(D,{})})]})]}),S==="error"&&b&&e.jsx(M,{className:"jkl-file__support-label",id:O,label:b,labelType:"error"})]});return V?e.jsx("li",{children:E}):E};try{g.displayName="File",g.__docgenInfo={description:"",displayName:"File",props:{fileName:{defaultValue:null,description:"",name:"fileName",required:!0,type:{name:"string"}},fileType:{defaultValue:null,description:"",name:"fileType",required:!0,type:{name:"string"}},fileSize:{defaultValue:null,description:"",name:"fileSize",required:!0,type:{name:"number"}},path:{defaultValue:null,description:"",name:"path",required:!1,type:{name:"string"}},errorLabel:{defaultValue:null,description:"",name:"errorLabel",required:!1,type:{name:"string"}},hideThumbnail:{defaultValue:{value:"false"},description:"Du kan skjule forhåndsvisning av bilde/filendelse for å spare plass",name:"hideThumbnail",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"loading"'},{value:'"error"'}]}},variant:{defaultValue:{value:'"list"'},description:"Velg hvordan filene skal vises for brukeren",name:"variant",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"card"'}]}},file:{defaultValue:null,description:"",name:"file",required:!1,type:{name:"File"}},onRemove:{defaultValue:null,description:"Gjør det mulig å vise en knapp for fjerning av filene ved filopplasting",name:"onRemove",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},children:{defaultValue:null,description:"@deprecated Blir ikke brukt, vil fjernes i neste major-release",name:"children",required:!1,type:{name:"((string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal) & (string | ... 5 more ... | Iterable<...>)) | null"}}}}}catch{}const B=""+new URL("metamorphosis-31-mtN7L.pdf",import.meta.url).href,{fn:k}=__STORYBOOK_MODULE_TEST__,$={title:"Komponenter/File",component:g,subcomponents:{Button:z},args:{hideThumbnail:!1,fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:q,variant:"list",onRemove:void 0},argTypes:{variant:{control:{type:"inline-radio"}},state:{control:{type:"inline-radio"},options:[void 0,"loading","error"]}}},t={name:"File"},l={name:"Dokument",args:{fileName:"kafka.pdf",fileSize:427e3,fileType:".pdf",path:B}},o={name:"File vist som kort",args:{variant:"card"}},d={name:"Fil med slettefunksjon",args:{onRemove:k()}},m={name:"Liste med filer",decorators:(a,r)=>e.jsx(f,{direction:r.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(n=>e.jsx(a,{...r.args,...t.args},n))})},i={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:a=>e.jsxs(f,{direction:"column",gap:"xs",children:[e.jsx(a,{}),e.jsx(v,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 4. sekund"})]}),render:a=>{const[r,n]=p.useState(a.state==="loading"||!0);return p.useEffect(()=>{setTimeout(()=>n(!r),4e3,"mock"),clearTimeout("mock")},[r]),e.jsx(g,{...t.args,...a,state:r?"loading":void 0,onRemove:r?void 0:k()})}},c={name:"Fil med feil",args:{state:"error"}},u={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:a=>e.jsxs(f,{direction:"column",gap:"xs",style:{minWidth:"min(24rem, 90vw)"},children:[e.jsx(a,{}),e.jsx(v,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 2. sekund"})]}),render:a=>{const r=[1,2,3,4,5],[n,F]=p.useState(0);return p.useEffect(()=>{setTimeout(()=>{n>=r.length?F(0):F(n+1)},2e3,"mock"),clearTimeout("mock")},[n]),e.jsx(e.Fragment,{children:r.map(s=>e.jsx(g,{...i.args,...a,state:n<s?"loading":void 0,onRemove:n<s?void 0:k()},s))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Dokument",
  args: {
    fileName: "kafka.pdf",
    fileSize: 427_000,
    fileType: ".pdf",
    path: book.default
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "File vist som kort",
  args: {
    variant: "card"
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Fil med slettefunksjon",
  args: {
    onRemove: fn()
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Liste med filer",
  decorators: (Story, story) => <Flex direction={story.args.variant === "list" ? "column" : "row"} gap="xs m">
            {Array("Fil 1", "Fil 2").map(i => <Story key={i} {...story.args} {...FileStory.args} />)}
        </Flex>
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Fil med feil",
  args: {
    state: "error"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const W=["FileStory","Document","FileCard","FileDelete","FileList","FileLoading","FileError","MultifileLoading"],ee=Object.freeze(Object.defineProperty({__proto__:null,Document:l,FileCard:o,FileDelete:d,FileError:c,FileList:m,FileLoading:i,FileStory:t,MultifileLoading:u,__namedExportsOrder:W,default:$},Symbol.toStringTag,{value:"Module"}));export{g as F,d as a,ee as b,$ as m};
