import{j as e}from"./iframe-CQxc51jJ.js";import{P as o}from"./PopupTip-Cgr-XGmn.js";import{S as a}from"./Select-B4gHKdO9.js";/* empty css               */import{F as s}from"./Flex-DcxXERvY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon--fXkNvZr.js";import"./Icon-D72rwEyv.js";import"./TooltipTrigger-BH3n4XFk.js";import"./floating-ui.react-Hp4s0tOW.js";import"./index-B1KNnpu9.js";import"./index-BXtrknhU.js";import"./TooltipContent-B65uLBBn.js";import"./useBrowserPreferences-BExBslGo.js";import"./useId-ljCz2mpr.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-D7YCe1zc.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-D23DID-s.js";import"./useListNavigation-9oY84zZM.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-D0-dwBEb.js";import"./ArrowDownIcon-CY0EQd3b.js";import"./InputGroup-rMvjmU9Z.js";import"./Label-CaD_wrdR.js";import"./SupportLabel-Cp1D5hPQ.js";import"./WarningIcon-BbRKRIuT.js";import"./SlotComponent-CW46vavE.js";import"./mergeRefs-pfJQRkXq.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
