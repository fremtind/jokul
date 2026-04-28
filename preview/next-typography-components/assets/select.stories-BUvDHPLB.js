import{j as e}from"./iframe-DmUqeAJK.js";import{P as o}from"./PopupTip-CU2OSK68.js";import{S as a}from"./Select-G5zYMFWK.js";/* empty css               */import{F as s}from"./Flex-2WK8tC7_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DXCd_-0y.js";import"./Icon-DeLpUVFo.js";import"./TooltipTrigger-Dw9j-KNW.js";import"./floating-ui.react-GvAjtKZZ.js";import"./index-CiQtq8Uc.js";import"./index-gDCNjDLV.js";import"./TooltipContent-B7e2s7FI.js";import"./useBrowserPreferences-oL6rOOkZ.js";import"./useId-Dsv0BK8r.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-BIvfHfp1.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-7fKkDG4T.js";import"./useListNavigation-BOCq0CC0.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BzAr0w85.js";import"./ArrowDownIcon-CagLlfwg.js";import"./InputGroup-dTCVRoaY.js";import"./Label-BrD7hPaG.js";import"./SupportLabel-D6ugdzq5.js";import"./WarningIcon-J5tuwde4.js";import"./SlotComponent-DVvZgNaG.js";import"./mergeRefs-BDhJXnkT.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
