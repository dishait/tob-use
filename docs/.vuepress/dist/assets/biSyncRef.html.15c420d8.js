import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="bisyncref" tabindex="-1"><a class="header-anchor" href="#bisyncref" aria-hidden="true">#</a> biSyncRef</h1><p>\u53CC\u5411\u540C\u6B65</p><p>\u540C\u6B65\u4E24\u4E2A <code>ref</code> \u53C2\u6570</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> biSyncRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token function">biSyncRef</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// a</span>

b<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// foo</span>

a<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// bar</span>

<span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u505C\u6B62\u540C\u6B65</span>

a<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// \u4ECD\u7136\u662F bar</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,5);function e(t,o){return p}var u=s(a,[["render",e]]);export{u as default};
