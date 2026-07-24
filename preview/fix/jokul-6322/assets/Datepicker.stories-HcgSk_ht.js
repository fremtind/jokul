import{j as a,R as u}from"./iframe-Dv1jIxoy.js";import{D as v,f as p}from"./DatePicker-DI3gB_I5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-BSFgkOWq.js";import"./index-v789k2o6.js";import"./formatDate-hwqa_80k.js";import"./IconButton-CgwENgzw.js";import"./CalendarIcon-BCOxeREE.js";import"./Icon-EAfqmxr_.js";import"./InputGroup-BkHcRVoY.js";import"./useId-DkXNANuD.js";import"./Label-CPFg0frD.js";import"./SupportLabel-hfZYRiYr.js";import"./SuccessIcon-C1O8y8HK.js";import"./WarningIcon-0CTSxi72.js";import"./Popover-DwW1ECld.js";import"./floating-ui.react-Cd86t0fC.js";import"./getThemeAndSize-CZAj3IXt.js";import"./BaseTextInput-CnHq5RyA.js";import"./Button-DkxioIPn.js";import"./usePreviousValue-oKjGnjlP.js";import"./Loader-BVT2e-Aq.js";import"./useDelayedRender-Ddj3MKMS.js";import"./ArrowRightIcon-C68OvL_n.js";import"./ChevronDownIcon-Cy_XBcSW.js";const{expect:n,fn:x,screen:w,waitFor:f,within:k}=__STORYBOOK_MODULE_TEST__,Q={title:"Komponenter/DatePicker",component:v,args:{action:{disabled:!1},days:["M","T","O","T","F","L","S"],defaultShow:!1,defaultValue:p(new Date),disableBeforeDate:p(new Date(new Date().setDate(new Date().getDate()-14))),disableAfterDate:p(new Date(new Date().setDate(new Date().getDate()+14))),description:"Kortet er gyldig i 3 måneder fra denne datoen",label:"Når skal du reise?",labelProps:{srOnly:!1,variant:"small"},hideCalendarLabel:"Lukk kalender",showCalendarLabel:"Åpne kalender",invalid:!1,months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],monthLabel:"Måned",placeholder:"dd.mm.åååå",yearsToShow:new Date().getFullYear(),yearLabel:"År",textInputProps:{disabled:!1,readOnly:!1}}};function b({args:e,initialValue:s=""}){const[r,i]=u.useState(s),[t,o]=u.useState(""),[C,D]=u.useState("");return a.jsxs("div",{style:{display:"grid",gap:"16px",width:"20rem"},children:[a.jsx(v,{...e,value:r,defaultValue:void 0,disableBeforeDate:void 0,disableAfterDate:void 0,onChange:(g,m,y)=>{i(g.target.value),o(m?p(m):""),D(y.value),e.onChange?.(g,m,y)}}),a.jsxs("dl",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"4px 12px",margin:0},children:[a.jsx("dt",{children:"event.target.value"}),a.jsx("dd",{"data-testid":"event-target-value",style:{margin:0},children:r||"(tom)"}),a.jsx("dt",{children:"date"}),a.jsx("dd",{"data-testid":"date-value",style:{margin:0},children:t||"(tom)"}),a.jsx("dt",{children:"meta.value"}),a.jsx("dd",{"data-testid":"meta-value",style:{margin:0},children:C||"(tom)"})]})]})}const l={args:{},render:e=>a.jsx(v,{...e,disableBeforeDate:e.disableBeforeDate,disableAfterDate:e.disableAfterDate})},d={name:"API ved kalenderklikk",args:{onChange:x()},render:e=>a.jsx(b,{args:e,initialValue:"10.11.2022"}),play:async({args:e,canvasElement:s,userEvent:r,step:i})=>{const t=k(s);await i("Velg dato i kalenderen",async()=>{await r.click(t.getByRole("button",{name:/åpne kalender/i})),await f(()=>{n(w.getByTestId("jkl-calendar")).toBeInTheDocument()}),await r.click(w.getByLabelText("11. november"))}),await i("Vis at vanlig onChange-bruk fortsatt fungerer",async()=>{await n(t.getByTestId("event-target-value")).toHaveTextContent("11.11.2022"),await n(t.getByTestId("date-value")).toHaveTextContent("11.11.2022"),await n(t.getByTestId("meta-value")).toHaveTextContent("11.11.2022"),await n(e.onChange).toHaveBeenCalled()})}},c={name:"API ved kompakt input",args:{onChange:x()},render:e=>a.jsx(b,{args:e}),play:async({args:e,canvasElement:s,userEvent:r,step:i})=>{const t=k(s),o=t.getByRole("textbox",{name:/når skal du reise/i});await i('Skriv "11112022" i feltet',async()=>{await r.clear(o),await r.type(o,"11112022")}),await i("Vis at kontrollert bruk via event.target.value er uendret",async()=>{await n(o).toHaveValue("11.11.2022"),await n(t.getByTestId("event-target-value")).toHaveTextContent("11.11.2022"),await n(t.getByTestId("date-value")).toHaveTextContent("11.11.2022"),await n(t.getByTestId("meta-value")).toHaveTextContent("11.11.2022"),await n(e.onChange).toHaveBeenCalled()})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <DatePickerComponent {...args} disableBeforeDate={args.disableBeforeDate} disableAfterDate={args.disableAfterDate} />
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "API ved kalenderklikk",
  args: {
    onChange: fn()
  },
  render: args => <DatePickerApiCompatibilityExample args={args} initialValue="10.11.2022" />,
  play: async ({
    args,
    canvasElement,
    userEvent,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Velg dato i kalenderen", async () => {
      await userEvent.click(canvas.getByRole("button", {
        name: /åpne kalender/i
      }));
      await waitFor(() => {
        expect(screen.getByTestId("jkl-calendar")).toBeInTheDocument();
      });
      await userEvent.click(screen.getByLabelText("11. november"));
    });
    await step("Vis at vanlig onChange-bruk fortsatt fungerer", async () => {
      await expect(canvas.getByTestId("event-target-value")).toHaveTextContent("11.11.2022");
      await expect(canvas.getByTestId("date-value")).toHaveTextContent("11.11.2022");
      await expect(canvas.getByTestId("meta-value")).toHaveTextContent("11.11.2022");
      await expect(args.onChange).toHaveBeenCalled();
    });
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "API ved kompakt input",
  args: {
    onChange: fn()
  },
  render: args => <DatePickerApiCompatibilityExample args={args} />,
  play: async ({
    args,
    canvasElement,
    userEvent,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", {
      name: /når skal du reise/i
    });
    await step('Skriv "11112022" i feltet', async () => {
      await userEvent.clear(input);
      await userEvent.type(input, "11112022");
    });
    await step("Vis at kontrollert bruk via event.target.value er uendret", async () => {
      await expect(input).toHaveValue("11.11.2022");
      await expect(canvas.getByTestId("event-target-value")).toHaveTextContent("11.11.2022");
      await expect(canvas.getByTestId("date-value")).toHaveTextContent("11.11.2022");
      await expect(canvas.getByTestId("meta-value")).toHaveTextContent("11.11.2022");
      await expect(args.onChange).toHaveBeenCalled();
    });
  }
}`,...c.parameters?.docs?.source}}};const W=["DatePicker","CalendarSelectionApiCompatibility","CompactInputApiCompatibility"];export{d as CalendarSelectionApiCompatibility,c as CompactInputApiCompatibility,l as DatePicker,W as __namedExportsOrder,Q as default};
