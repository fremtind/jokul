import{j as e}from"./jsx-runtime-D9p_MChh.js";import"./index-CRL2yuNo.js";import{F as m}from"./Flex-C2kqvdXP.js";import{b as c,a as t,E as a}from"./_index-CtHZqMy5.js";import{G as f}from"./GreenCheckIcon-BgmSIOs8.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./tokens-NmszT_nq.js";import"./useBrowserPreferences-pnXkstjW.js";import"./usePreviousValue-B4HAJZS8.js";import"./ChevronDownIcon-CY7c70Lg.js";import"./Icon-BsB2AusX.js";const S={title:"Komponenter/ExpandablePanel",component:a,subcomponents:{Expander:t,ExpandablePanelContent:c},parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["stroke","fill"]}}},n={name:"ExpandablePanel",args:{variant:"fill",icon:!0,flipDirection:!1},render:({icon:l,flipDirection:d,...p})=>e.jsx(m,{style:{width:"100%"},direction:"column",gap:4,children:[...Array(3)].map((x,s)=>e.jsxs(a,{...p,children:[e.jsx(t,{icon:l?e.jsx(f,{}):void 0,expandDirection:d?"up":void 0,children:"Når er det vi faktisk er åpne?"}),e.jsx(a.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},s))})};var r,i,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
