import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="usecyclelist" tabindex="-1"><a class="header-anchor" href="#usecyclelist" aria-hidden="true">#</a> useCycleList</h1><p>\u73AF\u8868</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCycleList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> next<span class="token punctuation">,</span> prev<span class="token punctuation">,</span> index <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCycleList</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">&#39;Dog&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Cat&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Lizard&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

state<span class="token punctuation">.</span>value <span class="token comment">// &#39;Dog&#39;</span>
index<span class="token punctuation">.</span>value <span class="token comment">// 0</span>

<span class="token function">prev</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u4E0A\u4E00\u4E2A</span>
state<span class="token punctuation">.</span>value <span class="token comment">// &#39;Lizard&#39;</span>
index<span class="token punctuation">.</span>value <span class="token comment">// 2</span>

<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u4E0B\u4E00\u4E2A</span>
state<span class="token punctuation">.</span>value <span class="token comment">// &#39;Dog&#39;</span>
index<span class="token punctuation">.</span>value <span class="token comment">// 0</span>

<span class="token function">next</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// \u4E0B\u4E24\u4E2A</span>
state<span class="token punctuation">.</span>value <span class="token comment">// &#39;Lizard&#39;</span>

<span class="token function">prev</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// \u4E0A\u4E24\u4E2A</span>
state<span class="token punctuation">.</span>value <span class="token comment">// &#39;Dog&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><br><h3 id="\u521D\u59CB\u503C" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u503C" aria-hidden="true">#</a> \u521D\u59CB\u503C</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCycleList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> next<span class="token punctuation">,</span> prev <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCycleList</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">&#39;Dog&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Cat&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Lizard&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> initialValue<span class="token operator">:</span> <span class="token string">&#39;init&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

state<span class="token punctuation">.</span>value <span class="token comment">// &#39;init&#39;</span>

<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u4E0B\u4E00\u4E2A</span>

state<span class="token punctuation">.</span>value <span class="token comment">// &#39;Dog&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,8);function e(t,c){return p}var u=s(a,[["render",e]]);export{u as default};
