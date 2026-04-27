import{R as u,j as e}from"./iframe-BoFEDEja.js";import{C as E}from"./Card-vk4wDUzZ.js";import{F as b}from"./Flex-BB8lb2z_.js";import{E as w,a as t}from"./ExpandablePanel-BpgbhL4q.js";import{E as f}from"./Expander-C-G6Hz21.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BAQK90cg.js";import"./mergeRefs-zrFraTSY.js";import"./useAnimatedHeightBetween-C2OACTpL.js";import"./tokens-BiWAXAgN.js";import"./useBrowserPreferences-V_MT_RFw.js";import"./usePreviousValue-C4K5Agzg.js";import"./ChevronDownIcon-BTrshlJO.js";import"./Icon-hjjZKQD3.js";import"./ChevronUpIcon-6n5xbDgl.js";const{expect:s,waitFor:o}=__STORYBOOK_MODULE_TEST__,U={title:"Komponenter/ExpandablePanel",component:t,subcomponents:{Expander:f,ExpandablePanelContent:w},args:{variant:"fill"},argTypes:{variant:{control:"radio",options:["fill","stroke"]}}},g={decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx(n,{})})],render:n=>e.jsx(b,{direction:"column",gap:"xs",children:["first","second","third"].map(a=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{children:"Klikk på meg for å åpne!"}),e.jsx(t.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},a))})},p={args:{variant:"stroke"},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx(n,{})})],render:n=>e.jsx(e.Fragment,{children:["first","second","third"].map(a=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{children:"Klikk på meg for å åpne!"}),e.jsx(t.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},a))})},x={name:"Stroke standalone",args:{variant:"stroke"},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx(E,{padding:"l",style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsx("p",{style:{margin:0},children:"Et standalone panel skal beholde ytre border radius selv om det ligger mellom andre elementer."}),e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"stroke-standalone-trigger",children:"Klikk på meg for å åpne!"}),e.jsx(t.Content,{"data-testid":"stroke-standalone-content",children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00."})]}),e.jsx("p",{style:{margin:0},children:"Panelgruppen fortsetter ikke under her."})]}),play:async({canvas:n,userEvent:a,step:d})=>{await d("Åpne standalone stroke-panelet",async()=>{const l=n.getByTestId("stroke-standalone-trigger"),r=n.getByTestId("stroke-standalone-content");s(r).toHaveAttribute("data-expanded","false"),await a.click(l),await o(()=>{s(r).toHaveAttribute("data-expanded","true")})})}},k={name:"Fill standalone",decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsx("p",{style:{margin:0},children:"Et standalone panel med fill-variant skal fungere uten å være del av en panelgruppe."}),e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"fill-standalone-trigger",children:"Hva dekker reiseforsikringen på vei til flyplassen?"}),e.jsx(t.Content,{"data-testid":"fill-standalone-content",children:"Reiseforsikringen dekker blant annet forsinket bagasje og avbestilling ved akutt sykdom når reisen er betalt med kortet."})]})]}),play:async({canvas:n,userEvent:a,step:d})=>{await d("Åpne standalone fill-panelet",async()=>{const l=n.getByTestId("fill-standalone-trigger"),r=n.getByTestId("fill-standalone-content");s(r).toHaveAttribute("data-expanded","false"),await a.click(l),await o(()=>{s(r).toHaveAttribute("data-expanded","true")})})}},m={name:"Kontrollert",args:{variant:"stroke"},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>{const[a,d]=u.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsxs("p",{"data-testid":"controlled-state",style:{margin:0},children:["Status: ",a?"Åpen":"Lukket"]}),e.jsxs(t,{...n,open:a,onOpenChange:d,children:[e.jsx(t.Header,{"data-testid":"controlled-trigger",children:"Se dekning for leiebil"}),e.jsx(t.Content,{"data-testid":"controlled-content",children:"Forsikringen dekker skade, tyveri og egenandel når bilen er leid i Norden eller EU og leieforholdet er betalt med kortet."})]})]})},play:async({canvas:n,userEvent:a,step:d})=>{const l=n.getByTestId("controlled-trigger"),r=n.getByTestId("controlled-content"),i=n.getByTestId("controlled-state");await d("Åpne kontrollert panel",async()=>{s(r).toHaveAttribute("data-expanded","false"),s(i).toHaveTextContent("Status: Lukket"),await a.click(l),await o(()=>{s(r).toHaveAttribute("data-expanded","true"),s(i).toHaveTextContent("Status: Åpen")})}),await d("Lukk kontrollert panel",async()=>{await a.click(l),await o(()=>{s(r).toHaveAttribute("data-expanded","false"),s(i).toHaveTextContent("Status: Lukket")})})}},v={name:"Starter åpen",args:{variant:"stroke",defaultOpen:!0},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"initially-open-trigger",children:"Kontaktvalg for skadehjelp"}),e.jsx(t.Content,{"data-testid":"initially-open-content",children:"Ring oss pa 55 55 55 55, start chat eller be om at en rådgiver ringer deg tilbake innen 15 minutter."})]}),play:async({canvas:n,userEvent:a,step:d})=>{const l=n.getByTestId("initially-open-trigger"),r=n.getByTestId("initially-open-content");await d("Panelet er åpent ved start",async()=>{s(r).toHaveAttribute("data-expanded","true")}),await d("Panelet kan lukkes igjen",async()=>{await a.click(l),await o(()=>{s(r).toHaveAttribute("data-expanded","false")})})}},y={name:"Lang tittel",decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 20rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"long-title-trigger",children:"Hva skjer med egenandel, avbestilling og forsinket bagasje hvis hele familien blir forsinket pa vei til flyplassen?"}),e.jsx(t.Content,{"data-testid":"long-title-content",children:"Du er dekket for forsinket bagasje, avbestilling ved akutt sykdom og egenandel pa leiebil opptil 15 000 kroner."})]}),play:async({canvas:n,userEvent:a,step:d})=>{const l=n.getByTestId("long-title-trigger"),r=n.getByTestId("long-title-content");await d("Tittelen brytes over flere linjer",async()=>{s(l.getBoundingClientRect().height).toBeGreaterThan(64)}),await d("Panelet kan åpnes med lang tittel",async()=>{await a.click(l),await o(()=>{s(r).toHaveAttribute("data-expanded","true")})})}},c={name:"Nestet Expander leser sin egen state",args:{variant:"stroke"},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>{const a=({label:d,testid:l})=>{const[r,i]=u.useState(!1);return e.jsx(f,{as:"button",open:r,onClick:()=>i(h=>!h),"data-testid":l,children:d})};return e.jsxs(t,{...n,defaultOpen:!0,children:[e.jsx(t.Header,{"data-testid":"outer-trigger",children:"Ytre panel — åpent fra start"}),e.jsx(t.Content,{children:e.jsxs(b,{direction:"column",gap:"2xs",children:[e.jsx(a,{label:"Indre Expander A",testid:"inner-a"}),e.jsx(a,{label:"Indre Expander B",testid:"inner-b"})]})})]})},play:async({canvas:n,canvasElement:a,userEvent:d,step:l})=>{await l("Indre Expandere er lukket selv om ytre panel er åpent",async()=>{const r=n.getByTestId("inner-a"),i=n.getByTestId("inner-b");s(r.className).not.toContain("jkl-expander--open"),s(i.className).not.toContain("jkl-expander--open")}),await l("Klikk på indre Expander toggler ikke ytre panel",async()=>{const r=n.getByTestId("inner-a"),i=a.querySelector("[data-testid='jkl-expand-section']");await d.click(r),s(r.className).toContain("jkl-expander--open"),s(i.open).toBe(!0)})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"Stroke varianten skal ikke ha mellomrom mellom panelene.",...p.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Nestet Expander leser sin egen state",
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
    const InnerExpander = ({
      label,
      testid
    }: {
      label: string;
      testid: string;
    }) => {
      const [open, setOpen] = React.useState(false);
      return <Expander as="button" open={open} onClick={() => setOpen(v => !v)} data-testid={testid}>
                    {label}
                </Expander>;
    };
    return <ExpandablePanel {...args} defaultOpen>
                <ExpandablePanel.Header data-testid="outer-trigger">
                    Ytre panel — åpent fra start
                </ExpandablePanel.Header>
                <ExpandablePanel.Content>
                    <Flex direction="column" gap="2xs">
                        <InnerExpander label="Indre Expander A" testid="inner-a" />
                        <InnerExpander label="Indre Expander B" testid="inner-b" />
                    </Flex>
                </ExpandablePanel.Content>
            </ExpandablePanel>;
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent,
    step
  }) => {
    await step("Indre Expandere er lukket selv om ytre panel er åpent", async () => {
      const innerA = canvas.getByTestId("inner-a");
      const innerB = canvas.getByTestId("inner-b");
      expect(innerA.className).not.toContain("jkl-expander--open");
      expect(innerB.className).not.toContain("jkl-expander--open");
    });
    await step("Klikk på indre Expander toggler ikke ytre panel", async () => {
      const innerA = canvas.getByTestId("inner-a");
      const outerPanel = canvasElement.querySelector("[data-testid='jkl-expand-section']") as HTMLDetailsElement;
      await userEvent.click(innerA);
      expect(innerA.className).toContain("jkl-expander--open");
      expect(outerPanel.open).toBe(true);
    });
  }
}`,...c.parameters?.docs?.source},description:{story:"Regresjonstest for [#5565](https://github.com/fremtind/jokul/issues/5565):\nen kontrollert `Expander` inne i et åpent `ExpandablePanel` skal lese sin\negen `open`-prop, ikke arve panel-state via context. Begge de indre\nExpandere starter lukket selv om panelet er åpent.",...c.parameters?.docs?.description}}};const Y=["ExpandablePanelFilled","ExpandablePanelStroke","ExpandablePanelStrokeStandalone","ExpandablePanelFillStandalone","ExpandablePanelControlled","ExpandablePanelInitiallyOpen","ExpandablePanelLongTitle","ExpandablePanelNestedExpanders"];export{m as ExpandablePanelControlled,k as ExpandablePanelFillStandalone,g as ExpandablePanelFilled,v as ExpandablePanelInitiallyOpen,y as ExpandablePanelLongTitle,c as ExpandablePanelNestedExpanders,p as ExpandablePanelStroke,x as ExpandablePanelStrokeStandalone,Y as __namedExportsOrder,U as default};
