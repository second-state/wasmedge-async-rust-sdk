(function() {var type_impls = {
"wasmedge_sdk":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsyncState\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasmedge_sys/async/fiber.rs.html#259\">source</a><a href=\"#impl-AsyncState\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"wasmedge_sys/async/fiber/struct.AsyncState.html\" title=\"struct wasmedge_sys::async::fiber::AsyncState\">AsyncState</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/wasmedge_sys/async/fiber.rs.html#261\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasmedge_sys/async/fiber/struct.AsyncState.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"wasmedge_sys/async/fiber/struct.AsyncState.html\" title=\"struct wasmedge_sys::async::fiber::AsyncState\">AsyncState</a></h4></section></summary><div class=\"docblock\"><p>Creates a new async state.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.async_cx\" class=\"method\"><a class=\"src rightside\" href=\"src/wasmedge_sys/async/fiber.rs.html#271\">source</a><h4 class=\"code-header\">pub fn <a href=\"wasmedge_sys/async/fiber/struct.AsyncState.html#tymethod.async_cx\" class=\"fn\">async_cx</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"wasmedge_sys/async/fiber/struct.AsyncCx.html\" title=\"struct wasmedge_sys::async::fiber::AsyncCx\">AsyncCx</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns an async execution context.</p>\n<p>If the pointer of poll context is null, then None is returned.</p>\n</div></details></div></details>",0,"wasmedge_sdk::wasi::async::AsyncState"],["<section id=\"impl-Sync-for-AsyncState\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasmedge_sys/async/fiber.rs.html#288\">source</a><a href=\"#impl-Sync-for-AsyncState\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"wasmedge_sys/async/fiber/struct.AsyncState.html\" title=\"struct wasmedge_sys::async::fiber::AsyncState\">AsyncState</a></h3></section>","Sync","wasmedge_sdk::wasi::async::AsyncState"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-AsyncState\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasmedge_sys/async/fiber.rs.html#254\">source</a><a href=\"#impl-Default-for-AsyncState\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"wasmedge_sys/async/fiber/struct.AsyncState.html\" title=\"struct wasmedge_sys::async::fiber::AsyncState\">AsyncState</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wasmedge_sys/async/fiber.rs.html#255\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"wasmedge_sys/async/fiber/struct.AsyncState.html\" title=\"struct wasmedge_sys::async::fiber::AsyncState\">AsyncState</a></h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","wasmedge_sdk::wasi::async::AsyncState"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AsyncState\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasmedge_sys/async/fiber.rs.html#249\">source</a><a href=\"#impl-Debug-for-AsyncState\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"wasmedge_sys/async/fiber/struct.AsyncState.html\" title=\"struct wasmedge_sys::async::fiber::AsyncState\">AsyncState</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wasmedge_sys/async/fiber.rs.html#249\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","wasmedge_sdk::wasi::async::AsyncState"],["<section id=\"impl-Send-for-AsyncState\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasmedge_sys/async/fiber.rs.html#287\">source</a><a href=\"#impl-Send-for-AsyncState\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"wasmedge_sys/async/fiber/struct.AsyncState.html\" title=\"struct wasmedge_sys::async::fiber::AsyncState\">AsyncState</a></h3></section>","Send","wasmedge_sdk::wasi::async::AsyncState"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()