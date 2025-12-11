import{r as m,R as n}from"./index-siqcju79.js";/* empty css               */import{F as d}from"./Flex-DP-fj2ie.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./tokens-CvksrKef.js";import"./SlotComponent-CWN6EcE2.js";const p=m.forwardRef((l,o)=>{const{label:e,expressive:s=!1,inline:c=!1,...u}=l;return n.createElement("div",{"data-testid":"jkl-select",className:"BETA_jkl-select","data-mode":s?"expressive":"productive","data-inline":c?"true":"false"},n.createElement("div",{className:"component-wrapper"},n.createElement("label",{id:`${e}-select-label`,htmlFor:`${e}-select`},e),n.createElement("div",{className:"select-wrapper"},n.createElement("select",{...u,id:`${e}-select`,"aria-labelledby":`${e}-select-label`,"aria-describedby":`${e}-select-support-label`},n.createElement("option",{value:"",disabled:!0,selected:!0},"Velg"),l.children))),n.createElement("p",{id:`${e}-select-description`},l.description))});p.__docgenInfo={description:`BETA: Denne komponenten er enda under utvikling, og kan gjerne brukes i løsnignene ute, men vil gå gjennom breaking
changes fortløpende.`,methods:[],displayName:"BETA_Select",props:{label:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},expressive:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const i=["Apple iPhone 12 Pro Max","Apple iPhone 12 Pro","Apple iPhone 12","Apple iPhone 12 Plus","Apple iPhone 13 Pro Max","Apple iPhone 13 Pro","Apple iPhone 13","Apple iPhone 13 Plus","Apple iPhone 14 Pro Max","Apple iPhone 14 Pro","Apple iPhone 14","Apple iPhone 14 Plus","Apple iPhone 15 Pro Max","Apple iPhone 15 Pro","Apple iPhone 15","Apple iPhone 15 Plus","Apple iPhone 16 Pro Max","Apple iPhone 16 Pro","Apple iPhone 16","Apple iPhone 16 Plus","Apple iPhone 17 Pro Max","Apple iPhone 17 Pro","Apple iPhone 17","Apple iPhone 17 Plus","Google Pixel 6","Google Pixel 6 XL","Google Pixel 6a","Google Pixel 7","Google Pixel 7 XL","Google Pixel 7a","Google Pixel 8","Google Pixel 8 XL","Google Pixel 8a","Google Pixel 9","Google Pixel 9 XL","Google Pixel 9a","Samsung Galaxy A21","Samsung Galaxy A22","Samsung Galaxy A23","Samsung Galaxy A24","Samsung Galaxy A25","Samsung Galaxy S20","Samsung Galaxy S21","Samsung Galaxy S22","Samsung Galaxy S23","Samsung Galaxy S24","Samsung Galaxy S25","Samsung Galaxy S26","Huawei Mate 10","Huawei Mate 20","Huawei Mate 30","Huawei P20","Huawei P30","Huawei P40","Huawei P50","HTC Thunderbolt"].sort((l,o)=>l.localeCompare(o)),b={title:"Komponenter/Select/BETA Select",component:p,parameters:{layout:"centered"},args:{name:"Select",label:"Mobil",placeholder:"Velg mobil",description:"Velg kun én mobil, takk 🙏",required:!1,inline:!1,expressive:!0,children:i.map(l=>n.createElement("option",{key:l},l))},decorators:[l=>n.createElement("div",{style:{resize:"horizontal",overflow:"scroll",padding:"24px"}}," ",n.createElement(l,null))],tags:["autodocs","beta"]},t={name:"Select"},a={name:"Select med grupperte valg",render:l=>{const o=Object.groupBy(i,e=>{switch(e.includes(e)){case e.includes("Apple"):return"Apple";case e.includes("Samsung"):return"Samsung";case e.includes("Google"):return"Google";default:return"Annet"}});return n.createElement(p,{...l},n.createElement("optgroup",{label:"Apple"},o.Apple?.map(e=>n.createElement("option",{key:e,value:e},e))),n.createElement("optgroup",{label:"Samsung"},o.Samsung?.map(e=>n.createElement("option",{key:e,value:e},e))),n.createElement("optgroup",{label:"Google"},o.Google?.map(e=>n.createElement("option",{key:e,value:e},e))),n.createElement("optgroup",{label:"Andre"},o.Annet?.map(e=>n.createElement("option",{key:e,value:e},e))))}},r={name:"Select i skjema (bak)",parameters:{layout:"fullscreen"},render:l=>n.createElement(d,{direction:"column",gap:24,style:{padding:"24px"}},n.createElement("h2",{id:"question-title"},"Hvilket merke er mobilen din?"),n.createElement(p,{...l,"aria-labelledby":"question-title"}))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const h=["BETASelect","BETASelectGrouped","BETA_IN_FORM_Select"];export{t as BETASelect,a as BETASelectGrouped,r as BETA_IN_FORM_Select,h as __namedExportsOrder,b as default};
