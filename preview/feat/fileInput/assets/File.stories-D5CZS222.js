import{r as u,j as e}from"./iframe-CRaXpHkT.js";import{c as O}from"./cow-CdXr5BwN.js";import{c as M}from"./clsx-B-dksMZM.js";import{L as z}from"./Link-ByYOdGLt.js";import{f as h}from"./formatNumber-Davy0grG.js";import{n as T}from"./unicode-DWvs0Pen.js";import{B as b}from"./Button-ZsJ7SbcJ.js";import{T as q}from"./TrashCanIcon-dpKH7Rge.js";import{S as B}from"./SupportLabel-Dttbqcxv.js";import{F}from"./Flex-BdJfajAn.js";function L(r,n){return r>=1e5?`${h(Number(r/1e3/1e3),{maximumFractionDigits:1,...n})}${T}MB`:`${h(r/1e3,{maximumFractionDigits:2,...n})}${T}KB`}const f=r=>{const{children:n,className:s,fileName:t,fileType:i,fileSize:_,path:g,file:x,state:j,errorLabel:y="Feil",onRemove:k,variant:E="list",...N}=r,S=`jkl-file-preview-${u.useId()}`,U=`${S}-support`,R=i.startsWith("image/")&&(x?URL.createObjectURL(x):g);return e.jsxs("div",{id:S,className:M(s,"jkl-file",`jkl-file--${E}`),"data-state":j,...N,children:[e.jsxs("div",{className:"jkl-file__content",children:[e.jsx("div",{className:"jkl-file__content__thumbnail","data-filetype":i,children:e.jsx("img",{src:R||void 0,alt:""})}),g?e.jsx("p",{className:"jkl-file__content__name",children:e.jsxs(z,{href:g,children:[t," ",e.jsxs("span",{className:"jkl-file__content__name__size",children:["(",L(_),")"]})]})}):e.jsxs("p",{className:"jkl-file__content__name",children:[t," ",e.jsxs("span",{className:"jkl-file__content__name__size",children:["(",L(_),")"]})]}),k&&e.jsx(b,{variant:"ghost",className:"jkl-file__content__button",onClick:k,title:`Fjern ${t}`,icon:e.jsx(q,{})})]}),j==="error"&&y&&e.jsx(B,{className:"jkl-file__support-label",id:U,label:y,labelType:"error"})]})};f.__docgenInfo={description:"",methods:[],displayName:"File",props:{fileName:{required:!0,tsType:{name:"string"},description:""},fileType:{required:!0,tsType:{name:"string"},description:""},fileSize:{required:!0,tsType:{name:"number"},description:""},path:{required:!1,tsType:{name:"string"},description:""},errorLabel:{required:!1,tsType:{name:"string"},description:""},state:{required:!1,tsType:{name:"union",raw:'"error" | "loading"',elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"loading"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"list" | "card"',elements:[{name:"literal",value:'"list"'},{name:"literal",value:'"card"'}]},description:`Velg hvordan filene skal vises for brukeren

@default "list"`},file:{required:!1,tsType:{name:"File"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:"Gjør det mulig å vise en knapp for fjerning av filene ved filopplasting"}}};const{fn:v}=__STORYBOOK_MODULE_TEST__,w={title:"Komponenter/File",component:f,subcomponents:{Button:b},args:{fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:O,variant:"list",onRemove:v()}},a={name:"File"},l={name:"File vist som kort",args:{variant:"card"}},m={name:"Fil med slettefunksjon"},d={name:"Liste med filer",args:{onRemove:void 0},decorators:(r,n)=>e.jsx(F,{direction:n.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(s=>e.jsx(r,{...n.args,...a.args},s))})},o={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:r=>e.jsxs(F,{direction:"column",gap:"xs",children:[e.jsx(r,{}),e.jsx("p",{style:{fontSize:"0.75em",opacity:.5},children:"Oppdateres automatisk hvert 4. sekund"})]}),render:r=>{const[n,s]=u.useState(r.state==="loading"||!0);return u.useEffect(()=>{setTimeout(()=>s(!n),4e3,"mock"),clearTimeout("mock")},[n]),e.jsx(f,{...a.args,...r,state:n?"loading":void 0,onRemove:n?void 0:v()})}},c={name:"Fil med feil",args:{state:"error"}},p={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:r=>e.jsxs(F,{direction:"column",gap:"xs",children:[e.jsx(r,{}),e.jsx("p",{style:{fontSize:"0.75em",opacity:.5},children:"Oppdateres automatisk hvert 2. sekund"})]}),render:r=>{const n=[1,2,3,4,5],[s,t]=u.useState(0);return u.useEffect(()=>{setTimeout(()=>{s>=n.length?t(0):t(s+1)},2e3,"mock"),clearTimeout("mock")},[s]),e.jsx(e.Fragment,{children:n.map(i=>e.jsx(f,{...o.args,...r,state:s<i?"loading":void 0,onRemove:s<i?void 0:v()},i))})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "File vist som kort",
  args: {
    variant: "card"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Fil med slettefunksjon"
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Liste med filer",
  args: {
    onRemove: undefined
  },
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Fil med feil",
  args: {
    state: "error"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const $=["FileStory","FileCard","FileDelete","FileList","FileLoading","FileError","MultifileLoading"],J=Object.freeze(Object.defineProperty({__proto__:null,FileCard:l,FileDelete:m,FileError:c,FileList:d,FileLoading:o,FileStory:a,MultifileLoading:p,__namedExportsOrder:$,default:w},Symbol.toStringTag,{value:"Module"}));export{f as F,J as a,w as m};
