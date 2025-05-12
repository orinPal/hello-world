const texts = {
  en: "Hello, World!",
  bn: "নমস্কার বিশ্ব!",
  sa: "नमः संसाराय!",
  ru: "Привет, мир!",
  hi: "नमस्ते दुनिया!",
};

function changeLanguage(lang) {
  document.getElementById("hello-text").textContent =
    texts[lang] || texts["en"];
}
