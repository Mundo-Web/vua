import{j as e}from"./StatisticCard-Bdo2C3ON.js";import"./index-DFv2mRv-.js";import{c as d}from"./ReactAppend-z4_qtB7b.js";import{C as c}from"./CreateReactScript-yWJ4gJYl.js";/* empty css              */import{B as n}from"./Base-CuojlR7s.js";import{H as i}from"./HtmlContent-BY9uANKo.js";import"./index.esm-B502ZfUP.js";import"./___vite-browser-external_commonjs-proxy-BQdpDcDf.js";import"./main-BBbUrZUL.js";/* empty css               */import"./logo-BjQK9OLG.js";const o=({coach:s,country:r,resources:l})=>e.jsx("section",{className:"p-[5%] mt-[68px]",children:e.jsxs("div",{className:"flex flex-col-reverse md:flex-row gap-4 md:gap-8",children:[e.jsxs("div",{className:"md:w-2/3",children:[e.jsx("img",{className:"w-full aspect-[8/3] object-cover object-center rounded-lg",src:`/api/cover/${s.uuid}`,alt:"Cover Photo"}),e.jsxs("div",{className:"flex gap-4 my-[5%] items-center",children:[e.jsx("img",{className:"w-24 h-24 rounded-full object-cover object-center",src:`/api/profile/${s.uuid}`,alt:"Profile Photo"}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl font-bold",children:[s.name," ",s.lastname]}),e.jsx("p",{children:s.title})]})]}),e.jsx("div",{className:"prose",children:e.jsx(i,{html:s.description})}),e.jsx("h3",{className:"text-lg font-bold mt-[5%] mb-[2.5%]",children:"Contenidos y temas"}),e.jsx("div",{id:"accordion-flush","data-accordion":"collapse","data-active-classes":"text-gray-500 dark:text-gray-400","data-inactive-classes":"text-gray-500 dark:text-gray-400",children:l.map((t,a)=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{id:`accordion-heading-${a}`,children:e.jsxs("button",{type:"button",className:"flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200  dark:text-gray-400 gap-3","data-accordion-target":`#accordion-${a}`,"aria-expanded":"true","aria-controls":`accordion-${a}`,children:[e.jsx("span",{children:t.name}),e.jsx("i",{"data-accordion-icon":!0,className:"text-lg rotate-180 shrink-0 fas fa-angle-down"})]})}),e.jsx("div",{id:`accordion-${a}`,className:"hidden","aria-labelledby":`accordion-heading-${a}`,children:e.jsx("div",{className:"py-5 border-b border-gray-200 prose",children:e.jsx(i,{html:t.description})})})]}))})]}),e.jsxs("div",{className:"md:w-1/3 block md:sticky top-[15%] h-max",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Datos del Coach"}),e.jsxs("h3",{className:"text-xl mb-2",children:["PEN ",Number(s.price).toFixed(2)]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("i",{className:"fas fa-globe-americas w-6"}),e.jsx("b",{children:"Nacionalidad"}),": ",r.name," - ",s.city]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("i",{className:"fas fa-flag w-6"}),e.jsx("b",{children:"Experiencia"}),": ",s.experience>0?e.jsxs(e.Fragment,{children:[s.experience," años"]}):e.jsx("i",{children:"Sin experiencia"})]}),e.jsxs("p",{className:"mb-2",children:[e.jsx("i",{className:"fas fa-file-alt w-6"}),e.jsx("b",{children:"Resumen"}),": ",s.summary]}),e.jsxs("button",{type:"button",class:"focus:outline-none text-white bg-[#ff5b5b] hover:bg-[#ff5b5bbb] focus:ring-4 focus:ring-[#ff5b5bdd] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ",children:["Quiero mi coach",e.jsx("i",{className:"fab fa-whatsapp ms-2"})]})]})]})});c((s,r)=>{d(s).render(e.jsx(n,{...r,children:e.jsx(o,{...r})}))});