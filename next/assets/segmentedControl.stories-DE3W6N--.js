import{r as g,j as e}from"./iframe-U_bfD-vz.js";import{F as f}from"./FieldGroup-BgAYO-Ac.js";import{S as l,a as s}from"./SegmentedControlButton-CCT7KPTv.js";import{F as j}from"./Flex-x-LWPJrw.js";import{L as p,C as u,a as m}from"./ListItem-L01rU7b9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BHvPmunK.js";import"./Label-BxXjVMqy.js";import"./SupportLabel-CCcWmwCn.js";import"./SuccessIcon-Dtk71qB5.js";import"./Icon-bW-47p_G.js";import"./WarningIcon-DtjcIgfp.js";import"./RadioButton-BwFVaeH_.js";import"./BaseRadioButton-CGIViTaM.js";import"./SlotComponent-CRPUYxYB.js";import"./mergeRefs-_7lZvp9j.js";const c=["Dekkes","Dekkes ikke"];function a(t){const[i,d]=g.useState(c[0]);return e.jsxs(j,{direction:"column",gap:"m",style:{maxWidth:"60ch"},children:[e.jsx(l,{legend:"Dekning i reiseforsikringen",...t,children:c.map(o=>e.jsx(s,{name:"dekning",value:o,checked:i===o,onChange:k=>d(k.target.value),children:o},o))}),i==="Dekkes"?e.jsxs(p,{children:[e.jsx(u,{children:"Avbestilling ved akutt sykdom"}),e.jsx(u,{children:"Nødvendig behandling ved akutt sykdom på reisen"})]}):e.jsxs(p,{children:[e.jsx(m,{children:"Avbestilling fordi du ombestemmer deg"}),e.jsx(m,{children:"Utgifter som flyselskapet allerede har refundert"})]})]})}try{a.displayName="DekningsoversiktExample",a.__docgenInfo={description:"",displayName:"DekningsoversiktExample",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/segmented-control/stories/DekningsoversiktExample.tsx",methods:[],props:{legend:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"legend",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},labelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"labelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<LabelProps, "children">'}},supportLabelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"supportLabelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<SupportLabelProps, "id" | "helpLabel" | "errorLabel">'}},tooltip:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"tooltip",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"ReactNode"}},className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"className",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},helpLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"helpLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{deprecated:"Bruk heller `description`."},type:{name:"string"}},errorLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"errorLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"description",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},"data-testautoid":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"}],description:"",name:"data-testautoid",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const y=`import React, { useState } from "react";
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
`;try{DekningsoversiktExample.displayName="DekningsoversiktExample",DekningsoversiktExample.__docgenInfo={description:"",displayName:"DekningsoversiktExample",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/segmented-control/stories/DekningsoversiktExample.tsx",methods:[],props:{legend:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"legend",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},labelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"labelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<LabelProps, "children">'}},supportLabelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"supportLabelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<SupportLabelProps, "id" | "helpLabel" | "errorLabel">'}},tooltip:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"tooltip",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"ReactNode"}},className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"className",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},helpLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"helpLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{deprecated:"Bruk heller `description`."},type:{name:"string"}},errorLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"errorLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"description",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},"data-testautoid":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"}],description:"",name:"data-testautoid",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const _={title:"Komponenter/SegmentedControl",component:l,subcomponents:{FieldGroup:f,SegmentedControlButton:s},args:{labelProps:{srOnly:!1,variant:"small"}}},r={name:"Segmented Control",args:{legend:"Segmented Control"},render:t=>e.jsxs(l,{...t,children:[e.jsx(s,{value:"Vi",name:"basic",defaultChecked:!0,children:"Vi"}),e.jsx(s,{value:"Står",name:"basic",children:"Står"}),e.jsx(s,{value:"Sammen",name:"basic",children:"Sammen"})]})},n={name:"Dekningsoversikt",args:{legend:"Dekning i reiseforsikringen"},parameters:{docs:{source:{type:"code",language:"tsx",code:y.replace("../../flex/index.js","@fremtind/jokul/flex").replace("../../list/index.js","@fremtind/jokul/list").replace("../index.js","@fremtind/jokul/segmented-control")}}},render:t=>e.jsx(a,{...t})},A=["Basic","Dekningsoversikt"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Viser hvordan du bruker `useState` til å holde valgt knapp og dekningslisten\ni takt når brukeren bytter mellom «Dekkes» og «Dekkes ikke».",...n.parameters?.docs?.description}}};export{r as Basic,n as Dekningsoversikt,A as __namedExportsOrder,_ as default};
