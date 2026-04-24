import{j as e}from"./iframe-BJKLVHBW.js";import{P as o}from"./PopupTip-6gi0BGoz.js";import{S as a}from"./Select-f2HwY0xA.js";/* empty css               */import{F as s}from"./Flex-4eM3vTsZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-1QhZScXX.js";import"./Icon-Dx10nCnm.js";import"./TooltipTrigger-BhR_5ifL.js";import"./floating-ui.react-2VhyX_yR.js";import"./index-DT7p--8K.js";import"./index-C9kCM-8i.js";import"./TooltipContent-C9MJ3R22.js";import"./useBrowserPreferences-Bzi8Zh2N.js";import"./useId--68G5vc6.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-D_Ys5nM-.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-Cy4b-XPK.js";import"./useListNavigation-Cg0N47qx.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DaWVxA9M.js";import"./ArrowDownIcon-uB86BWA-.js";import"./InputGroup-Dnmfv0zJ.js";import"./Label-B9mWKhIL.js";import"./SupportLabel-CuqxmaQc.js";import"./WarningIcon-Q977JN0d.js";import"./SlotComponent-BBo_3h2G.js";import"./mergeRefs-PO4j1EW7.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
