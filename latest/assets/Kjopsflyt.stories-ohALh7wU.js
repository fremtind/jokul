import{j as e}from"./iframe-Di3ffKTP.js";import{B as o}from"./Button-CdGKzCSf.js";import{F as r}from"./Flex-D4uOU21s.js";import{F as s}from"./FieldGroup-BXQ8id-I.js";import{R as i}from"./RadioPanel-DawmNjL2.js";import{S as m}from"./Select-DnVZ715o.js";import{T as d}from"./TextInput-t4DWlsfZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-CJwjFF0-.js";import"./Loader-9WKSzcAi.js";import"./useDelayedRender-DnX3nlrx.js";import"./SlotComponent-D9rcEqHC.js";import"./mergeRefs-_7lZvp9j.js";import"./useId-C3bTmqGz.js";import"./Label-dJA30Sj3.js";import"./SupportLabel-Nr1x9upU.js";import"./SuccessIcon-B_7Ws1aU.js";import"./Icon-DJ7eB7hM.js";import"./WarningIcon-ztgYcCBH.js";import"./InputPanel-Dv5C5ZmO.js";import"./Checkbox-DQ_2lOxD.js";import"./RadioButton-BNsxWxSd.js";import"./BaseRadioButton-9T2phVDC.js";import"./InputGroup-PwqnpUza.js";import"./Search-D0oW079_.js";import"./Text-0W0_5fLm.js";import"./Title-lxjMmtB1.js";import"./useListNavigation-D7TYTp-f.js";import"./ArrowDownIcon-rVGTK03H.js";import"./CloseIcon-DF72N4Hv.js";import"./BaseTextInput-DPQ9n5Fp.js";import"./IconButton-CTWdUvS-.js";const q={title:"Skjermbilder/Kjøpsflyt",parameters:{layout:"centered"},args:{labelProps:{variant:"large"}}},n={name:"Når ble boligen bygget?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsx(s,{legend:"Når ble boligen bygget?",description:"Her kommer det en hjelpetekst",...l,children:e.jsx(d,{label:"Byggeår",defaultValue:1960})})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},t={name:"Hva er boligens adresse?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Hva er boligens adresse?",description:"Her kommer det en hjelpetekst",...l,children:[e.jsx(d,{label:"Postnummer",placeholder:"Postnummer"}),e.jsx(m,{searchable:!0,label:"Adresse",placeholder:"Velg adresse",items:[{value:"kitterødveien",label:"Kitterødveien"}]}),e.jsx(m,{searchable:!0,label:"Gatenummer",placeholder:"Velg nummer",items:[{value:"10",label:"10"}]})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},a={name:"Skal du leie ut boligen?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Skal du leie ut boligen?",...l,children:[e.jsx(i,{name:"boligutleie",label:"Ja, hele boligen",value:"Ja, hele boligen"}),e.jsx(i,{name:"boligutleie",label:"Ja, deler av boligen",value:"Ja, deler av boligen"}),e.jsx(i,{name:"boligutleie",label:"Nei",value:"Nei"})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},w=["NårBleBoligenBygget","HvaErBoligensAdresse","SkalDuLeieUtBoligen"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
                        <Select searchable label="Adresse" placeholder="Velg adresse" items={[{
            value: "kitterødveien",
            label: "Kitterødveien"
          }]} />
                        <Select searchable label="Gatenummer" placeholder="Velg nummer" items={[{
            value: "10",
            label: "10"
          }]} />
                    </FieldGroup>
                </Flex>
                <Button variant="primary">Fortsett</Button>
            </Flex>;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{t as HvaErBoligensAdresse,n as NårBleBoligenBygget,a as SkalDuLeieUtBoligen,w as __namedExportsOrder,q as default};
