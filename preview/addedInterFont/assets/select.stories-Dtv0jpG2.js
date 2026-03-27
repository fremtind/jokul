import{j as e}from"./iframe-ClV8r1rj.js";import{P as o}from"./PopupTip-NRLBDv4A.js";import{S as a}from"./Select-Bdx2oxWT.js";/* empty css               */import{F as s}from"./Flex-Bu6Zdv4a.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BcJjdZ93.js";import"./Icon-t4H11urd.js";import"./TooltipTrigger-BL1CSoH-.js";import"./floating-ui.react-PkY8_LnR.js";import"./index-DMmOlH5e.js";import"./index-B5n61YnD.js";import"./TooltipContent-Bqaecr1m.js";import"./useBrowserPreferences-CSPufhPg.js";import"./useId-CuB9eMUJ.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-fVMIVtu2.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-D1tP5yDK.js";import"./useListNavigation-CxHWWZpH.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-BXsxpXjd.js";import"./ArrowDownIcon-BhYwLbt-.js";import"./InputGroup-D6G7sXXO.js";import"./Label-3ydZK_fE.js";import"./SupportLabel-DYpzVXnO.js";import"./WarningIcon-Dz1LOBg9.js";import"./SlotComponent-BHV6G1lP.js";import"./mergeRefs-D1jrm0Ny.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
