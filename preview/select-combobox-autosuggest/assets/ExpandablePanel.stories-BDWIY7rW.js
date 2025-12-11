import{R as e}from"./index-siqcju79.js";import{F as d}from"./Flex-DP-fj2ie.js";import{E as s,a as n}from"./_index-QZoTXneK.js";import{E as i}from"./Expander-Cpo7VSwA.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CvksrKef.js";import"./SlotComponent-CWN6EcE2.js";import"./clsx-B-dksMZM.js";import"./useAnimatedHeightBetween-DrSeOltY.js";import"./useBrowserPreferences-B9LcbCiO.js";import"./usePreviousValue-f0kyfTHz.js";import"./ChevronDownIcon-fl1APhkk.js";import"./Icon-mINJCSxV.js";import"./ChevronUpIcon-CVpRESJ9.js";const S={title:"Komponenter/ExpandablePanel",component:n,subcomponents:{Expander:i,ExpandablePanelContent:s},parameters:{layout:"centered"},decorators:[a=>e.createElement("div",{style:{width:"50dvw",padding:"24px"}},e.createElement(a,null))],argTypes:{variant:{control:"radio",options:["fill","stroke"]}},tags:["autodocs"]},t={args:{variant:"fill"},render:a=>e.createElement(d,{style:{width:"100%"},direction:"column",gap:4},[...Array(3)].map((o,l)=>e.createElement(n,{key:l,...a},e.createElement(i,null,"Når er det vi faktisk er åpne?"),e.createElement(n.Content,null,"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"))))},r={args:{variant:"stroke"},render:a=>e.createElement(e.Fragment,null,[...Array(3)].map((o,l)=>e.createElement(n,{key:l,...a},e.createElement(i,null,"Når er det vi faktisk er åpne?"),e.createElement(n.Content,null,"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"))))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "fill"
  },
  render: args => <Flex style={{
    width: "100%"
  }} direction="column" gap={4}>
            {[...Array(3)].map((_, index) => <ExpandablePanel key={index} {...args}>
                    <Expander>Når er det vi faktisk er åpne?</Expander>
                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>)}
        </Flex>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "stroke"
  },
  render: args => <>
            {[...Array(3)].map((_, index) => <ExpandablePanel key={index} {...args}>
                    <Expander>Når er det vi faktisk er åpne?</Expander>
                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>)}
        </>
}`,...r.parameters?.docs?.source},description:{story:"Stroke varianten skal ikke ha mellomrom mellom panelene.",...r.parameters?.docs?.description}}};const V=["ExpandablePanelFilled","ExpandablePanelStroke"];export{t as ExpandablePanelFilled,r as ExpandablePanelStroke,V as __namedExportsOrder,S as default};
