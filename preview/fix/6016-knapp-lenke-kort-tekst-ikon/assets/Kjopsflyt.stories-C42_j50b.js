import{j as e}from"./iframe-DYr4SLoh.js";import{S as m}from"./Select-Bfjssqkr.js";import{B as o}from"./Button-nQY7fcX6.js";import{F as r}from"./Flex-BIa9Uru3.js";import{F as s}from"./FieldGroup-CblOR0EC.js";import{R as a}from"./RadioPanel-DsrI0fs7.js";import{T as d}from"./TextInput-CkjAKTfN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-C-McYngy.js";import"./useId-IaY9OUdw.js";import"./Label-B4npST4T.js";import"./SupportLabel-CdQcSY1H.js";import"./WarningIcon-BGB5Qobm.js";import"./Icon-BQxFNxDd.js";import"./ArrowDownIcon-0P1QTpc3.js";import"./usePreviousValue-Xv7x5TK2.js";import"./Loader-DEIjmKQ4.js";import"./useDelayedRender-Cf7vo2zR.js";import"./SlotComponent-DT8SMLiI.js";import"./mergeRefs-C2D1eNDm.js";import"./InputPanel-wvGDCyr4.js";import"./Checkbox-soWwcZPl.js";import"./RadioButton-CmtMB3Xt.js";import"./BaseRadioButton-Dz6jCfuE.js";import"./BaseTextInput-BRob5MJP.js";import"./IconButton-3oiewNFy.js";const T={title:"Skjermbilder/Kjøpsflyt",parameters:{layout:"centered"},args:{labelProps:{variant:"large"}}},n={name:"Når ble boligen bygget?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsx(s,{legend:"Når ble boligen bygget?",description:"Her kommer det en hjelpetekst",...l,children:e.jsx(d,{label:"Byggeår",defaultValue:1960})})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},t={name:"Hva er boligens adresse?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Hva er boligens adresse?",description:"Her kommer det en hjelpetekst",...l,children:[e.jsx(d,{label:"Postnummer",placeholder:"Postnummer"}),e.jsx(m,{label:"Adresse",placeholder:"Velg adresse",children:e.jsx("option",{value:"Kitterødveien",children:"Kitterødveien"})}),e.jsx(m,{label:"Gatenummer",placeholder:"Velg nummer",children:e.jsx("option",{value:"Kitterødveien",children:"10"})})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})},i={name:"Skal du leie ut boligen?",render:l=>e.jsxs(r,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(r,{direction:"column",gap:"m",asChild:!0,children:e.jsxs(s,{legend:"Skal du leie ut boligen?",...l,children:[e.jsx(a,{name:"boligutleie",label:"Ja, hele boligen",value:"Ja, hele boligen"}),e.jsx(a,{name:"boligutleie",label:"Ja, deler av boligen",value:"Ja, deler av boligen"}),e.jsx(a,{name:"boligutleie",label:"Nei",value:"Nei"})]})}),e.jsx(o,{variant:"primary",children:"Fortsett"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const D=["NårBleBoligenBygget","HvaErBoligensAdresse","SkalDuLeieUtBoligen"];export{t as HvaErBoligensAdresse,n as NårBleBoligenBygget,i as SkalDuLeieUtBoligen,D as __namedExportsOrder,T as default};
