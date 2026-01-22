import{j as e}from"./iframe-4hO3VbOZ.js";import{P as o}from"./PopupTip-B9OoGfZK.js";import{S as a}from"./Select-DOpenZ0g.js";/* empty css               */import{F as s}from"./Flex-uRgnTesT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DmOvtsGB.js";import"./Icon-DlZ087Hm.js";import"./TooltipTrigger-Dbl6ehJF.js";import"./floating-ui.react-DJYd_44c.js";import"./index-BZniy7go.js";import"./index-D9vpCgIF.js";import"./TooltipContent-CpfpCars.js";import"./useBrowserPreferences-DIfjIM2w.js";import"./useId-Bv53ENwg.js";import"./getThemeAndDensity-v_O0Epee.js";import"./useAnimatedHeight-Bb8Mqu61.js";import"./tokens-d2GYn7oW.js";import"./usePreviousValue-BnYJcfke.js";import"./useListNavigation-FqXb-W1A.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-DLACDhoa.js";import"./ArrowDownIcon-Cusv30zi.js";import"./InputGroup-DYkMw7Yj.js";import"./Label-D_FolNZc.js";import"./SupportLabel-REyeTB2o.js";import"./WarningIcon-D6FOaHNY.js";import"./SlotComponent-CJV6_JJt.js";import"./mergeRefs-C5rlXpUb.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
