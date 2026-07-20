import{j as e}from"./iframe-DdzKESVa.js";import{S as m}from"./Select-CE6RAzme.js";import{B as o}from"./Button-C3Htq6Vb.js";import{F as r}from"./Flex-C5uZ6mnA.js";import{F as s}from"./FieldGroup-KBAOYqCH.js";import{R as a}from"./RadioPanel-DePHWe0o.js";import{T as d}from"./TextInput-DJ0qQyhh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-CRZGWJ9s.js";import"./useId-BAHfi6Xv.js";import"./Label-94K3vMYq.js";import"./SupportLabel-DthX4J-b.js";import"./SuccessIcon-RD5j-PrQ.js";import"./Icon-D0RjNUF1.js";import"./WarningIcon-DeIMtJhR.js";import"./ArrowDownIcon-_C84WLr9.js";import"./usePreviousValue-CGQXf2Ev.js";import"./Loader-KDzCV-em.js";import"./useDelayedRender-DkTKnDQj.js";import"./SlotComponent-CxbiuVBb.js";import"./mergeRefs-BXCcGfwD.js";import"./InputPanel-DcVZFcS7.js";import"./Checkbox-n7vAqZG3.js";import"./RadioButton-P4qxEFvf.js";import"./BaseRadioButton-Cpn2CTrh.js";import"./BaseTextInput-1X7U03Tj.js";import"./IconButton-BfjK8JJX.js";const D={title:"Skjermbilder/Kjøpsflyt",parameters:{layout:"centered"},args:{labelProps:{variant:"large"}}},n={name:"Når ble boligen bygget?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsx(s,{legend:"Når ble boligen bygget?",description:"Her kommer det en hjelpetekst",...l,children:e.jsx(d,{label:"Byggeår",defaultValue:1960})})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},t={name:"Hva er boligens adresse?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Hva er boligens adresse?",description:"Her kommer det en hjelpetekst",...l,children:[e.jsx(d,{label:"Postnummer",placeholder:"Postnummer"}),e.jsx(m,{label:"Adresse",placeholder:"Velg adresse",children:e.jsx("option",{value:"Kitterødveien",children:"Kitterødveien"})}),e.jsx(m,{label:"Gatenummer",placeholder:"Velg nummer",children:e.jsx("option",{value:"Kitterødveien",children:"10"})})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},i={name:"Skal du leie ut boligen?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Skal du leie ut boligen?",...l,children:[e.jsx(a,{name:"boligutleie",label:"Ja, hele boligen",value:"Ja, hele boligen"}),e.jsx(a,{name:"boligutleie",label:"Ja, deler av boligen",value:"Ja, deler av boligen"}),e.jsx(a,{name:"boligutleie",label:"Nei",value:"Nei"})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Når ble boligen bygget?",
  render: args => {
    return <Flex direction="column" gap="l" alignItems="center">
                <Flex direction="column" gap="m" asChild>
                    <FieldGroup legend="Når ble boligen bygget?" description="Her kommer det en hjelpetekst" {...args}>
                        <TextInput label="Byggeår" defaultValue={1960} />
                    </FieldGroup>
                </Flex>
                <Button variant="primary">Fortsett</Button>
            </Flex>;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Hva er boligens adresse?",
  render: args => {
    return <Flex direction="column" gap="l" alignItems="center">
                <Flex direction="column" gap="m" asChild>
                    <FieldGroup legend="Hva er boligens adresse?" description="Her kommer det en hjelpetekst" {...args}>
                        <TextInput label="Postnummer" placeholder="Postnummer" />
                        <Select label="Adresse" placeholder="Velg adresse">
                            <option value="Kitterødveien">Kitterødveien</option>
                        </Select>
                        <Select label="Gatenummer" placeholder="Velg nummer">
                            <option value="Kitterødveien">10</option>
                        </Select>
                    </FieldGroup>
                </Flex>
                <Button variant="primary">Fortsett</Button>
            </Flex>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Skal du leie ut boligen?",
  render: args => {
    return <Flex direction="column" gap="l" alignItems="center">
                <Flex direction="column" gap="m" asChild>
                    <FieldGroup legend="Skal du leie ut boligen?" {...args}>
                        <RadioPanel name="boligutleie" label="Ja, hele boligen" value="Ja, hele boligen" />

                        <RadioPanel name="boligutleie" label="Ja, deler av boligen" value="Ja, deler av boligen" />
                        <RadioPanel name="boligutleie" label="Nei" value="Nei" />
                    </FieldGroup>
                </Flex>
                <Button variant="primary">Fortsett</Button>
            </Flex>;
  }
}`,...i.parameters?.docs?.source}}};const L=["NårBleBoligenBygget","HvaErBoligensAdresse","SkalDuLeieUtBoligen"];export{t as HvaErBoligensAdresse,n as NårBleBoligenBygget,i as SkalDuLeieUtBoligen,L as __namedExportsOrder,D as default};
