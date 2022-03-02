import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="toreactive" tabindex="-1"><a class="header-anchor" href="#toreactive" aria-hidden="true">#</a> toReactive</h1><p>\u8F6C\u5316\u4E3A Reactive</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toReactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> origin <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

origin<span class="token punctuation">.</span>value<span class="token punctuation">.</span>foo <span class="token comment">// bar</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">toReactive</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span>

state<span class="token punctuation">.</span>foo <span class="token comment">// bar</span>

origin<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token punctuation">}</span>

state<span class="token punctuation">.</span>foo <span class="token comment">// undefined</span>
state<span class="token punctuation">.</span>bar <span class="token comment">// foo</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,4);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};
