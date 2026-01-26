import{j as e}from"./iframe-DtM7RXj6.js";import{P as o}from"./PopupTip-CvNa4bif.js";import{S as a}from"./Select-BhnKwbyu.js";/* empty css               */import{F as s}from"./Flex-Bw_hwLCN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-D3fLsE1E.js";import"./Icon-DEBh_q2D.js";import"./TooltipTrigger-C78cbnoc.js";import"./floating-ui.react-DbgLv6yT.js";import"./index-C5GIev4G.js";import"./index-BK5QRlWO.js";import"./TooltipContent-Cpwhhg2g.js";import"./useBrowserPreferences-BGezIPJn.js";import"./useId-CC-388Ss.js";import"./getThemeAndDensity-v_O0Epee.js";import"./useAnimatedHeight-kIVrImRz.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-CIjN-Smo.js";import"./useListNavigation-B130-Cok.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-tof5hu4C.js";import"./ArrowDownIcon-kpGV18uM.js";import"./InputGroup-_jEbps5X.js";import"./Label-ByAl5DiS.js";import"./SupportLabel-DyJuzdLr.js";import"./WarningIcon-Bz0badf_.js";import"./SlotComponent-DYrfhb9R.js";import"./mergeRefs-Akd9vO6p.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},density:{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
