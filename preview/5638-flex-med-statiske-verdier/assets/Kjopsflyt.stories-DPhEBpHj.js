import{j as e}from"./iframe-CDskDVd3.js";import{S as m}from"./Select-BFZHzvC-.js";import{B as o}from"./Button-Bd0KnSh-.js";import{F as r}from"./Flex-B0wHzBja.js";import{F as s}from"./FieldGroup-DiLyi_NY.js";import{R as a}from"./RadioPanel-DhhEvDKr.js";import{T as d}from"./TextInput-BL5kteGS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-8ak0LOp7.js";import"./useId-CLp_Cuzu.js";import"./Label-844O8U-l.js";import"./SupportLabel-Bg3BdEHf.js";import"./WarningIcon-CW7_FNmZ.js";import"./Icon-DCpRypxG.js";import"./ArrowDownIcon-Bf2l2-1w.js";import"./usePreviousValue-BQPQeCOM.js";import"./Loader-D6mWKq7P.js";import"./useDelayedRender-BiKDKNNC.js";import"./tokens-CMcKomMy.js";import"./SlotComponent-H2ulQCVf.js";import"./mergeRefs-B9yvfKff.js";import"./InputPanel-Bf_hCqar.js";import"./Checkbox-BE4YPyHD.js";import"./RadioButton-DqQWPRn3.js";import"./BaseRadioButton-BCWImKHz.js";import"./BaseTextInput-CBAtcHGj.js";import"./IconButton-DXiOEa0S.js";const D={title:"Skjermbilder/Kjøpsflyt",parameters:{layout:"centered"},args:{labelProps:{variant:"large"}}},n={name:"Når ble boligen bygget?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsx(s,{legend:"Når ble boligen bygget?",description:"Her kommer det en hjelpetekst",...l,children:e.jsx(d,{label:"Byggeår",defaultValue:1960})})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},t={name:"Hva er boligens adresse?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Hva er boligens adresse?",description:"Her kommer det en hjelpetekst",...l,children:[e.jsx(d,{label:"Postnummer",placeholder:"Postnummer"}),e.jsx(m,{label:"Adresse",placeholder:"Velg adresse",children:e.jsx("option",{value:"Kitterødveien",children:"Kitterødveien"})}),e.jsx(m,{label:"Gatenummer",placeholder:"Velg nummer",children:e.jsx("option",{value:"Kitterødveien",children:"10"})})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},i={name:"Skal du leie ut boligen?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Skal du leie ut boligen?",...l,children:[e.jsx(a,{name:"boligutleie",label:"Ja, hele boligen",value:"Ja, hele boligen"}),e.jsx(a,{name:"boligutleie",label:"Ja, deler av boligen",value:"Ja, deler av boligen"}),e.jsx(a,{name:"boligutleie",label:"Nei",value:"Nei"})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
