var A=Object.defineProperty;var B=(r,l,t)=>l in r?A(r,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[l]=t;var y=(r,l,t)=>(B(r,typeof l!="symbol"?l+"":l,t),t);import{j as e}from"./AboutHeader-CpM0iYLI.js";import{r as a}from"./index-B80Lgev0.js";import{c as S}from"./ReactAppend-CBRQCQGz.js";import{B as _}from"./Base-XuIhqtsd.js";import{C as M}from"./CreateReactScript-BTmFJSrT.js";import{B as R}from"./Results-DSLuSBy_.js";import{R as w}from"./ReactAppend-C-tNgxIf.js";import{N as D}from"./Number2Currency-e57Tgsuk.js";import{R as k}from"./index-B1nVdsa0.js";import{S as T}from"./sweetalert2.all-Dh0rZL5X.js";import{m as C}from"./main-B2CtU6ez.js";import{L as V}from"./Logout-CPQZ59pt.js";import"./index-DO3Aws4m.js";import"./tippy-react.esm-CHhA99mn.js";import"./Base-BPkIOKM7.js";import"./index.esm-Cu-mVv1q.js";import"./___vite-browser-external_commonjs-proxy-C9-083JZ.js";/* empty css               *//* empty css              */import"./index-CqrOtH36.js";class z extends R{constructor(){super(...arguments);y(this,"path","customer/user-formulas")}}const O=new z,q=({id:r,name:l,created_at:t,has_treatment:s,scalp_type:n,hair_type:c,hair_goals:p,fragrance:m,index:x,setFormulas:f})=>{const[i,d]=a.useState(!1),b=a.useRef(),u=async h=>{if(l==b.current.value)return d(!1);const g=await O.save({id:r,name:b.current.value});g&&(f(j=>j.map(o=>(o.id==g.data.id&&(o.name=g.data.name),o))),d(!1))};return e.jsx("div",{className:"relative w-full",children:e.jsxs("div",{className:"relative bg-[#F7F7E7] p-4 rounded-xl w-full pb-8",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("div",{children:i?e.jsx("input",{ref:b,type:"text",className:"w-full outline-none px-3 py-1 rounded-md",defaultValue:l,onBlur:u,autoFocus:!0}):e.jsx("span",{className:"text-lg font-bold",onClick:()=>d(!0),children:l||e.jsxs(e.Fragment,{children:["Fórmula ",x+1]})})}),e.jsxs("small",{children:["Creado el ",moment(t).format("ll")]})]}),e.jsxs("div",{className:"text-sm mt-2",children:[e.jsxs("div",{children:[e.jsx("b",{children:"🧐 Tratamiento"}),":"," ",s.description]}),e.jsxs("div",{children:[e.jsx("b",{children:"👀 Cuero cabelludo"}),": "," ",n.description]}),e.jsxs("div",{children:[e.jsx("b",{children:"✅ Tipo de cabello"}),":"," ",c.description]}),e.jsxs("div",{children:[e.jsx("b",{children:"💡 Objetivos"}),":"," ",p.map(h=>h.description).join(", ")]}),e.jsxs("div",{children:[e.jsx("b",{children:"🫙 Fragancia"}),":"," ",m.name]})]}),e.jsxs("button",{className:"absolute -bottom-4 bg-[#A191B8] text-sm text-white px-4 py-2 rounded-full",href:`/test/result/${r}`,children:["VOLVER A COMPRAR ",e.jsx("i",{className:"mdi mdi-arrow-top-right"})]})]})})};class E{}y(E,"save",async l=>{try{const{status:t,result:s}=await C.Fetch("/api/customer/profile",{method:"PATCH",body:JSON.stringify(l)});if(!t)throw new Error((s==null?void 0:s.message)||"Ocurrio un error inesperado");return C.Notify.add({icon:"/assets/img/favicon.png",title:"Correcto",body:s.message,type:"success"}),!0}catch(t){return C.Notify.add({icon:"/assets/img/favicon.png",title:"Error",body:t.message,type:"danger"}),!1}});const P=({gridRef:r,rest:l,columns:t,toolBar:s,masterDetail:n,filterValue:c,exportable:p,exportableName:m,customizeCell:x=()=>{},selectable:f=!1})=>(a.useEffect(()=>{DevExpress.localization.locale(navigator.language),$(r.current).dxDataGrid({language:"es",dataSource:{load:async i=>await l.paginate({...i,_token:$('[name="csrf_token"]').attr("content")})},onToolbarPreparing:i=>{const{items:d}=i.toolbarOptions;s(d)},remoteOperations:!0,columnResizingMode:"widget",allowColumnResizing:!0,allowColumnReordering:!0,columnAutoWidth:!0,scrollbars:"auto",filterPanel:{visible:!0},searchPanel:{visible:!0},headerFilter:{visible:!0,search:{enabled:!0}},height:"calc(100vh - 250px)",filterValue:c||null,export:{enabled:p},selection:f?{mode:"multiple",selectAllMode:"page"}:void 0,onExporting:function(i){var d=new ExcelJS.Workbook,b=d.addWorksheet("Main sheet");DevExpress.excelExporter.exportDataGrid({worksheet:b,component:i.component,customizeCell:function(u){x(u),u.excelCell.alignment={horizontal:"left",vertical:"top",...u.excelCell.alignment}}}).then(function(){d.xlsx.writeBuffer().then(function(u){saveAs(new Blob([u],{type:"application/octet-stream"}),`${m}.xlsx`)})})},rowAlternationEnabled:!0,showBorders:!0,filterRow:{visible:!0,applyFilter:"auto"},filterBuilderPopup:{visible:!1,position:{of:window,at:"top",my:"top",offset:{y:10}}},paging:{pageSize:10},pager:{visible:!0,allowedPageSizes:[5,10,25,50,100],showPageSizeSelector:!0,showInfo:!0,showNavigationButtons:!0},allowFiltering:!0,scrolling:{mode:"standard",useNative:!0,preloadEnabled:!0,rowRenderingMode:"standard"},columnChooser:{title:"Mostrar/Ocultar columnas",enabled:!0,mode:"select",search:{enabled:!0}},columns:t,masterDetail:n,onContentReady:(...i)=>{tippy(".tippy-here",{arrow:!0,animation:"scale"})}}).dxDataGrid("instance"),tippy(".dx-button",{arrow:!0})},[null]),e.jsx("div",{id:"grid-container",ref:r})),I=({title:r,gridRef:l,rest:t,columns:s,toolBar:n,masterDetail:c,filterValue:p,exportable:m=!1,customizeCell:x,selectable:f=!1})=>e.jsx(P,{exportableName:r,gridRef:l,rest:t,columns:s.filter(Boolean),toolBar:n,masterDetail:c,filterValue:p,exportable:m,customizeCell:x,selectable:f});class G extends R{constructor(){super(...arguments);y(this,"path","customer/sales")}}const U=new G,N=({})=>{const r=a.useRef();return e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl border-b pb-2 mb-4 font-bold",children:"Historial de compras 📃"}),e.jsx("div",{className:"p-0",children:e.jsx(I,{gridRef:r,rest:U,toolBar:l=>{l.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(r.current).dxDataGrid("instance").refresh()}})},columns:[{caption:"Compra",width:"325px",cellTemplate:(l,{data:t})=>{var s;w(l,e.jsxs(e.Fragment,{children:[e.jsxs("b",{className:"block text-lg",children:["Compraste ",((s=t==null?void 0:t.bundle)==null?void 0:s.name)||"solo 1 producto"]}),e.jsxs("p",{children:[e.jsx("b",{children:"Formula"}),": ",t.formula.name??"Sin nombre"]}),e.jsxs("p",{children:[e.jsx("b",{children:"Envio a"}),": ",t==null?void 0:t.address," ",t==null?void 0:t.number,e.jsxs("small",{className:"opacity-75 block",children:[(t==null?void 0:t.province)??(t==null?void 0:t.district),", ",t==null?void 0:t.department,", ",t==null?void 0:t.country," ",(t==null?void 0:t.zip_code)&&e.jsxs(e.Fragment,{children:["- ",t==null?void 0:t.zip_code]})]})]})]}))}},{dataField:"total_amount",caption:"Total",dataType:"number",cellTemplate:(l,{data:t})=>{l.css({textAlign:"center",verticalAlign:"middle"}),l.text(`S/. ${D(t.total_amount)}`)}},{dataField:"status.name",caption:"Estado",cellTemplate:(l,{data:t})=>{l.css({verticalAlign:"middle"}),w(l,e.jsx("span",{className:"block mx-auto w-max px-2 py-1 rounded-full",style:{backgroundColor:t.status.color?`${t.status.color}2e`:"#3333332e",color:t.status.color??"#333"},children:t.status.name}))}},{dataField:"created_at",caption:"Fecha creacion",dataType:"datetime",format:"yyyy-MM-dd HH:mm:ss",sortOrder:"desc",cellTemplate:(l,{text:t})=>{l.css({textAlign:"center",verticalAlign:"middle"}),l.text(t)}}]})})]})};k.setAppElement("#app");const H=({session:r})=>{const[l,t]=a.useState(!1),[s,n]=a.useState(r.birth_month??"01"),[c,p]=a.useState(31),m=a.useRef(),x=a.useRef(),f=a.useRef(),i=a.useRef(),d=a.useRef(),b=a.useRef(),u=a.useRef(),h=a.useRef(),g=async o=>{o.preventDefault(),await E.save({name:m.current.value,lastname:x.current.value,phone:f.current.value,address:i.current.value,address_number:d.current.value,address_reference:b.current.value})&&(T.fire({title:"Información actualizada",text:"Tu información se ha actualizado correctamente.",icon:"success",timer:1500,showConfirmButton:!1}),location.reload())};a.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[l]),a.useEffect(()=>{var v;const o=(v=document.querySelector(`#birth-month option[value="${s}"]`))==null?void 0:v.getAttribute("data-days");p(o)},[s]);const j=[];for(let o=1;o<=c;o++)j.push(String(o).padStart(2,"0"));return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl border-b pb-2 mb-4 font-bold",children:"Tu informacion personal"}),e.jsxs("div",{className:"flex flex-col gap-6 p-6 pb-10 mb-4 items-start relative border bg-[#F7F7E7] rounded-3xl",children:[e.jsxs("div",{children:[e.jsx("b",{children:"Nombres y apellidos:"}),e.jsxs("p",{children:[r.name," ",r.lastname]})]}),e.jsxs("div",{children:[e.jsx("b",{children:"Correo electronico:"}),e.jsx("p",{children:r.email})]}),e.jsxs("div",{children:[e.jsx("b",{children:"Telefono:"}),e.jsx("p",{children:r.phone||e.jsx("i",{className:"opacity-75",children:"- Sin telefono -"})})]}),e.jsxs("div",{children:[e.jsx("b",{children:"Direccion:"}),e.jsxs("p",{children:[(r==null?void 0:r.address)||"Sin direccion"," ",(r==null?void 0:r.address_number)||"SN",e.jsxs("small",{className:"opacity-75 block -mt-1",children:[(r==null?void 0:r.province)??(r==null?void 0:r.district),", ",r==null?void 0:r.department,", ",r==null?void 0:r.country," ",(r==null?void 0:r.zip_code)&&e.jsxs(e.Fragment,{children:["- ",r==null?void 0:r.zip_code]})]})]})]}),e.jsxs("button",{className:"absolute -bottom-4 bg-[#A191B8] text-sm text-white px-4 py-2 rounded-full",onClick:()=>t(!0),children:[e.jsx("i",{className:"mdi mdi-pencil"})," EDITAR INFORMACION"]})]})]}),e.jsx(k,{isOpen:l,onRequestClose:()=>t(!1),className:"absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white p-10 rounded-2xl shadow-lg w-[95%] max-w-lg max-h-[95vh] overflow-y-auto",overlayClassName:"fixed inset-0 bg-black bg-opacity-50 z-50",children:e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{class:"grid gap-6 mb-6 md:grid-cols-6",children:[e.jsxs("div",{className:"md:col-span-3",children:[e.jsx("label",{for:"first_name",class:"block mb-2 text-sm font-medium text-gray-900",children:"Nombres"}),e.jsx("input",{ref:m,type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7C2C6] focus:border-[#F7C2C6] block w-full p-2.5 outline-none",required:!0,defaultValue:r.name})]}),e.jsxs("div",{className:"md:col-span-3",children:[e.jsx("label",{for:"last_name",class:"block mb-2 text-sm font-medium text-gray-900",children:"Apellidos"}),e.jsx("input",{ref:x,type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7C2C6] focus:border-[#F7C2C6] block w-full p-2.5 outline-none",required:!0,defaultValue:r.lastname})]}),e.jsxs("div",{className:"md:col-span-6",children:[e.jsx("label",{for:"birthday",class:"block mb-2 text-sm font-medium text-gray-900",children:"Día de cumpleaños"}),e.jsxs("div",{className:"grid gap-6 grid-cols-2",children:[e.jsxs("select",{ref:u,id:"birth-month",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7C2C6] focus:border-[#F7C2C6] block w-full p-2.5 outline-none",required:!0,onChange:o=>n(o.target.value),defaultValue:s,value:s,children:[e.jsx("option",{value:"01","data-days":31,children:"Enero"}),e.jsx("option",{value:"02","data-days":29,children:"Febrero"}),e.jsx("option",{value:"03","data-days":31,children:"Marzo"}),e.jsx("option",{value:"04","data-days":30,children:"Abril"}),e.jsx("option",{value:"05","data-days":31,children:"Mayo"}),e.jsx("option",{value:"06","data-days":30,children:"Junio"}),e.jsx("option",{value:"07","data-days":31,children:"Julio"}),e.jsx("option",{value:"08","data-days":31,children:"Agosto"}),e.jsx("option",{value:"09","data-days":30,children:"Septiembre"}),e.jsx("option",{value:"10","data-days":31,children:"Octubre"}),e.jsx("option",{value:"11","data-days":30,children:"Noviembre"}),e.jsx("option",{value:"12","data-days":31,children:"Diciembre"})]}),e.jsx("select",{ref:h,id:"birth-day",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7C2C6] focus:border-[#F7C2C6] block w-full p-2.5 outline-none",defaultValue:r.birth_day,children:j.map(o=>e.jsx("option",{value:o,children:o},o))})]})]}),e.jsxs("div",{className:"col-span-6",children:[e.jsx("label",{for:"last_name",class:"block mb-2 text-sm font-medium text-gray-900",children:"Correo"}),e.jsx("input",{type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7C2C6] focus:border-[#F7C2C6] block w-full p-2.5 outline-none disabled:cursor-not-allowed disabled:bg-gray-100",required:!0,defaultValue:r.email,disabled:!0})]}),e.jsxs("div",{className:"md:col-span-3",children:[e.jsx("label",{for:"first_name",class:"block mb-2 text-sm font-medium text-gray-900",children:"Pais"}),e.jsx("input",{type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7C2C6] focus:border-[#F7C2C6] block w-full p-2.5 outline-none disabled:cursor-not-allowed disabled:bg-gray-100",required:!0,defaultValue:"Perú",disabled:!0})]}),e.jsxs("div",{className:"md:col-span-3",children:[e.jsx("label",{for:"last_name",class:"block mb-2 text-sm font-medium text-gray-900",children:"Teléfono"}),e.jsx("input",{ref:f,type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7C2C6] focus:border-[#F7C2C6] block w-full p-2.5 outline-none",required:!0,defaultValue:r.phone})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{for:"first_name",class:"block mb-2 text-sm font-medium text-gray-900",children:"Departamento"}),e.jsx("input",{type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7C2C6] focus:border-[#F7C2C6] block w-full p-2.5 outline-none disabled:cursor-not-allowed disabled:bg-gray-100",required:!0,defaultValue:r.department,disabled:!0})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{for:"last_name",class:"block mb-2 text-sm font-medium text-gray-900",children:"Provincia"}),e.jsx("input",{type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7C2C6] focus:border-[#F7C2C6] block w-full p-2.5 outline-none disabled:cursor-not-allowed disabled:bg-gray-100",required:!0,defaultValue:r.province,disabled:!0})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{for:"last_name",class:"block mb-2 text-sm font-medium text-gray-900",children:"Distrito"}),e.jsx("input",{type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7C2C6] focus:border-[#F7C2C6] block w-full p-2.5 outline-none disabled:cursor-not-allowed disabled:bg-gray-100",required:!0,defaultValue:r.district,disabled:!0})]}),e.jsxs("div",{className:"md:col-span-4",children:[e.jsx("label",{for:"last_name",class:"block mb-2 text-sm font-medium text-gray-900",children:"Dirección"}),e.jsx("input",{ref:i,type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7C2C6] focus:border-[#F7C2C6] block w-full p-2.5 outline-none disabled:cursor-not-allowed",required:!0,defaultValue:r.address})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{for:"last_name",class:"block mb-2 text-sm font-medium text-gray-900",children:"Número"}),e.jsx("input",{ref:d,type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7C2C6] focus:border-[#F7C2C6] block w-full p-2.5 outline-none disabled:cursor-not-allowed",required:!0,defaultValue:r.address_number})]}),e.jsxs("div",{className:"col-span-6",children:[e.jsx("label",{for:"last_name",class:"block mb-2 text-sm font-medium text-gray-900",children:"Referencia"}),e.jsx("input",{ref:b,type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F7C2C6] focus:border-[#F7C2C6] block w-full p-2.5 outline-none disabled:cursor-not-allowed",required:!0,defaultValue:r.address_reference})]})]}),e.jsxs("button",{className:"bg-[#A191B8] text-sm text-white px-4 py-2 rounded-full",children:[e.jsx("i",{className:"fa fa-save me-2"}),"GUARDAR INFORMACIÓN"]})]})})]})},F=({items:r})=>{const[l,t]=a.useState(r);return e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl border-b pb-2 mb-4 font-bold",children:"Tus fórmulas 🫧"}),e.jsxs("div",{className:"flex flex-col gap-12 pb-4 items-center relative",children:[l.length==0&&e.jsxs("div",{className:"mx-auto text-center",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Ups!"}),e.jsx("p",{className:"text-sm mb-4",children:"Al parecer no tienes formulas"}),e.jsx("button",{href:"/test",className:"rounded-full px-3 py-2 text-white bg-[#A191B8] text-sm",children:"CREA TU FÓRMULA"})]}),l.map((s,n)=>e.jsx(q,{...s,index:n,setFormulas:t},n))]})]})},J=({session:r,formulas:l,gifts:t})=>{console.log(t);const[s,n]=a.useState("formulas"),c=()=>{switch(s){case"formulas":return e.jsx(F,{items:l});case"purchases":return e.jsx(N,{});case"gift":return e.jsx(N,{});case"informacion":return e.jsx(H,{session:r});default:return e.jsx(F,{items:l})}};return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"px-[5%] md:px-[7.5%] lg:px-[10%] py-[5%] bg-[#F9F3EF] text-[#404040]",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4",children:["¡Bienvenid@, ",r.name.split(" ")[0],"! ✨"]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-5",children:[e.jsx("div",{className:"w-full md:w-1/3 lg:w-1/4 md:bg-[#EFBEC1] rounded-xl",children:e.jsxs("ul",{className:"text-center md:text-start text-[#404040] md:text-white grid sm:grid-cols-2 md:flex md:flex-col gap-2 text-sm font-light tracking-wider md:p-4",children:[e.jsxs("li",{className:`px-4 py-2 border-[#404040] border md:border-none hover:bg-[#EFBEC1] md:hover:bg-[#ffffff33] rounded cursor-pointer ${s==="formulas"&&"bg-[#EFBEC1] md:bg-[#ffffff33] text-white"}`,onClick:()=>n("formulas"),children:[e.jsx("i",{className:"mdi mdi-flask me-1"}),"Fórmulas creadas"]}),e.jsxs("li",{className:`px-4 py-2 border-[#404040] border md:border-none hover:bg-[#EFBEC1] md:hover:bg-[#ffffff33] rounded cursor-pointer ${s==="purchases"&&"bg-[#EFBEC1] md:bg-[#ffffff33] text-white"}`,onClick:()=>n("purchases"),children:[e.jsx("i",{className:"mdi mdi-cart-outline me-1"}),"Mis compras"]}),t.length>0&&e.jsxs("li",{className:`px-4 py-2 border-[#404040] border md:border-none hover:bg-[#EFBEC1] md:hover:bg-[#ffffff33] rounded cursor-pointer ${s==="gift"&&"bg-[#EFBEC1] md:bg-[#ffffff33] text-white"}`,onClick:()=>n("gift"),children:[e.jsx("i",{className:"mdi mdi-gift-outline me-1"}),"Regala un Vuá"]}),e.jsxs("li",{className:`px-4 py-2 border-[#404040] border md:border-none hover:bg-[#EFBEC1] md:hover:bg-[#ffffff33] rounded cursor-pointer ${s==="informacion"&&"bg-[#EFBEC1] md:bg-[#ffffff33] text-white"}`,onClick:()=>n("informacion"),children:[e.jsx("i",{className:"mdi mdi-account me-1"}),"Información personal"]}),e.jsxs("li",{className:"px-4 py-2 border-[#404040] border md:border-none hover:bg-[#EFBEC1] md:hover:bg-[#ffffff33] rounded cursor-pointer",onClick:V,children:[e.jsx("i",{className:"mdi mdi-close me-1"}),"Cerrar sesión"]})]})}),e.jsx("div",{className:"bg-white p-4 w-full md:w-2/3 lg:w-3/4 rounded-xl",children:c()})]})]})})};M((r,l)=>{S(r).render(e.jsx(_,{...l,children:e.jsx(J,{...l})}))});