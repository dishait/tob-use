import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="createeventhook" tabindex="-1"><a class="header-anchor" href="#createeventhook" aria-hidden="true">#</a> createEventHook</h1><p>\u521B\u5EFA\u4E8B\u4EF6 hook</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createEventHook <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token function">createEventHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// on \u53EF\u4EE5\u6CE8\u518C\u56DE\u8C03</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>v <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>

event<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// \u89E6\u53D1 on \u6CE8\u518C\u7684\u56DE\u8C03\uFF0C\u6253\u5370 0</span>

<span class="token comment">// \u518D\u6CE8\u518C\u4E00\u4E2A</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>v <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>

event<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u89E6\u53D1\u6240\u6709 on \u6CE8\u518C\u7684\u56DE\u8C03\uFF0C\u6253\u5370 1\uFF0C2</span>

<span class="token comment">// \u53EF\u89E3\u6784\u83B7\u53D6\u5378\u8F7D\u51FD\u6570</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> off <span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>v <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u89E6\u53D1\u4E86&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5378\u8F7D\u521A\u6CE8\u518C\u7684\u56DE\u8C03</span>

event<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u6253\u5370 1\uFF0C2\uFF0C\u4F46\u4E0D\u4F1A\u6253\u5370 &#39;\u89E6\u53D1\u4E86&#39;\uFF0C\u56E0\u4E3A\u521A\u521A\u88AB\u5378\u8F7D\u4E86</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><br><h3 id="\u5C01\u88C5\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u8BF7\u6C42" aria-hidden="true">#</a> \u5C01\u88C5\u8BF7\u6C42</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createEventHook <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token doc-comment comment">/**
 * \u5C01\u88C5\u8BF7\u6C42
*/</span>
<span class="token keyword">const</span> <span class="token function-variable function">useUserInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> failEvent <span class="token operator">=</span> <span class="token function">createEventHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> successEvent <span class="token operator">=</span> <span class="token function">createEventHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://www.example.com/request&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u865A\u62DF\u8BF7\u6C42\u5730\u5740</span>
        <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            failEvent<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token comment">// \u5931\u8D25\u65F6\u89E6\u53D1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            successEvent<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// \u6210\u529F\u65F6\u89E6\u53D1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">onFail</span><span class="token operator">:</span> failEvent<span class="token punctuation">.</span>on<span class="token punctuation">,</span> <span class="token comment">// \u5931\u8D25\u76D1\u542C</span>
        <span class="token literal-property property">onSuccess</span><span class="token operator">:</span> successEvent<span class="token punctuation">.</span>on <span class="token comment">// \u6210\u529F\u76D1\u542C</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u4F7F\u7528\u65F6
*/</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> onFail<span class="token punctuation">,</span> onSuccess <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u6CE8\u518C\u5931\u8D25\u56DE\u8C03\uFF0C\u5931\u8D25\u65F6\u5C06\u88AB\u89E6\u53D1</span>
<span class="token function">onFail</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u6CE8\u518C\u6210\u529F\u56DE\u8C03\uFF0C\u6210\u529F\u65F6\u5C06\u88AB\u89E6\u53D1</span>
<span class="token function">onSuccess</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,8);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
