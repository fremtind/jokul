import{r as o,j as e}from"./iframe-DomUvUQy.js";import{c as $}from"./cow-CdXr5BwN.js";import{c as B}from"./clsx-B-dksMZM.js";import{F as f}from"./Flex-CVwI5sBj.js";import{T as x}from"./Text-DVywW9B3.js";import{L as M}from"./Link-CbaMxbyX.js";import{f as z}from"./formatNumber-Davy0grG.js";import{n as R}from"./unicode-DWvs0Pen.js";import{B as C}from"./Button-B-5sszu3.js";import{T as K}from"./TrashCanIcon-pJ3HKh4D.js";import{S as P}from"./SupportLabel-CjccgglS.js";function O(s,r){return s>=1e5?`${z(Number(s/1e3/1e3),{maximumFractionDigits:1,...r})}${R}MB`:`${z(s/1e3,{maximumFractionDigits:2,...r})}${R}KB`}const E=o.createContext(null),W=()=>o.useContext(E),te=({context:s,children:r})=>e.jsx(E.Provider,{value:s,children:r}),k=s=>{const{children:r,hideThumbnail:a,className:g,fileName:t,fileType:v,fileSize:S,path:F,file:_,state:y,errorLabel:T="Feil",onRemove:L,variant:j="list",...w}=s,b=`jkl-file-preview-${o.useId()}`,D=`${b}-support`,I=W(),N=v.startsWith("image/")&&(_?URL.createObjectURL(_):F),U=e.jsxs("div",{id:b,className:B(g,"jkl-file",`jkl-file--${j}`),"data-state":y,...w,children:[e.jsxs(f,{gap:"8",direction:j==="card"?"column":"row",alignItems:j==="card"?"start":"center",className:"jkl-file__content",children:[!a&&e.jsx("div",{className:"jkl-file__thumbnail","data-filetype":v,children:N&&e.jsx("img",{src:N,alt:""})}),e.jsxs(f,{gap:"8",alignItems:"center",justifyContent:"space-between",className:"jkl-file__info",children:[F?e.jsx(x,{size:"s",className:"jkl-file__name",children:e.jsxs(M,{href:F,children:[t," ",e.jsxs("span",{className:"jkl-file__size",children:["(",O(S),")"]})]})}):e.jsxs(x,{size:"s",className:"jkl-file__name",children:[t," ",e.jsxs("span",{className:"jkl-file__size",children:["(",O(S),")"]})]}),L&&e.jsx(C,{variant:"ghost",className:"jkl-file__button",onClick:L,title:`Fjern ${t}`,icon:e.jsx(K,{})})]})]}),y==="error"&&T&&e.jsx(P,{className:"jkl-file__support-label",id:D,label:T,labelType:"error"})]});return I?e.jsx("li",{children:U}):U},A=""+new URL("metamorphosis-31-mtN7L.pdf",import.meta.url).href,{fn:h}=__STORYBOOK_MODULE_TEST__,Y={title:"Komponenter/File",component:k,subcomponents:{Button:C},args:{hideThumbnail:!1,fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:$,variant:"list",onRemove:void 0},argTypes:{variant:{control:{type:"inline-radio"}},state:{control:{type:"inline-radio"},options:[void 0,"loading","error"]}}},n={name:"File"},l={name:"Dokument",args:{fileName:"kafka.pdf",fileSize:427e3,fileType:".pdf",path:A}},m={name:"File vist som kort",args:{variant:"card"}},d={name:"Fil med slettefunksjon",args:{onRemove:h()}},c={name:"Liste med filer",decorators:(s,r)=>e.jsx(f,{direction:r.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(a=>e.jsx(s,{...r.args,...n.args},a))})},i={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:s=>e.jsxs(f,{direction:"column",gap:"xs",children:[e.jsx(s,{}),e.jsx(x,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 4. sekund"})]}),render:s=>{const[r,a]=o.useState(s.state==="loading"||!0);return o.useEffect(()=>{setTimeout(()=>a(!r),4e3,"mock"),clearTimeout("mock")},[r]),e.jsx(k,{...n.args,...s,state:r?"loading":void 0,onRemove:r?void 0:h()})}},p={name:"Fil med feil",args:{state:"error"}},u={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:s=>e.jsxs(f,{direction:"column",gap:"xs",style:{minWidth:"min(24rem, 90vw)"},children:[e.jsx(s,{}),e.jsx(x,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 2. sekund"})]}),render:s=>{const r=[1,2,3,4,5],[a,g]=o.useState(0);return o.useEffect(()=>{setTimeout(()=>{a>=r.length?g(0):g(a+1)},2e3,"mock"),clearTimeout("mock")},[a]),e.jsx(e.Fragment,{children:r.map(t=>e.jsx(k,{...i.args,...s,state:a<t?"loading":void 0,onRemove:a<t?void 0:h()},t))})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const q=["FileStory","Document","FileCard","FileDelete","FileList","FileLoading","FileError","MultifileLoading"],ne=Object.freeze(Object.defineProperty({__proto__:null,Document:l,FileCard:m,FileDelete:d,FileError:p,FileList:c,FileLoading:i,FileStory:n,MultifileLoading:u,__namedExportsOrder:q,default:Y},Symbol.toStringTag,{value:"Module"}));export{k as F,te as a,d as b,ne as c,O as f,Y as m,W as u};
