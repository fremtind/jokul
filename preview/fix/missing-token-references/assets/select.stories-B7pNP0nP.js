import{j as e}from"./iframe-CPA3jkPB.js";import{P as o}from"./PopupTip-EDlKv0TQ.js";import{S as a}from"./Select-7LysGpzd.js";/* empty css               */import{F as s}from"./Flex-64ph-y29.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DdTTz4CU.js";import"./Icon-bxDWCdkV.js";import"./TooltipTrigger-O3ArlJUH.js";import"./floating-ui.react-CGWJ6A-c.js";import"./index-GCv4GX59.js";import"./index-JVaPGKV0.js";import"./TooltipContent-Ce3j-xf-.js";import"./useBrowserPreferences-DhxhdM8t.js";import"./useId-CbjHqd0z.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-Crv8LPcn.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-BqbGAGAJ.js";import"./useListNavigation-D2Gnu-Fz.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BsaaGKqO.js";import"./ArrowDownIcon-aX_1FG0O.js";import"./InputGroup-g1KH-WU1.js";import"./Label-CWShUZnk.js";import"./SupportLabel-CnZRRpMP.js";import"./WarningIcon-CTSnIb7v.js";import"./SlotComponent-DBqxgIk8.js";import"./mergeRefs-Zdil8XW9.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
