import{j as e}from"./iframe-B0QN_n6q.js";import{B as o}from"./Button-_JGUB1LP.js";import{F as r}from"./Flex-ysELkmIv.js";import{F as s}from"./FieldGroup-BLTxT3I3.js";import{R as i}from"./RadioPanel-C1nGXjqG.js";import{S as m}from"./Select-DFeMpxha.js";import{T as d}from"./TextInput-D8jfgf7B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-DYSw6zXq.js";import"./Loader-BeAWbqAQ.js";import"./types-BlFGa32c.js";import"./useDelayedRender-B1Wlhzbj.js";import"./SlotComponent-a9WlDpub.js";import"./mergeRefs-_7lZvp9j.js";import"./useId-CHwIbYSm.js";import"./Label-DXv5NYk8.js";import"./SupportLabel-Dgu0vnFV.js";import"./SuccessIcon-BO6enRi_.js";import"./Icon-Dh7uMuIe.js";import"./WarningIcon-DuSf8KGa.js";import"./InputPanel-CWzL_e_D.js";import"./Checkbox-BU_R5GMV.js";import"./RadioButton-RH_01ouG.js";import"./BaseRadioButton-Ckac9U0o.js";import"./InputGroup-matRMi3D.js";import"./Search-CEfjHTZ5.js";import"./Text-B_t3zR9B.js";import"./Title-CJeWgS9a.js";import"./useListNavigation-Cqbv2hR4.js";import"./ArrowDownIcon-DfTjvmMi.js";import"./CloseIcon-B-YG8lIc.js";import"./BaseTextInput-DEiRk4x3.js";import"./IconButton-BNPkCbT-.js";const w={title:"Skjermbilder/Kjøpsflyt",parameters:{layout:"centered"},args:{labelProps:{variant:"large"}}},n={name:"Når ble boligen bygget?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsx(s,{legend:"Når ble boligen bygget?",description:"Her kommer det en hjelpetekst",...l,children:e.jsx(d,{label:"Byggeår",defaultValue:1960})})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},t={name:"Hva er boligens adresse?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Hva er boligens adresse?",description:"Her kommer det en hjelpetekst",...l,children:[e.jsx(d,{label:"Postnummer",placeholder:"Postnummer"}),e.jsx(m,{searchable:!0,label:"Adresse",placeholder:"Velg adresse",items:[{value:"kitterødveien",label:"Kitterødveien"}]}),e.jsx(m,{searchable:!0,label:"Gatenummer",placeholder:"Velg nummer",items:[{value:"10",label:"10"}]})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},a={name:"Skal du leie ut boligen?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Skal du leie ut boligen?",...l,children:[e.jsx(i,{name:"boligutleie",label:"Ja, hele boligen",value:"Ja, hele boligen"}),e.jsx(i,{name:"boligutleie",label:"Ja, deler av boligen",value:"Ja, deler av boligen"}),e.jsx(i,{name:"boligutleie",label:"Nei",value:"Nei"})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},z=["NårBleBoligenBygget","HvaErBoligensAdresse","SkalDuLeieUtBoligen"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
