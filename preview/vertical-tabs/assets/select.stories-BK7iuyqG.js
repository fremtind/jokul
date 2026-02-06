import{j as e}from"./iframe-CFOATL1u.js";import{P as o}from"./PopupTip-DYoSYcGV.js";import{S as a}from"./Select-BigH6piN.js";/* empty css               */import{F as s}from"./Flex-BksfqgIP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-D1Ld0LSU.js";import"./Icon-s7blIWj6.js";import"./TooltipTrigger-C_VqE_iQ.js";import"./floating-ui.react-DGb5u6NH.js";import"./index-ia-aZiOc.js";import"./index-BE1O2ZXu.js";import"./TooltipContent-Dn0K217x.js";import"./useBrowserPreferences-d1tqmFW4.js";import"./useId-B9MBXXZj.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-1aoNpzVg.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-CJdgPhmo.js";import"./useListNavigation-C8birrt8.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CjOSFqiv.js";import"./ArrowDownIcon-DyV-5ufc.js";import"./InputGroup-ByX8NSlr.js";import"./Label-BHcrVLbg.js";import"./SupportLabel-MjH3MGX5.js";import"./WarningIcon-BDlR5soX.js";import"./SlotComponent-ZrWfkB4u.js";import"./mergeRefs-EVamH33i.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
