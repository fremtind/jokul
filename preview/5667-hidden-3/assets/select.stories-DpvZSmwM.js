import{j as e}from"./iframe-DYCcelEZ.js";import{P as o}from"./PopupTip-Bd9G150y.js";import{S as a}from"./Select-SsC9tdFo.js";/* empty css               */import{F as s}from"./Flex-BEXaoWc8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BcWutnng.js";import"./Icon-Bz1a3uE6.js";import"./TooltipTrigger-Dx4TjD5w.js";import"./floating-ui.react-DmiYOkhF.js";import"./index-DMmrPw-H.js";import"./index-BtkWAhUt.js";import"./TooltipContent-C7D9lwdD.js";import"./useBrowserPreferences-DA4atBdK.js";import"./useId-ZFZRZSHM.js";import"./getThemeAndDensity-v_O0Epee.js";import"./useAnimatedHeight-CYgJH3bI.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-DzSHjkI7.js";import"./useListNavigation-CqVHRGni.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DRdLXdqZ.js";import"./ArrowDownIcon-B2mumL1o.js";import"./InputGroup-CeDYBe5l.js";import"./Label-mTvL-xfd.js";import"./SupportLabel-CXLpBFV-.js";import"./WarningIcon-BaQ-WQBE.js";import"./SlotComponent-D2oygRYs.js";import"./mergeRefs-zJmVxZsP.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
