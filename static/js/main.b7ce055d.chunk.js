(this["webpackJsonpmd-editor"]=this["webpackJsonpmd-editor"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(5),o=n.n(s),r=(n(14),n(6)),c=n(7),d=n(2),l=n(9),h=n(8),u=(n(15),n(4)),b=n.n(u),g=n(0),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={input:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)\n"},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.getMarkdownText=a.getMarkdownText.bind(Object(d.a)(a)),a}return Object(c.a)(n,[{key:"getMarkdownText",value:function(e){return b.a.setOptions({breaks:!0}),{__html:b()(e,{sanitize:!0})}}},{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"bg-light layout",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"pt-2 text-center  h4",children:"Markdown Editor"}),Object(g.jsxs)("p",{className:"font-weight-light text-secondary text-center",children:["Markdown is a cool markup language.",Object(g.jsx)("br",{})," I built this for FCC, hence the Test Suite."]})]}),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{class:"row",children:[Object(g.jsx)("div",{class:"col-sm-12",children:Object(g.jsx)("textarea",{id:"editor",value:this.state.input,onChange:this.handleChange})}),Object(g.jsx)("div",{id:"preview",className:"col-sm-12 pt-3",dangerouslySetInnerHTML:this.getMarkdownText(this.state.input)})]})})]})}}]),n}(i.a.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};o.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(m,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.b7ce055d.chunk.js.map