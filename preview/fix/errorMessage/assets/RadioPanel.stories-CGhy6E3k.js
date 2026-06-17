import{r as f,j as e}from"./iframe-DW3e9-7K.js";import{R as n}from"./RadioPanel-BBcbX5H1.js";import{F as i}from"./Flex-DarP0l5M.js";import{F as g}from"./FieldGroup-DxjUR3Gn.js";import{B as b}from"./Button-C5wcjRf4.js";import{T as m}from"./Title-DtRAHIwt.js";import{C as v}from"./Card-ftD3Nt3w.js";import{T as u}from"./Text-CV_OhzW1.js";import{T as x}from"./Tag-CsLTr4dH.js";import{a as d}from"./ExpandablePanel-C3uFHzKw.js";import{L as h,a as p}from"./ListItem-SqKMh591.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B5ZQovG8.js";import"./clsx-B-dksMZM.js";import"./Checkbox-CzZEZuRf.js";import"./useId-ukZfM2JJ.js";import"./SupportLabel-DN6Y5ht3.js";import"./SuccessIcon-D_dk47XL.js";import"./Icon-vjKgXSRv.js";import"./WarningIcon-rzLA1h-n.js";import"./RadioButton-hWHBig-4.js";import"./BaseRadioButton-B7PBkhOS.js";import"./SlotComponent-CEGNcJvM.js";import"./mergeRefs-VvSEQklS.js";import"./Label-mZQVCVTl.js";import"./usePreviousValue-BK-zRzlE.js";import"./Loader-BJJbTDEz.js";import"./useDelayedRender-IofafT3W.js";import"./useAnimatedHeightBetween-D_U4a5rG.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CXNGM1Mt.js";import"./Expander-rVYvK-Q7.js";import"./ChevronDownIcon-C9ewTPDn.js";import"./ChevronUpIcon-CWyeUCEf.js";const ne={title:"Komponenter/RadioPanel",component:n,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Forsikring",alwaysOpen:!0,"aria-invalid":!1,errorLabel:""}},a={},t={render:({errorLabel:s,...r})=>e.jsxs(i,{as:g,legend:"Velg en forsikring",name:"forsikring",defaultValue:"Livsforsikring",gap:"xs",direction:"column",errorLabel:s,children:[e.jsx(n,{...r,name:"forsikring",label:"Ulykkesforsikring",amount:"50 kr/mnd",value:"Ulykkesforsikring",description:`Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død.`}),e.jsx(n,{...r,name:"forsikring",label:"Innboforsikring",amount:"100 kr/mnd",value:"Innboforsikring",description:"Sikrer dine eiendeler mot brann, vannskader og tyveri."}),e.jsx(n,{...r,name:"forsikring",label:"Livsforsikring",amount:"200 kr/mnd",value:"Livsforsikring",description:`Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon.`})]})},o={name:"Dekningsvelger husforsikring",render:({errorLabel:s,...r})=>e.jsxs(i,{direction:"column",gap:"s",style:{maxWidth:"50ch"},children:[e.jsx(m,{as:"h1",size:"l",children:"Hvilken forsikring passer for deg?"}),e.jsxs(i,{wrap:"wrap",gap:"xs",as:g,legend:"Velg dekning",labelProps:{srOnly:!0},errorLabel:s,children:[e.jsx(n,{defaultChecked:!0,name:"dekning",label:"Topp hus",value:"topp"}),e.jsx(n,{name:"dekning",label:"Standard hus",value:"standard"})]}),e.jsxs(v,{as:i,padding:"l",direction:"column",children:[e.jsxs(i,{as:"hgroup",gap:"none",direction:"column",alignItems:"center",children:[e.jsx(u,{size:"l",style:{color:"var(--jkl-color-text-subdued)"},children:"Topp hus"}),e.jsx(m,{as:"h2",size:"l",className:"jkl-spacing-s--bottom",children:"997 kr/mnd"}),e.jsx(x,{variant:"success",children:"Inkludert 32 % ansattrabatt"})]}),e.jsx(u,{size:"l",style:{textAlign:"center"},children:"Det beste vi kan gi deg. Vi har satt sammen en forsikring så du kan sove litt bedre om natta."}),e.jsxs(d,{outlined:!0,children:[e.jsx(d.Header,{children:"Forsikringen dekker"}),e.jsx(d.Content,{children:e.jsxs(h,{children:[e.jsx(p,{children:"Alt du kan tenke deg"}),e.jsx(p,{children:"Mere til"})]})})]})]})]})},l={render:({errorLabel:s,...r})=>{const[k,c]=f.useState(!0);return e.jsxs(i,{as:g,legend:"Velg en forsikring",name:"forsikring",defaultValue:"Livsforsikring",gap:"xs",direction:"column",errorLabel:s,children:[e.jsx(n,{...r,name:"forsikring",label:"Ulykkesforsikring",amount:"50 kr/mnd",value:"Ulykkesforsikring",description:`Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død.`}),e.jsx(n,{...r,name:"forsikring",label:"Innboforsikring",amount:"100 kr/mnd",value:"Innboforsikring",description:"Sikrer dine eiendeler mot brann, vannskader og tyveri."}),e.jsx(n,{...r,name:"forsikring",label:"Livsforsikring",amount:"200 kr/mnd",value:"Livsforsikring",checked:k,description:`Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon.`}),e.jsx(b,{variant:"ghost",onClick:()=>c(!k),type:"button",children:"Toggle radio 3"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: ({
    errorLabel,
    ...args
  }: RadioPanelStoryArgs) => {
    return <Flex as={FieldGroup} legend="Velg en forsikring" name="forsikring" defaultValue="Livsforsikring" gap="xs" direction="column" errorLabel={errorLabel}>
                <RadioPanelComponent {...args} name="forsikring" label="Ulykkesforsikring" amount="50 kr/mnd" value="Ulykkesforsikring" description="Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død." />

                <RadioPanelComponent {...args} name="forsikring" label="Innboforsikring" amount="100 kr/mnd" value="Innboforsikring" description="Sikrer dine eiendeler mot brann, vannskader og tyveri." />
                <RadioPanelComponent {...args} name="forsikring" label="Livsforsikring" amount="200 kr/mnd" value="Livsforsikring" description="Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon." />
            </Flex>;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Dekningsvelger husforsikring",
  render: ({
    errorLabel,
    ...args
  }: RadioPanelStoryArgs) => <Flex direction="column" gap="s" style={{
    maxWidth: "50ch"
  }}>
            <Title as="h1" size="l">
                Hvilken forsikring passer for deg?
            </Title>
            <Flex wrap="wrap" gap="xs" as={FieldGroup} legend="Velg dekning" labelProps={{
      srOnly: true
    }} errorLabel={errorLabel}>
                <RadioPanelComponent defaultChecked name="dekning" label="Topp hus" value="topp" />
                <RadioPanelComponent name="dekning" label="Standard hus" value="standard" />
            </Flex>
            <Card as={Flex} padding="l" direction="column">
                <Flex as="hgroup" gap="none" direction="column" alignItems="center">
                    <Text size="l" style={{
          color: "var(--jkl-color-text-subdued)"
        }}>
                        Topp hus
                    </Text>
                    <Title as="h2" size="l" className="jkl-spacing-s--bottom">
                        997 kr/mnd
                    </Title>
                    <Tag variant="success">Inkludert 32 % ansattrabatt</Tag>
                </Flex>
                <Text size="l" style={{
        textAlign: "center"
      }}>
                    Det beste vi kan gi deg. Vi har satt sammen en forsikring så
                    du kan sove litt bedre om natta.
                </Text>
                <ExpandablePanel outlined>
                    <ExpandablePanel.Header>
                        Forsikringen dekker
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>
                        <List>
                            <CheckListItem>Alt du kan tenke deg</CheckListItem>
                            <CheckListItem>Mere til</CheckListItem>
                        </List>
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            </Card>
        </Flex>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ({
    errorLabel,
    ...args
  }: RadioPanelStoryArgs) => {
    const [checked, setChecked] = useState(true);
    return <Flex as={FieldGroup} legend="Velg en forsikring" name="forsikring" defaultValue="Livsforsikring" gap="xs" direction="column" errorLabel={errorLabel}>
                <RadioPanelComponent {...args} name="forsikring" label="Ulykkesforsikring" amount="50 kr/mnd" value="Ulykkesforsikring" description="Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død." />

                <RadioPanelComponent {...args} name="forsikring" label="Innboforsikring" amount="100 kr/mnd" value="Innboforsikring" description="Sikrer dine eiendeler mot brann, vannskader og tyveri." />
                <RadioPanelComponent {...args} name="forsikring" label="Livsforsikring" amount="200 kr/mnd" value="Livsforsikring" checked={checked} description="Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon." />
                <Button variant="ghost" onClick={() => setChecked(!checked)} type="button">
                    Toggle radio 3
                </Button>
            </Flex>;
  }
}`,...l.parameters?.docs?.source}}};const re=["RadioPanel","VelgForsikring","Husforsikring","Controlled"];export{l as Controlled,o as Husforsikring,a as RadioPanel,t as VelgForsikring,re as __namedExportsOrder,ne as default};
