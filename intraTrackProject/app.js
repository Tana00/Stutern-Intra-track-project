import mergeImages from "merge-images";

mergeImages(["1.jpng", "2.png", "3.png"]).then(
  b64 => (document.querySelector("img").src = b64)
);

mergeImages([
  { src: "1.png", x: 0, y: 0 },

  { src: "2.png", x: 32, y: 0, opacity: 0.6 },

  { src: "3.png", x: 16, y: 0, opacity: 0.5 }
]);
