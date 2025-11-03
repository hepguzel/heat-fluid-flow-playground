// Material for MkDocs SPA: sayfa değişince matematiği yeniden işle
document$.subscribe(() => {
  console.log("[KaTeX] render start"); // tanı amaçlı
  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$",  right: "$",  display: false },
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false }
    ],
    throwOnError: false
  });
});
