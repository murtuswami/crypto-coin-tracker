(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(31),i=a.n(o),s=(a(91),a(12)),c=a(13),l=a(15),u=a(14),p=a(9),h=a(16),d=(a(55),a(92),a(85)),v=a(6),g=function(t,e){console.log(t+" "+e),v.d("https://api.coindesk.com/v1/bpi/historical/close.json?start="+t+"&end="+e).then(function(t){for(var e=[],n=0,r=Object.entries(t.bpi);n<r.length;n++){var o=r[n],i=Object(d.a)(o,2),s=i[0],c=i[1],l="".concat(s),u="".concat(c);e.push({date:new Date(l),value:u})}a(e)});var a=function(t){v.k("svg").remove();var e=t.map(function(t){return t.date}),a=t.map(function(t){return parseInt(t.value)});console.log(t);var n=50,r=30,o=20,i=40,s=1500-i-r,c=630-n-o,l=v.k("#chart").append("svg").attr("width",s+i+r+"px").attr("height",c+n+o+"px").append("g").attr("height",c+"px").attr("width",s+"px").attr("transform","translate("+i+",10)"),u=l.append("g").style("display","none"),p=v.j().domain([v.g(e),v.f(e)]).range([0,s]),h=v.i().domain([0,v.f(a)]).range([c,0]),d=v.e().x(function(t){return p(t.date)}).y(function(t){return h(t.value)}),g=v.a(p),m=v.b(h);l.append("g").attr("transform","translate(0,"+c+")").call(g),l.append("g").call(m),l.append("path").datum(t).attr("fill","none").attr("stroke","blue").attr("stroke-linejoin","round").attr("stroke-linecap","round").attr("stroke-width",1.5).attr("d",d),u.append("circle").attr("class","y").style("fill","white").style("stroke","blue").attr("r",4),l.append("rect").attr("width",s+"px").attr("height",c+"px").style("pointer-events","all").on("mouseover",function(){u.style("display",null)}).on("mouseout",function(){u.style("display","none")}).on("mousemove",function(){var e=p.invert(v.h(this)[0]),a=f(t,e,1);if(void 0!=t[a]&&void 0!=t[a-1]){var n=t[a-1],r=t[a],o=e-n.date>r.date-e?r:n;console.log(o.date.getFullYear()),u.select("circle.y").attr("transform","translate("+p(o.date)+","+h(o.value)+")"),v.k("#displaySelection").html("Date:"+o.date.getDate().toString()+"-"+(o.date.getMonth()+1).toString()+"-"+o.date.getFullYear().toString()+"   Value:"+o.value+" USD")}}).attr("opacity","0.0").attr("fill","red");var f=v.c(function(t){return t.date}).left}},m=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).props=t,a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){console.log("mount")}},{key:"render",value:function(){if("string"!=typeof this.props.start&&"string"!=typeof this.props.end){var t=(this.props.start.getMonth()+1).toString();1==t.length&&(t="0"+t);var e=this.props.start.getDate().toString();1==e.length&&(e="0"+e);var a=(this.props.end.getMonth()+1).toString();1==a.length&&(a="0"+a);var n=this.props.end.getDate().toString();1==n.length&&(n="0"+n),console.log(typeof this.props.start);var o=this.props.start.getFullYear().toString()+"-"+t+"-"+e,i=this.props.end.getFullYear().toString()+"-"+a+"-"+n;console.log(this.props.end),g(o,i)}return r.a.createElement("div",{id:"chart"})}}]),e}(r.a.Component),f=a(56),y=(a(99),function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={startDate:new Date("2019-03-5"),endDate:new Date},a.handleStartChange=a.handleStartChange.bind(Object(p.a)(a)),a.handleEndChange=a.handleEndChange.bind(Object(p.a)(a)),a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"handleStartChange",value:function(t){console.log(t),this.setState({startDate:t})}},{key:"handleEndChange",value:function(t){console.log(t),this.setState({endDate:t})}},{key:"render",value:function(){return r.a.createElement("div",{id:"prices-container"},r.a.createElement("div",{id:"displaySelection"}),r.a.createElement(m,{start:this.state.startDate,end:this.state.endDate}),r.a.createElement("div",{id:"dropDownContainer"},r.a.createElement(f.a,{selected:this.state.startDate,onChange:this.handleStartChange}),r.a.createElement(f.a,{selected:this.state.endDate,onChange:this.handleEndChange})))}}]),e}(r.a.Component)),b=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={currentInput:"",currentOutput:"",inputCurrency:"BTC",outputCurrency:"USD",dataInp:"",dataOutpt:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleInputType=a.handleInputType.bind(Object(p.a)(a)),a.handleOutputType=a.handleOutputType.bind(Object(p.a)(a)),a.apis={BTC:"https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",LTC:"https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD",ETH:"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"},a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"handleInput",value:function(t){var e,a=t.target.value;"0"==a.charAt(0)&&"0"==a.charAt(1)&&(a=a.slice(0,1)+a.slice(2)),"0"==a.charAt(0)&&2==a.length&&"."!=a.charAt(1)&&(a=a.slice(1)),this.setState({currentInput:a}),console.log(parseFloat(a)),console.log(this.state.dataInp),console.log(this.state.dataOutpt),e=""!=t.target.value?parseFloat(a)*this.state.dataInp.USD/this.state.dataOutpt.USD:"",console.log(e),this.setState({currentOutput:e})}},{key:"componentDidMount",value:function(){var t=this;fetch(this.apis.BTC).then(function(t){return t.json()}).then(function(e){return t.setState({dataInp:e,dataOutpt:{USD:1}})})}},{key:"handleInputType",value:function(t){var e=this,a=t.target.value;this.setState({currentInputType:a,currentOutput:"",currentInput:""}),"USD"==a?this.setState({dataInp:{USD:1}}):fetch(this.apis[a]).then(function(t){return t.json()}).then(function(t){return e.setState({dataInp:t})})}},{key:"handleOutputType",value:function(t){var e=this,a=t.target.value;this.setState({outputCurrency:a,currentOutput:"",currentInput:""}),"USD"==a?this.setState({dataOutpt:{USD:1}}):fetch(this.apis[a]).then(function(t){return t.json()}).then(function(t){return e.setState({dataOutpt:t})})}},{key:"render",value:function(){return r.a.createElement("div",{id:"ConvContainer"},r.a.createElement("div",{id:"Conv"},r.a.createElement("input",{id:"currencyInput",type:"number",onChange:this.handleInput,value:this.state.currentInput}),r.a.createElement("select",{onChange:this.handleInputType,value:this.state.inputType,id:"inputList"},r.a.createElement("option",{value:"BTC"},"Bitcoin"),r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"ETH"},"ETH"),r.a.createElement("option",{value:"LTC"},"LTH")),r.a.createElement("select",{onChange:this.handleOutputType,value:this.state.outputCurrency,id:"outputList"},r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"BTC"},"Bitcoin"),r.a.createElement("option",{value:"ETH"},"ETH"),r.a.createElement("option",{value:"LTC"},"LTH")),r.a.createElement("div",{id:"currencyOutput"},this.state.currentOutput," ",this.state.outputCurrency)))}}]),e}(r.a.Component),O=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={news:""},a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://newsapi.org/v2/everything?q=crypto-currency&from=2019-06-03&sortBy=publishedAt&apiKey=17f809bbe646411d95e0f84f4251dc83").then(function(t){return t.json()}).then(function(e){return t.setState({news:e})})}},{key:"render",value:function(){var t=[];if(void 0!=this.state.news.articles){console.log(this.state.news.articles[1]),console.log(typeof this.state.news.articles),console.log(this.state.news.articles.length);for(var e=0;e<this.state.news.articles.length;e++)t.push(this.state.news.articles[e])}return console.log(),r.a.createElement("div",{id:"newsWindow"},t.map(function(t,e){return r.a.createElement("div",null,r.a.createElement("img",{src:t.urlToImage,key:e+"image"}),r.a.createElement("p",{key:e+"title"},t.title))}))}}]),e}(r.a.Component),E=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={currentTab:"Prices"},a.changeTab=a.changeTab.bind(Object(p.a)(a)),a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"changeTab",value:function(t){console.log(t.target.value),this.setState({currentTab:t.target.value})}},{key:"render",value:function(){var t;switch(this.state.currentTab){case"Prices":t=r.a.createElement(y,null);break;case"Convertor":t=r.a.createElement(b,null);break;case"News":t=r.a.createElement(O,null)}return r.a.createElement("div",{className:"CryptoPriceApp"},r.a.createElement("header",{className:"App-header"},r.a.createElement("button",{id:"tab1",value:"Prices",onClick:this.changeTab},"Prices"),r.a.createElement("button",{id:"tab2",value:"Convertor",onClick:this.changeTab},"Convertor"),r.a.createElement("button",{id:"tab3",value:"News",onClick:this.changeTab},"News"),r.a.createElement("div",{id:"displayWindow"},t)))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},55:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},86:function(t,e,a){t.exports=a(100)},91:function(t,e,a){},92:function(t,e,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.d5840ffe.chunk.js.map