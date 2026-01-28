import{j as e}from"./iframe-GjBJY2wS.js";import{P as o}from"./PopupTip-DqXDkOUg.js";import{S as a}from"./Select-Bj9a8yK8.js";/* empty css               */import{F as s}from"./Flex-CGCxFKFW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-CzMxx9nK.js";import"./Icon-83dA_bTg.js";import"./TooltipTrigger-B3yLWWgQ.js";import"./floating-ui.react-CP2YYsKI.js";import"./index-DM5eY6dm.js";import"./index-C_ZK7uK2.js";import"./TooltipContent-O6DF-Qy4.js";import"./useBrowserPreferences-BJOluQQl.js";import"./useId-D9Q1DzXJ.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-DdBU_p-h.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-CBHaZVgF.js";import"./useListNavigation-5XUWkn0N.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DRjxP4EO.js";import"./ArrowDownIcon-DvR7K0Hi.js";import"./InputGroup-DudXv1_S.js";import"./Label-CSq2Pzd4.js";import"./SupportLabel-Cxarg-rh.js";import"./WarningIcon-C1uTN3D8.js";import"./SlotComponent-aETZRqzl.js";import"./mergeRefs-LfPW0Zpc.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
