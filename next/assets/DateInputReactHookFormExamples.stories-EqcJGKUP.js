import{r as b,j as e}from"./iframe-D2AmJwBk.js";import{u as v,C as S}from"./index.esm-C8lg47LL.js";/* empty css               */import{D as g,t as f,a as F}from"./DateInput-2E7H47x5.js";import{F as u}from"./Flex-bhmIZK7r.js";import{F as h}from"./FieldGroup-D3ElSacT.js";import{B as p}from"./Button-vRuMKsFo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./formatDate-Dke5WO_s.js";import"./Text-CPwVkWAA.js";import"./Select-B_d4qsd5.js";import"./mergeRefs-BdHmJysb.js";import"./InputGroup-DnJO-BXP.js";import"./useId-C6uhcE7a.js";import"./Label-DEAINvVt.js";import"./SupportLabel-DncnRvae.js";import"./SuccessIcon-Pfu4BAaV.js";import"./Icon-ZyWmcKC_.js";import"./WarningIcon-BgtgQxqE.js";import"./Search-sJNGzHmQ.js";import"./Title-C_KTMN_b.js";import"./useListNavigation-BvZoly61.js";import"./ArrowDownIcon-C8bPQRkE.js";import"./CloseIcon-CBVFl-p0.js";import"./ArrowRightIcon-B0IXvAd9.js";import"./TableCaption-B-9DGR2N.js";import"./tableContext-CCMC34Mx.js";import"./CalendarIcon-CDHrQw9c.js";import"./SlotComponent-DE-y9Qp-.js";import"./usePreviousValue-D8qpCKtL.js";import"./Loader-58iLoPg4.js";import"./useDelayedRender-BQg5Tbk0.js";const{fn:k}=__STORYBOOK_MODULE_TEST__,ne={title:"Komponenter/Date Input/React Hook Form",component:g,args:{label:"Når skal du reise?",name:"hei",labelProps:{srOnly:!1},onChange:k()},tags:["forms","!autodocs","react-hook-form"]},d={name:"Med register",render:()=>{const{register:n,handleSubmit:l,reset:o}=v({defaultValues:{dato:""}}),[a,s]=b.useState();return e.jsx("form",{onSubmit:l(t=>s(t.dato)),children:e.jsxs(u,{direction:"column",gap:"m",alignItems:"start",children:[e.jsx(g,{label:"Startdato",...n("dato")}),e.jsxs(u,{gap:"s",children:[e.jsx(p,{type:"submit",children:"Lagre"}),e.jsx(p,{type:"button",variant:"secondary",onClick:()=>{o({dato:""}),s(void 0)},children:"Nullstill"})]}),a!==void 0&&e.jsxs("p",{children:["Sendt inn: ",a||"(tom)"]})]})})}},i={name:"Startdato i kjøpsflyt",render:()=>{const n=f(new Date),{control:l,handleSubmit:o}=v({defaultValues:{startdato:""}}),[a,s]=b.useState();return e.jsx("form",{onSubmit:o(t=>s(t.startdato)),children:e.jsxs(u,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(S,{name:"startdato",control:l,rules:{required:"Du må velge en startdato",validate:t=>t>=n||"Avtalen kan tidligst starte i dag"},render:({field:t,fieldState:c})=>e.jsx(h,{legend:"Når skal forsikringen starte?",description:"Avtalen kan tidligst starte i dag.",children:e.jsx(g,{label:"Startdato",labelProps:{srOnly:!0},min:n,value:t.value,name:t.name,ref:t.ref,onChange:t.onChange,onBlur:t.onBlur,errorLabel:c.error?.message})})}),e.jsx(p,{type:"submit",variant:"primary",children:"Fortsett"}),a!==void 0&&e.jsxs("p",{children:["Forsikringen starter:"," ",a?F(a):"(ingen dato valgt)"]})]})})}},m={render:()=>{const n=new Date,l=f(new Date(n.getFullYear()-120,n.getMonth(),n.getDate())),o=f(new Date(n.getFullYear()-18,n.getMonth(),n.getDate())),{control:a,handleSubmit:s}=v({defaultValues:{fodselsdato:o}}),[t,c]=b.useState();return e.jsx("form",{onSubmit:s(r=>c(r.fodselsdato)),children:e.jsxs(u,{direction:"column",gap:"l",alignItems:"center",children:[e.jsx(S,{name:"fodselsdato",control:a,rules:{required:"Du må fylle inn fødselsdatoen din",validate:r=>r<=o||"Du må være minst 18 år"},render:({field:r,fieldState:D})=>e.jsx(h,{legend:"Hva er fødselsdatoen din?",children:e.jsx(g,{label:"Fødselsdato",labelProps:{srOnly:!0},min:l,max:o,value:r.value,name:r.name,ref:r.ref,onChange:r.onChange,onBlur:r.onBlur,errorLabel:D.error?.message})})}),e.jsx(p,{type:"submit",variant:"primary",children:"Fortsett"}),t!==void 0&&e.jsxs("p",{children:["Fødselsdato:"," ",t?F(t):"(ingen dato valgt)"]})]})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Med register",
  render: () => {
    const {
      register,
      handleSubmit,
      reset
    } = useForm<{
      dato: string;
    }>({
      defaultValues: {
        dato: ""
      }
    });
    const [sendt, setSendt] = useState<string>();
    return <form onSubmit={handleSubmit(data => setSendt(data.dato))}>
                <Flex direction="column" gap="m" alignItems="start">
                    <DateInput label="Startdato" {...register("dato")} />
                    <Flex gap="s">
                        <Button type="submit">Lagre</Button>
                        <Button type="button" variant="secondary" onClick={() => {
            reset({
              dato: ""
            });
            setSendt(undefined);
          }}>
                            Nullstill
                        </Button>
                    </Flex>
                    {sendt !== undefined && <p>Sendt inn: {sendt || "(tom)"}</p>}
                </Flex>
            </form>;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Startdato i kjøpsflyt",
  render: () => {
    const iDag = toValidInputValue(new Date());
    const {
      control,
      handleSubmit
    } = useForm<{
      startdato: string;
    }>({
      defaultValues: {
        startdato: ""
      }
    });
    const [bekreftet, setBekreftet] = useState<string>();
    return <form onSubmit={handleSubmit(data => setBekreftet(data.startdato))}>
                <Flex direction="column" gap="l" alignItems="center">
                    <Controller name="startdato" control={control} rules={{
          required: "Du må velge en startdato",
          validate: verdi => verdi >= iDag || "Avtalen kan tidligst starte i dag"
        }} render={({
          field,
          fieldState
        }) => <FieldGroup legend="Når skal forsikringen starte?" description="Avtalen kan tidligst starte i dag.">
                                <DateInput label="Startdato" labelProps={{
            srOnly: true
          }} min={iDag} value={field.value} name={field.name} ref={field.ref} onChange={field.onChange} onBlur={field.onBlur} errorLabel={fieldState.error?.message} />
                            </FieldGroup>} />
                    <Button type="submit" variant="primary">
                        Fortsett
                    </Button>
                    {bekreftet !== undefined && <p>
                            Forsikringen starter:{" "}
                            {bekreftet ? toNorwegianDateFormat(bekreftet) : "(ingen dato valgt)"}
                        </p>}
                </Flex>
            </form>;
  }
}`,...i.parameters?.docs?.source},description:{story:"Valg av startdato i en kjøpsflyt. Følger kjøpsflyt-mønsteret med `FieldGroup`-spørsmål\nog «Fortsett»-knapp. En ny avtale kan tidligst starte i dag, så `min` gråer ut datoer\nbakover i kalenderen, og en valideringsregel fanger opp manuell inntasting.",...i.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const nå = new Date();
    const eldsteDato = toValidInputValue(new Date(nå.getFullYear() - 120, nå.getMonth(), nå.getDate()));
    const yngsteDato = toValidInputValue(new Date(nå.getFullYear() - 18, nå.getMonth(), nå.getDate()));
    const {
      control,
      handleSubmit
    } = useForm<{
      fodselsdato: string;
    }>({
      defaultValues: {
        fodselsdato: yngsteDato
      }
    });
    const [bekreftet, setBekreftet] = useState<string>();
    return <form onSubmit={handleSubmit(data => setBekreftet(data.fodselsdato))}>
                <Flex direction="column" gap="l" alignItems="center">
                    <Controller name="fodselsdato" control={control} rules={{
          required: "Du må fylle inn fødselsdatoen din",
          validate: verdi => verdi <= yngsteDato || "Du må være minst 18 år"
        }} render={({
          field,
          fieldState
        }) => <FieldGroup legend="Hva er fødselsdatoen din?">
                                <DateInput label="Fødselsdato" labelProps={{
            srOnly: true
          }} min={eldsteDato} max={yngsteDato} value={field.value} name={field.name} ref={field.ref} onChange={field.onChange} onBlur={field.onBlur} errorLabel={fieldState.error?.message} />
                            </FieldGroup>} />

                    <Button type="submit" variant="primary">
                        Fortsett
                    </Button>

                    {bekreftet !== undefined && <p>
                            Fødselsdato:{" "}
                            {bekreftet ? toNorwegianDateFormat(bekreftet) : "(ingen dato valgt)"}
                        </p>}
                </Flex>
            </form>;
  }
}`,...m.parameters?.docs?.source}}};const re=["MedRegister","StartdatoIKjøpsflyt","Fødselsdato"];export{m as Fødselsdato,d as MedRegister,i as StartdatoIKjøpsflyt,re as __namedExportsOrder,ne as default};
