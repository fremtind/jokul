import{R as e}from"./index-siqcju79.js";import{F as r}from"./File-Cfhx7eqJ.js";import{c as a}from"./cow-CdXr5BwN.js";import{B as m}from"./Button-B5NjJfvA.js";import{F as h}from"./Flex-vGWG2Vze.js";import{S as d,a as s,b as t,c as o}from"./SkeletonTable-DnwXskhj.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./Link-D5SS8GHM.js";import"./formatBytes-CR-O9sah.js";import"./TrashCanIcon-KwhXPglF.js";import"./Icon-Crh-gXYv.js";import"./SupportLabel-Bpu1mYaT.js";import"./ErrorIcon-DGsYbkdO.js";import"./WarningIcon-C_fFKyVL.js";import"./usePreviousValue-f0kyfTHz.js";import"./Loader-Dq-CBRAZ.js";import"./useDelayedRender-CQprwS1c.js";import"./SlotComponent-CWN6EcE2.js";const H={title:"Komponenter/File/File",component:r,subcomponents:{Button:m},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{state:{control:"select",options:[void 0,"error","loading"]},file:{control:!1}},args:{fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:a,variant:"list"}},l={name:"File",args:{onRemove:()=>""},render:n=>e.createElement(r,{...n,onRemove:()=>"e"})},i={name:"Eksempel:: File List",render:n=>e.createElement(h,{direction:"column",gap:"s"},e.createElement("div",{style:{background:"var(--jkl-color-background-container-high)",maxHeight:"80%",width:"100%",padding:"1lh 3ch",display:"flex",flexDirection:"column",gap:"2ch",boxSizing:"border-box",overflow:"hidden"}},e.createElement("h2",{className:"jkl-heading-2"},"Oppsummering"),e.createElement(d,null,e.createElement(s,null,e.createElement(t,{height:20,width:60}),e.createElement(t,{height:20,width:240}),e.createElement(t,{height:20,width:90})),e.createElement(o,null,e.createElement(t,{height:20,width:60}),e.createElement(t,{height:20,width:240}),e.createElement(t,{height:20,width:90})),e.createElement(o,null,e.createElement(t,{height:20,width:60}),e.createElement(t,{height:20,width:240}),e.createElement(t,{height:20,width:90})),e.createElement(o,null,e.createElement(t,{height:20,width:60}),e.createElement(t,{height:20,width:240}),e.createElement(t,{height:20,width:90})))),e.createElement("div",{style:{display:"grid",gap:"12px",gridTemplateColumns:n.variant==="list"?"1fr":"repeat(2, 1fr)"}},e.createElement(r,{...n,fileName:"Dekningsoversikt (IPID).pdf",fileType:"PDF"}),e.createElement(r,{...n,fileName:"Avtaledokument.pdf",fileType:"PDF"})))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "File",
  args: {
    onRemove: () => ""
  },
  render: args => <File {...args} onRemove={() => "e"} />
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Eksempel:: File List",
  render: args => {
    return <Flex direction={"column"} gap="s">
                <div style={{
        background: "var(--jkl-color-background-container-high)",
        maxHeight: "80%",
        width: "100%",
        padding: "1lh 3ch",
        display: "flex",
        flexDirection: "column",
        gap: "2ch",
        boxSizing: "border-box",
        overflow: "hidden"
      }}>
                    <h2 className={"jkl-heading-2"}>Oppsummering</h2>
                    <SkeletonTable>
                        <SkeletonTableHeader>
                            <SkeletonElement height={20} width={60} />
                            <SkeletonElement height={20} width={240} />
                            <SkeletonElement height={20} width={90} />
                        </SkeletonTableHeader>
                        <SkeletonTableRow>
                            <SkeletonElement height={20} width={60} />
                            <SkeletonElement height={20} width={240} />
                            <SkeletonElement height={20} width={90} />
                        </SkeletonTableRow>
                        <SkeletonTableRow>
                            <SkeletonElement height={20} width={60} />
                            <SkeletonElement height={20} width={240} />
                            <SkeletonElement height={20} width={90} />
                        </SkeletonTableRow>
                        <SkeletonTableRow>
                            <SkeletonElement height={20} width={60} />
                            <SkeletonElement height={20} width={240} />
                            <SkeletonElement height={20} width={90} />
                        </SkeletonTableRow>
                    </SkeletonTable>
                </div>

                <div style={{
        display: "grid",
        gap: "12px",
        gridTemplateColumns: args.variant === "list" ? "1fr" : "repeat(2, 1fr)"
      }}>
                    <File {...args} fileName={"Dekningsoversikt (IPID).pdf"} fileType={"PDF"} />
                    <File {...args} fileName={"Avtaledokument.pdf"} fileType={"PDF"} />
                </div>
            </Flex>;
  }
}`,...i.parameters?.docs?.source}}};const j=["FileStory","FileListStory"];export{i as FileListStory,l as FileStory,j as __namedExportsOrder,H as default};
