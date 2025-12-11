import{j as e}from"./iframe-Bgbk8A8w.js";import{F as l}from"./File-DgMzzxqj.js";import{c as s}from"./cow-CdXr5BwN.js";import{B as a}from"./Button-Cz7PjLgP.js";import{F as h}from"./Flex-CTeDgElK.js";import{S as d,a as m,b as t,c as r}from"./SkeletonTable-BTtAbXna.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Link-C3qsOy_z.js";import"./formatBytes-B7RSIuaZ.js";import"./formatNumber-C5i6XT6A.js";import"./TrashCanIcon-C1629Hk8.js";import"./Icon-DESNu5Cp.js";import"./SupportLabel-BDO1ZkW6.js";import"./WarningIcon-BXDRy6cv.js";import"./usePreviousValue-BC70uycc.js";import"./Loader-Dpw_LgPn.js";import"./useDelayedRender-Cq7ZvIjP.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-Dk98sxiQ.js";import"./mergeRefs-BwahFmA8.js";const I={title:"Komponenter/File/File",component:l,subcomponents:{Button:a},argTypes:{state:{control:"select",options:[void 0,"error","loading"]},file:{control:!1}},args:{fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:s,variant:"list"}},i={name:"File",args:{onRemove:()=>""},render:n=>e.jsx(l,{...n,onRemove:()=>"e"})},o={name:"Eksempel:: File List",render:n=>e.jsxs(h,{direction:"column",gap:"s",children:[e.jsxs("div",{style:{background:"var(--jkl-color-background-container-high)",maxHeight:"80%",width:"100%",padding:"1lh 3ch",display:"flex",flexDirection:"column",gap:"2ch",boxSizing:"border-box",overflow:"hidden"},children:[e.jsx("h2",{className:"jkl-heading-2",children:"Oppsummering"}),e.jsxs(d,{children:[e.jsxs(m,{children:[e.jsx(t,{height:20,width:60}),e.jsx(t,{height:20,width:240}),e.jsx(t,{height:20,width:90})]}),e.jsxs(r,{children:[e.jsx(t,{height:20,width:60}),e.jsx(t,{height:20,width:240}),e.jsx(t,{height:20,width:90})]}),e.jsxs(r,{children:[e.jsx(t,{height:20,width:60}),e.jsx(t,{height:20,width:240}),e.jsx(t,{height:20,width:90})]}),e.jsxs(r,{children:[e.jsx(t,{height:20,width:60}),e.jsx(t,{height:20,width:240}),e.jsx(t,{height:20,width:90})]})]})]}),e.jsxs("div",{style:{display:"grid",gap:"12px",gridTemplateColumns:n.variant==="list"?"1fr":"repeat(2, 1fr)"},children:[e.jsx(l,{...n,fileName:"Dekningsoversikt (IPID).pdf",fileType:"PDF"}),e.jsx(l,{...n,fileName:"Avtaledokument.pdf",fileType:"PDF"})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "File",
  args: {
    onRemove: () => ""
  },
  render: args => <File {...args} onRemove={() => "e"} />
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const L=["FileStory","FileListStory"];export{o as FileListStory,i as FileStory,L as __namedExportsOrder,I as default};
