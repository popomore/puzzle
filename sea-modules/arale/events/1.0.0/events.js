define("arale/events/1.0.0/events",[],function(){function t(){}var e=/\s+/;t.prototype.on=function(t,n,r){var i,s,o;if(!n)return this;i=this.__events||(this.__events={}),t=t.split(e);while(s=t.shift())o=i[s]||(i[s]=[]),o.push(n,r);return this},t.prototype.off=function(t,r,i){var s,o,u,a;if(!(s=this.__events))return this;if(!(t||r||i))return delete this.__events,this;t=t?t.split(e):n(s);while(o=t.shift()){u=s[o];if(!u)continue;if(!r&&!i){delete s[o];continue}for(a=u.length-2;a>=0;a-=2)r&&u[a]!==r||i&&u[a+1]!==i||u.splice(a,2)}return this},t.prototype.trigger=function(t){var n,r,i,s,o,u,a=[],f;if(!(n=this.__events))return this;t=t.split(e);for(o=1,u=arguments.length;o<u;o++)a[o-1]=arguments[o];while(r=t.shift()){if(i=n.all)i=i.slice();if(s=n[r])s=s.slice();if(s)for(o=0,u=s.length;o<u;o+=2)s[o].apply(s[o+1]||this,a);if(i){f=[r].concat(a);for(o=0,u=i.length;o<u;o+=2)i[o].apply(i[o+1]||this,f)}}return this},t.mixTo=function(e){e=e.prototype||e;var n=t.prototype;for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])};var n=Object.keys;return n||(n=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}),t});