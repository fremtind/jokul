import{j as e,r as c}from"./iframe-B6x1XYmx.js";import{c as x}from"./cow-CdXr5BwN.js";import{F as u}from"./File-DsH5kKrC.js";import{B as S}from"./Button-JTxCzsQW.js";import{F as g}from"./Flex-CRAVfXSQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Link-sa1lklGq.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-D8UXYDjU.js";import"./Icon-D4K1M1lv.js";import"./SupportLabel-BF4RN0IW.js";import"./SuccessIcon-D7lf9DYS.js";import"./WarningIcon-C94l5-IQ.js";import"./usePreviousValue-DPrPvbnX.js";import"./Loader-BegR2D8p.js";import"./useDelayedRender-BwT8R6l7.js";import"./SlotComponent-fEI8cWwl.js";import"./mergeRefs-ypQMJXlL.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,K={title:"Komponenter/File",component:u,subcomponents:{Button:S},args:{fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:x,variant:"list",onRemove:f()}},s={name:"File"},a={name:"File vist som kort",args:{variant:"card"}},i={name:"Fil med slettefunksjon"},l={name:"Liste med filer",args:{onRemove:void 0},decorators:(r,o)=>e.jsx(g,{direction:o.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(n=>e.jsx(r,{...o.args,...s.args},n))})},t={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:r=>e.jsxs(g,{direction:"column",gap:"xs",children:[e.jsx(r,{}),e.jsx("p",{style:{fontSize:"0.75em",opacity:.5},children:"Oppdateres automatisk hvert 4. sekund"})]}),render:r=>{const[o,n]=c.useState(r.state==="loading"||!0);return c.useEffect(()=>{setTimeout(()=>n(!o),4e3,"mock"),clearTimeout("mock")},[o]),e.jsx(u,{...s.args,...r,state:o?"loading":void 0,onRemove:o?void 0:f()})}},d={name:"Fil med feil",args:{state:"error"}},m={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:r=>e.jsxs(g,{direction:"column",gap:"xs",children:[e.jsx(r,{}),e.jsx("p",{style:{fontSize:"0.75em",opacity:.5},children:"Oppdateres automatisk hvert 2. sekund"})]}),render:r=>{const o=[1,2,3,4,5],[n,F]=c.useState(0);return c.useEffect(()=>{setTimeout(()=>{n>=o.length?F(0):F(n+1)},2e3,"mock"),clearTimeout("mock")},[n]),e.jsx(e.Fragment,{children:o.map(p=>e.jsx(u,{...t.args,...r,state:n<p?"loading":void 0,onRemove:n<p?void 0:f()},p))})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "File vist som kort",
  args: {
    variant: "card"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Fil med slettefunksjon"
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Liste med filer",
  args: {
    onRemove: undefined
  },
  decorators: (Story, story) => <Flex direction={story.args.variant === "list" ? "column" : "row"} gap="xs m">
            {Array("Fil 1", "Fil 2").map(i => <Story key={i} {...story.args} {...FileStory.args} />)}
        </Flex>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Fil med feil",
  args: {
    state: "error"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const N=["FileStory","FileCard","FileDelete","FileList","FileLoading","FileError","MultifileLoading"];export{a as FileCard,i as FileDelete,d as FileError,l as FileList,t as FileLoading,s as FileStory,m as MultifileLoading,N as __namedExportsOrder,K as default};
