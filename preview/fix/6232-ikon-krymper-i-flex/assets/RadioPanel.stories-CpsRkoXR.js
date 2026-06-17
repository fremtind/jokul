import{r as c,j as e}from"./iframe-BPJr1WNG.js";import{R as r}from"./RadioPanel-8UQvQ-Bz.js";import{F as i}from"./Flex-3DNmicVD.js";import{F as d}from"./FieldGroup-053urIFG.js";import{B as f}from"./Button-Do9ok-se.js";import{T as k}from"./Title-DZ9w48pN.js";import{C as b}from"./Card-DJOKNhFg.js";import{T as m}from"./Text-DNUydhiV.js";import{T as v}from"./Tag-BrII8YIV.js";import{a as l}from"./ExpandablePanel-z6gC_oGg.js";import{L as x,a as u}from"./ListItem-CGt0zocc.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CdFkW3D6.js";import"./clsx-B-dksMZM.js";import"./Checkbox-BAg07bg_.js";import"./useId-DRlhA7pK.js";import"./RadioButton-NgiEL-_y.js";import"./SupportLabel-DPt0FuTm.js";import"./SuccessIcon-DKrvNtZ1.js";import"./Icon-OAPQxwcA.js";import"./WarningIcon-Bt1oxkVf.js";import"./BaseRadioButton-CRLB-jFP.js";import"./SlotComponent-B8SrhfU6.js";import"./mergeRefs-vWI8JFZv.js";import"./Label-BvJFu5Dl.js";import"./usePreviousValue-B_A82HrS.js";import"./Loader-D7ryuOqv.js";import"./useDelayedRender-iyJoq60-.js";import"./useAnimatedHeightBetween-C-mtjDT1.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BO3PCBJt.js";import"./Expander-CoNZcdpa.js";import"./ChevronDownIcon-Bief1du9.js";import"./ChevronUpIcon-BBefpfSJ.js";const ee={title:"Komponenter/RadioPanel",component:r,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Forsikring",alwaysOpen:!0,"aria-invalid":!1},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},s={},a={render:n=>e.jsxs(i,{as:d,legend:"Velg en forsikring",name:"forsikring",defaultValue:"Livsforsikring",gap:"xs",direction:"column",children:[e.jsx(r,{...n,name:"forsikring",label:"Ulykkesforsikring",amount:"50 kr/mnd",value:"Ulykkesforsikring",description:`Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død.`}),e.jsx(r,{...n,name:"forsikring",label:"Innboforsikring",amount:"100 kr/mnd",value:"Innboforsikring",description:"Sikrer dine eiendeler mot brann, vannskader og tyveri."}),e.jsx(r,{...n,name:"forsikring",label:"Livsforsikring",amount:"200 kr/mnd",value:"Livsforsikring",description:`Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon.`})]})},t={name:"Dekningsvelger husforsikring",render:()=>e.jsxs(i,{direction:"column",gap:"s",style:{maxWidth:"50ch"},children:[e.jsx(k,{as:"h1",size:"l",children:"Hvilken forsikring passer for deg?"}),e.jsxs(i,{wrap:"wrap",gap:"xs",as:d,legend:"Velg dekning",labelProps:{srOnly:!0},children:[e.jsx(r,{defaultChecked:!0,name:"dekning",label:"Topp hus",value:"topp"}),e.jsx(r,{name:"dekning",label:"Standard hus",value:"standard"})]}),e.jsxs(b,{as:i,padding:"l",direction:"column",children:[e.jsxs(i,{as:"hgroup",gap:"none",direction:"column",alignItems:"center",children:[e.jsx(m,{size:"l",style:{color:"var(--jkl-color-text-subdued)"},children:"Topp hus"}),e.jsx(k,{as:"h2",size:"l",className:"jkl-spacing-s--bottom",children:"997 kr/mnd"}),e.jsx(v,{variant:"success",children:"Inkludert 32 % ansattrabatt"})]}),e.jsx(m,{size:"l",style:{textAlign:"center"},children:"Det beste vi kan gi deg. Vi har satt sammen en forsikring så du kan sove litt bedre om natta."}),e.jsxs(l,{outlined:!0,children:[e.jsx(l.Header,{children:"Forsikringen dekker"}),e.jsx(l.Content,{children:e.jsxs(x,{children:[e.jsx(u,{children:"Alt du kan tenke deg"}),e.jsx(u,{children:"Mere til"})]})})]})]})]})},o={render:n=>{const[g,p]=c.useState(!0);return e.jsxs(i,{as:d,legend:"Velg en forsikring",name:"forsikring",defaultValue:"Livsforsikring",gap:"xs",direction:"column",children:[e.jsx(r,{...n,name:"forsikring",label:"Ulykkesforsikring",amount:"50 kr/mnd",value:"Ulykkesforsikring",description:`Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død.`}),e.jsx(r,{...n,name:"forsikring",label:"Innboforsikring",amount:"100 kr/mnd",value:"Innboforsikring",description:"Sikrer dine eiendeler mot brann, vannskader og tyveri."}),e.jsx(r,{...n,name:"forsikring",label:"Livsforsikring",amount:"200 kr/mnd",value:"Livsforsikring",checked:g,description:`Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon.`}),e.jsx(f,{variant:"ghost",onClick:()=>p(!g),type:"button",children:"Toggle radio 3"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Flex as={FieldGroup} legend="Velg en forsikring" name="forsikring" defaultValue="Livsforsikring" gap="xs" direction="column">
                <RadioPanelComponent {...args} name="forsikring" label="Ulykkesforsikring" amount="50 kr/mnd" value="Ulykkesforsikring" description="Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død." />

                <RadioPanelComponent {...args} name="forsikring" label="Innboforsikring" amount="100 kr/mnd" value="Innboforsikring" description="Sikrer dine eiendeler mot brann, vannskader og tyveri." />
                <RadioPanelComponent {...args} name="forsikring" label="Livsforsikring" amount="200 kr/mnd" value="Livsforsikring" description="Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon." />
            </Flex>;
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Dekningsvelger husforsikring",
  render: () => <Flex direction="column" gap="s" style={{
    maxWidth: "50ch"
  }}>
            <Title as="h1" size="l">
                Hvilken forsikring passer for deg?
            </Title>
            <Flex wrap="wrap" gap="xs" as={FieldGroup} legend="Velg dekning" labelProps={{
      srOnly: true
    }}>
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Flex as={FieldGroup} legend="Velg en forsikring" name="forsikring" defaultValue="Livsforsikring" gap="xs" direction="column">
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
}`,...o.parameters?.docs?.source}}};const ne=["RadioPanel","VelgForsikring","Husforsikring","Controlled"];export{o as Controlled,t as Husforsikring,s as RadioPanel,a as VelgForsikring,ne as __namedExportsOrder,ee as default};
