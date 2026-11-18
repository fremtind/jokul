import{j as e}from"./iframe-s8sUPN0e.js";import{C as d}from"./Card-BbeYn_fa.js";import{E as m,a as c}from"./ExpandablePanel-CrE9Dynd.js";import{E as u}from"./Expander-CUS4T-a5.js";import{P as p}from"./PopupTip-DuaJC6Ym.js";import{S as a}from"./Select-BX-ryIfg.js";/* empty css               *//* empty css               *//* empty css               */import{F as g}from"./Flex-CGjVaUa6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DS6vpwM2.js";import"./mergeRefs-_7lZvp9j.js";import"./types-IsTkoTmK.js";import"./useAnimatedHeightBetween-Dxps_Uvb.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BKVY2pWA.js";import"./usePreviousValue-DqmH5h8F.js";import"./ChevronDownIcon-DcaSnRtN.js";import"./Icon-C0IG6nDZ.js";import"./ChevronUpIcon-BqHNos2_.js";import"./QuestionIcon-vDivP1xp.js";import"./TooltipTrigger-w_tHX_KX.js";import"./floating-ui.react-CCBv0Eyj.js";import"./index-DQJqEkdi.js";import"./index-HnmTnvVD.js";import"./TooltipContent-DdB7QDX-.js";import"./useId-D73VU2bW.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useListNavigation-d9WU1esV.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-JPvPqwAY.js";import"./ArrowDownIcon-CylNFqGd.js";import"./InputGroup-lTroF98x.js";import"./Label-DgncUdsw.js";import"./SupportLabel-D5Mrt71N.js";import"./SuccessIcon-DvgIXpMf.js";import"./WarningIcon-DXHopxdu.js";import"./Popover-BSmuejWZ.js";const re={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:p},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},o={name:"Select"},i={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:r=>e.jsxs(g,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...r}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},l={args:{tooltip:e.jsx(p,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}},n={name:"I et Card",parameters:{docs:{description:{story:"Tidligere ble lista klippet fordi `Card` har `overflow: clip`. Lista rendres nå i en portal og vises uavhengig av forelderens overflow."}}},render:r=>e.jsx(d,{padding:"m",style:{width:"20rem"},children:e.jsx(a,{...r})})},t={name:"I en ExpandablePanel",parameters:{docs:{description:{story:"Tidligere ble lista klippet av panelets `overflow: hidden` når innholdet i panelet var lavt. Etter endringen rendres lista i en portal og vises som forventet."}}},render:r=>e.jsx("div",{style:{width:"30rem"},children:e.jsxs(m,{children:[e.jsx(u,{children:"Velg telefonmerke"}),e.jsx(c,{children:e.jsx(a,{...r})})]})})},s={name:"Nederst på siden (flipper opp)",parameters:{docs:{description:{story:"Floating-ui-middlewaren `flip` snur listen over knappen når det ikke er plass under. Scroll Select ned mot bunnen av viewporten for å se effekten."}}},render:r=>e.jsx("div",{style:{height:"120dvh"},children:e.jsx("div",{style:{position:"absolute",bottom:"1rem",left:"1rem"},children:e.jsx(a,{...r})})})},ne=["SelectStory","SelectInline","SelectMedTooltip","SelectIKort","SelectIExpandablePanel","SelectNederstPaSiden"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tooltip: <PopupTip content={"Er du usikker på hvilket merke du har kan du velge Annet"} />
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "I et Card",
  parameters: {
    docs: {
      description: {
        story: "Tidligere ble lista klippet fordi \`Card\` har " + "\`overflow: clip\`. Lista rendres nå i en portal og " + "vises uavhengig av forelderens overflow."
      }
    }
  },
  render: args => <Card padding="m" style={{
    width: "20rem"
  }}>
            <Select {...args} />
        </Card>
}`,...n.parameters?.docs?.source},description:{story:"Demonstrerer at nedtrekkslisten ikke lenger klippes av en `Card` med\nbegrenset høyde (issue #5976).",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "I en ExpandablePanel",
  parameters: {
    docs: {
      description: {
        story: "Tidligere ble lista klippet av panelets \`overflow: " + "hidden\` når innholdet i panelet var lavt. Etter " + "endringen rendres lista i en portal og vises som forventet."
      }
    }
  },
  render: args => <div style={{
    width: "30rem"
  }}>
            <ExpandablePanel>
                <Expander>Velg telefonmerke</Expander>
                <ExpandablePanelContent>
                    <Select {...args} />
                </ExpandablePanelContent>
            </ExpandablePanel>
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Demonstrerer at nedtrekkslisten ikke lenger klippes av en\n`ExpandablePanel` (issue #4583).",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Nederst på siden (flipper opp)",
  parameters: {
    docs: {
      description: {
        story: "Floating-ui-middlewaren \`flip\` snur listen over " + "knappen når det ikke er plass under. Scroll Select " + "ned mot bunnen av viewporten for å se effekten."
      }
    }
  },
  render: args => <div style={{
    height: "120dvh"
  }}>
            <div style={{
      position: "absolute",
      bottom: "1rem",
      left: "1rem"
    }}>
                <Select {...args} />
            </div>
        </div>
}`,...s.parameters?.docs?.source},description:{story:`Demonstrerer auto-flip: når Select er nederst i viewporten, åpner lista
seg over knappen i stedet for under, slik at hele lista alltid er synlig
(issue #3775).`,...s.parameters?.docs?.description}}};export{t as SelectIExpandablePanel,n as SelectIKort,i as SelectInline,l as SelectMedTooltip,s as SelectNederstPaSiden,o as SelectStory,ne as __namedExportsOrder,re as default};
