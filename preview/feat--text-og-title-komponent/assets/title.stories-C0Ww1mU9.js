import{j as e}from"./iframe-D4OqJuqI.js";import{F as l}from"./Flex-DUVlCVxA.js";import{T as t}from"./_index-CvrMKcdg.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B_y2UWaq.js";import"./mergeRefs-CP4UnLZn.js";const x={title:"Beta/Title",component:t,argTypes:{size:{control:"select",options:[1,2,3,4,5,6,"body"],table:{defaultValue:{summary:"2"}},description:"Optionally use the size prop to override the visual size."},as:{control:"select",options:["h1","h2","h3","h4","h5","h6"],table:{defaultValue:{summary:"h2"}},description:"By default, Title renders as an h2. Change this to keep a semantic and accessible heading hierarchy."},children:{control:"text",description:"React.ReactNode"},text:{control:"text",description:"String-only title for editorial word-break handling."}},args:{children:"I am Title",text:"",as:"h2",size:1},tags:["autodocs","grouping content"]},s={},r={args:{size:2,children:"Title with size"},render:({children:i,...o})=>e.jsxs(l,{layout:"1",gap:"s",children:[e.jsxs(t,{size:"1",children:[i," 1"]}),e.jsxs(t,{...o,children:[i," ",o.size]}),e.jsxs(t,{size:"3",children:[i," 3"]}),e.jsxs(t,{size:"4",children:[i," 4"]}),e.jsxs(t,{size:"5",children:[i," 5"]}),e.jsxs(t,{size:"body",children:[i," body"]}),e.jsxs(t,{size:"6",children:[i," 6"]})]})},n={decorators:[i=>e.jsxs("div",{style:{border:"1px dashed rgba(0,0,0,.3)",borderRadius:6,overflow:"auto",padding:20,position:"relative",resize:"horizontal",maxWidth:1e3},children:[e.jsx("span",{style:{bottom:0,position:"absolute",right:20},children:"Resize to see the title breakpoints →"}),e.jsx(i,{})]})],render:()=>e.jsxs(l,{direction:"column",children:[e.jsxs("div",{children:[e.jsx(t,{size:"4",text:"Unngå linjeskift i tall som 1 000 000."}),e.jsxs("p",{children:["☝️"," Dette skjer fordi Title-elementet automatisk formaterer tall med &nbsp;"]})]}),e.jsxs("div",{children:[e.jsx(t,{size:"4",text:"Unngå linjeskift i åpne sammensatte__ord."}),e.jsxs("p",{children:["☝️",' Dette skjer fordi Title-elementet konverterer "__" til &nbsp; i teksten "compound__words"']})]}),e.jsxs("div",{children:[e.jsx(t,{size:"4",text:"Legg til linjeskift i ord som tverr--faglig."}),e.jsxs("p",{children:["☝️",' Dette skjer fordi Title-elementet konverterer "--" til &shy; i teksten "inter--disciplinary"']})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 2,
    children: "Title with size"
  },
  render: ({
    children,
    ...args
  }) => <Flex layout="1" gap="s">
            <BETA_Title size="1">{children} 1</BETA_Title>
            <BETA_Title {...args}>
                {children} {args.size}
            </BETA_Title>
            <BETA_Title size="3">{children} 3</BETA_Title>
            <BETA_Title size="4">{children} 4</BETA_Title>
            <BETA_Title size="5">{children} 5</BETA_Title>
            <BETA_Title size="body">{children} body</BETA_Title>
            <BETA_Title size="6">{children} 6</BETA_Title>
        </Flex>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  decorators: [(StoryComponent: StoryFn) => <div style={{
    border: "1px dashed rgba(0,0,0,.3)",
    borderRadius: 6,
    overflow: "auto",
    padding: 20,
    position: "relative",
    resize: "horizontal",
    maxWidth: 1000
  }}>
                <span style={{
      bottom: 0,
      position: "absolute",
      right: 20
    }}>
                    Resize to see the title breakpoints &rarr;
                </span>
                <StoryComponent />
            </div>],
  render: () => <Flex direction="column">
            <div>
                <BETA_Title size="4" text="Unngå linjeskift i tall som 1 000 000." />
                <p>
                    {"\\u{261D}\\u{FE0F}"} Dette skjer fordi Title-elementet
                    automatisk formaterer tall med &amp;nbsp;
                </p>
            </div>
            <div>
                <BETA_Title size="4" text="Unngå linjeskift i åpne sammensatte__ord." />
                <p>
                    {"\\u{261D}\\u{FE0F}"} Dette skjer fordi Title-elementet
                    konverterer "__" til &amp;nbsp; i teksten "compound__words"
                </p>
            </div>
            <div>
                <BETA_Title size="4" text="Legg til linjeskift i ord som tverr--faglig." />
                <p>
                    {"\\u{261D}\\u{FE0F}"} Dette skjer fordi Title-elementet
                    konverterer "--" til &amp;shy; i teksten
                    "inter--disciplinary"
                </p>
            </div>
        </Flex>
}`,...n.parameters?.docs?.source}}};const g=["Default","Sizes","EditorialWordBreaks"];export{s as Default,n as EditorialWordBreaks,r as Sizes,g as __namedExportsOrder,x as default};
