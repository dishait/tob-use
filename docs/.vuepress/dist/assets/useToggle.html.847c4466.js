import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="usetoggle" tabindex="-1"><a class="header-anchor" href="#usetoggle" aria-hidden="true">#</a> useToggle</h1><p>\u5207\u6362</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useToggle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> toggle<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useToggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

state<span class="token punctuation">.</span>value <span class="token comment">// false</span>

<span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

state<span class="token punctuation">.</span>value <span class="token comment">// true</span>

<span class="token function">toggle</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

state<span class="token punctuation">.</span>value <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5F53\u4F20\u5165\u4E00\u4E2A <code>ref</code> \u65F6\uFF0C<code>useToggle</code> \u5C06\u53EA\u8FD4\u56DE <code>toggle</code> \u51FD\u6570 \u{1F447}</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useToggle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> toggle <span class="token operator">=</span> <span class="token function">useToggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

state<span class="token punctuation">.</span>value <span class="token comment">// false</span>

<span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

state<span class="token punctuation">.</span>value <span class="token comment">// true</span>

<span class="token function">toggle</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

state<span class="token punctuation">.</span>value <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,6);function p(t,o){return e}var u=s(a,[["render",p]]);export{u as default};
