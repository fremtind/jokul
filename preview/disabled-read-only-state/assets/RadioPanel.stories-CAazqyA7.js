import{r as b,j as e}from"./iframe-o0m3menv.js";import{R as r}from"./RadioPanel-DGDu_Fg0.js";import{F as i}from"./Flex-BSig71-C.js";import{F as m}from"./FieldGroup-DYcstTN0.js";import{B as v}from"./Button-CXl0APQ6.js";import{T as u}from"./Title-Cq5i8qLj.js";import{C as x}from"./Card-CB0e7bMh.js";import{T as p}from"./Text-C8cj1umF.js";import{T as h}from"./Tag-D73Srnl9.js";import{E as g}from"./ExpandablePanel-DfZkh3Eq.js";import{L as j,C as c}from"./ListItem-D7z4h_5g.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C_KH8Z-E.js";import"./clsx-B-dksMZM.js";import"./Checkbox-Cj-nkzpL.js";import"./useId-C2y1bl-l.js";import"./RadioButton-qILp8xBj.js";import"./SupportLabel-UFV4r9Fs.js";import"./SuccessIcon-BVVr417w.js";import"./Icon-CHP4Ujl2.js";import"./WarningIcon-YEiE9qc_.js";import"./BaseRadioButton-DcXhD-2Y.js";import"./SlotComponent-CIywmpIV.js";import"./mergeRefs-CQG3iBAm.js";import"./Label-CHvJ6rAQ.js";import"./usePreviousValue-D7lSvtf5.js";import"./Loader-DbQQV1aU.js";import"./useDelayedRender-D9Ar9ZMn.js";import"./useAnimatedHeightBetween-D_OGESyC.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D874WqxX.js";import"./Expander-GvZFzxEa.js";import"./ChevronUpIcon-ViW49Dt6.js";const ne={title:"Komponenter/RadioPanel",component:r,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Forsikring",alwaysOpen:!0,"aria-invalid":!1},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},s={},a={args:{disabled:!0}},t={name:"Disabled og valgt",args:{disabled:!0,defaultChecked:!0}},o={render:n=>e.jsxs(i,{as:m,legend:"Velg en forsikring",name:"forsikring",defaultValue:"Livsforsikring",gap:"xs",direction:"column",children:[e.jsx(r,{...n,name:"forsikring",label:"Ulykkesforsikring",amount:"50 kr/mnd",value:"Ulykkesforsikring",description:`Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død.`}),e.jsx(r,{...n,name:"forsikring",label:"Innboforsikring",amount:"100 kr/mnd",value:"Innboforsikring",description:"Sikrer dine eiendeler mot brann, vannskader og tyveri."}),e.jsx(r,{...n,name:"forsikring",label:"Livsforsikring",amount:"200 kr/mnd",value:"Livsforsikring",description:`Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon.`})]})},l={name:"Dekningsvelger husforsikring",render:()=>e.jsxs(i,{direction:"column",gap:"s",style:{maxWidth:"50ch"},children:[e.jsx(u,{as:"h1",size:"l",children:"Hvilken forsikring passer for deg?"}),e.jsxs(i,{wrap:"wrap",gap:"xs",as:m,legend:"Velg dekning",labelProps:{srOnly:!0},children:[e.jsx(r,{defaultChecked:!0,name:"dekning",label:"Topp hus",value:"topp"}),e.jsx(r,{name:"dekning",label:"Standard hus",value:"standard"})]}),e.jsxs(x,{as:i,padding:"l",direction:"column",children:[e.jsxs(i,{as:"hgroup",gap:"none",direction:"column",alignItems:"center",children:[e.jsx(p,{size:"l",style:{color:"var(--jkl-color-text-subdued)"},children:"Topp hus"}),e.jsx(u,{as:"h2",size:"l",className:"jkl-spacing-s--bottom",children:"997 kr/mnd"}),e.jsx(h,{variant:"success",children:"Inkludert 32 % ansattrabatt"})]}),e.jsx(p,{size:"l",style:{textAlign:"center"},children:"Det beste vi kan gi deg. Vi har satt sammen en forsikring så du kan sove litt bedre om natta."}),e.jsxs(g,{outlined:!0,children:[e.jsx(g.Header,{children:"Forsikringen dekker"}),e.jsx(g.Content,{children:e.jsxs(j,{children:[e.jsx(c,{children:"Alt du kan tenke deg"}),e.jsx(c,{children:"Mere til"})]})})]})]})]})},d={render:n=>{const[k,f]=b.useState(!0);return e.jsxs(i,{as:m,legend:"Velg en forsikring",name:"forsikring",defaultValue:"Livsforsikring",gap:"xs",direction:"column",children:[e.jsx(r,{...n,name:"forsikring",label:"Ulykkesforsikring",amount:"50 kr/mnd",value:"Ulykkesforsikring",description:`Gir deg en engangsutbetaling hvis du skulle bli utsatt for
                    en ulykke som fører til medisinsk invaliditet eller død.`}),e.jsx(r,{...n,name:"forsikring",label:"Innboforsikring",amount:"100 kr/mnd",value:"Innboforsikring",description:"Sikrer dine eiendeler mot brann, vannskader og tyveri."}),e.jsx(r,{...n,name:"forsikring",label:"Livsforsikring",amount:"200 kr/mnd",value:"Livsforsikring",checked:k,description:`Gir dine etterlatte en engangsutbetaling hvis du dør.
                    Pengene kan de for eksempel bruke til å nedbetale lån og
                    tilpasse seg en ny livssituasjon.`}),e.jsx(v,{variant:"ghost",onClick:()=>f(!k),type:"button",children:"Toggle radio 3"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Disabled og valgt",
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const re=["RadioPanel","Disabled","DisabledValgt","VelgForsikring","Husforsikring","Controlled"];export{d as Controlled,a as Disabled,t as DisabledValgt,l as Husforsikring,s as RadioPanel,o as VelgForsikring,re as __namedExportsOrder,ne as default};
