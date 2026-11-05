import{j as e}from"./iframe-DzEFgUnG.js";import{B as o}from"./Button-OjJsKt5W.js";import{F as r}from"./Flex-zUCcA0Qd.js";import{F as s}from"./FieldGroup-DA_LGZvW.js";import{R as i}from"./RadioPanel-O_43FDVY.js";import{S as m}from"./Select-CQMwzcur.js";import{T as d}from"./TextInput-D0NoX5Bp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-BlVmHVLq.js";import"./Loader-E78CgjPI.js";import"./types-BlFGa32c.js";import"./useDelayedRender-BgwyPjOa.js";import"./SlotComponent-Bm-RVOen.js";import"./mergeRefs-_7lZvp9j.js";import"./useId-CJtcKg1u.js";import"./Label-CdlRMt5Q.js";import"./SupportLabel-Cl3i-d7k.js";import"./SuccessIcon-Cjz1Iqs4.js";import"./Icon-C3AtQ1s0.js";import"./WarningIcon-DF7eCEIy.js";import"./InputPanel-Cl0IRUxo.js";import"./Checkbox-WHiDHQg4.js";import"./RadioButton-4qzK8noe.js";import"./BaseRadioButton-BOAzP8NM.js";import"./InputGroup-CabKt8IA.js";import"./Search-DcH8qQD3.js";import"./Text-C4EYEipQ.js";import"./Title-BXi0SijQ.js";import"./useListNavigation-CQpbzfUY.js";import"./ArrowDownIcon-DpN-W_Ji.js";import"./CloseIcon-BmzEPriB.js";import"./BaseTextInput-CJB1QT8k.js";import"./IconButton-BGydPOUN.js";const w={title:"Skjermbilder/Kjøpsflyt",parameters:{layout:"centered"},args:{labelProps:{variant:"large"}}},n={name:"Når ble boligen bygget?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsx(s,{legend:"Når ble boligen bygget?",description:"Her kommer det en hjelpetekst",...l,children:e.jsx(d,{label:"Byggeår",defaultValue:1960})})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},t={name:"Hva er boligens adresse?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Hva er boligens adresse?",description:"Her kommer det en hjelpetekst",...l,children:[e.jsx(d,{label:"Postnummer",placeholder:"Postnummer"}),e.jsx(m,{searchable:!0,label:"Adresse",placeholder:"Velg adresse",items:[{value:"kitterødveien",label:"Kitterødveien"}]}),e.jsx(m,{searchable:!0,label:"Gatenummer",placeholder:"Velg nummer",items:[{value:"10",label:"10"}]})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},a={name:"Skal du leie ut boligen?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Skal du leie ut boligen?",...l,children:[e.jsx(i,{name:"boligutleie",label:"Ja, hele boligen",value:"Ja, hele boligen"}),e.jsx(i,{name:"boligutleie",label:"Ja, deler av boligen",value:"Ja, deler av boligen"}),e.jsx(i,{name:"boligutleie",label:"Nei",value:"Nei"})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},z=["NårBleBoligenBygget","HvaErBoligensAdresse","SkalDuLeieUtBoligen"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
