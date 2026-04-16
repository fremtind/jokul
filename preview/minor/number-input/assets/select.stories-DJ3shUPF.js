import{j as e}from"./iframe-Cz3xcnfU.js";import{P as o}from"./PopupTip-KjZDZ5H5.js";import{S as a}from"./Select-BEVQddME.js";/* empty css               */import{F as s}from"./Flex-4nK4b4aW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-BsFl2_ic.js";import"./Icon-D8AEtHtL.js";import"./TooltipTrigger-CYbJj9Ll.js";import"./floating-ui.react-DsCDOWVp.js";import"./index-5ennM2sl.js";import"./index-Co8rJi0o.js";import"./TooltipContent-Dlgwwl4w.js";import"./useBrowserPreferences-BIOu_a7D.js";import"./useId-BXMlKgX0.js";import"./getThemeAndSize-CIzqY74s.js";import"./useAnimatedHeight-kF0DOgFU.js";import"./tokens-BiWAXAgN.js";import"./usePreviousValue-DjGLxm5_.js";import"./useListNavigation-C1olkY1H.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-B5mChiEr.js";import"./ArrowDownIcon-9E6W-mBJ.js";import"./InputGroup-Captj47q.js";import"./Label-DVWD2eIN.js";import"./SupportLabel-B7ljEzuK.js";import"./WarningIcon-D0rYcyAU.js";import"./SlotComponent-C8jCA0oG.js";import"./mergeRefs-CZF3VeSr.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
