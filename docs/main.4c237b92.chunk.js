(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{57:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),c=t.n(r),s=t(12),i=t.n(s),l=(t(57),t(98)),o=t(35),j=t(38),d=t(88),b=t(90),m=t(66),h=t(91),x=t(28),u=t(99),O=t(97),p=t(95),g=t(96),f=t(92),v=t(94),N=t(89),y=t(93),k=t(39),B=t.n(k),C=t(42),I=t.n(C),E=t(43),P=t.n(E),S=t(41),w=t.n(S),T=t(40),_=t.n(T),L=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(1),padding:e.spacing(2),textAlign:"left",color:e.palette.text.primary},columnGap:Object(j.a)({paddingLeft:e.spacing(0)},e.breakpoints.up("md"),{paddingLeft:e.spacing(1)}),listItem:{paddingTop:e.spacing(0),paddingBottom:e.spacing(0)},link:{"&:hover":{color:"#ff6357"}},secondaryColor:{color:e.palette.text.secondary},mainColor:{color:e.palette.primary.main},blueColor:{color:e.palette.info.main},projectHeading:{marginTop:e.spacing(1)},footer:{backgroundColor:"#ffffff",marginTop:e.spacing(2),marginBottom:e.spacing(1),textAlign:"center"},header:{height:e.spacing(3)},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function z(){var e=Object(r.useState)({}),a=Object(o.a)(e,2),t=a[0],c=a[1],s=Object(r.useState)(!1),i=Object(o.a)(s,2),l=i[0],j=i[1];return Object(r.useEffect)((function(){fetch("./data.json").then((function(e){return e.json()})).then((function(e){c(e.data),j(!0)})).catch((function(e){console.log("Error fetching resume data "+e)}))}),[]),Object(n.jsx)("div",{children:l&&Object(n.jsx)(H,{data:t})})}function H(e){var a=L();return Object(n.jsxs)(u.a,{children:[Object(n.jsx)(N.a,{position:"static",className:a.header}),Object(n.jsxs)(b.a,{maxWidth:"md",children:[Object(n.jsx)(F,{data:e.data}),Object(n.jsxs)(h.a,{container:!0,direction:"row-reverse",item:!0,xs:12,children:[Object(n.jsxs)(h.a,{item:!0,xs:12,md:8,className:a.columnGap,children:[Object(n.jsx)(A,{data:e.data}),Object(n.jsx)(M,{data:e.data})]}),Object(n.jsxs)(h.a,{item:!0,xs:12,md:4,children:[Object(n.jsx)(R,{data:e.data}),Object(n.jsx)(W,{data:e.data}),Object(n.jsx)(G,{data:e.data}),Object(n.jsx)(J,{data:e.data}),Object(n.jsx)(U,{data:e.data})]})]})]}),Object(n.jsx)(u.a,{component:"footer",className:a.footer,children:Object(n.jsx)(x.a,{variant:"body2",children:Object(n.jsx)(f.a,{href:"https://pbxr250.github.io/Resume/",target:"_blank",color:"inherit",className:a.link,children:"Created with React Material-UI"})})}),Object(n.jsx)(f.a,{href:"Resume_PavelBrouka.pdf",target:"_blank",color:"inherit",className:a.link,children:Object(n.jsx)(y.a,{size:"small",color:"primary","aria-label":"download",className:a.fab,children:Object(n.jsx)(B.a,{})})})]})}function F(e){var a=L();return Object(n.jsxs)(m.a,{className:a.paper,children:[Object(n.jsx)(x.a,{variant:"h4",className:a.mainColor,children:e.data.name}),Object(n.jsx)(v.a,{}),Object(n.jsx)(x.a,{variant:"body2",className:a.projectHeading,children:e.data.resume.Intro})]})}function A(e){var a=L(),t=e.data.resume.ProfessionalProfile.map((function(e,t){return Object(n.jsx)(p.a,{children:Object(n.jsx)(g.a,{primary:" - "+e,className:a.primaryColor})},t)}));return Object(n.jsxs)(m.a,{className:a.paper,children:[Object(n.jsx)(x.a,{variant:"h6",className:a.mainColor,gutterBottom:!0,children:"Professional Profile"}),t]})}function M(e){var a=L(),t=e.data.resume.Experience[0].projects.map((function(e){return Object(n.jsxs)(u.a,{children:[Object(n.jsx)(v.a,{light:!0}),Object(n.jsx)(x.a,{variant:"subtitle2",className:a.projectHeading,gutterBottom:!0,children:e.name}),e.lines.map((function(e,a){return Object(n.jsx)(p.a,{children:Object(n.jsx)(g.a,{primary:" - "+e})},a)}))]},e.name)})),r=e.data.resume.Experience[1].projects[0].lines.map((function(e,a){return Object(n.jsx)(p.a,{children:Object(n.jsx)(g.a,{primary:" - "+e})},a)}));return Object(n.jsxs)(m.a,{className:a.paper,children:[Object(n.jsx)(x.a,{variant:"h6",className:a.mainColor,gutterBottom:!0,children:"Professional Experience"}),Object(n.jsxs)(h.a,{container:!0,spacing:1,children:[Object(n.jsxs)(h.a,{item:!0,xs:3,children:[Object(n.jsx)(x.a,{variant:"subtitle1",className:a.blueColor,gutterBottom:!0,children:e.data.resume.Experience[0].year}),Object(n.jsx)(v.a,{light:!0}),Object(n.jsx)(x.a,{variant:"subtitle2",className:a.projectHeading,gutterBottom:!0,children:"Projects"})]}),Object(n.jsxs)(h.a,{item:!0,xs:9,children:[Object(n.jsx)(x.a,{variant:"subtitle1",className:a.blueColor,gutterBottom:!0,children:Object(n.jsx)(f.a,{href:"https://ibagroupit.com/",target:"_blank",color:"inherit",className:a.link,children:e.data.resume.Experience[0].pos})}),t]})]}),Object(n.jsxs)(h.a,{container:!0,spacing:1,children:[Object(n.jsxs)(h.a,{item:!0,xs:3,children:[Object(n.jsx)(v.a,{light:!0}),Object(n.jsx)(x.a,{variant:"subtitle1",className:a.blueColor,gutterBottom:!0,children:e.data.resume.Experience[1].year}),Object(n.jsx)(v.a,{light:!0}),Object(n.jsx)(x.a,{variant:"subtitle2",className:a.projectHeading,gutterBottom:!0,children:"Projects"})]}),Object(n.jsxs)(h.a,{item:!0,xs:9,children:[Object(n.jsx)(v.a,{light:!0}),Object(n.jsx)(x.a,{variant:"subtitle1",className:a.blueColor,gutterBottom:!0,children:e.data.resume.Experience[1].pos}),Object(n.jsx)(v.a,{light:!0}),r]})]})]})}function R(e){var a=L();return Object(n.jsxs)(m.a,{className:a.paper,children:[Object(n.jsx)(x.a,{variant:"h6",className:a.mainColor,gutterBottom:!0,children:"Personal Info"}),Object(n.jsxs)(u.a,{alignItems:"center",display:"flex",mb:1,children:[Object(n.jsx)(_.a,{fontSize:"small"}),Object(n.jsx)(u.a,{pl:1,children:Object(n.jsx)(x.a,{variant:"body2",display:"inline",children:Object(n.jsx)(f.a,{href:"https://www.google.com/maps/place/Ulitsa+Belomorskaya+23,+Minsk/@53.9256581,27.5866807,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbcf0ba77f1981:0xdb25eb1cf0cb7e92!8m2!3d53.9256581!4d27.5888694?hl=en",target:"_blank",color:"inherit",className:a.link,children:e.data.resume.PersonalInfo.Address})})})]}),Object(n.jsxs)(u.a,{alignItems:"center",display:"flex",mb:1,children:[Object(n.jsx)(w.a,{fontSize:"small"}),Object(n.jsx)(u.a,{pl:1,children:Object(n.jsx)(x.a,{variant:"body2",display:"inline",children:Object(n.jsx)(f.a,{href:"tel:375295969956",target:"_blank",color:"inherit",className:a.link,children:e.data.resume.PersonalInfo.Phone})})})]}),Object(n.jsxs)(u.a,{alignItems:"center",display:"flex",mb:1,children:[Object(n.jsx)(I.a,{fontSize:"small"}),Object(n.jsx)(u.a,{pl:1,children:Object(n.jsx)(x.a,{variant:"body2",display:"inline",children:Object(n.jsx)(f.a,{href:"mailto:pavelbrovko@gmail.com",target:"_blank",color:"inherit",className:a.link,children:e.data.resume.PersonalInfo.Email})})})]}),Object(n.jsxs)(u.a,{alignItems:"center",display:"flex",mb:1,children:[Object(n.jsx)(P.a,{fontSize:"small"}),Object(n.jsx)(u.a,{pl:1,children:Object(n.jsx)(x.a,{variant:"body2",display:"inline",children:Object(n.jsx)(f.a,{href:"https://www.linkedin.com/in/pavel-brouka-b96b2b36/",target:"_blank",color:"inherit",className:a.link,children:e.data.resume.PersonalInfo.Linkedin})})})]})]})}function W(e){var a=L(),t=e.data.resume.TechSkills.WebSkills.map((function(e){return Object(n.jsx)(h.a,{item:!0,children:Object(n.jsx)(x.a,{variant:"body2",children:e})},e)})),r=e.data.resume.TechSkills.Other.map((function(e){return Object(n.jsx)(h.a,{item:!0,children:Object(n.jsx)(x.a,{variant:"body2",children:e})},e)}));return Object(n.jsxs)(m.a,{className:a.paper,children:[Object(n.jsx)(x.a,{variant:"h6",className:a.mainColor,gutterBottom:!0,children:"Technical Skills"}),Object(n.jsx)(x.a,{variant:"subtitle2",gutterBottom:!0,children:"Web Skills"}),Object(n.jsx)(h.a,{container:!0,spacing:1,children:t}),Object(n.jsx)(u.a,{mt:1}),Object(n.jsx)(x.a,{variant:"subtitle2",gutterBottom:!0,children:"Other IT Skills"}),Object(n.jsx)(h.a,{container:!0,spacing:1,children:r})]})}function G(e){var a=L();return Object(n.jsxs)(m.a,{className:a.paper,children:[Object(n.jsx)(x.a,{variant:"h6",className:a.mainColor,gutterBottom:!0,children:"Education"}),Object(n.jsx)(x.a,{variant:"subtitle2",gutterBottom:!0,children:e.data.resume.Education[0].name}),Object(n.jsx)(x.a,{variant:"body2",gutterBottom:!0,children:e.data.resume.Education[0].title}),Object(n.jsx)(x.a,{variant:"subtitle2",gutterBottom:!0,children:e.data.resume.Education[1].name}),Object(n.jsx)(x.a,{variant:"body2",gutterBottom:!0,children:e.data.resume.Education[1].title})]})}function J(e){var a=L(),t=e.data.resume.Languages.map((function(e){return Object(n.jsxs)(p.a,{className:a.listItem,children:[Object(n.jsx)(g.a,{primary:e.name}),Object(n.jsx)(g.a,{primary:e.level})]},e.name)}));return Object(n.jsxs)(m.a,{className:a.paper,children:[Object(n.jsx)(x.a,{variant:"h6",className:a.mainColor,gutterBottom:!0,children:"Languages"}),Object(n.jsx)(O.a,{"aria-label":"language",children:t})]})}function U(e){var a=L(),t=e.data.resume.Interests.map((function(e){return Object(n.jsx)(h.a,{item:!0,children:Object(n.jsx)(x.a,{variant:"body2",children:e})},e)}));return Object(n.jsxs)(m.a,{className:a.paper,children:[Object(n.jsx)(x.a,{variant:"h6",className:a.mainColor,gutterBottom:!0,children:"Interests"}),Object(n.jsx)(h.a,{container:!0,spacing:1,children:t})]})}var D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,102)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),n(e),r(e),c(e),s(e)}))};i.a.render(Object(n.jsxs)(c.a.StrictMode,{children:[Object(n.jsx)(l.a,{}),Object(n.jsx)(z,{})]}),document.getElementById("root")),D()}},[[64,1,2]]]);
//# sourceMappingURL=main.4c237b92.chunk.js.map