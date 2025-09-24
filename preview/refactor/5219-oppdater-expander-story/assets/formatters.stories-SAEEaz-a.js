import{R as n}from"./index-siqcju79.js";import{N as u,p as O,a as s,n as y,f as A}from"./formatBytes-CR-O9sah.js";/* empty css               */import{b as m,D as i,a as t}from"./DescriptionList-BkNFVB_x.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";const N={full:/^(\d{6})(\d{5})$/,partial:/^(\d{6})(\d{1,5})?$/};function U(e,r){const l=e.replace(/\W/g,""),o=r?.partial?N.partial:N.full,a=l.match(o);return a?a.slice(1).filter(Boolean).join(u):e}const v={full:/^(\d{4})(\d{2})(\d{5})$/,partial:/^(\d{4})(\d{1,2})?(\d{1,5})?$/};function I(e,r){const l=e.replace(/\W/g,""),o=r?.partial?v.partial:v.full,a=l.match(o);return a?a.slice(1).filter(Boolean).join(r?.separator||u):e}const b={full:/^(\d{4})(\d{4})(\d{4})(\d{4})$/,partial:/^(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?$/};function M(e,r){const l=e.replace(/[\s-.]/g,""),o=r?.partial?b.partial:b.full,a=l.match(o);return a?a.slice(1).filter(Boolean).join(u):e}const x={full:/^(\d{3})(\d{3})(\d{3})$/,partial:/^(\d{3})(\d{1,3})?(\d{1,5})?$/};function P(e,r){const l=e.replace(/[\s-.]/g,""),o=r?.partial?x.partial:x.full,a=l.match(o);return a?a.slice(1).filter(Boolean).join(u):e}const p={mobil:/^([8]\d{2})(\d{2})(\d{3})$/,fast:/^([2-9]\d)(\d{2})(\d{2})(\d{2})$/,mobilPartial:/^([8]\d{2})(\d{1,2})?(\d{1,3})?$/,fastPartial:/^([2-9]\d)(\d{1,2})?(\d{1,2})?(\d{1,2})?$/};function _(e,r){const l=e.replace(/\W/g,""),o=r?.partial?p.mobilPartial:p.mobil,a=r?.partial?p.fastPartial:p.fast,c=l.match(o)||l.match(a);return c?[r?.countryCode?`+${r.countryCode}`:void 0,...c.slice(1)].filter(Boolean).join(u):e}const C={style:"unit",unit:"kilometer"};function V(e,r){const l=O(e);if(!l)return e.toString();const{suffix:o,...a}={...C,...r};return[s(l,a),o].join("")}const j={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function B(e,r){const l=O(e);if(Number.isNaN(l))return e.toString();const o=Number.isInteger(l)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},a=r?.suffix!==void 0?r.suffix:j.suffix,{prefix:c,...F}={...j,...o,...r},K=c?.length?`${c}${y}`:"",$=a?.length?`${y}${a}`:"",R=s(l,F);return`${K}${R}${$}`}const q={title:"Utils/Formatters",parameters:{layout:"centered",docs:{toc:!0,description:{component:`Eksemplene er hentet fra [Språkrådets artikkel om formattering av tid, tall og
datoer](https://sprakradet.no/godt-og-korrekt-sprak/rettskriving-og-grammatikk/tall-tid-dato/).`}}}},D={args:{locale:"nb-NO",time:new Date().toString()},argTypes:{locale:{options:["nb-NO","en-US"],control:"select"},time:{control:"date"}},render:e=>n.createElement("div",null,n.createElement("p",{className:"jkl-heading-2"},"Dato"),n.createElement(m,null,n.createElement(i,null,"Dato, måned og år"),n.createElement(t,null,n.createElement("time",{dateTime:new Date().toString()},new Date(e.time).toLocaleDateString(e.locale,{year:"numeric",month:"long",day:"numeric"}))),n.createElement(t,null,n.createElement("time",{dateTime:new Date().toString()},new Date(e.time).toLocaleDateString(e.locale,{year:"numeric",month:"numeric",day:"numeric"}))),n.createElement(t,null,n.createElement("time",{dateTime:new Date().toString()},new Date(e.time).toLocaleDateString(e.locale,{year:"numeric",month:"2-digit",day:"2-digit"}))),n.createElement(t,null,n.createElement("time",{dateTime:new Date().toString()},new Date(e.time).toLocaleDateString(e.locale,{year:"2-digit",month:"2-digit",day:"2-digit"}))),n.createElement(t,null,n.createElement("time",{dateTime:new Date().toString()},new Date(e.time).toLocaleDateString(e.locale,{year:"2-digit",month:"numeric",day:"numeric"}))),n.createElement(t,null,n.createElement("time",{dateTime:new Date().toString()},new Date(e.time).toLocaleDateString(e.locale,{year:"numeric",month:"2-digit",day:"2-digit"}))),n.createElement(i,null,"Uten årstall"),n.createElement(t,null,n.createElement("time",{dateTime:new Date(e.time).toString()},new Date(e.time).toLocaleDateString(e.locale,{month:"numeric",day:"numeric"}))),n.createElement(i,null,"Ved oppramsing"),n.createElement(t,null,new Date(e.time).toLocaleDateString(e.locale,{day:"numeric"}),",",new Date(new Date(e.time).setDate(new Date(e.time).getDate()+1)).toLocaleDateString(e.locale,{day:"numeric"}),", og"," ",new Date(new Date(e.time).setDate(new Date(e.time).getDate()+2)).toLocaleDateString(e.locale,{day:"numeric",month:"long"})),n.createElement(i,null,"I teknisk bruk"),n.createElement(t,null,n.createElement("time",{dateTime:new Date(e.time).toString()},new Date(e.time).getFullYear(),"-",new Date(e.time).getMonth(),"-",new Date(e.time).getDate()))))},d={args:{locale:"nb-NO",time:new Date().toString()},argTypes:{locale:{options:["nb-NO","en-US"],control:"select"},time:{control:"date"}},render:e=>n.createElement("div",null,n.createElement("p",{className:"jkl-heading-2"},"Tid"),n.createElement(m,null,n.createElement(i,null,"Klokkeslett"),n.createElement(t,null,new Date(e.time).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric"})),n.createElement(t,null,new Date(e.time).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric",second:"numeric"})),n.createElement(i,null,"Nøyaktige klokkeslett"),n.createElement(t,null,new Date(e.time).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:1})),n.createElement(t,null,new Date(e.time).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:2})),n.createElement(i,null,"Tid på døgnet"),n.createElement(t,null,new Date(e.time).toLocaleTimeString(e.locale,{dayPeriod:"long"})),n.createElement(t,null,new Date(e.time).toLocaleTimeString(e.locale,{dayPeriod:"short"})),n.createElement(t,null,new Date(e.time).toLocaleTimeString(e.locale,{dayPeriod:"narrow"})),n.createElement(i,null,"Tidsrom"),n.createElement(t,null,"Kl."," ",new Date(e.time).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric"}),"–",new Date(new Date(e.time).setHours(new Date(e.time).getHours()+8)).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric"})),n.createElement(t,null,"Fra kl."," ",new Date(e.time).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric"})," ","til"," ",new Date(new Date(e.time).setHours(new Date(e.time).getHours()+8)).toLocaleTimeString(e.locale,{hour:"numeric",minute:"numeric"}))))},g={args:{tall:1e4},render:e=>n.createElement("div",null,n.createElement("p",{className:"jkl-heading-2"},"Tall ",n.createElement("small",null,"(",s(e.tall),")")),n.createElement(m,null,n.createElement(i,null,"Små tall"),n.createElement(t,null,s("23")," år"),n.createElement(i,null,"Store tall"),n.createElement(t,null,s("2500000")," passasjerer"),n.createElement(t,null,s("4500800")," kroner"),n.createElement(t,null,s("2500")," biler"),n.createElement(t,null,s("0,00302")),n.createElement(i,null,"Desimaltall"),n.createElement(t,null,s("12345,67"))))},f={args:{avstand:4e3,suffix:"",unit:"kilometer"},argTypes:{unit:{control:"select",options:["kilometer","meter","decimeter","centimeter","millimeter","micrometer","nanometer","picometer","mile","yard","foot","inch","point"]}},render:e=>n.createElement("div",null,n.createElement("p",{className:"jkl-heading-2"},"Avstand"),n.createElement(m,null,n.createElement(i,null,"Avstand"),n.createElement(t,null,V(e.avstand,{unit:e.unit,suffix:e.suffix}))))},E={args:{kroner:4e3,prefix:"kr",suffix:"NOK",desimaler:0},argTypes:{desimaler:{control:{type:"number",max:2,min:0}}},render:e=>n.createElement("div",null,n.createElement("p",{className:"jkl-heading-2"},"Valuta"),n.createElement(m,null,n.createElement(i,null,"Valuta"),n.createElement(t,null,B(e.kroner,{prefix:e.prefix,suffix:e.suffix,minimumFractionDigits:e.desimaler}))))},T={args:{telefonnummer:"91509801",countryCode:"47"},argTypes:{telefonnummer:{type:"select",options:["91509801","80022222"]}},render:e=>n.createElement("div",null,n.createElement("p",{className:"jkl-heading-2"},"Telefonnummer"),n.createElement(m,null,n.createElement(i,null,"Telefonnummer"),n.createElement(t,null,_(e.telefonnummer,{countryCode:e.countryCode}))))},S={args:{fodselsnummer:"01065100203",partial:!1},render:e=>n.createElement("div",null,n.createElement("p",{className:"jkl-heading-2"},"Fødselsnummer"),n.createElement(m,null,n.createElement(i,null,"Fødselsnummer"),n.createElement(t,null,U(e.fodselsnummer,{partial:e.partial}))))},w={args:{kortnummer:"5457623898234113",partial:!1},render:e=>n.createElement("div",null,n.createElement("p",{className:"jkl-heading-2"},"Kortnummer"),n.createElement(m,null,n.createElement(i,null,"Kortnummer"),n.createElement(t,null,M(e.kortnummer,{partial:e.partial}))))},k={args:{kontonummer:"915651232",partial:!1,separator:"."},render:e=>n.createElement("div",null,n.createElement("p",{className:"jkl-heading-2"},"Kontonummer"),n.createElement(m,null,n.createElement(i,null,"Kontonummer"),n.createElement(t,null,I(e.kontonummer,{partial:e.partial,separator:e.separator}))))},h={args:{org:"915651232",partial:!1},render:e=>n.createElement("div",null,n.createElement("p",{className:"jkl-heading-2"},"Organisasjonsnummer"),n.createElement(m,null,n.createElement(i,null,"Organisasjonsnummer"),n.createElement(t,null,P(e.org,{partial:e.partial}))))},L={args:{størrelse:1e7},render:e=>n.createElement("div",null,n.createElement("p",{className:"jkl-heading-2"},"Filstørrelse"),n.createElement(m,null,n.createElement(i,null,"Filstørrelse"),n.createElement(t,null,A(e.størrelse))))};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};const z=["Dato","Tid","Tall","Avstand","Valuta","Telefonnummer","Fodselsnummer","Kortnummer","Kontonummer","Organisasjonsnummer","Filstorrelse"];export{f as Avstand,D as Dato,L as Filstorrelse,S as Fodselsnummer,k as Kontonummer,w as Kortnummer,h as Organisasjonsnummer,g as Tall,T as Telefonnummer,d as Tid,E as Valuta,z as __namedExportsOrder,q as default};
