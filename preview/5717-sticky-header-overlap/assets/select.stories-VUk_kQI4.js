import{j as e}from"./iframe-CT1xRnJu.js";import{P as o}from"./PopupTip-B48b07dq.js";import{S as a}from"./Select-Bp2a-rWI.js";/* empty css               */import{F as s}from"./Flex-CWFcLK8F.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-jF4U1bY6.js";import"./Icon-CyM5hleO.js";import"./TooltipTrigger-BW_JLEJD.js";import"./floating-ui.react-DxalkGgD.js";import"./index-CgwybmSm.js";import"./index-BS15ueu2.js";import"./TooltipContent-Y41LFdcg.js";import"./useBrowserPreferences-CaMAAbQI.js";import"./useId-DPDAENdl.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-Dl7MXMyu.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-COmbyE0n.js";import"./useListNavigation-DtY09BCo.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-ChB4t9uY.js";import"./ArrowDownIcon-yVWXsPRt.js";import"./InputGroup-waeNzI30.js";import"./Label-PmZuEZ-E.js";import"./SupportLabel-LRTR9BdO.js";import"./WarningIcon-JmnR-9by.js";import"./SlotComponent-Ds7InhkA.js";import"./mergeRefs-CJHnEW19.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
