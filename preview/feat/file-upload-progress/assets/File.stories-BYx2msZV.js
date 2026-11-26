import{j as e,r as u}from"./iframe-i0kFdft2.js";import{c as S}from"./cow-CdXr5BwN.js";import{F as f}from"./File-BUtqLSMA.js";import{B as v}from"./Button-rpdpVNXw.js";import{F}from"./Flex-CtO2pZsN.js";import{T as y}from"./Text-CeSWzBYq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Link-BVCMiEic.js";import"./formatNumber-Davy0grG.js";import"./unicode-DWvs0Pen.js";import"./TrashCanIcon-Bd-8gNmj.js";import"./Icon-DiZEyqGh.js";import"./SupportLabel-Qtx6sRmp.js";import"./SuccessIcon-DT1bm3Mg.js";import"./WarningIcon-BtXd7VGB.js";import"./usePreviousValue-DjzF1Xve.js";import"./Loader-BQojbPsJ.js";import"./useDelayedRender-BCKOXC_t.js";import"./SlotComponent-BRAre0Bt.js";import"./mergeRefs-_7lZvp9j.js";const T=""+new URL("metamorphosis-31-mtN7L.pdf",import.meta.url).href,{fn:x}=__STORYBOOK_MODULE_TEST__,G={title:"Komponenter/File",component:f,subcomponents:{Button:v},args:{hideThumbnail:!1,fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:S,variant:"list",onRemove:void 0},argTypes:{variant:{control:{type:"inline-radio"}},state:{control:{type:"inline-radio"},options:[void 0,"loading","error"]}}},a={name:"File"},t={name:"Dokument",args:{fileName:"kafka.pdf",fileSize:427e3,fileType:".pdf",path:T}},i={name:"File vist som kort",args:{variant:"card"}},l={name:"Fil med slettefunksjon",args:{onRemove:x()}},m={name:"Liste med filer",decorators:(r,o)=>e.jsx(F,{direction:o.args.variant==="list"?"column":"row",gap:"xs m",children:Array("Fil 1","Fil 2").map(s=>e.jsx(r,{...o.args,...a.args},s))})},n={name:"Filopplasting (én fil)",args:{state:"loading"},decorators:r=>e.jsxs(F,{direction:"column",gap:"xs",children:[e.jsx(r,{}),e.jsx(y,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 4. sekund"})]}),render:r=>{const[o,s]=u.useState(r.state==="loading"||!0);return u.useEffect(()=>{setTimeout(()=>s(!o),4e3,"mock"),clearTimeout("mock")},[o]),e.jsx(f,{...a.args,...r,state:o?"loading":void 0,onRemove:o?void 0:x()})}},d={name:"Filopplasting med fremdrift",args:{state:"loading",uploadProgress:40},argTypes:{uploadProgress:{control:{type:"range",min:0,max:100,step:1}}}},p={name:"Fil med feil",args:{state:"error"}},c={name:"Filopplasting (flere filer)",args:{state:"loading"},decorators:r=>e.jsxs(F,{direction:"column",gap:"xs",style:{minWidth:"min(24rem, 90vw)"},children:[e.jsx(r,{}),e.jsx(y,{size:"xs",subdued:!0,children:"Oppdateres automatisk hvert 2. sekund"})]}),render:r=>{const o=[1,2,3,4,5],[s,k]=u.useState(0);return u.useEffect(()=>{setTimeout(()=>{s>=o.length?k(0):k(s+1)},2e3,"mock"),clearTimeout("mock")},[s]),e.jsx(e.Fragment,{children:o.map(g=>e.jsx(f,{...n.args,...r,state:s<g?"loading":void 0,onRemove:s<g?void 0:x()},g))})}},H=["FileStory","Document","FileCard","FileDelete","FileList","FileLoading","FileUploadProgress","FileError","MultifileLoading"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "File"
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Dokument",
  args: {
    fileName: "kafka.pdf",
    fileSize: 427_000,
    fileType: ".pdf",
    path: book.default
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Filopplasting med fremdrift",
  args: {
    state: "loading",
    uploadProgress: 40
  },
  argTypes: {
    uploadProgress: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Fil med feil",
  args: {
    state: "error"
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};export{t as Document,i as FileCard,l as FileDelete,p as FileError,m as FileList,n as FileLoading,a as FileStory,d as FileUploadProgress,c as MultifileLoading,H as __namedExportsOrder,G as default};
