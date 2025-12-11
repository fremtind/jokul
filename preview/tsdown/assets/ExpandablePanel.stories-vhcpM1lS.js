import{j as e}from"./iframe-L6kck8Nc.js";import{F as t}from"./Flex-BnP-0AXL.js";import{E as d,a}from"./_index-By_Pdjso.js";import{E as s}from"./Expander-CZbkQ1C_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-BUOQaYt-.js";import"./mergeRefs-BxmY1raa.js";import"./useAnimatedHeightBetween-k8Hu0xOA.js";import"./useBrowserPreferences-DRuz8LTU.js";import"./usePreviousValue-D_uyQGHU.js";import"./ChevronDownIcon-D-PzpEwB.js";import"./Icon-CznP8Z9Z.js";import"./ChevronUpIcon-DGass5BH.js";const S={title:"Komponenter/ExpandablePanel",component:a,subcomponents:{Expander:s,ExpandablePanelContent:d},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx(n,{})})],argTypes:{variant:{control:"radio",options:["fill","stroke"]}}},l={args:{variant:"fill"},render:n=>e.jsx(t,{direction:"column",gap:"xs",children:[...Array(3)].map((o,i)=>e.jsxs(a,{...n,children:[e.jsx(a.Header,{children:"Klikk på meg for å åpne!"}),e.jsx(a.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},i))})},r={args:{variant:"stroke"},render:n=>e.jsx(e.Fragment,{children:[...Array(3)].map((o,i)=>e.jsxs(a,{...n,children:[e.jsx(a.Header,{children:"Klikk på meg for å åpne!"}),e.jsx(a.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},i))})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Stroke varianten skal ikke ha mellomrom mellom panelene.",...r.parameters?.docs?.description}}};const V=["ExpandablePanelFilled","ExpandablePanelStroke"];export{l as ExpandablePanelFilled,r as ExpandablePanelStroke,V as __namedExportsOrder,S as default};
