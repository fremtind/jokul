import{j as e,r as c}from"./iframe-CAd8X6u7.js";import{c as S}from"./cow-CdXr5BwN.js";import{F as g}from"./File-DHkwSh-h.js";import{B as v}from"./Button-DFD0c5zq.js";import{F as f}from"./Flex-DpTVzLCe.js";import{T as k}from"./Text-BlKej4ob.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Link-CHrn5eqX.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-C-2oUej3.js";import"./Icon-DghHD_Ay.js";import"./SupportLabel-DkBGrrbk.js";import"./SuccessIcon-DAPzjHzS.js";import"./WarningIcon-DU8kuYHn.js";import"./usePreviousValue-DftLsDkg.js";import"./Loader-CrOaa7V8.js";import"./useDelayedRender-BkHxqgBQ.js";import"./SlotComponent-BREKD-7o.js";import"./mergeRefs-_7lZvp9j.js";const y=""+new URL("metamorphosis-31-mtN7L.pdf",import.meta.url).href,{fn:F}=__STORYBOOK_MODULE_TEST__,G={title:"Komponenter/File",component:g,subcomponents:{Button:v},args:{hideThumbnail:!1,fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:S,variant:"list",onRemove:void 0},argTypes:{variant:{control:{type:"inline-radio"}},state:{control:{type:"inline-radio"},options:[void 0,"loading","error"]}}},a={name:"File"},n={name:"Dokument",args:{fileName:"kafka.pdf",fileSize:427e3,fileType:".pdf",path:y}},i={name:"File vist som kort",args:{variant:"card"}},l={name:"Fil med slettefunksjon",args:{onRemove:F()}},m={name:"Liste med filer",decorators:(r,o)=>e.jsx(f,{direction:o.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(s=>e.jsx(r,{...o.args,...a.args},s))})},t={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:r=>e.jsxs(f,{direction:"column",gap:"xs",children:[e.jsx(r,{}),e.jsx(k,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 4. sekund"})]}),render:r=>{const[o,s]=c.useState(r.state==="loading"||!0);return c.useEffect(()=>{setTimeout(()=>s(!o),4e3,"mock"),clearTimeout("mock")},[o]),e.jsx(g,{...a.args,...r,state:o?"loading":void 0,onRemove:o?void 0:F()})}},d={name:"Fil med feil",args:{state:"error"}},p={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:r=>e.jsxs(f,{direction:"column",gap:"xs",style:{minWidth:"min(24rem, 90vw)"},children:[e.jsx(r,{}),e.jsx(k,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 2. sekund"})]}),render:r=>{const o=[1,2,3,4,5],[s,x]=c.useState(0);return c.useEffect(()=>{setTimeout(()=>{s>=o.length?x(0):x(s+1)},2e3,"mock"),clearTimeout("mock")},[s]),e.jsx(e.Fragment,{children:o.map(u=>e.jsx(g,{...t.args,...r,state:s<u?"loading":void 0,onRemove:s<u?void 0:F()},u))})}},H=["FileStory","Document","FileCard","FileDelete","FileList","FileLoading","FileError","MultifileLoading"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Dokument",
  args: {
    fileName: "kafka.pdf",
    fileSize: 427_000,
    fileType: ".pdf",
    path: book.default
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "File vist som kort",
  args: {
    variant: "card"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Fil med slettefunksjon",
  args: {
    onRemove: fn()
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Liste med filer",
  decorators: (Story, story) => <Flex direction={story.args.variant === "list" ? "column" : "row"} gap="xs m">
            {Array("Fil 1", "Fil 2").map(i => <Story key={i} {...story.args} {...FileStory.args} />)}
        </Flex>
}`,...m.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Fil med feil",
  args: {
    state: "error"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};export{n as Document,i as FileCard,l as FileDelete,d as FileError,m as FileList,t as FileLoading,a as FileStory,p as MultifileLoading,H as __namedExportsOrder,G as default};
