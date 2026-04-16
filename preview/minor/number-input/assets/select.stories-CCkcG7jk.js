import{j as e}from"./iframe-Ue0p-9-p.js";import{P as o}from"./PopupTip-EzSlNlB1.js";import{S as a}from"./Select-DsRfe9iE.js";/* empty css               */import{F as s}from"./Flex-DcksrfzR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CsmzQnGh.js";import"./Icon-SH-8MKSJ.js";import"./TooltipTrigger-C9iW-fg1.js";import"./floating-ui.react-DPrnPr_x.js";import"./index-BG1A56xm.js";import"./index-D4GIB5r5.js";import"./TooltipContent-HPAgfbbf.js";import"./useBrowserPreferences-BxBko9q_.js";import"./useId-DIwr4CP1.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-CAozmwMR.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DxEpFqi8.js";import"./useListNavigation-DhP5fwdF.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Ci7Pe_A5.js";import"./ArrowDownIcon-DFxqvlV6.js";import"./InputGroup-CDT7WPtz.js";import"./Label-DOXph6SK.js";import"./SupportLabel-C6gstnNw.js";import"./WarningIcon-Ejz6v5Zg.js";import"./SlotComponent-BVx1zZN0.js";import"./mergeRefs-Ddu_fSMc.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
