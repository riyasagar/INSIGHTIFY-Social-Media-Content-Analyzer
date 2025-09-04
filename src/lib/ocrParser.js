import Tesseract from "tesseract.js";

export async function parseImage(file) {
  const result = await Tesseract.recognize(file, "eng", {
    logger: (m) => console.log(m),
  });
  return result.data.text;
}
