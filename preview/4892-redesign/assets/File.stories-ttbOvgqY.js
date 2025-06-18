import{j as e}from"./jsx-runtime-BbjHj44Y.js";import"./index-C6mWTJJr.js";import{F as a}from"./File-BfSD4En0.js";import{B as k}from"./Button-V_7JZhcr.js";import{F as i}from"./Flex-Bxl3x-bI.js";import{S as o,a as s,b as u,c as S,d as n,e as h}from"./SkeletonTable-CjvOIr1d.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./Link-BlbHBxXw.js";import"./formatNumber-DzIwhxNg.js";import"./TrashCanIcon-B9RdHG1z.js";import"./Icon-CZwjvlw8.js";import"./SupportLabel-uWZp44mj.js";import"./ErrorIcon-B0wgdey8.js";import"./WarningIcon-B6VvEiHT.js";import"./usePreviousValue-ByfnePFg.js";import"./Loader-BdwWmQR7.js";import"./useDelayedRender-B8sMdCvv.js";import"./tokens-DyQL8Q6a.js";const w=""+new URL("cow-5LKUs9v1.jpg",import.meta.url).href,U={title:"Komponenter/File/File",component:a,subcomponents:{Button:k},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{state:{control:"select",options:[void 0,"error","loading"]},file:{control:!1}},args:{fileName:"Skotsk høylandsfe.png",fileType:"image/png",fileSize:349e4,path:w,variant:"list"}},l={name:"File",args:{onRemove:()=>""},render:t=>e.jsx(a,{...t,onRemove:()=>"e"})},r={name:"Eksempel:: File List",render:t=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(400px, 1fr))",gridTemplateRows:"1lh auto",width:"100dvw",height:"95dvh",maxWidth:"90ch",marginInline:"auto",padding:"2ch",gap:"2lh 40px",boxSizing:"border-box",overflow:"auto"},children:[e.jsx("h1",{className:"jkl-heading-1",style:{gridColumn:"1 / -1"},children:"Søknad om Reiseforsikring"}),e.jsxs(i,{gap:32,direction:"column",style:{background:"var(--jkl-color-background-container-high)",height:"100%",width:"100%",padding:"1lh 3ch",boxSizing:"border-box"},children:[e.jsx("h2",{className:"jkl-heading-2",children:"Steg 2 av 3"}),e.jsxs(i,{style:{flex:1},gap:32,direction:"column",children:[e.jsx(o,{}),e.jsx(o,{}),e.jsx(o,{}),e.jsx(o,{})]}),e.jsxs(i,{gap:12,children:[e.jsx(s,{width:120}),e.jsx(s,{width:120})]})]}),e.jsxs(i,{direction:"column",gap:16,children:[e.jsxs("div",{style:{background:"var(--jkl-color-background-container-high)",maxHeight:"80%",width:"100%",padding:"1lh 3ch",display:"flex",flexDirection:"column",gap:"2ch",boxSizing:"border-box",overflow:"hidden"},children:[e.jsx("h2",{className:"jkl-heading-2",children:"Oppsummering"}),e.jsxs(u,{children:[e.jsxs(S,{children:[e.jsx(n,{height:20,width:60}),e.jsx(n,{height:20,width:240}),e.jsx(n,{height:20,width:90})]}),e.jsxs(h,{children:[e.jsx(n,{height:20,width:60}),e.jsx(n,{height:20,width:240}),e.jsx(n,{height:20,width:90})]}),e.jsxs(h,{children:[e.jsx(n,{height:20,width:60}),e.jsx(n,{height:20,width:240}),e.jsx(n,{height:20,width:90})]}),e.jsxs(h,{children:[e.jsx(n,{height:20,width:60}),e.jsx(n,{height:20,width:240}),e.jsx(n,{height:20,width:90})]})]})]}),e.jsxs("div",{style:{display:"grid",gap:"12px",gridTemplateColumns:t.variant==="list"?"1fr":"repeat(2, 1fr)"},children:[e.jsx(a,{...t}),e.jsx(a,{...t})]})]})]})};var d,g,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "File",
  args: {
    onRemove: () => ""
  },
  render: args => <File {...args} onRemove={() => "e"} />
}`,...(m=(g=l.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,c,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Eksempel:: File List",
  render: args => {
    return <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gridTemplateRows: "1lh auto",
      width: "100dvw",
      height: "95dvh",
      maxWidth: "90ch",
      marginInline: "auto",
      padding: "2ch",
      gap: "2lh 40px",
      boxSizing: "border-box",
      overflow: "auto"
    }}>
                <h1 className={"jkl-heading-1"} style={{
        gridColumn: "1 / -1"
      }}>
                    Søknad om Reiseforsikring
                </h1>
                <Flex gap={32} direction={"column"} style={{
        background: "var(--jkl-color-background-container-high)",
        height: "100%",
        width: "100%",
        padding: "1lh 3ch",
        boxSizing: "border-box"
      }}>
                    <h2 className={"jkl-heading-2"}>Steg 2 av 3</h2>
                    <Flex style={{
          flex: 1
        }} gap={32} direction={"column"}>
                        <SkeletonInput />
                        <SkeletonInput />
                        <SkeletonInput />
                        <SkeletonInput />
                    </Flex>
                    <Flex gap={12}>
                        <SkeletonButton width={120} />
                        <SkeletonButton width={120} />
                    </Flex>
                </Flex>
                <Flex direction={"column"} gap={16}>
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
                        <File {...args} />
                        <File {...args} />
                    </div>
                </Flex>
            </div>;
  }
}`,...(x=(c=r.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};const W=["FileStory","FileListStory"];export{r as FileListStory,l as FileStory,W as __namedExportsOrder,U as default};
