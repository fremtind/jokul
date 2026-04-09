import{j as e,R as y}from"./iframe-CIWrPPej.js";import{C as u}from"./Card-Btr0aMI5.js";import{F as b}from"./Flex-BqowO9R5.js";import{E as f,a as t}from"./ExpandablePanel-0Cxsau9F.js";import{E as h}from"./Expander-BaqV5SUq.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BRlVEEIH.js";import"./mergeRefs-D0frwoqB.js";import"./useAnimatedHeightBetween-h2xSLCqD.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C-sxKr9K.js";import"./usePreviousValue-Bo3heLKp.js";import"./ChevronDownIcon-Cg_nrIpM.js";import"./Icon-3ZICRJM0.js";import"./ChevronUpIcon-ZaCLb1_U.js";const{expect:l,waitFor:s}=__STORYBOOK_MODULE_TEST__,D={title:"Komponenter/ExpandablePanel",component:t,subcomponents:{Expander:h,ExpandablePanelContent:f},args:{variant:"fill"},argTypes:{variant:{control:"radio",options:["fill","stroke"]}}},p={decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx(n,{})})],render:n=>e.jsx(b,{direction:"column",gap:"xs",children:["first","second","third"].map(a=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{children:"Klikk på meg for å åpne!"}),e.jsx(t.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},a))})},o={args:{variant:"stroke"},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx(n,{})})],render:n=>e.jsx(e.Fragment,{children:["first","second","third"].map(a=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{children:"Klikk på meg for å åpne!"}),e.jsx(t.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},a))})},g={name:"Stroke standalone",args:{variant:"stroke"},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx(u,{padding:"l",style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsx("p",{style:{margin:0},children:"Et standalone panel skal beholde ytre border radius selv om det ligger mellom andre elementer."}),e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"stroke-standalone-trigger",children:"Klikk på meg for å åpne!"}),e.jsx(t.Content,{"data-testid":"stroke-standalone-content",children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00."})]}),e.jsx("p",{style:{margin:0},children:"Panelgruppen fortsetter ikke under her."})]}),play:async({canvas:n,userEvent:a,step:r})=>{await r("Åpne standalone stroke-panelet",async()=>{const i=n.getByTestId("stroke-standalone-trigger"),d=n.getByTestId("stroke-standalone-content");l(d).toHaveAttribute("data-expanded","false"),await a.click(i),await s(()=>{l(d).toHaveAttribute("data-expanded","true")})})}},c={name:"Fill standalone",decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsx("p",{style:{margin:0},children:"Et standalone panel med fill-variant skal fungere uten å være del av en panelgruppe."}),e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"fill-standalone-trigger",children:"Hva dekker reiseforsikringen på vei til flyplassen?"}),e.jsx(t.Content,{"data-testid":"fill-standalone-content",children:"Reiseforsikringen dekker blant annet forsinket bagasje og avbestilling ved akutt sykdom når reisen er betalt med kortet."})]})]}),play:async({canvas:n,userEvent:a,step:r})=>{await r("Åpne standalone fill-panelet",async()=>{const i=n.getByTestId("fill-standalone-trigger"),d=n.getByTestId("fill-standalone-content");l(d).toHaveAttribute("data-expanded","false"),await a.click(i),await s(()=>{l(d).toHaveAttribute("data-expanded","true")})})}},k={name:"Kontrollert",args:{variant:"stroke"},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>{const[a,r]=y.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsxs("p",{"data-testid":"controlled-state",style:{margin:0},children:["Status: ",a?"Åpen":"Lukket"]}),e.jsxs(t,{...n,open:a,onOpenChange:r,children:[e.jsx(t.Header,{"data-testid":"controlled-trigger",children:"Se dekning for leiebil"}),e.jsx(t.Content,{"data-testid":"controlled-content",children:"Forsikringen dekker skade, tyveri og egenandel når bilen er leid i Norden eller EU og leieforholdet er betalt med kortet."})]})]})},play:async({canvas:n,userEvent:a,step:r})=>{const i=n.getByTestId("controlled-trigger"),d=n.getByTestId("controlled-content"),m=n.getByTestId("controlled-state");await r("Åpne kontrollert panel",async()=>{l(d).toHaveAttribute("data-expanded","false"),l(m).toHaveTextContent("Status: Lukket"),await a.click(i),await s(()=>{l(d).toHaveAttribute("data-expanded","true"),l(m).toHaveTextContent("Status: Åpen")})}),await r("Lukk kontrollert panel",async()=>{await a.click(i),await s(()=>{l(d).toHaveAttribute("data-expanded","false"),l(m).toHaveTextContent("Status: Lukket")})})}},x={name:"Starter åpen",args:{variant:"stroke",defaultOpen:!0},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"initially-open-trigger",children:"Kontaktvalg for skadehjelp"}),e.jsx(t.Content,{"data-testid":"initially-open-content",children:"Ring oss pa 55 55 55 55, start chat eller be om at en rådgiver ringer deg tilbake innen 15 minutter."})]}),play:async({canvas:n,userEvent:a,step:r})=>{const i=n.getByTestId("initially-open-trigger"),d=n.getByTestId("initially-open-content");await r("Panelet er åpent ved start",async()=>{l(d).toHaveAttribute("data-expanded","true")}),await r("Panelet kan lukkes igjen",async()=>{await a.click(i),await s(()=>{l(d).toHaveAttribute("data-expanded","false")})})}},v={name:"Lang tittel",decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 20rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"long-title-trigger",children:"Hva skjer med egenandel, avbestilling og forsinket bagasje hvis hele familien blir forsinket pa vei til flyplassen?"}),e.jsx(t.Content,{"data-testid":"long-title-content",children:"Du er dekket for forsinket bagasje, avbestilling ved akutt sykdom og egenandel pa leiebil opptil 15 000 kroner."})]}),play:async({canvas:n,userEvent:a,step:r})=>{const i=n.getByTestId("long-title-trigger"),d=n.getByTestId("long-title-content");await r("Tittelen brytes over flere linjer",async()=>{l(i.getBoundingClientRect().height).toBeGreaterThan(64)}),await r("Panelet kan åpnes med lang tittel",async()=>{await a.click(i),await s(()=>{l(d).toHaveAttribute("data-expanded","true")})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <Story />
            </div>],
  render: args => <Flex direction="column" gap="xs">
            {["first", "second", "third"].map(panelKey => <ExpandablePanel key={panelKey} {...args}>
                    <ExpandablePanel.Header>
                        Klikk på meg for å åpne!
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>)}
        </Flex>
}`,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "stroke"
  },
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <Story />
            </div>],
  render: args => <>
            {["first", "second", "third"].map(panelKey => <ExpandablePanel key={panelKey} {...args}>
                    <ExpandablePanel.Header>
                        Klikk på meg for å åpne!
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>)}
        </>
}`,...o.parameters?.docs?.source},description:{story:"Stroke varianten skal ikke ha mellomrom mellom panelene.",...o.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Stroke standalone",
  args: {
    variant: "stroke"
  },
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <Card padding="l" style={{
      width: "min(100%, 32rem)"
    }}>
                    <Story />
                </Card>
            </div>],
  render: args => <div style={{
    display: "grid",
    gap: "16px"
  }}>
            <p style={{
      margin: 0
    }}>
                Et standalone panel skal beholde ytre border radius selv om det
                ligger mellom andre elementer.
            </p>
            <ExpandablePanel {...args}>
                <ExpandablePanel.Header data-testid="stroke-standalone-trigger">
                    Klikk på meg for å åpne!
                </ExpandablePanel.Header>
                <ExpandablePanel.Content data-testid="stroke-standalone-content">
                    Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag
                    til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss
                    fra 10:00 til 16:00.
                </ExpandablePanel.Content>
            </ExpandablePanel>
            <p style={{
      margin: 0
    }}>Panelgruppen fortsetter ikke under her.</p>
        </div>,
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    await step("Åpne standalone stroke-panelet", async () => {
      const trigger = canvas.getByTestId("stroke-standalone-trigger");
      const content = canvas.getByTestId("stroke-standalone-content");
      expect(content).toHaveAttribute("data-expanded", "false");
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "true");
      });
    });
  }
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Fill standalone",
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <div style={{
      width: "min(100%, 32rem)"
    }}>
                    <Story />
                </div>
            </div>],
  render: args => <div style={{
    display: "grid",
    gap: "16px"
  }}>
            <p style={{
      margin: 0
    }}>
                Et standalone panel med fill-variant skal fungere uten å være
                del av en panelgruppe.
            </p>
            <ExpandablePanel {...args}>
                <ExpandablePanel.Header data-testid="fill-standalone-trigger">
                    Hva dekker reiseforsikringen på vei til flyplassen?
                </ExpandablePanel.Header>
                <ExpandablePanel.Content data-testid="fill-standalone-content">
                    Reiseforsikringen dekker blant annet forsinket bagasje og
                    avbestilling ved akutt sykdom når reisen er betalt med
                    kortet.
                </ExpandablePanel.Content>
            </ExpandablePanel>
        </div>,
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    await step("Åpne standalone fill-panelet", async () => {
      const trigger = canvas.getByTestId("fill-standalone-trigger");
      const content = canvas.getByTestId("fill-standalone-content");
      expect(content).toHaveAttribute("data-expanded", "false");
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "true");
      });
    });
  }
}`,...c.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Kontrollert",
  args: {
    variant: "stroke"
  },
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <div style={{
      width: "min(100%, 32rem)"
    }}>
                    <Story />
                </div>
            </div>],
  render: args => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <div style={{
      display: "grid",
      gap: "16px"
    }}>
                <p data-testid="controlled-state" style={{
        margin: 0
      }}>
                    Status: {isOpen ? "Åpen" : "Lukket"}
                </p>
                <ExpandablePanel {...args} open={isOpen} onOpenChange={setIsOpen}>
                    <ExpandablePanel.Header data-testid="controlled-trigger">
                        Se dekning for leiebil
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content data-testid="controlled-content">
                        Forsikringen dekker skade, tyveri og egenandel når bilen
                        er leid i Norden eller EU og leieforholdet er betalt med
                        kortet.
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            </div>;
  },
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    const trigger = canvas.getByTestId("controlled-trigger");
    const content = canvas.getByTestId("controlled-content");
    const state = canvas.getByTestId("controlled-state");
    await step("Åpne kontrollert panel", async () => {
      expect(content).toHaveAttribute("data-expanded", "false");
      expect(state).toHaveTextContent("Status: Lukket");
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "true");
        expect(state).toHaveTextContent("Status: Åpen");
      });
    });
    await step("Lukk kontrollert panel", async () => {
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "false");
        expect(state).toHaveTextContent("Status: Lukket");
      });
    });
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Starter åpen",
  args: {
    variant: "stroke",
    defaultOpen: true
  },
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <div style={{
      width: "min(100%, 32rem)"
    }}>
                    <Story />
                </div>
            </div>],
  render: args => <ExpandablePanel {...args}>
            <ExpandablePanel.Header data-testid="initially-open-trigger">
                Kontaktvalg for skadehjelp
            </ExpandablePanel.Header>
            <ExpandablePanel.Content data-testid="initially-open-content">
                Ring oss pa 55 55 55 55, start chat eller be om at en rådgiver
                ringer deg tilbake innen 15 minutter.
            </ExpandablePanel.Content>
        </ExpandablePanel>,
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    const trigger = canvas.getByTestId("initially-open-trigger");
    const content = canvas.getByTestId("initially-open-content");
    await step("Panelet er åpent ved start", async () => {
      expect(content).toHaveAttribute("data-expanded", "true");
    });
    await step("Panelet kan lukkes igjen", async () => {
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "false");
      });
    });
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Lang tittel",
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <div style={{
      width: "min(100%, 20rem)"
    }}>
                    <Story />
                </div>
            </div>],
  render: args => <ExpandablePanel {...args}>
            <ExpandablePanel.Header data-testid="long-title-trigger">
                Hva skjer med egenandel, avbestilling og forsinket bagasje hvis
                hele familien blir forsinket pa vei til flyplassen?
            </ExpandablePanel.Header>
            <ExpandablePanel.Content data-testid="long-title-content">
                Du er dekket for forsinket bagasje, avbestilling ved akutt
                sykdom og egenandel pa leiebil opptil 15 000 kroner.
            </ExpandablePanel.Content>
        </ExpandablePanel>,
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    const trigger = canvas.getByTestId("long-title-trigger");
    const content = canvas.getByTestId("long-title-content");
    await step("Tittelen brytes over flere linjer", async () => {
      expect(trigger.getBoundingClientRect().height).toBeGreaterThan(64);
    });
    await step("Panelet kan åpnes med lang tittel", async () => {
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "true");
      });
    });
  }
}`,...v.parameters?.docs?.source}}};const U=["ExpandablePanelFilled","ExpandablePanelStroke","ExpandablePanelStrokeStandalone","ExpandablePanelFillStandalone","ExpandablePanelControlled","ExpandablePanelInitiallyOpen","ExpandablePanelLongTitle"];export{k as ExpandablePanelControlled,c as ExpandablePanelFillStandalone,p as ExpandablePanelFilled,x as ExpandablePanelInitiallyOpen,v as ExpandablePanelLongTitle,o as ExpandablePanelStroke,g as ExpandablePanelStrokeStandalone,U as __namedExportsOrder,D as default};
