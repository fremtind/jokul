import{j as e}from"./iframe-DzTuKauP.js";import{B as o}from"./Button-DZxDP31h.js";import{F as r}from"./Flex-BHIXJgvw.js";import{F as s}from"./FieldGroup-BKIONSFo.js";import{R as i}from"./RadioPanel-BeIdm6AL.js";import{S as m}from"./Select-BNjxkVLx.js";import{T as d}from"./TextInput-DRdxWKWG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-DrSSzRLW.js";import"./Loader-D1V0dnho.js";import"./types-BlFGa32c.js";import"./useDelayedRender-ZfEtHh0C.js";import"./SlotComponent-DDNy9mTL.js";import"./mergeRefs-_7lZvp9j.js";import"./useId-BMkVc4Wk.js";import"./Label-DhCxIqh_.js";import"./SupportLabel-ClfhNeRx.js";import"./SuccessIcon-CqguTowU.js";import"./Icon-QQfnwt3Z.js";import"./WarningIcon-B9daxtNv.js";import"./InputPanel-BBRi8WC1.js";import"./Checkbox-jlcro5F5.js";import"./RadioButton-MGuFqiO7.js";import"./BaseRadioButton-DCDGZ17i.js";import"./InputGroup-CfjRKojP.js";import"./Search-D2xTHg5I.js";import"./Text-D7bRhh46.js";import"./Title-8VTIr__D.js";import"./useListNavigation-cPPUmUmq.js";import"./ArrowDownIcon-DDeqE6pq.js";import"./CloseIcon-NbL0ru_1.js";import"./BaseTextInput-mHD4xxTT.js";import"./IconButton-OUlBL7VJ.js";const w={title:"Skjermbilder/Kjøpsflyt",parameters:{layout:"centered"},args:{labelProps:{variant:"large"}}},n={name:"Når ble boligen bygget?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsx(s,{legend:"Når ble boligen bygget?",description:"Her kommer det en hjelpetekst",...l,children:e.jsx(d,{label:"Byggeår",defaultValue:1960})})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},t={name:"Hva er boligens adresse?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Hva er boligens adresse?",description:"Her kommer det en hjelpetekst",...l,children:[e.jsx(d,{label:"Postnummer",placeholder:"Postnummer"}),e.jsx(m,{searchable:!0,label:"Adresse",placeholder:"Velg adresse",items:[{value:"kitterødveien",label:"Kitterødveien"}]}),e.jsx(m,{searchable:!0,label:"Gatenummer",placeholder:"Velg nummer",items:[{value:"10",label:"10"}]})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},a={name:"Skal du leie ut boligen?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Skal du leie ut boligen?",...l,children:[e.jsx(i,{name:"boligutleie",label:"Ja, hele boligen",value:"Ja, hele boligen"}),e.jsx(i,{name:"boligutleie",label:"Ja, deler av boligen",value:"Ja, deler av boligen"}),e.jsx(i,{name:"boligutleie",label:"Nei",value:"Nei"})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},z=["NårBleBoligenBygget","HvaErBoligensAdresse","SkalDuLeieUtBoligen"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
