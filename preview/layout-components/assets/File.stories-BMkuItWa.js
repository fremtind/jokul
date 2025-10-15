import{j as e}from"./jsx-runtime-BbjHj44Y.js";import"./index-C6mWTJJr.js";import{F as l}from"./File-BeoUbd8r.js";import{B as g}from"./Button-V_7JZhcr.js";import{F as c}from"./Flex-Bxl3x-bI.js";import{S as k,a as x,b as t,c as r}from"./SkeletonTable-0-3wqZIS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./Link-BlbHBxXw.js";import"./formatNumber-DzIwhxNg.js";import"./TrashCanIcon-B9RdHG1z.js";import"./Icon-CZwjvlw8.js";import"./SupportLabel-uWZp44mj.js";import"./ErrorIcon-B0wgdey8.js";import"./WarningIcon-B6VvEiHT.js";import"./usePreviousValue-ByfnePFg.js";import"./Loader-BdwWmQR7.js";import"./useDelayedRender-B8sMdCvv.js";import"./tokens-DyQL8Q6a.js";const w=""+new URL("cow-5LKUs9v1.jpg",import.meta.url).href,A={title:"Komponenter/File/File",component:l,subcomponents:{Button:g},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{state:{control:"select",options:[void 0,"error","loading"]},file:{control:!1}},args:{fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:w,variant:"list"}},i={name:"File",args:{onRemove:()=>""},render:n=>e.jsx(l,{...n,onRemove:()=>"e"})},o={name:"Eksempel:: File List",render:n=>e.jsxs(c,{direction:"column",gap:16,children:[e.jsxs("div",{style:{background:"var(--jkl-color-background-container-high)",maxHeight:"80%",width:"100%",padding:"1lh 3ch",display:"flex",flexDirection:"column",gap:"2ch",boxSizing:"border-box",overflow:"hidden"},children:[e.jsx("h2",{className:"jkl-heading-2",children:"Oppsummering"}),e.jsxs(k,{children:[e.jsxs(x,{children:[e.jsx(t,{height:20,width:60}),e.jsx(t,{height:20,width:240}),e.jsx(t,{height:20,width:90})]}),e.jsxs(r,{children:[e.jsx(t,{height:20,width:60}),e.jsx(t,{height:20,width:240}),e.jsx(t,{height:20,width:90})]}),e.jsxs(r,{children:[e.jsx(t,{height:20,width:60}),e.jsx(t,{height:20,width:240}),e.jsx(t,{height:20,width:90})]}),e.jsxs(r,{children:[e.jsx(t,{height:20,width:60}),e.jsx(t,{height:20,width:240}),e.jsx(t,{height:20,width:90})]})]})]}),e.jsxs("div",{style:{display:"grid",gap:"12px",gridTemplateColumns:n.variant==="list"?"1fr":"repeat(2, 1fr)"},children:[e.jsx(l,{...n,fileName:"Dekningsoversikt (IPID).pdf",fileType:"PDF"}),e.jsx(l,{...n,fileName:"Avtaledokument.pdf",fileType:"PDF"})]})]})};var a,s,h;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "File",
  args: {
    onRemove: () => ""
  },
  render: args => <File {...args} onRemove={() => "e"} />
}`,...(h=(s=i.parameters)==null?void 0:s.docs)==null?void 0:h.source}}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Eksempel:: File List",
  render: args => {
    return <Flex direction={"column"} gap={16}>
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const B=["FileStory","FileListStory"];export{o as FileListStory,i as FileStory,B as __namedExportsOrder,A as default};
