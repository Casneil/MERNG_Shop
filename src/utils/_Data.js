import WomenCategory from "../assets/WomenCategory.jpg";
import MenCategory from "../assets/MenCategory.jpg";
import ChildrenCategory from "../assets/ChildrenCategory.jpg";
import SneakersCategory from "../assets/SneakersCategory.jpg";
import SaleCategory from "../assets/SaleCategory.jpg";
import womenSkinny from "../assets/women/womenSkinny.jpg";
import womenJeans from "../assets/women/womenJeans.jpg";
import womenJeans2 from "../assets/women/womenJeans2.jpg";
import womencasual from "../assets/women/womencasual.jpg";
import womenlongsleeve from "../assets/women/womenlongsleeve.jpg";
import womenStripeShirt from "../assets/women/womenStripeShirt.jpg";
import blackT from "../assets/men/blackT.jpg";
import menpocket from "../assets/men/menpocket.jpg";
import menripped from "../assets/men/menripped.jpg";
import menskinny from "../assets/men/menskinny.jpg";
import polo from "../assets/men/polo.jpg";
import stripe from "../assets/men/stripe.jpg";
import child_top_n_bottom from "../assets/children/child_top_n_bottom.jpg";
import childoutfit from "../assets/children/childoutfit.jpg";
import adidas_low from "../assets/sneakers/adidas_low.jpg";
import jordan from "../assets/sneakers/jordan.jpg";
import nike_lunarglide from "../assets/sneakers/nike_lunarglide.jpg";
import brooks_cascadia from "../assets/sneakers/brooks_cascadia.jpg";

export const data = [
  {
    women: {
      id: 1,
      image: `${WomenCategory}`,
      products: {
        jeans: {
          skinny_black: {
            id: 1,
            name: "black skinny",
            price: 25,
            image: `${womenSkinny}`
          },
          ripped: {
            id: 2,
            name: "ripped blue",
            price: 35,
            image: `${womenJeans}`
          },
          blue_skinny: {
            id: 3,
            name: "ripped blue",
            price: 20,
            image: `${womenJeans2}`
          }
        },
        tops: {
          casual: {
            id: 1,
            name: "casualTop",
            price: 16,
            image: `${womencasual}`
          },
          longsleeve: {
            id: 2,
            name: "long sleeve",
            price: 16,
            image: `${womenlongsleeve}`
          },
          stripe: {
            id: 3,
            name: "stripe",
            price: 16,
            image: `${womenStripeShirt}`
          }
        }
      }
    },
    men: {
      id: 2,
      image: `${MenCategory}`,
      products: {
        jeans: {
          pocket: {
            id: 1,
            name: "pocket jeans",
            price: 30,
            image: `${menpocket}`
          },
          ripped: {
            id: 2,
            name: "ripped jeans",
            price: 40,
            image: `${menripped}`
          },
          skinny: {
            id: 3,
            name: "skinny jeans",
            price: 35,
            image: `${menskinny}`
          }
        },
        shirts: {
          polo: { id: 1, name: "polo t-shirt", price: 28, image: `${polo}` },
          stripe: {
            id: 2,
            name: "Stripe t-shirt",
            price: 23,
            image: `${stripe}`
          },
          blackT: {
            id: 2,
            name: "black t-shirt",
            price: 11,
            image: `${blackT}`
          }
        }
      }
    },
    children: {
      id: 3,
      image: `${ChildrenCategory}`,
      products: {
        outfit1: {
          id: 1,
          name: "child outfit",
          price: 12,
          image: `${childoutfit}`
        },
        outfit2: {
          id: 2,
          name: "top with bottom",
          price: 14,
          image: `${child_top_n_bottom}`
        }
      }
    },
    sneaker: {
      id: 4,
      image: `${SneakersCategory}`,
      products: {
        casual: {
          adidas: {
            id: 1,
            name: "adidas low",
            price: 120,
            image: `${adidas_low}`
          },
          jordan: { id: 2, name: "jordan", price: 250, image: `${jordan}` }
        },
        sport: {
          nike: {
            id: 1,
            name: "nike lunarglide",
            price: 100,
            image: `${nike_lunarglide}`
          },
          brooks: {
            id: 2,
            name: "brooks cascadia",
            price: 95,
            image: `${brooks_cascadia}`
          }
        }
      }
    },
    sale: { id: 5, image: `${SaleCategory}`, products: {} }
  }
];
