import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="usecounter" tabindex="-1"><a class="header-anchor" href="#usecounter" aria-hidden="true">#</a> useCounter</h1><p>\u8BA1\u6570\u5668</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCounter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> inc<span class="token punctuation">,</span> dec<span class="token punctuation">,</span> set<span class="token punctuation">,</span> reset <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

count<span class="token punctuation">.</span>value <span class="token comment">// 0</span>

<span class="token function">inc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// +1</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 1</span>

<span class="token function">dec</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// -1</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 0</span>

<span class="token function">set</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 100</span>

<span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u91CD\u7F6E\u4E3A 0</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 0</span>

<span class="token function">inc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// + 100</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 100</span>

<span class="token function">dec</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// - 100</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 0</span>

<span class="token function">reset</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token comment">// \u91CD\u7F6E\u4E3A 200</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 200</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="\u521D\u59CB\u503C" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u503C" aria-hidden="true">#</a> \u521D\u59CB\u503C</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCounter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> inc<span class="token punctuation">,</span> dec<span class="token punctuation">,</span> set<span class="token punctuation">,</span> reset <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCounter</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

count<span class="token punctuation">.</span>value <span class="token comment">// 10</span>

<span class="token function">inc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// +1</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 11</span>

<span class="token function">dec</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// -1</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 10</span>

<span class="token function">set</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 100</span>

<span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u91CD\u7F6E\u4E3A 10</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 10</span>

<span class="token function">inc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// + 100</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 110</span>

<span class="token function">dec</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// - 100</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 10</span>

<span class="token function">reset</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token comment">// \u91CD\u7F6E\u4E3A 200</span>
count<span class="token punctuation">.</span>value <span class="token comment">// 200</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,7);function e(t,c){return p}var l=s(a,[["render",e]]);export{l as default};
