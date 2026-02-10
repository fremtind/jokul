import{j as e}from"./iframe-jYV6c4ua.js";import{P as o}from"./PopupTip-BJStn75_.js";import{S as a}from"./Select-kggp8x_E.js";/* empty css               */import{F as s}from"./Flex-CSrDeYa5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-C1bxxTiz.js";import"./Icon-B8Nhe1uc.js";import"./TooltipTrigger-BsIsjfa3.js";import"./floating-ui.react-Bvv-Pj3Z.js";import"./index-nc0_O-J_.js";import"./index-B05yV8Wr.js";import"./TooltipContent-5aXVFWfz.js";import"./useBrowserPreferences-Bcq_DdB0.js";import"./useId-iR0enZca.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-w8Ut2aN3.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-C5Jag34J.js";import"./useListNavigation-Byfjj-u6.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-kbZGEzv6.js";import"./ArrowDownIcon-CPbh3sS8.js";import"./InputGroup-Ca3tkLhY.js";import"./Label-DiTlwc4B.js";import"./SupportLabel-CarNkLz0.js";import"./WarningIcon-B0ms6aOd.js";import"./SlotComponent-Dxk6ZpPW.js";import"./mergeRefs-nwtM3jwi.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
