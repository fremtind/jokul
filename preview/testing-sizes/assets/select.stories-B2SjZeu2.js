import{j as e}from"./iframe-DWrx-pWR.js";import{P as o}from"./PopupTip-BdXWX3OR.js";import{S as a}from"./Select-B0CyNAVh.js";/* empty css               */import{F as s}from"./Flex-hEFX5l4Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BY1P5Bh1.js";import"./Icon-DDdpCIjM.js";import"./TooltipTrigger-4-zzoCM4.js";import"./floating-ui.react-BNJro-23.js";import"./index-4uCmwb7L.js";import"./index-C6TzgD0G.js";import"./TooltipContent-aeSITmJW.js";import"./useBrowserPreferences-7I3ijGNk.js";import"./useId-D9URpKpz.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-DhU_c7-Y.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-DxRy0EDi.js";import"./useListNavigation-pHCNi-sa.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-lqAtkvlx.js";import"./ArrowDownIcon-Br4Tpkah.js";import"./InputGroup-DEvXka1v.js";import"./Label-BbabvezF.js";import"./SupportLabel-ChJYVA22.js";import"./WarningIcon-Bkns4XRq.js";import"./SlotComponent-UjjCfKcx.js";import"./mergeRefs-CEBgSjJX.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
