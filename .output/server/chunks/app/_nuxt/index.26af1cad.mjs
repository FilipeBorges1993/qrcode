import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const menus = ref([
      {
        "img": "/img/hookah.svg",
        "active": false,
        "id": 1
      },
      {
        "img": "/img/drink.svg",
        "active": true,
        "id": 2
      },
      {
        "img": "/img/sangria.svg",
        "active": false,
        "id": 3
      }
    ]);
    const CocMenu_ = ref(true);
    const sishaMenu_ = ref(false);
    const mocktails = ref(true);
    const winterSeason = ref(false);
    const classicos = ref(false);
    const prestige = ref(false);
    const clasic = ref(true);
    const mocktailsList = ref([
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "Blackberry Cream Soda",
        "description": "#AMORA PRETA, #LIM\xC3O",
        "price": "4\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "Fantastic Oreo",
        "description": "#OREO, #CHOCOLATE, #BAUNILHA, CAF\xC8",
        "price": "7\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "Pink Lemon Lelis",
        "description": "#FRUTOS VERMELHOS, #LIM\xC3O",
        "price": "4\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "Sherley Temple",
        "description": "#GINGER ALE, #GROSSELHA",
        "price": "4\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "San Francisco",
        "description": "#LIM\xC3O, #LARANJA, #ANAN\xC1S, #GROSSELHA",
        "price": "6\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "Cherry Cola",
        "description": "#Cerejs, #COCACOLA",
        "price": "4\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "Gardens Free",
        "description": "#MESTERIOSO MOCKTAIL DE AUTOR",
        "price": "5\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "Mojito Virgem",
        "description": "#LIM\xC3O, #HORTEL\xC3",
        "price": "4.5\u20AC"
      }
    ]);
    ref([
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "Irish Coffee",
        "description": "#WHISKY IRLAND\xCAS, CAF\xC9, CREME DE LEITE",
        "price": "6\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "Salted Caramel Express Martini",
        "description": "#CAF\xC8, #CARAMELO SALGADO, #VODKA, #BAILEYS",
        "price": "6\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "Whisky Sour",
        "description": "#Whisky, #LIM\xC3O, #OVO",
        "price": "6\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "Musteiro Rum Mule",
        "description": "#RUM, #LIM\xC3O, #ESPECIARIAS, #GENGIBRE",
        "price": "6\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "Lady Grey Gin Fizz",
        "description": "#LIM\xC3O, #LADY GREY, #GIN, #OVO",
        "price": "6\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "Spiced Cranberry Margarita",
        "description": "#CANELA, #LIM\xC3O, #CEREJA, #TEQUILA, #TRIPLE SECO",
        "price": "6.5\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "Jack Frost Cocktail",
        "description": "#VODKA, #BLUE CORA\xC7\xC3O, #ANAN\xC1S, #COCO",
        "price": "6\u20AC"
      }
    ]);
    ref([
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "NEGRONI",
        "description": "#GIN, #MARTINI ROSS\u201CO,#CAMPARI, #LARANJA",
        "price": "6\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "DAIQUIRI",
        "description": "#RUM, #LIM\xC3O",
        "price": "5\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "CAIPIRINHA",
        "description": "#CACHA\xC7A, #LIEA",
        "price": "5\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "MOJITO",
        "description": "#RUM, #HORTEL\xC3, #LIMA",
        "price": "5\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "MOJITO MARACUJ\xC1",
        "description": "#RUM, #HORTEL\xC3, #LIMA E #MARACUJA",
        "price": "6\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "MOSCOW MULE",
        "description": "#VODKA, #GENGIBRE",
        "price": "7\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "LONG ISLAND ICE TEA",
        "description": "#TEQUILA, #GIN, #VODKA, #RUM, #TRIPLE SECO",
        "price": "6.5\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "TEQUILA SUNRISE",
        "description": "#TEQUILLA, #LARANJA, #GRENADINE",
        "price": "6\u20AC"
      }
    ]);
    ref([
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "MA\xC7A VERDE",
        "description": "#",
        "price": "17\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "FRUTOS VERMELHOS",
        "description": "#",
        "price": "17\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "MARACUJ\xC1",
        "description": "#",
        "price": "17\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "CEREJA E MEL\xC2NCIA",
        "description": "#",
        "price": "17\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "BLUEBERRY",
        "description": "#",
        "price": "17\u20AC"
      }
    ]);
    ref([
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "MENTA",
        "description": "#",
        "price": "10\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "LOVE 66",
        "description": "#MELANCIA, #FRUTOS EX\xD3TICOS E #MENTA",
        "price": "10\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "WATERMELON KIZZ",
        "description": "#MELANCIA, #MENTA",
        "price": "10\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "RHAPSODY",
        "description": "#",
        "price": "10\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "HAWAI",
        "description": "#ANAN\xC1S, #MANGA E #MENTA",
        "price": "10\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "LADY KILLER",
        "description": "#P\xCASSEGO, #MANGA, #MENTA E #GELO",
        "price": "10\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "TWO YELLOW",
        "description": "#MELOA E #MEL\xC3NCIA",
        "price": "10\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "BLUE ICE",
        "description": "#MIRTILO E #MENTOL",
        "price": "10\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "SWISS BONBON",
        "description": "#P\xCASSEGO, #MANGA, #MENTA E #GELO",
        "price": "10\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "MI AMOR",
        "description": "#MENTA, #BANANA, #ANAN\xC1S",
        "price": "10\u20AC"
      }
    ]);
    ref([
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "ICE WILDBERRY",
        "description": "#FRUTOS VERMELHOS E, GEL0",
        "price": "15\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "MAIAMI CITYIC",
        "description": "#BANANA, #ANAN\xC1S E #MENTOL",
        "price": "15\u20AC"
      },
      {
        "img": "https://cookingwithawallflower.com/wp-content/uploads/2016/09/Blackberry-Cream-Soda-1.jpg",
        "name": "ICE PEACH",
        "description": "#",
        "price": "15\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "ICE PEAR",
        "description": "#",
        "price": "15\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "ICE LOVE",
        "description": "#Maracuj\xE1, #MELOA e GELO",
        "price": "15\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "MOMENTO",
        "description": "#",
        "price": "15\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "BONGO BANGO",
        "description": "#",
        "price": "15\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "COCOPINE",
        "description": "#ANAN\xC1S, #COCO #GELO",
        "price": "15\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "THIS IS LOVE",
        "description": "#M EL\xC3NCIA, #MEL\xC3O, #MORANGO E #MENTOL",
        "price": "15\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "LADY KITTY",
        "description": "#MANGA, #MEL\xC3O, #MORANGO E #MENTA",
        "price": "15\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "ALOHA",
        "description": "#ANAN\xC1S, #MANGA E #MENTA",
        "price": "15\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "BUBBLADE",
        "description": "#PASTILHA DE MEL\xC3NCIA",
        "price": "15\u20AC"
      },
      {
        "img": "https://www.qdelo.com/public/images/restaurant/items/item563698347.jpg",
        "name": "GANGSTA",
        "description": "#FRUTOS VERMELHOS E #P\xCARA",
        "price": "15\u20AC"
      }
    ]);
    const elements = ref([{}]);
    elements.value = mocktailsList.value;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: {
        backgroundImage: `url('/img/bg.jpg')`,
        width: "100%",
        height: "100%",
        position: "fixed",
        overflowY: "scroll",
        overflowX: "hidden"
      } }, _attrs))}><div style="${ssrRenderStyle({
        width: "80%",
        margin: "auto",
        height: "100%"
      })}"><br><div style="${ssrRenderStyle({
        width: "100%",
        height: "70px",
        backgroundColor: "#ffffff0f",
        borderRadius: "10px",
        backdropFilter: "blur(10px)",
        paddingLeft: "8px"
      })}"><!--[-->`);
      ssrRenderList(unref(menus), (menu) => {
        _push(`<div style="${ssrRenderStyle({
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          backgroundColor: "#929779",
          marginTop: "10px",
          marginRight: "7px",
          float: "left",
          padding: "8px"
        })}" class="${ssrRenderClass(menu.active ? "activeBtn" : "")}"><img class="hidden h-8 w-auto lg:block"${ssrRenderAttr("src", menu.img)}></div>`);
      });
      _push(`<!--]--></div><br>`);
      if (unref(CocMenu_)) {
        _push(`<div style="${ssrRenderStyle({
          width: "90%",
          margin: "0px auto",
          height: "50px",
          backgroundColor: "#ffffff0f",
          borderRadius: "10px",
          backdropFilter: "blur(10px)",
          paddingLeft: "8px",
          textAlign: "center"
        })}"><div style="${ssrRenderStyle({
          borderRight: "1px solid #e6f0c0",
          height: "100%",
          width: "33.33%",
          float: "left"
        })}"><p class="${ssrRenderClass(unref(winterSeason) ? "activeLable" : false)}" style="${ssrRenderStyle({
          fontSize: "110%",
          fontWeight: "bold",
          color: "rgb(146 152 121)",
          marginTop: "13px",
          display: "inline-flex"
        })}"> Winter Season </p></div><div style="${ssrRenderStyle({
          borderRight: "1px solid #e6f0c0",
          height: "100%",
          width: "33.33%",
          float: "left"
        })}"><p class="${ssrRenderClass(unref(classicos) ? "activeLable" : false)}" style="${ssrRenderStyle({
          fontSize: "110%",
          fontWeight: "bold",
          color: "rgb(146 152 121)",
          marginTop: "13px",
          display: "inline-flex"
        })}"> Cl\xE1ssicos </p></div><div style="${ssrRenderStyle({
          height: "100%",
          width: "33.33%",
          float: "left"
        })}"><p class="${ssrRenderClass(unref(mocktails) ? "activeLable" : false)}" style="${ssrRenderStyle({
          fontSize: "110%",
          fontWeight: "bold",
          color: "rgb(146 152 121)",
          marginTop: "13px",
          display: "inline-flex"
        })}"> Mocktails </p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(sishaMenu_)) {
        _push(`<div style="${ssrRenderStyle({
          width: "90%",
          margin: "0px auto",
          height: "50px",
          backgroundColor: "#ffffff0f",
          borderRadius: "10px",
          backdropFilter: "blur(10px)",
          paddingLeft: "8px",
          textAlign: "center"
        })}"><div style="${ssrRenderStyle({
          borderRight: "1px solid #e6f0c0",
          height: "100%",
          width: "50%",
          float: "left"
        })}"><p class="${ssrRenderClass(unref(clasic) ? "activeLable" : false)}" style="${ssrRenderStyle({
          fontSize: "110%",
          fontWeight: "bold",
          color: "rgb(146 152 121)",
          marginTop: "13px",
          display: "inline-flex"
        })}"> Clasic </p></div><div style="${ssrRenderStyle({
          height: "100%",
          width: "50%",
          float: "left"
        })}"><p class="${ssrRenderClass(unref(prestige) ? "activeLable" : false)}" style="${ssrRenderStyle({
          fontSize: "110%",
          fontWeight: "bold",
          color: "rgb(146 152 121)",
          marginTop: "13px",
          display: "inline-flex"
        })}"> Prestige </p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<br><br><div style="${ssrRenderStyle({ "width": "100%" })}"><div class="grid lg:grid-cols-3 gap-6 xl:gap-x-12"><!--[-->`);
      ssrRenderList(unref(elements), (el) => {
        _push(`<div class="mb-6 lg:mb-0"><div class="relative block rounded-lg shadow-lg" style="${ssrRenderStyle({ "text-align": "center", "background-color": "#929879" })}"><div class="flex"><div class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4" data-mdb-ripple="true" data-mdb-ripple-color="light"><img src="https://scontent.fopo5-1.fna.fbcdn.net/v/t39.30808-6/307378991_579622177162609_3248697027315522335_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=174925&amp;_nc_ohc=tbuRtGMtxK4AX8gHhgv&amp;_nc_ht=scontent.fopo5-1.fna&amp;oh=00_AfDq7ohETuYzskw8PvI-eewywbVNFFX7PKInWJnXQs3pPg&amp;oe=63A20401" class="w-full"><a href="#!"><div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style="${ssrRenderStyle({ "background-color": "rgba(251, 251, 251, 0.15)" })}"></div></a></div></div><div class="p-6"><h5 class="font-bold text-lg mb-3">${ssrInterpolate(el.name)}</h5><p class="mb-4 pb-2">${ssrInterpolate(el.description)}</p><p class="mb-4 pb-2" style="${ssrRenderStyle({ "font-weight": "bold" })}"> Pre\xE7o: ${ssrInterpolate(el.price)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div><br><br><br><br></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.26af1cad.mjs.map
