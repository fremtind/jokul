import{j as e}from"./iframe-DqQMv5SD.js";import{P as o}from"./PopupTip-SAZ6Lpk6.js";import{S as a}from"./Select-CdwFdhhW.js";/* empty css               */import{F as s}from"./Flex-BzuCC_gX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DQTqvPAd.js";import"./Icon-DGhhyRo8.js";import"./TooltipTrigger-CJlMhDWo.js";import"./floating-ui.react-CgmB1uZs.js";import"./index-veLARZ5l.js";import"./index-D_8bYCfB.js";import"./TooltipContent-BTqeqgzP.js";import"./useBrowserPreferences-D-s4ASDl.js";import"./useId-BxjsbKCx.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-D49PAgEs.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-CFYWD9Ze.js";import"./useListNavigation-zxoQXcP3.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DutjcwAf.js";import"./ArrowDownIcon-CKgRgqKh.js";import"./InputGroup-Cy29pU9P.js";import"./Label-BgTNaY6p.js";import"./SupportLabel-VGk3bkHb.js";import"./WarningIcon-Bn4gMZmz.js";import"./SlotComponent-DMMB6X7L.js";import"./mergeRefs-J0rR9OZH.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
