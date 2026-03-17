import{j as e}from"./iframe-CFjl-NK5.js";import{P as o}from"./PopupTip-C1UntMRJ.js";import{S as a}from"./Select-CrN0Zhy1.js";/* empty css               */import{F as s}from"./Flex-Zx6yozat.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Dpwzk6IF.js";import"./Icon-wLhIYsIH.js";import"./TooltipTrigger-BkRcuqmE.js";import"./floating-ui.react-BBRcvaw1.js";import"./index-B9w44cen.js";import"./index-LNqxi49e.js";import"./TooltipContent-DBPeYKYG.js";import"./useBrowserPreferences-DFPG30KU.js";import"./useId-CgkwdTow.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-BPz8qWr_.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DMFkw55J.js";import"./useListNavigation-5y0w0FN8.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Bu-gA1Ge.js";import"./ArrowDownIcon-Cgba-qhu.js";import"./InputGroup-yi14pTO1.js";import"./Label-DqqABxmt.js";import"./SupportLabel-MjaeEj-E.js";import"./WarningIcon-yCYLc5al.js";import"./SlotComponent-BCq0RT5a.js";import"./mergeRefs-Dze4Vj3J.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
