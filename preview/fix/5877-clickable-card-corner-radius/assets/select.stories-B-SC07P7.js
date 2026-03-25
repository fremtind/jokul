import{j as e}from"./iframe-BSHXr__W.js";import{P as o}from"./PopupTip-BV4SqKQc.js";import{S as a}from"./Select-Cpucodfm.js";/* empty css               */import{F as s}from"./Flex-C-Na0q_b.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DsvYtCWw.js";import"./Icon-vAn-hQxA.js";import"./TooltipTrigger-Dt89K6Gw.js";import"./floating-ui.react-CnZ2Ir6G.js";import"./index-DZSuLgOA.js";import"./index-D7fI2Fxq.js";import"./TooltipContent-C1y75Hsh.js";import"./useBrowserPreferences-Cz07gPpo.js";import"./useId-CYA0g5RK.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-UOkwqVa6.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-vyDGQpnM.js";import"./useListNavigation-V2-eO_as.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CwH4dpOk.js";import"./ArrowDownIcon-Fs-UdyDK.js";import"./InputGroup-DsXJYjiN.js";import"./Label-CD1C2Vf4.js";import"./SupportLabel-CEX9mH4I.js";import"./WarningIcon-S5MdjChW.js";import"./SlotComponent-Dpsov236.js";import"./mergeRefs-B1ESe2kE.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Hva jobber du som?",
    items: ["Frontend-utvikler", "Backend-utvikler", "Visuell designer", "Interaksjonsdesigner", "Tjenestedesigner"],
    inline: true,
    value: "Frontend-utvikler",
    description: "",
    helpLabel: ""
  },
  render: args => {
    return <Flex gap="xs" alignItems="center">
                <p>Jeg jobber som</p>
                <Select {...args} />
                <p>hos Fremtind Forsikring.</p>
            </Flex>;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tooltip: <PopupTip content={"Er du usikker på hvilket merke du har kan du velge Annet"} />
  }
}`,...n.parameters?.docs?.source}}};const M=["SelectStory","SelectInline","SelectMedTooltip"];export{t as SelectInline,n as SelectMedTooltip,r as SelectStory,M as __namedExportsOrder,L as default};
