import{j as e}from"./iframe-zYjFaosY.js";import{B as o}from"./Button-Dj06Y6lY.js";import{F as r}from"./Flex-BQFypPYY.js";import{F as s}from"./FieldGroup-BYghBuU3.js";import{R as i}from"./RadioPanel-CUCwUWJu.js";import{S as m}from"./Select-D23CaCEy.js";import{T as d}from"./TextInput-DjBa2S2w.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BbkcQkq-.js";import"./Loader-DsFj8iJe.js";import"./types-BlFGa32c.js";import"./useDelayedRender-BXvnSIuQ.js";import"./SlotComponent-j-dumhEe.js";import"./mergeRefs-_7lZvp9j.js";import"./useId-Fzq7xGvL.js";import"./Label-2Fqe-gqN.js";import"./SupportLabel-B-MOJ_Yi.js";import"./SuccessIcon-CRnuEV83.js";import"./Icon-BeP4i7i2.js";import"./WarningIcon-CRnWKH9t.js";import"./InputPanel-pXWmgnAm.js";import"./Checkbox-BPJU8Oun.js";import"./RadioButton-Cz3v45jc.js";import"./BaseRadioButton-B-IYiW-k.js";import"./InputGroup-Rttgjz4K.js";import"./Search-vtj4-qrr.js";import"./Text-C0ZBU5LE.js";import"./Title-WD-HWMBZ.js";import"./useListNavigation-ZuiLHdj9.js";import"./ArrowDownIcon-C2zjxp7h.js";import"./CloseIcon-d5HK31Pf.js";import"./BaseTextInput-DZgu2UUi.js";import"./IconButton-fNszgCr3.js";const w={title:"Skjermbilder/Kjøpsflyt",parameters:{layout:"centered"},args:{labelProps:{variant:"large"}}},n={name:"Når ble boligen bygget?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsx(s,{legend:"Når ble boligen bygget?",description:"Her kommer det en hjelpetekst",...l,children:e.jsx(d,{label:"Byggeår",defaultValue:1960})})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},t={name:"Hva er boligens adresse?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Hva er boligens adresse?",description:"Her kommer det en hjelpetekst",...l,children:[e.jsx(d,{label:"Postnummer",placeholder:"Postnummer"}),e.jsx(m,{searchable:!0,label:"Adresse",placeholder:"Velg adresse",items:[{value:"kitterødveien",label:"Kitterødveien"}]}),e.jsx(m,{searchable:!0,label:"Gatenummer",placeholder:"Velg nummer",items:[{value:"10",label:"10"}]})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},a={name:"Skal du leie ut boligen?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Skal du leie ut boligen?",...l,children:[e.jsx(i,{name:"boligutleie",label:"Ja, hele boligen",value:"Ja, hele boligen"}),e.jsx(i,{name:"boligutleie",label:"Ja, deler av boligen",value:"Ja, deler av boligen"}),e.jsx(i,{name:"boligutleie",label:"Nei",value:"Nei"})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},z=["NårBleBoligenBygget","HvaErBoligensAdresse","SkalDuLeieUtBoligen"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{t as HvaErBoligensAdresse,n as NårBleBoligenBygget,a as SkalDuLeieUtBoligen,z as __namedExportsOrder,w as default};
