import{R as e}from"./index-siqcju79.js";import{F as p}from"./Flex-CLtnP1gB.js";import{E as d,a}from"./_index-xybx_TMg.js";import{E as r}from"./Expander-Cpo7VSwA.js";import{G as s}from"./GreenCheckIcon-JBHvqH5q.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CvksrKef.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";import"./ChevronDownIcon-fl1APhkk.js";import"./Icon-mINJCSxV.js";import"./ChevronUpIcon-CVpRESJ9.js";const D={title:"Komponenter/ExpandablePanel",component:a,subcomponents:{Expander:r,ExpandablePanelContent:d},parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["stroke","fill"]}}},n={name:"ExpandablePanel",args:{variant:"fill",icon:!0,flipDirection:!1},render:({icon:t,flipDirection:i,...o})=>e.createElement(p,{style:{width:"100%"},direction:"column",gap:4},[...Array(3)].map((m,l)=>e.createElement(a,{key:l,...o},e.createElement(r,{icon:t?e.createElement(s,null):void 0,expandDirection:i?"up":void 0},"Når er det vi faktisk er åpne?"),e.createElement(a.Content,null,"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"))))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const S=["ExpandablePanelStory"];export{n as ExpandablePanelStory,S as __namedExportsOrder,D as default};
