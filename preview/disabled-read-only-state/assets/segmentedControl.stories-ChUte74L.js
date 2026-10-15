import{r as C,j as e}from"./iframe-Cc0lsbEP.js";import{F as v}from"./FieldGroup-C3vgeZbo.js";import{S as a,a as n}from"./SegmentedControlButton-DEEYntiK.js";import{F as f}from"./Flex-BcrmyNfa.js";import{L as u,C as c,a as g}from"./ListItem-nL5BTVKl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BEqUuJdd.js";import"./Label-8650UV_r.js";import"./SupportLabel-D8Vv-TW6.js";import"./SuccessIcon-CM5mryur.js";import"./Icon-BPBN9EvZ.js";import"./WarningIcon-C3tmYzoj.js";import"./RadioButton-C_pE1xJB.js";import"./BaseRadioButton-DZ53ihvM.js";import"./SlotComponent-CrToIbEs.js";import"./mergeRefs--gaMb34L.js";const p=["Dekkes","Dekkes ikke"];function d(t){const[m,k]=C.useState(p[0]);return e.jsxs(f,{direction:"column",gap:"m",style:{maxWidth:"60ch"},children:[e.jsx(a,{legend:"Dekning i reiseforsikringen",...t,children:p.map(s=>e.jsx(n,{name:"dekning",value:s,checked:m===s,onChange:S=>k(S.target.value),children:s},s))}),m==="Dekkes"?e.jsxs(u,{children:[e.jsx(c,{children:"Avbestilling ved akutt sykdom"}),e.jsx(c,{children:"Nødvendig behandling ved akutt sykdom på reisen"})]}):e.jsxs(u,{children:[e.jsx(g,{children:"Avbestilling fordi du ombestemmer deg"}),e.jsx(g,{children:"Utgifter som flyselskapet allerede har refundert"})]})]})}try{d.displayName="DekningsoversiktExample",d.__docgenInfo={description:"",displayName:"DekningsoversiktExample",props:{legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:'Omit<LabelProps, "children">'}},supportLabelProps:{defaultValue:null,description:"",name:"supportLabelProps",required:!1,type:{name:'Omit<SupportLabelProps, "id" | "errorLabel" | "helpLabel">'}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},helpLabel:{defaultValue:null,description:"@deprecated Bruk heller `description`.",name:"helpLabel",required:!1,type:{name:"string"}},errorLabel:{defaultValue:null,description:"",name:"errorLabel",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},"data-testautoid":{defaultValue:null,description:"",name:"data-testautoid",required:!1,type:{name:"string"}}}}}catch{}const h=`import React, { useState } from "react";
import { Flex } from "../../flex/index.js";
import { CheckListItem, CrossListItem, List } from "../../list/index.js";

import {
    SegmentedControl,
    SegmentedControlButton,
    type SegmentedControlProps,
} from "../index.js";

const coverageChoices = ["Dekkes", "Dekkes ikke"];

export function DekningsoversiktExample(props: Partial<SegmentedControlProps>) {
    const [value, setValue] = useState(coverageChoices[0]);

    return (
        <Flex direction="column" gap="m" style={{ maxWidth: "60ch" }}>
            <SegmentedControl legend="Dekning i reiseforsikringen" {...props}>
                {coverageChoices.map((choice) => (
                    <SegmentedControlButton
                        key={choice}
                        name="dekning"
                        value={choice}
                        checked={value === choice}
                        onChange={(event) => setValue(event.target.value)}
                    >
                        {choice}
                    </SegmentedControlButton>
                ))}
            </SegmentedControl>
            {value === "Dekkes" ? (
                <List>
                    <CheckListItem>Avbestilling ved akutt sykdom</CheckListItem>
                    <CheckListItem>
                        Nødvendig behandling ved akutt sykdom på reisen
                    </CheckListItem>
                </List>
            ) : (
                <List>
                    <CrossListItem>
                        Avbestilling fordi du ombestemmer deg
                    </CrossListItem>
                    <CrossListItem>
                        Utgifter som flyselskapet allerede har refundert
                    </CrossListItem>
                </List>
            )}
        </Flex>
    );
}
`,R={title:"Komponenter/SegmentedControl",component:a,subcomponents:{FieldGroup:v,SegmentedControlButton:n},args:{labelProps:{srOnly:!1,variant:"small"}}},o={name:"Segmented Control",args:{legend:"Segmented Control"},render:t=>e.jsxs(a,{...t,children:[e.jsx(n,{value:"Vi",name:"basic",defaultChecked:!0,children:"Vi"}),e.jsx(n,{value:"Står",name:"basic",children:"Står"}),e.jsx(n,{value:"Sammen",name:"basic",children:"Sammen"})]})},l={args:{legend:"Hele kontrollen er disabled"},render:t=>e.jsxs(a,{...t,children:[e.jsx(n,{value:"Vi",name:"disabled",defaultChecked:!0,disabled:!0,children:"Vi"}),e.jsx(n,{value:"Står",name:"disabled",disabled:!0,children:"Står"}),e.jsx(n,{value:"Sammen",name:"disabled",disabled:!0,children:"Sammen"})]})},i={name:"Enkelt valg disabled",args:{legend:"Ett av valgene er utilgjengelig"},render:t=>e.jsxs(a,{...t,children:[e.jsx(n,{value:"Vi",name:"partial",defaultChecked:!0,children:"Vi"}),e.jsx(n,{value:"Står",name:"partial",disabled:!0,children:"Står"}),e.jsx(n,{value:"Sammen",name:"partial",children:"Sammen"})]})},r={name:"Dekningsoversikt",args:{legend:"Dekning i reiseforsikringen"},parameters:{docs:{source:{type:"code",language:"tsx",code:h.replace("../../flex/index.js","@fremtind/jokul/flex").replace("../../list/index.js","@fremtind/jokul/list").replace("../index.js","@fremtind/jokul/segmented-control")}}},render:t=>e.jsx(d,{...t})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control",
  args: {
    legend: "Segmented Control"
  },
  render: args => <SegmentedControl {...args}>
            <SegmentedControlButton value="Vi" name="basic" defaultChecked>
                Vi
            </SegmentedControlButton>
            <SegmentedControlButton value="Står" name="basic">
                Står
            </SegmentedControlButton>
            <SegmentedControlButton value="Sammen" name="basic">
                Sammen
            </SegmentedControlButton>
        </SegmentedControl>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Hele kontrollen er disabled"
  },
  render: args => <SegmentedControl {...args}>
            <SegmentedControlButton value="Vi" name="disabled" defaultChecked disabled>
                Vi
            </SegmentedControlButton>
            <SegmentedControlButton value="Står" name="disabled" disabled>
                Står
            </SegmentedControlButton>
            <SegmentedControlButton value="Sammen" name="disabled" disabled>
                Sammen
            </SegmentedControlButton>
        </SegmentedControl>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Enkelt valg disabled",
  args: {
    legend: "Ett av valgene er utilgjengelig"
  },
  render: args => <SegmentedControl {...args}>
            <SegmentedControlButton value="Vi" name="partial" defaultChecked>
                Vi
            </SegmentedControlButton>
            <SegmentedControlButton value="Står" name="partial" disabled>
                Står
            </SegmentedControlButton>
            <SegmentedControlButton value="Sammen" name="partial">
                Sammen
            </SegmentedControlButton>
        </SegmentedControl>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Dekningsoversikt",
  args: {
    legend: "Dekning i reiseforsikringen"
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: dekningsoversiktSource.replace("../../flex/index.js", "@fremtind/jokul/flex").replace("../../list/index.js", "@fremtind/jokul/list").replace("../index.js", "@fremtind/jokul/segmented-control")
      }
    }
  },
  render: args => <DekningsoversiktExample {...args} />
}`,...r.parameters?.docs?.source},description:{story:"Viser hvordan du bruker `useState` til å holde valgt knapp og dekningslisten\ni takt når brukeren bytter mellom «Dekkes» og «Dekkes ikke».",...r.parameters?.docs?.description}}};const H=["Basic","Disabled","EnkeltValgDisabled","Dekningsoversikt"];export{o as Basic,r as Dekningsoversikt,l as Disabled,i as EnkeltValgDisabled,H as __namedExportsOrder,R as default};
