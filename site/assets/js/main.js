/* NightBringer site behaviour: fills in config values, the Nox wing toggle, copy buttons. */
(function () {
  "use strict";
  var cfg = window.NIGHTBRINGER || {};
  var links = cfg.links || {};
  var NOT_YET = "Not announced yet";

  function $all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  /* ---- toast ---- */
  var toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  document.body.appendChild(toast);
  var toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 1800);
  }

  function copy(text, label) {
    function done() { showToast(label + " copied"); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(text); done(); });
    } else { fallback(text); done(); }
  }
  function fallback(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "absolute"; ta.style.left = "-9999px";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* ---- config values: <span data-config="ticker"> ---- */
  $all("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    var val = cfg[key];
    if (key === "ticker" && val) val = "$" + String(val).replace(/^\$/, "");
    if (val) {
      el.textContent = val;
    } else if (el.hasAttribute("data-fallback")) {
      el.textContent = el.getAttribute("data-fallback");
    } else {
      el.textContent = NOT_YET;
      el.classList.add("muted");
    }
  });

  /* ---- links: <a data-link="x" hidden> ---- */
  var anyChannel = false;
  $all("[data-link]").forEach(function (el) {
    var url = links[el.getAttribute("data-link")];
    var item = el.closest("li") || el;
    // links still holding the placeholder from config.js stay hidden
    if (url && url.indexOf("OWN" + "ER") === -1) {
      el.href = url;
      item.hidden = false;
      el.hidden = false;
      if (el.hasAttribute("data-channel")) anyChannel = true;
    } else {
      item.hidden = true;
    }
  });
  $all("[data-if-no-channels]").forEach(function (el) { el.hidden = anyChannel; });

  /* ---- launch state ---- */
  var launched = Boolean(cfg.policyId);
  $all("[data-if-launched]").forEach(function (el) { el.hidden = !launched; });
  $all("[data-if-not-launched]").forEach(function (el) { el.hidden = launched; });

  /* ---- policy ID copy ---- */
  $all("[data-copy-config]").forEach(function (btn) {
    var key = btn.getAttribute("data-copy-config");
    if (!cfg[key]) { btn.disabled = true; return; }
    btn.addEventListener("click", function () { copy(cfg[key], btn.getAttribute("data-copy-label") || "Value"); });
  });

  /* ---- swatch copy ---- */
  $all("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () { copy(btn.getAttribute("data-copy"), btn.getAttribute("data-copy")); });
  });

  /* ---- Nox wing toggle ---- */
  var nox = document.getElementById("nox");
  var toggle = document.getElementById("wing-toggle");
  var caption = document.getElementById("nox-caption");
  if (nox && toggle) {
    var states = {
      open: {
        button: "Fold his wings",
        caption: "Disclosed: Nox shows only what he chooses to show."
      },
      shielded: {
        button: "Open his wings",
        caption: "Shielded: the data is still there. Nobody else can see it."
      }
    };
    function render(shielded) {
      nox.classList.toggle("is-shielded", shielded);
      toggle.setAttribute("aria-pressed", String(shielded));
      var s = shielded ? states.shielded : states.open;
      toggle.textContent = s.button;
      if (caption) caption.textContent = s.caption;
    }
    toggle.addEventListener("click", function () {
      render(!nox.classList.contains("is-shielded"));
    });
    render(false);
  }

  /* ---- footer year ---- */
  $all("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
})();
