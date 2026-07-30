import{j as e}from"./iframe-D8Mx1idX.js";import{S as m}from"./Select-QuxyS23G.js";import{B as o}from"./Button-CqF_wk2a.js";import{F as r}from"./Flex-CSWdeZTH.js";import{F as s}from"./FieldGroup-CyE2UGv4.js";import{R as a}from"./RadioPanel-BB4v6Ka6.js";import{T as d}from"./TextInput-BOp-QgPl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-CncfNopc.js";import"./useId-CnO4CdBG.js";import"./Label-Df-c3Sb5.js";import"./SupportLabel-CbsFLFo0.js";import"./SuccessIcon-BTMB6EUA.js";import"./Icon-CqGzkYJ8.js";import"./WarningIcon-Bm6i4RoG.js";import"./ArrowDownIcon-ClaMJgqZ.js";import"./usePreviousValue-BGHjpM9P.js";import"./Loader-BtJEn-_r.js";import"./useDelayedRender-Wi0bWq5D.js";import"./SlotComponent-DfJH0opL.js";import"./mergeRefs-D1MPdAvZ.js";import"./InputPanel-A1UGCS7S.js";import"./Checkbox-CM3ybPAv.js";import"./RadioButton-j1QnM8Mi.js";import"./BaseRadioButton-OHmJuSrd.js";import"./BaseTextInput-Dp47zEGU.js";import"./IconButton-4J3377Aj.js";const D={title:"Skjermbilder/Kjøpsflyt",parameters:{layout:"centered"},args:{labelProps:{variant:"large"}}},n={name:"Når ble boligen bygget?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsx(s,{legend:"Når ble boligen bygget?",description:"Her kommer det en hjelpetekst",...l,children:e.jsx(d,{label:"Byggeår",defaultValue:1960})})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},t={name:"Hva er boligens adresse?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Hva er boligens adresse?",description:"Her kommer det en hjelpetekst",...l,children:[e.jsx(d,{label:"Postnummer",placeholder:"Postnummer"}),e.jsx(m,{label:"Adresse",placeholder:"Velg adresse",children:e.jsx("option",{value:"Kitterødveien",children:"Kitterødveien"})}),e.jsx(m,{label:"Gatenummer",placeholder:"Velg nummer",children:e.jsx("option",{value:"Kitterødveien",children:"10"})})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},i={name:"Skal du leie ut boligen?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Skal du leie ut boligen?",...l,children:[e.jsx(a,{name:"boligutleie",label:"Ja, hele boligen",value:"Ja, hele boligen"}),e.jsx(a,{name:"boligutleie",label:"Ja, deler av boligen",value:"Ja, deler av boligen"}),e.jsx(a,{name:"boligutleie",label:"Nei",value:"Nei"})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
