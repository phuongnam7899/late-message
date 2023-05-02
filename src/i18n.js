import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {},
  },
  vi: {
    translation: {
      "Mobile UI is being updated...": "UI di động đang được cập nhật...",
      "UI for <1024px screen is being updated...":
        "UI cho màn hình <1024px đang được cập nhật...",
      Home: "Trang chủ",
      Portfolio: "Portfolio",
      Squiggly: "Nguệch ngoạch",
      "About nklm": "Về nklm",
      "Welcome to": "Chào mừng tới",
      "My life mission: explore weird/interesting/helpful things in life":
        "Nhiệm vụ: khám phá những điều kỳ cục thú vị hữu ích trong cuộc sống",
      "If you're recruiter...": "Nếu anh/chị là nhà tuyển dụng...",
      "Check out my portfolio to know what I’ve worked on":
        "Hãy tới qua portfolio để để xem những sản phẩm em làm",
      "If you're looking for something helpful & interesting...":
        "Nếu bạn đang tìm kiếm thứ gì đó thú vị và hữu ích...",
      "See what I found in my blog": "Hãy xem có thể có gì đó trong blog",
      "Wanna see what I drew?": "Muốn xem qua vài bản vẽ của mình?",
      "Let's go to squiggle ground!": "Hãy đến trang Nguệch ngoạc!",
      "Highlighted Posts": "Bài viết nổi bật",
      "Note: Cause my blog's target audience now is only Vietnamese, all articles are in Vietnamese only":
        "Chú ý: Vì đọc giả hiện tại của blog chỉ gồm người Việt, nên mọi bài viết đều đang chỉ có bản tiếng Việt",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
