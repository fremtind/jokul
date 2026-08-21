import{j as e}from"./iframe-DkWzlxd-.js";import{c as u}from"./clsx-B-dksMZM.js";import{S as r}from"./_index-Cp_LV3Yu.js";import"./preload-helper-PPVm8Dsz.js";const p=({className:t,caption:s,header:o,body:m,footer:l,...c})=>e.jsxs("table",{...c,className:u("jkl-summary-table",t),children:[s&&e.jsx("caption",{className:"jkl-sr-only",children:s}),e.jsx("thead",{className:"jkl-sr-only",children:e.jsx("tr",{children:o.map((d,i)=>e.jsx("th",{scope:"col",children:d},i))})}),e.jsx("tbody",{children:m}),e.jsx("tfoot",{children:l})]}),y={title:"Komponenter/SummaryTable",component:p},a="­",n={args:{caption:"Example",header:["Product","Price"],body:e.jsxs(e.Fragment,{children:[e.jsx(r,{header:`Uføre${a}pensjon`,content:"340,00 kr/mnd"}),e.jsx(r,{className:"summary-table-example__custom-row",header:`Livs${a}forsikring`,content:"Tatt ut av tilbudet"}),e.jsx(r,{header:`Innbo${a}forsikring`,content:"122,00 kr/mnd"}),e.jsx(r,{header:`Reise${a}forsikring`,content:"249,00 kr/mnd"}),e.jsx(r,{className:"summary-table-example__custom-row",header:"Rabatt",content:"- 17,50 kr/mnd"})]}),footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{header:"Total sum",content:"693,50 kr/mnd"}),e.jsx(r,{header:e.jsx("span",{className:"jkl-sr-only",children:"Total sum per år"}),content:"8322,50 kr/mnd"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Example",
    header: ["Product", "Price"],
    body: <>
                <SummaryTableRow header={\`Uføre\${SOFT_HYPHEN}pensjon\`} content="340,00 kr/mnd" />
                <SummaryTableRow className="summary-table-example__custom-row" header={\`Livs\${SOFT_HYPHEN}forsikring\`} content="Tatt ut av tilbudet" />
                <SummaryTableRow header={\`Innbo\${SOFT_HYPHEN}forsikring\`} content="122,00 kr/mnd" />
                <SummaryTableRow header={\`Reise\${SOFT_HYPHEN}forsikring\`} content="249,00 kr/mnd" />
                <SummaryTableRow className="summary-table-example__custom-row" header="Rabatt" content="- 17,50 kr/mnd" />
            </>,
    footer: <>
                <SummaryTableRow header="Total sum" content="693,50 kr/mnd" />
                <SummaryTableRow header={<span className="jkl-sr-only">Total sum per år</span>} content="8322,50 kr/mnd" />
            </>
  }
}`,...n.parameters?.docs?.source}}};const k=["SummaryTable"];export{n as SummaryTable,k as __namedExportsOrder,y as default};
