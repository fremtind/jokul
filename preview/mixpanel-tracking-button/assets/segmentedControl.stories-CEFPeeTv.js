import{r as k,j as e}from"./iframe-0ZB4oRb9.js";import{F as f}from"./FieldGroup-CdlEGNyd.js";import{S as a,a as r}from"./SegmentedControlButton-CfMVnWzT.js";import{F as h}from"./Flex-DmtuCOai.js";import{L as d,C as m,a as c}from"./ListItem-Ljoj0QoT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-8Auicuwd.js";import"./Label-DFV5NPs1.js";import"./SupportLabel-CN9mkqeI.js";import"./SuccessIcon-DSiRLwce.js";import"./Icon-0UZbaLo5.js";import"./WarningIcon-p4Q4W2Fl.js";import"./RadioButton-Bo9bQW-a.js";import"./BaseRadioButton-96S9UCZf.js";import"./SlotComponent-UQZUj88c.js";import"./mergeRefs-BKmA9Zqj.js";const p=["Dekkes","Dekkes ikke"];function i(n){const[l,u]=k.useState(p[0]);return e.jsxs(h,{direction:"column",gap:"m",style:{maxWidth:"60ch"},children:[e.jsx(a,{legend:"Dekning i reiseforsikringen",...n,children:p.map(s=>e.jsx(r,{name:"dekning",value:s,checked:l===s,onChange:g=>u(g.target.value),children:s},s))}),l==="Dekkes"?e.jsxs(d,{children:[e.jsx(m,{children:"Avbestilling ved akutt sykdom"}),e.jsx(m,{children:"Nødvendig behandling ved akutt sykdom på reisen"})]}):e.jsxs(d,{children:[e.jsx(c,{children:"Avbestilling fordi du ombestemmer deg"}),e.jsx(c,{children:"Utgifter som flyselskapet allerede har refundert"})]})]})}try{i.displayName="DekningsoversiktExample",i.__docgenInfo={description:"",displayName:"DekningsoversiktExample",props:{legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:'Omit<LabelProps, "children">'}},supportLabelProps:{defaultValue:null,description:"",name:"supportLabelProps",required:!1,type:{name:'Omit<SupportLabelProps, "id" | "errorLabel" | "helpLabel">'}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},helpLabel:{defaultValue:null,description:"@deprecated Bruk heller `description`.",name:"helpLabel",required:!1,type:{name:"string"}},errorLabel:{defaultValue:null,description:"",name:"errorLabel",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},"data-testautoid":{defaultValue:null,description:"",name:"data-testautoid",required:!1,type:{name:"string"}}}}}catch{}const x=`import React, { useState } from "react";
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
`,A={title:"Komponenter/SegmentedControl",component:a,subcomponents:{FieldGroup:f,SegmentedControlButton:r},args:{labelProps:{srOnly:!1,variant:"small"}}},o={name:"Segmented Control",args:{legend:"Segmented Control"},render:n=>e.jsxs(a,{...n,children:[e.jsx(r,{value:"Vi",name:"basic",defaultChecked:!0,children:"Vi"}),e.jsx(r,{value:"Står",name:"basic",children:"Står"}),e.jsx(r,{value:"Sammen",name:"basic",children:"Sammen"})]})},t={name:"Dekningsoversikt",args:{legend:"Dekning i reiseforsikringen"},parameters:{docs:{source:{type:"code",language:"tsx",code:x.replace("../../flex/index.js","@fremtind/jokul/flex").replace("../../list/index.js","@fremtind/jokul/list").replace("../index.js","@fremtind/jokul/segmented-control")}}},render:n=>e.jsx(i,{...n})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Viser hvordan du bruker `useState` til å holde valgt knapp og dekningslisten\ni takt når brukeren bytter mellom «Dekkes» og «Dekkes ikke».",...t.parameters?.docs?.description}}};const O=["Basic","Dekningsoversikt"];export{o as Basic,t as Dekningsoversikt,O as __namedExportsOrder,A as default};
