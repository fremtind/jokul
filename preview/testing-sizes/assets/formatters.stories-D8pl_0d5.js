import{j as n}from"./iframe-Bv7LMU6l.js";import{p as F,f as m}from"./formatNumber-C5i6XT6A.js";import{N as d,n as L,f as A}from"./formatBytes-B7RSIuaZ.js";/* empty css               */import{b as l,D as i,a as t}from"./DescriptionList-s5S2XY5Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const y={full:/^(\d{6})(\d{5})$/,partial:/^(\d{6})(\d{1,5})?$/};function U(e,r){const s=e.replace(/\W/g,""),o=r?.partial?y.partial:y.full,a=s.match(o);return a?a.slice(1).filter(Boolean).join(d):e}const N={full:/^(\d{4})(\d{2})(\d{5})$/,partial:/^(\d{4})(\d{1,2})?(\d{1,5})?$/};function I(e,r){const s=e.replace(/\W/g,""),o=r?.partial?N.partial:N.full,a=s.match(o);return a?a.slice(1).filter(Boolean).join(r?.separator||d):e}const v={full:/^(\d{4})(\d{4})(\d{4})(\d{4})$/,partial:/^(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?$/};function M(e,r){const s=e.replace(/[\s-.]/g,""),o=r?.partial?v.partial:v.full,a=s.match(o);return a?a.slice(1).filter(Boolean).join(d):e}const b={full:/^(\d{3})(\d{3})(\d{3})$/,partial:/^(\d{3})(\d{1,3})?(\d{1,5})?$/};function P(e,r){const s=e.replace(/[\s-.]/g,""),o=r?.partial?b.partial:b.full,a=s.match(o);return a?a.slice(1).filter(Boolean).join(d):e}const p={mobil:/^([8]\d{2})(\d{2})(\d{3})$/,fast:/^([2-9]\d)(\d{2})(\d{2})(\d{2})$/,mobilPartial:/^([8]\d{2})(\d{1,2})?(\d{1,3})?$/,fastPartial:/^([2-9]\d)(\d{1,2})?(\d{1,2})?(\d{1,2})?$/};function _(e,r){const s=e.replace(/\W/g,""),o=r?.partial?p.mobilPartial:p.mobil,a=r?.partial?p.fastPartial:p.fast,c=s.match(o)||s.match(a);return c?[r?.countryCode?`+${r.countryCode}`:void 0,...c.slice(1)].filter(Boolean).join(d):e}const C={style:"unit",unit:"kilometer"};function V(e,r){const s=F(e);if(!s)return e.toString();const{suffix:o,...a}={...C,...r};return[m(s,a),o].join("")}const O={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function B(e,r){const s=F(e);if(Number.isNaN(s))return e.toString();const o=Number.isInteger(s)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},a=r?.suffix!==void 0?r.suffix:O.suffix,{prefix:c,...K}={...O,...o,...r},E=c?.length?`${c}${L}`:"",$=a?.length?`${L}${a}`:"",R=m(s,K);return`${E}${R}${$}`}const z={title:"Utils/Formatters",parameters:{layout:"centered",docs:{toc:!0,description:{component:`Eksemplene er hentet fra [Språkrådets artikkel om formattering av tid, tall og
datoer](https://sprakradet.no/godt-og-korrekt-sprak/rettskriving-og-grammatikk/tall-tid-dato/).`}}}},D={args:{locale:"nb-NO",time:new Date().toString()},argTypes:{locale:{options:["nb-NO","en-US"],control:"select"},time:{control:"date"}},render:e=>n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-2",children:"Dato"}),n.jsxs(l,{children:[n.jsx(i,{children:"Dato, måned og år"}),n.jsx(t,{children:n.jsx("time",{dateTime:new Date().toString(),children:new Date(e.time).toLocaleDateString(e.locale,{year:"numeric",month:"long",day:"numeric"})})}),n.jsx(t,{children:n.jsx("time",{dateTime:new Date().toString(),children:new Date(e.time).toLocaleDateString(e.locale,{year:"numeric",month:"numeric",day:"numeric"})})}),n.jsx(t,{children:n.jsx("time",{dateTime:new Date().toString(),children:new Date(e.time).toLocaleDateString(e.locale,{year:"numeric",month:"2-digit",day:"2-digit"})})}),n.jsx(t,{children:n.jsx("time",{dateTime:new Date().toString(),children:new Date(e.time).toLocaleDateString(e.locale,{year:"2-digit",month:"2-digit",day:"2-digit"})})}),n.jsx(t,{children:n.jsx("time",{dateTime:new Date().toString(),children:new Date(e.time).toLocaleDateString(e.locale,{year:"2-digit",month:"numeric",day:"numeric"})})}),n.jsx(t,{children:n.jsx("time",{dateTime:new Date().toString(),children:new Date(e.time).toLocaleDateString(e.locale,{year:"numeric",month:"2-digit",day:"2-digit"})})}),n.jsx(i,{children:"Uten årstall"}),n.jsx(t,{children:n.jsx("time",{dateTime:new Date(e.time).toString(),children:new Date(e.time).toLocaleDateString(e.locale,{month:"numeric",day:"numeric"})})}),n.jsx(i,{children:"Ved oppramsing"}),n.jsxs(t,{children:[new Date(e.time).toLocaleDateString(e.locale,{day:"numeric"}),",",new Date(new Date(e.time).setDate(new Date(e.time).getDate()+1)).toLocaleDateString(e.locale,{day:"numeric"}),", og"," ",new Date(new Date(e.time).setDate(new Date(e.time).getDate()+2)).toLocaleDateString(e.locale,{day:"numeric",month:"long"})]}),n.jsx(i,{children:"I teknisk bruk"}),n.jsx(t,{children:n.jsxs("time",{dateTime:new Date(e.time).toString(),children:[new Date(e.time).getFullYear(),"-",new Date(e.time).getMonth(),"-",new Date(e.time).getDate()]})})]})]})},u={args:{locale:"nb-NO",time:new Date().toString()},argTypes:{locale:{options:["nb-NO","en-US"],control:"select"},time:{control:"date"}},render:e=>n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-2",children:"Tid"}),n.jsxs(l,{children:[n.jsx(i,{children:"Klokkeslett"}),n.jsx(t,{children:new Date(e.time).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric"})}),n.jsx(t,{children:new Date(e.time).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric",second:"numeric"})}),n.jsx(i,{children:"Nøyaktige klokkeslett"}),n.jsx(t,{children:new Date(e.time).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:1})}),n.jsx(t,{children:new Date(e.time).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:2})}),n.jsx(i,{children:"Tid på døgnet"}),n.jsx(t,{children:new Date(e.time).toLocaleTimeString(e.locale,{dayPeriod:"long"})}),n.jsx(t,{children:new Date(e.time).toLocaleTimeString(e.locale,{dayPeriod:"short"})}),n.jsx(t,{children:new Date(e.time).toLocaleTimeString(e.locale,{dayPeriod:"narrow"})}),n.jsx(i,{children:"Tidsrom"}),n.jsxs(t,{children:["Kl."," ",new Date(e.time).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric"}),"–",new Date(new Date(e.time).setHours(new Date(e.time).getHours()+8)).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric"})]}),n.jsxs(t,{children:["Fra kl."," ",new Date(e.time).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric"})," ","til"," ",new Date(new Date(e.time).setHours(new Date(e.time).getHours()+8)).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric"})]})]})]})},g={args:{tall:1e4},render:e=>n.jsxs("div",{children:[n.jsxs("p",{className:"jkl-heading-2",children:["Tall ",n.jsxs("small",{children:["(",m(e.tall),")"]})]}),n.jsxs(l,{children:[n.jsx(i,{children:"Små tall"}),n.jsxs(t,{children:[m("23")," år"]}),n.jsx(i,{children:"Store tall"}),n.jsxs(t,{children:[m("2500000")," passasjerer"]}),n.jsxs(t,{children:[m("4500800")," kroner"]}),n.jsxs(t,{children:[m("2500")," biler"]}),n.jsx(t,{children:m("0,00302")}),n.jsx(i,{children:"Desimaltall"}),n.jsx(t,{children:m("12345,67")})]})]})},h={args:{avstand:4e3,suffix:"",unit:"kilometer"},argTypes:{unit:{control:"select",options:["kilometer","meter","decimeter","centimeter","millimeter","micrometer","nanometer","picometer","mile","yard","foot","inch","point"]}},render:e=>n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-2",children:"Avstand"}),n.jsxs(l,{children:[n.jsx(i,{children:"Avstand"}),n.jsx(t,{children:V(e.avstand,{unit:e.unit,suffix:e.suffix})})]})]})},f={args:{kroner:4e3,prefix:"kr",suffix:"NOK",desimaler:0},argTypes:{desimaler:{control:{type:"number",max:2,min:0}}},render:e=>n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-2",children:"Valuta"}),n.jsxs(l,{children:[n.jsx(i,{children:"Valuta"}),n.jsx(t,{children:B(e.kroner,{prefix:e.prefix,suffix:e.suffix,minimumFractionDigits:e.desimaler})})]})]})},x={args:{telefonnummer:"91509801",countryCode:"47"},argTypes:{telefonnummer:{type:"select",options:["91509801","80022222"]}},render:e=>n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-2",children:"Telefonnummer"}),n.jsxs(l,{children:[n.jsx(i,{children:"Telefonnummer"}),n.jsx(t,{children:_(e.telefonnummer,{countryCode:e.countryCode})})]})]})},j={args:{fodselsnummer:"01065100203",partial:!1},render:e=>n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-2",children:"Fødselsnummer"}),n.jsxs(l,{children:[n.jsx(i,{children:"Fødselsnummer"}),n.jsx(t,{children:U(e.fodselsnummer,{partial:e.partial})})]})]})},T={args:{kortnummer:"5457623898234113",partial:!1},render:e=>n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-2",children:"Kortnummer"}),n.jsxs(l,{children:[n.jsx(i,{children:"Kortnummer"}),n.jsx(t,{children:M(e.kortnummer,{partial:e.partial})})]})]})},S={args:{kontonummer:"915651232",partial:!1,separator:"."},render:e=>n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-2",children:"Kontonummer"}),n.jsxs(l,{children:[n.jsx(i,{children:"Kontonummer"}),n.jsx(t,{children:I(e.kontonummer,{partial:e.partial,separator:e.separator})})]})]})},w={args:{org:"915651232",partial:!1},render:e=>n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-2",children:"Organisasjonsnummer"}),n.jsxs(l,{children:[n.jsx(i,{children:"Organisasjonsnummer"}),n.jsx(t,{children:P(e.org,{partial:e.partial})})]})]})},k={args:{størrelse:1e7},render:e=>n.jsxs("div",{children:[n.jsx("p",{className:"jkl-heading-2",children:"Filstørrelse"}),n.jsxs(l,{children:[n.jsx(i,{children:"Filstørrelse"}),n.jsx(t,{children:A(e.størrelse)})]})]})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    locale: "nb-NO",
    time: new Date().toString()
  },
  argTypes: {
    locale: {
      options: ["nb-NO", "en-US"],
      control: "select"
    },
    time: {
      control: "date"
    }
  },
  render: (args: {
    locale: Intl.LocalesArgument;
    time: string;
  }) => <div>
            <p className="jkl-heading-2">Dato</p>
            <DescriptionList>
                <DescriptionTerm>Dato, måned og år</DescriptionTerm>
                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
                    </time>
                </DescriptionDetail>

                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
            year: "numeric",
            month: "numeric",
            day: "numeric"
          })}
                    </time>
                </DescriptionDetail>

                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
          })}
                    </time>
                </DescriptionDetail>

                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
          })}
                    </time>
                </DescriptionDetail>

                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
            year: "2-digit",
            month: "numeric",
            day: "numeric"
          })}
                    </time>
                </DescriptionDetail>

                <DescriptionDetail>
                    <time dateTime={new Date().toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
          })}
                    </time>
                </DescriptionDetail>

                <DescriptionTerm>Uten årstall</DescriptionTerm>
                <DescriptionDetail>
                    <time dateTime={new Date(args.time).toString()}>
                        {new Date(args.time).toLocaleDateString(args.locale, {
            month: "numeric",
            day: "numeric"
          })}
                    </time>
                </DescriptionDetail>

                <DescriptionTerm>Ved oppramsing</DescriptionTerm>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleDateString(args.locale, {
          day: "numeric"
        })}
                    ,
                    {new Date(new Date(args.time).setDate(new Date(args.time).getDate() + 1)).toLocaleDateString(args.locale, {
          day: "numeric"
        })}
                    , og{" "}
                    {new Date(new Date(args.time).setDate(new Date(args.time).getDate() + 2)).toLocaleDateString(args.locale, {
          day: "numeric",
          month: "long"
        })}
                </DescriptionDetail>

                <DescriptionTerm>I teknisk bruk</DescriptionTerm>
                <DescriptionDetail>
                    <time dateTime={new Date(args.time).toString()}>
                        {new Date(args.time).getFullYear()}-
                        {new Date(args.time).getMonth()}-
                        {new Date(args.time).getDate()}
                    </time>
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...D.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    locale: "nb-NO",
    time: new Date().toString()
  },
  argTypes: {
    locale: {
      options: ["nb-NO", "en-US"],
      control: "select"
    },
    time: {
      control: "date"
    }
  },
  render: (args: {
    locale: Intl.LocalesArgument;
    time: string;
  }) => <div>
            <p className="jkl-heading-2">Tid</p>
            <DescriptionList>
                <DescriptionTerm>Klokkeslett</DescriptionTerm>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
          hour: "numeric",
          minute: "numeric"
        })}
                </DescriptionDetail>

                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        })}
                </DescriptionDetail>

                <DescriptionTerm>Nøyaktige klokkeslett</DescriptionTerm>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          fractionalSecondDigits: 1
        })}
                </DescriptionDetail>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          fractionalSecondDigits: 2
        })}
                </DescriptionDetail>

                <DescriptionTerm>Tid på døgnet</DescriptionTerm>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
          dayPeriod: "long"
        })}
                </DescriptionDetail>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
          dayPeriod: "short"
        })}
                </DescriptionDetail>
                <DescriptionDetail>
                    {new Date(args.time).toLocaleTimeString(args.locale, {
          dayPeriod: "narrow"
        })}
                </DescriptionDetail>

                <DescriptionTerm>Tidsrom</DescriptionTerm>
                <DescriptionDetail>
                    Kl.{" "}
                    {new Date(args.time).toLocaleTimeString(args.locale, {
          hour: "numeric",
          minute: "numeric"
        })}
                    –
                    {new Date(new Date(args.time).setHours(new Date(args.time).getHours() + 8)).toLocaleTimeString(args.locale, {
          hour: "numeric",
          minute: "numeric"
        })}
                </DescriptionDetail>
                <DescriptionDetail>
                    Fra kl.{" "}
                    {new Date(args.time).toLocaleTimeString(args.locale, {
          hour: "numeric",
          minute: "numeric"
        })}{" "}
                    til{" "}
                    {new Date(new Date(args.time).setHours(new Date(args.time).getHours() + 8)).toLocaleTimeString(args.locale, {
          hour: "numeric",
          minute: "numeric"
        })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tall: 10000
  },
  render: (args: {
    tall: number;
  }) => <div>
            <p className="jkl-heading-2">
                Tall <small>({formatNumber(args.tall)})</small>
            </p>
            <DescriptionList>
                <DescriptionTerm>Små tall</DescriptionTerm>
                <DescriptionDetail>{formatNumber("23")} år</DescriptionDetail>

                <DescriptionTerm>Store tall</DescriptionTerm>
                <DescriptionDetail>
                    {formatNumber("2500000")} passasjerer
                </DescriptionDetail>
                <DescriptionDetail>
                    {formatNumber("4500800")} kroner
                </DescriptionDetail>
                <DescriptionDetail>
                    {formatNumber("2500")} biler
                </DescriptionDetail>
                <DescriptionDetail>{formatNumber("0,00302")}</DescriptionDetail>

                <DescriptionTerm>Desimaltall</DescriptionTerm>
                <DescriptionDetail>
                    {formatNumber("12345,67")}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    avstand: 4000,
    suffix: "",
    unit: "kilometer"
  },
  argTypes: {
    unit: {
      control: "select",
      options: ["kilometer", "meter", "decimeter", "centimeter", "millimeter", "micrometer", "nanometer", "picometer", "mile", "yard", "foot", "inch", "point"]
    }
  },
  render: (args: {
    avstand: number;
    suffix: string;
    unit: LengthUnit;
  }) => <div>
            <p className="jkl-heading-2">Avstand</p>
            <DescriptionList>
                <DescriptionTerm>Avstand</DescriptionTerm>
                <DescriptionDetail>
                    {formatAvstand(args.avstand, {
          unit: args.unit,
          suffix: args.suffix
        })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    kroner: 4000,
    prefix: "kr",
    suffix: "NOK",
    desimaler: 0
  },
  argTypes: {
    desimaler: {
      control: {
        type: "number",
        max: 2,
        min: 0
      }
    }
  },
  render: (args: {
    kroner: number;
    prefix: string;
    suffix: string;
    desimaler: number;
  }) => <div>
            <p className="jkl-heading-2">Valuta</p>
            <DescriptionList>
                <DescriptionTerm>Valuta</DescriptionTerm>
                <DescriptionDetail>
                    {formatValuta(args.kroner, {
          prefix: args.prefix,
          suffix: args.suffix,
          minimumFractionDigits: args.desimaler
        })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    telefonnummer: "91509801",
    countryCode: "47"
  },
  argTypes: {
    telefonnummer: {
      type: "select",
      options: ["91509801", "80022222"]
    }
  },
  render: (args: {
    telefonnummer: string;
    countryCode: string;
  }) => <div>
            <p className="jkl-heading-2">Telefonnummer</p>
            <DescriptionList>
                <DescriptionTerm>Telefonnummer</DescriptionTerm>
                <DescriptionDetail>
                    {formatTelefonnummer(args.telefonnummer, {
          countryCode: args.countryCode
        })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    fodselsnummer: "01065100203",
    partial: false
  },
  render: (args: {
    fodselsnummer: string;
    partial: boolean;
  }) => <div>
            <p className="jkl-heading-2">Fødselsnummer</p>
            <DescriptionList>
                <DescriptionTerm>Fødselsnummer</DescriptionTerm>
                <DescriptionDetail>
                    {formatFodselsnummer(args.fodselsnummer, {
          partial: args.partial
        })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...j.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    kortnummer: "5457623898234113",
    partial: false
  },
  render: (args: {
    kortnummer: string;
    partial: boolean;
  }) => <div>
            <p className="jkl-heading-2">Kortnummer</p>
            <DescriptionList>
                <DescriptionTerm>Kortnummer</DescriptionTerm>
                <DescriptionDetail>
                    {formatKortnummer(args.kortnummer, {
          partial: args.partial
        })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    kontonummer: "915651232",
    partial: false,
    separator: "."
  },
  render: (args: {
    kontonummer: string;
    separator: string;
    partial: boolean;
  }) => <div>
            <p className="jkl-heading-2">Kontonummer</p>
            <DescriptionList>
                <DescriptionTerm>Kontonummer</DescriptionTerm>
                <DescriptionDetail>
                    {formatKontonummer(args.kontonummer, {
          partial: args.partial,
          separator: args.separator
        })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    org: "915651232",
    partial: false
  },
  render: (args: {
    org: string;
    partial: boolean;
  }) => <div>
            <p className="jkl-heading-2">Organisasjonsnummer</p>
            <DescriptionList>
                <DescriptionTerm>Organisasjonsnummer</DescriptionTerm>
                <DescriptionDetail>
                    {formatOrganisasjonsnummer(args.org, {
          partial: args.partial
        })}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    størrelse: 10_000_000
  },
  render: (args: {
    størrelse: number;
  }) => <div>
            <p className="jkl-heading-2">Filstørrelse</p>
            <DescriptionList>
                <DescriptionTerm>Filstørrelse</DescriptionTerm>
                <DescriptionDetail>
                    {formatBytes(args.størrelse)}
                </DescriptionDetail>
            </DescriptionList>
        </div>
}`,...k.parameters?.docs?.source}}};const Q=["Dato","Tid","Tall","Avstand","Valuta","Telefonnummer","Fodselsnummer","Kortnummer","Kontonummer","Organisasjonsnummer","Filstorrelse"];export{h as Avstand,D as Dato,k as Filstorrelse,j as Fodselsnummer,S as Kontonummer,T as Kortnummer,w as Organisasjonsnummer,g as Tall,x as Telefonnummer,u as Tid,f as Valuta,Q as __namedExportsOrder,z as default};
