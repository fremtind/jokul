import{j as e}from"./jsx-runtime-BbjHj44Y.js";import{F as m}from"./Flex-Bxl3x-bI.js";import{E as a,a as t,b as c}from"./_index-Cvs0aHuv.js";import{G as f}from"./GreenCheckIcon-CoExRlSD.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tokens-DyQL8Q6a.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-BilM7jlK.js";import"./usePreviousValue-ByfnePFg.js";import"./ChevronDownIcon-Ben4lmA9.js";import"./Icon-CZwjvlw8.js";const S={title:"Komponenter/ExpandablePanel",component:a,subcomponents:{Expander:t,ExpandablePanelContent:c},parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["stroke","fill"]}}},n={name:"ExpandablePanel",args:{variant:"fill",icon:!0,flipDirection:!1},render:({icon:l,flipDirection:d,...p})=>e.jsx(m,{style:{width:"100%"},direction:"column",gap:4,children:[...Array(3)].map((x,s)=>e.jsxs(a,{...p,children:[e.jsx(t,{icon:l?e.jsx(f,{}):void 0,expandDirection:d?"up":void 0,children:"Når er det vi faktisk er åpne?"}),e.jsx(a.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},s))})};var r,i,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "ExpandablePanel",
  args: {
    variant: "fill",
    icon: true,
    flipDirection: false
  },
  render: ({
    icon,
    flipDirection,
    ...props
  }) => <Flex style={{
    width: "100%"
  }} direction="column" gap={4}>
            {[...Array(3)].map((_, index) => <ExpandablePanel key={index} {...props}>
                    <Expander icon={icon ? <GreenCheckIcon /> : undefined} expandDirection={flipDirection ? "up" : undefined}>
                        Når er det vi faktisk er åpne?
                    </Expander>
                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>)}
        </Flex>
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const F=["ExpandablePanelStory"];export{n as ExpandablePanelStory,F as __namedExportsOrder,S as default};
