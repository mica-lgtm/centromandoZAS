/* ===========================================================================
   ERJ · Motor de composición foto + texto
   ---------------------------------------------------------------------------
   Cada foto tiene un "aire" (espacio sin figuras principales) clasificado a
   mano mirando las 70 imágenes. El texto y el gradiente de protección se
   ubican SOBRE ese aire, nunca sobre las figuras.

   air:   dónde está el aire → dónde va el texto
          "top" | "bottom" | "left" | "right"
   focal: object-position para recortar manteniendo la figura visible
   =========================================================================== */
(function () {
  const A = {
    "erj-01.png": { air: "top",    focal: "50% 72%" },
    "erj-02.png": { air: "top",    focal: "50% 60%" },
    "erj-03.png": { air: "top",    focal: "50% 68%" },
    "erj-04.png": { air: "top",    focal: "50% 62%" },
    "erj-05.png": { air: "top",    focal: "50% 62%" },
    "erj-06.png": { air: "top",    focal: "50% 60%" },
    "erj-07.png": { air: "top",    focal: "50% 65%" },
    "erj-08.png": { air: "top",    focal: "50% 70%" },
    "erj-09.png": { air: "top",    focal: "50% 70%" },
    "erj-10.png": { air: "top",    focal: "50% 72%" },
    "erj-11.png": { air: "top",    focal: "50% 60%" },
    "erj-12.png": { air: "top",    focal: "50% 66%" },
    "erj-13.png": { air: "top",    focal: "50% 66%" },
    "erj-14.png": { air: "top",    focal: "50% 64%" },
    "erj-15.png": { air: "top",    focal: "50% 64%" },
    "erj-16.png": { air: "top",    focal: "50% 66%" },
    "erj-17.png": { air: "top",    focal: "50% 72%" },
    "erj-18.png": { air: "top",    focal: "50% 66%" },
    "erj-19.png": { air: "top",    focal: "50% 64%" },
    "erj-20.png": { air: "top",    focal: "50% 70%" },
    "erj-21.png": { air: "top",    focal: "55% 66%" },
    "erj-22.png": { air: "top",    focal: "50% 66%" },
    "erj-23.png": { air: "top",    focal: "50% 72%" },
    "erj-24.png": { air: "top",    focal: "50% 70%" },
    "erj-25.png": { air: "top",    focal: "50% 64%" },
    "erj-26.png": { air: "right",  focal: "35% 60%" },
    "erj-27.png": { air: "top",    focal: "50% 60%" },
    "erj-28.png": { air: "left",   focal: "75% 50%" },
    "erj-29.png": { air: "right",  focal: "32% 55%" },
    "erj-30.png": { air: "top",    focal: "55% 66%" },
    "erj-31.png": { air: "top",    focal: "55% 60%" },
    "erj-32.png": { air: "top",    focal: "50% 62%" },
    "erj-33.png": { air: "top",    focal: "55% 58%" },
    "erj-34.png": { air: "left",   focal: "72% 50%" },
    "erj-35.png": { air: "left",   focal: "72% 55%" },
    "erj-36.png": { air: "left",   focal: "65% 55%" },
    "erj-37.png": { air: "top",    focal: "50% 64%" },
    "erj-38.png": { air: "left",   focal: "72% 55%" },
    "erj-39.png": { air: "top",    focal: "55% 70%" },
    "erj-40.png": { air: "top",    focal: "50% 66%" },
    "erj-41.png": { air: "top",    focal: "50% 72%" },
    "erj-42.png": { air: "top",    focal: "60% 60%" },
    "erj-43.png": { air: "right",  focal: "30% 55%" },
    "erj-44.png": { air: "top",    focal: "55% 64%" },
    "erj-45.png": { air: "left",   focal: "72% 55%" },
    "erj-46.png": { air: "top",    focal: "50% 66%" },
    "erj-47.png": { air: "top",    focal: "50% 64%" },
    "erj-48.png": { air: "top",    focal: "50% 68%" },
    "erj-49.png": { air: "top",    focal: "55% 66%" },
    "erj-50.png": { air: "top",    focal: "50% 55%" },
    "erj-51.png": { air: "top",    focal: "50% 70%" },
    "erj-52.png": { air: "top",    focal: "50% 66%" },
    "erj-53.png": { air: "top",    focal: "50% 66%" },
    "erj-54.png": { air: "left",   focal: "70% 55%" },
    "erj-55.png": { air: "left",   focal: "72% 50%" },
    "erj-56.png": { air: "top",    focal: "50% 70%" },
    "erj-57.png": { air: "top",    focal: "45% 68%" },
    "erj-58.png": { air: "top",    focal: "50% 70%" },
    "erj-59.png": { air: "top",    focal: "50% 60%" },
    "erj-60.png": { air: "left",   focal: "68% 55%" },
    "erj-61.png": { air: "top",    focal: "50% 60%" },
    "erj-62.png": { air: "top",    focal: "50% 60%" },
    "erj-63.png": { air: "left",   focal: "72% 55%" },
    "erj-64.png": { air: "top",    focal: "45% 58%" },
    "erj-65.png": { air: "right",  focal: "38% 55%" },
    "erj-66.png": { air: "left",   focal: "70% 50%" },
    "erj-67.png": { air: "right",  focal: "32% 55%" },
    "erj-68.png": { air: "left",   focal: "72% 50%" },
    "erj-69.png": { air: "top",    focal: "50% 58%" },
    "erj-70.png": { air: "left",   focal: "70% 50%" },
  };

  // Default if unknown
  function meta(file) {
    const key = String(file).split("/").pop();
    return A[key] || { air: "bottom", focal: "50% 50%" };
  }

  // Protection gradient (violeta) coming FROM the air side, so text on the air
  // gets contrast while the figures stay clear.
  const VIO = "33,1,77";
  function gradient(air) {
    switch (air) {
      case "top":    return `linear-gradient(180deg, rgba(${VIO},.92) 0%, rgba(${VIO},.55) 22%, rgba(${VIO},0) 48%)`;
      case "bottom": return `linear-gradient(0deg, rgba(${VIO},.92) 0%, rgba(${VIO},.55) 22%, rgba(${VIO},0) 48%)`;
      case "left":   return `linear-gradient(90deg, rgba(${VIO},.92) 0%, rgba(${VIO},.6) 30%, rgba(${VIO},0) 62%)`;
      case "right":  return `linear-gradient(270deg, rgba(${VIO},.92) 0%, rgba(${VIO},.6) 30%, rgba(${VIO},0) 62%)`;
      default:       return `linear-gradient(0deg, rgba(${VIO},.85), rgba(${VIO},0) 50%)`;
    }
  }

  // Flex positioning for the text block so it sits ON the air.
  function place(air) {
    switch (air) {
      case "top":    return { justifyContent: "flex-start", alignItems: "stretch", textAlign: "left" };
      case "bottom": return { justifyContent: "flex-end",   alignItems: "stretch", textAlign: "left" };
      case "left":   return { justifyContent: "center",     alignItems: "flex-start", textAlign: "left" };
      case "right":  return { justifyContent: "center",     alignItems: "flex-end",  textAlign: "right" };
      default:       return { justifyContent: "flex-end",   alignItems: "stretch", textAlign: "left" };
    }
  }

  // Convenience: everything a template needs for one photo.
  function compose(file) {
    const m = meta(file);
    return { air: m.air, focal: m.focal, gradient: gradient(m.air), place: place(m.air) };
  }

  window.ERJ_PHOTO = { meta, gradient, place, compose, map: A };
})();
