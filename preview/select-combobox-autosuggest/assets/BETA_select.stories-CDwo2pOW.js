import{r as x,R as n}from"./index-siqcju79.js";import{c as f}from"./clsx-B-dksMZM.js";import{g as v}from"./valuePair-Bn6SadUn.js";import{I as k}from"./InputGroup-BJwbXp8L.js";/* empty css               */import{F as E}from"./Flex-DP-fj2ie.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";import"./tokens-CvksrKef.js";import"./SlotComponent-CWN6EcE2.js";const p=x.forwardRef((a,r)=>{const{label:e,className:c,errorLabel:d,helpLabel:g,items:u,labelProps:P,placeholder:m="Velg",supportLabelProps:y,required:b=!0,...A}=a,S={label:e,errorLabel:d,helpLabel:g,labelProps:P,supportLabelProps:y};return n.createElement(k,{...S,labelProps:{srOnly:!!a["aria-labelledby"]},className:f("NEW_jkl-select expressive",c),"data-testid":"jkl-select",render:h=>n.createElement("select",{ref:r,required:b,...h,...A},m&&n.createElement("option",{disabled:!0,value:""},m),u&&!a.children&&u.map(v).map(s=>n.createElement("option",{"data-testid":"jkl-select__option",key:s.value,value:s.value},s.label)),a.children)})});p.__docgenInfo={description:"BETA: Denne komponenten er enda under utvikling, og kan gjerne brukes i løsnignene ute, men vil gå gjennom breaking changes fortløpende.",methods:[],displayName:"BETA_Select",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-testautoid":{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},errorLabel:{required:!1,tsType:{name:"ReactNode"},description:""},helpLabel:{required:!1,tsType:{name:"ReactNode"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"ReactNode"},description:""},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"LabelProps"},{name:"union",raw:'"children" | "density"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"density"'}]}],raw:'Omit<LabelProps, "children" | "density">'},description:""},supportLabelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"SupportLabelProps"},{name:"union",raw:'"id" | "errorLabel" | "helpLabel" | "density"',elements:[{name:"literal",value:'"id"'},{name:"literal",value:'"errorLabel"'},{name:"literal",value:'"helpLabel"'},{name:"literal",value:'"density"'}]}],raw:`Omit<
    SupportLabelProps,
    "id" | "errorLabel" | "helpLabel" | "density"
>`},description:""},tooltip:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},render:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: InputProps) => JSX.Element",signature:{arguments:[{type:{name:"InputProps"},name:"props"}],return:{name:"JSX.Element"}}},description:""},placeholder:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},items:{required:!1,tsType:{name:"union",raw:"string[] | ValuePair[]",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    value: string;
    label: string;
    description?: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}}]}}],raw:"ValuePair[]"}]},description:`Du kan velge å sende inn enkle tekstelementer eller ValuePair som options.
I tillegg kan du velge å sende inn objekter med labels og items`}}};const i=["Apple iPhone 12 Pro Max","Apple iPhone 12 Pro","Apple iPhone 12","Apple iPhone 12 Plus","Apple iPhone 13 Pro Max","Apple iPhone 13 Pro","Apple iPhone 13","Apple iPhone 13 Plus","Apple iPhone 14 Pro Max","Apple iPhone 14 Pro","Apple iPhone 14","Apple iPhone 14 Plus","Apple iPhone 15 Pro Max","Apple iPhone 15 Pro","Apple iPhone 15","Apple iPhone 15 Plus","Apple iPhone 16 Pro Max","Apple iPhone 16 Pro","Apple iPhone 16","Apple iPhone 16 Plus","Apple iPhone 17 Pro Max","Apple iPhone 17 Pro","Apple iPhone 17","Apple iPhone 17 Plus","Google Pixel 6","Google Pixel 6 XL","Google Pixel 6a","Google Pixel 7","Google Pixel 7 XL","Google Pixel 7a","Google Pixel 8","Google Pixel 8 XL","Google Pixel 8a","Google Pixel 9","Google Pixel 9 XL","Google Pixel 9a","Samsung Galaxy A21","Samsung Galaxy A22","Samsung Galaxy A23","Samsung Galaxy A24","Samsung Galaxy A25","Samsung Galaxy S20","Samsung Galaxy S21","Samsung Galaxy S22","Samsung Galaxy S23","Samsung Galaxy S24","Samsung Galaxy S25","Samsung Galaxy S26","Huawei Mate 10","Huawei Mate 20","Huawei Mate 30","Huawei P20","Huawei P30","Huawei P40","Huawei P50","HTC Thunderbolt"].sort((a,r)=>a.localeCompare(r)),F={title:"Komponenter/Select/BETA Select",component:p,parameters:{layout:"centered"},args:{name:"Select",label:"Mobil",items:i,placeholder:"Velg mobil",required:!1,defaultValue:i[3]},argTypes:{defaultValue:{control:"select",options:["",...i.map(a=>a)]}},decorators:[a=>n.createElement("div",{style:{resize:"horizontal",overflow:"scroll",padding:"24px"}}," ",n.createElement(a,null))],tags:["autodocs","beta"]},t={name:"Select"},l={name:"Select med grupperte valg",render:a=>{const r=Object.groupBy(i,e=>{switch(e.includes(e)){case e.includes("Apple"):return"Apple";case e.includes("Samsung"):return"Samsung";case e.includes("Google"):return"Google";default:return"Annet"}});return n.createElement(p,{...a},n.createElement("optgroup",{label:"Apple"},r.Apple?.map(e=>n.createElement("option",{key:e,value:e},e))),n.createElement("optgroup",{label:"Samsung"},r.Samsung?.map(e=>n.createElement("option",{key:e,value:e},e))),n.createElement("optgroup",{label:"Google"},r.Google?.map(e=>n.createElement("option",{key:e,value:e},e))),n.createElement("optgroup",{label:"Andre"},r.Annet?.map(e=>n.createElement("option",{key:e,value:e},e))))}},o={name:"Select i skjema (bak)",parameters:{layout:"fullscreen"},render:a=>n.createElement(E,{direction:"column",gap:24,style:{padding:"24px"}},n.createElement("h2",{id:"question-title"},"Hvilket merke er mobilen din?"),n.createElement(p,{...a,"aria-labelledby":"question-title"}))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Select med grupperte valg",
  render: args => {
    // Kun for å vise mulighetene med JS for å lage en god gruppert select uten mye markup og logikk :D
    const groupedOptions = Object.groupBy(options, value => {
      switch (value.includes(value)) {
        case value.includes("Apple"):
          return "Apple";
        case value.includes("Samsung"):
          return "Samsung";
        case value.includes("Google"):
          return "Google";
        default:
          return "Annet";
      }
    });
    return <BETA_Select {...args}>
                <optgroup label="Apple">
                    {groupedOptions.Apple?.map(option => <option key={option} value={option}>
                            {option}
                        </option>)}
                </optgroup>

                <optgroup label="Samsung">
                    {groupedOptions.Samsung?.map(option => <option key={option} value={option}>
                            {option}
                        </option>)}
                </optgroup>

                <optgroup label="Google">
                    {groupedOptions.Google?.map(option => <option key={option} value={option}>
                            {option}
                        </option>)}
                </optgroup>

                <optgroup label="Andre">
                    {groupedOptions.Annet?.map(option => <option key={option} value={option}>
                            {option}
                        </option>)}
                </optgroup>
            </BETA_Select>;
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Select i skjema (bak)",
  parameters: {
    layout: "fullscreen"
  },
  render: args => <Flex direction="column" gap={24} style={{
    padding: "24px"
  }}>
            <h2 id="question-title">Hvilket merke er mobilen din?</h2>
            <BETA_Select {...args} aria-labelledby="question-title" />
        </Flex>
}`,...o.parameters?.docs?.source}}};const X=["BETASelect","BETASelectGrouped","BETA_IN_FORM_Select"];export{t as BETASelect,l as BETASelectGrouped,o as BETA_IN_FORM_Select,X as __namedExportsOrder,F as default};
