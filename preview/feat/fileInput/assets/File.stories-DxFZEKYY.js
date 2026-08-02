import{r as a,j as e}from"./iframe-Co20lHln.js";import{c as z}from"./cow-CdXr5BwN.js";import{c as q}from"./clsx-B-dksMZM.js";import{L as B}from"./Link-BZF2tOak.js";import{f as T}from"./formatNumber-Davy0grG.js";import{n as L}from"./unicode-DWvs0Pen.js";import{B as E}from"./Button-z1tJPgi5.js";import{T as C}from"./TrashCanIcon-QRWs8JkY.js";import{S as w}from"./SupportLabel-DEl7gAeS.js";import{F}from"./Flex-D7LVFOvR.js";function b(n,r){return n>=1e5?`${T(Number(n/1e3/1e3),{maximumFractionDigits:1,...r})}${L}MB`:`${T(n/1e3,{maximumFractionDigits:2,...r})}${L}KB`}const $=a.createContext(null),I=()=>a.useContext($),f=n=>{const{children:r,className:t,fileName:i,fileType:o,fileSize:v,path:g,file:_,state:j,errorLabel:y="Feil",onRemove:k,variant:N="list",...U}=n,S=`jkl-file-preview-${a.useId()}`,R=`${S}-support`,O=I(),M=o.startsWith("image/")&&(_?URL.createObjectURL(_):g),h=e.jsxs("div",{id:S,className:q(t,"jkl-file",`jkl-file--${N}`),"data-state":j,...U,children:[e.jsxs("div",{className:"jkl-file__content",children:[e.jsx("div",{className:"jkl-file__content__thumbnail","data-filetype":o,children:e.jsx("img",{src:M||void 0,alt:""})}),g?e.jsx("p",{className:"jkl-file__content__name",children:e.jsxs(B,{href:g,children:[i," ",e.jsxs("span",{className:"jkl-file__content__name__size",children:["(",b(v),")"]})]})}):e.jsxs("p",{className:"jkl-file__content__name",children:[i," ",e.jsxs("span",{className:"jkl-file__content__name__size",children:["(",b(v),")"]})]}),k&&e.jsx(E,{variant:"ghost",className:"jkl-file__content__button",onClick:k,title:`Fjern ${i}`,icon:e.jsx(C,{})})]}),j==="error"&&y&&e.jsx(w,{className:"jkl-file__support-label",id:R,label:y,labelType:"error"})]});return O?e.jsx("li",{children:h}):h};f.__docgenInfo={description:"",methods:[],displayName:"File",props:{fileName:{required:!0,tsType:{name:"string"},description:""},fileType:{required:!0,tsType:{name:"string"},description:""},fileSize:{required:!0,tsType:{name:"number"},description:""},path:{required:!1,tsType:{name:"string"},description:""},errorLabel:{required:!1,tsType:{name:"string"},description:""},state:{required:!1,tsType:{name:"union",raw:'"error" | "loading"',elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"loading"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"list" | "card"',elements:[{name:"literal",value:'"list"'},{name:"literal",value:'"card"'}]},description:`Velg hvordan filene skal vises for brukeren

@default "list"`},file:{required:!1,tsType:{name:"File"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:"Gjør det mulig å vise en knapp for fjerning av filene ved filopplasting"}}};const{fn:x}=__STORYBOOK_MODULE_TEST__,D={title:"Komponenter/File",component:f,subcomponents:{Button:E},args:{fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:z,variant:"list",onRemove:x()}},s={name:"File"},m={name:"File vist som kort",args:{variant:"card"}},d={name:"Fil med slettefunksjon"},c={name:"Liste med filer",args:{onRemove:void 0},decorators:(n,r)=>e.jsx(F,{direction:r.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(t=>e.jsx(n,{...r.args,...s.args},t))})},l={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:n=>e.jsxs(F,{direction:"column",gap:"xs",children:[e.jsx(n,{}),e.jsx("p",{style:{fontSize:"0.75em",opacity:.5},children:"Oppdateres automatisk hvert 4. sekund"})]}),render:n=>{const[r,t]=a.useState(n.state==="loading"||!0);return a.useEffect(()=>{setTimeout(()=>t(!r),4e3,"mock"),clearTimeout("mock")},[r]),e.jsx(f,{...s.args,...n,state:r?"loading":void 0,onRemove:r?void 0:x()})}},p={name:"Fil med feil",args:{state:"error"}},u={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:n=>e.jsxs(F,{direction:"column",gap:"xs",children:[e.jsx(n,{}),e.jsx("p",{style:{fontSize:"0.75em",opacity:.5},children:"Oppdateres automatisk hvert 2. sekund"})]}),render:n=>{const r=[1,2,3,4,5],[t,i]=a.useState(0);return a.useEffect(()=>{setTimeout(()=>{t>=r.length?i(0):i(t+1)},2e3,"mock"),clearTimeout("mock")},[t]),e.jsx(e.Fragment,{children:r.map(o=>e.jsx(f,{...l.args,...n,state:t<o?"loading":void 0,onRemove:t<o?void 0:x()},o))})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const H=["FileStory","FileCard","FileDelete","FileList","FileLoading","FileError","MultifileLoading"],Z=Object.freeze(Object.defineProperty({__proto__:null,FileCard:m,FileDelete:d,FileError:p,FileList:c,FileLoading:l,FileStory:s,MultifileLoading:u,__namedExportsOrder:H,default:D},Symbol.toStringTag,{value:"Module"}));export{f as F,Z as a,D as m};
