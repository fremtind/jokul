import{j as e}from"./iframe-B3OoojLb.js";import{F as t}from"./Flex-C0nz0AJh.js";import{E as d,a}from"./ExpandablePanel-DY_PcDuV.js";import{E as s}from"./Expander-JD3qcN7p.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DEhaHAnK.js";import"./mergeRefs-n7efZdOB.js";import"./useAnimatedHeightBetween-CjAfT7wo.js";import"./tokens-BiWAXAgN.js";import"./useBrowserPreferences-nEgbk1jd.js";import"./usePreviousValue-CgeQ0Twq.js";import"./ChevronDownIcon-BDsQ_uI-.js";import"./Icon-elbMVew7.js";import"./ChevronUpIcon-Df11IbpT.js";const V={title:"Komponenter/ExpandablePanel",component:a,subcomponents:{Expander:s,ExpandablePanelContent:d},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx(n,{})})],argTypes:{variant:{control:"radio",options:["fill","stroke"]}}},l={args:{variant:"fill"},render:n=>e.jsx(t,{direction:"column",gap:"xs",children:[...Array(3)].map((o,i)=>e.jsxs(a,{...n,children:[e.jsx(a.Header,{children:"Klikk på meg for å åpne!"}),e.jsx(a.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},i))})},r={args:{variant:"stroke"},render:n=>e.jsx(e.Fragment,{children:[...Array(3)].map((o,i)=>e.jsxs(a,{...n,children:[e.jsx(a.Header,{children:"Klikk på meg for å åpne!"}),e.jsx(a.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},i))})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "fill"
  },
  render: args => <Flex direction="column" gap="xs">
            {[...Array(3)].map((_, index) => <ExpandablePanel key={index} {...args}>
                    <ExpandablePanel.Header>
                        Klikk på meg for å åpne!
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>)}
        </Flex>
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "stroke"
  },
  render: args => <>
            {[...Array(3)].map((_, index) => <ExpandablePanel key={index} {...args}>
                    <ExpandablePanel.Header>
                        Klikk på meg for å åpne!
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>)}
        </>
}`,...r.parameters?.docs?.source},description:{story:"Stroke varianten skal ikke ha mellomrom mellom panelene.",...r.parameters?.docs?.description}}};const C=["ExpandablePanelFilled","ExpandablePanelStroke"];export{l as ExpandablePanelFilled,r as ExpandablePanelStroke,C as __namedExportsOrder,V as default};
