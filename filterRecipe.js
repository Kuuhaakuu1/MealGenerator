let recipes = {
  data: [
    {
      id: 1,
      youtubeLink: "https://www.youtube.com/embed/zZgcBo8QGLY",
      videoTitle: "الوصفة التي حققت نجاح خيالي على اليوتوب ب3 مكونات فقط 👌👌",
      description:
        "ماء<br/> رشة ملح<br/> كأس ونصف من الأرز الأصفر<br/> حبة بصل <br/>قليل من زيت في مقلاة<br/> 3 بيض <br/> فلفل اسود<br/> ملعقة زبدة<br/> صلصة السوجا",
      category: "MainCourse",
      tags: "ملح,أرزأصفر,بصل,زيت,بيض,فلفل اسود,زبدة,صلصة السوجا",
      tags_eng: "rice onion oil eggs butter",
      subCategory: "Ricewithvgs",
      img: "images/images/id1.jpg",
    },
    {
      id: 2,
      youtubeLink: "https://www.youtube.com/embed/5LAh8hpcQu8",
      videoTitle: "وجبة عشاء سريعة وبنينة بزاف في المقلاة  سهلة وخفيفة",
      description:
        "غ700 بطاطس<br/> 2 بيضات <br/>ملح<br/>فلفل اسود<br/>ثوم بودرة <br/> 7 ملاعق نشا أو2ملاعق دقيق   <br/>بصلة<br/> 2 فصوص ثوم<br/> لحم مفروم<br/>ملح<br/>فلفل اسود <br/>فلفل احمر <br/>ثوم بودرة <br/>قصبر مجفف<br/> م.ك.زبدة<br/>م.ك.دقيق <br/>كأس صغير حليب<br/> جبن",
      category: "MainCourse",
      tags: "بطاطس,بيض,ثوم,نشا,دقيق,بصل,لحم مفروم,زبدة,حليب,جبن",
      tags_eng:
        "potato eggs garlic mayzena flour onion hashmeat butter milk cheese",
      subCategory: "Filledbread",
      img: "images/images/id2.jpg",
    },
    {
      id: 3,
      youtubeLink: "https://www.youtube.com/embed/tXQzULfs9pw",
      videoTitle:
        "ألذ أرز مغربي بالخضار بسيط وسريع جدا في التحضير فقط بكاس واحد أرز ",
      description:
        "كأس أرز أصفر أمريكي<br/> 2 كاس ماء بارد <br/> الخضار :<br/>تقريبا 1 كاس من الجزر قطع صغيره<br/> 1 كاس بزلاء <br/>. كاس فلافل ألوان قطع صغيره<br/>.1بصلة صغيرة قطع ناعمة <br/>. باقة قزبرة وبقدونس<br/> التوابل<br/> ملعقة صغيرة مركز الطماطم<br/> ملح بحسب الذوق<br/>  نصف ملعقه صغيره كركم <br/> ربع ملعقه صغيره زنجبيل <br/> ربع ملعقه صغيره فلفل أسود <br/>القليل من زيت نباتي أو زيت الزيتون (2معالق تقريبا )",
      category: "MainCourse",
      tags: "أرز,جزر,بزلاء,فلفل,بصل,قزبر وبقدونس",
      tags_eng: "rice carrot pees pepper onion persil",
      subCategory: "Ricewithvgs",
      img: "images/images/id3.jpg",
    },
    {
      id: 4,
      youtubeLink: "https://www.youtube.com/embed/xSa_4BMFrgo",
      videoTitle:
        "عندك بطاطس وبيض وفروماج !! قومي حالا حضريها فرمشة عين بدون فرن ساهلة وسريعة",
      description: "بطاطس <br/>بيض<br/> فروماج",
      category: "MainCourse",
      tags: "بطاطس بيض فروماج",
      tags_eng: "potato eggs cheese",
      subCategory: "Tortilla",
      img: "images/images/id4.jpg",
    },
  ],
};

for (let r of recipes.data) {
  let card = document.createElement("div");
  let link = document.createElement("a");
  let image = document.createElement("img");
  let tags = document.createElement("p");

  card.classList.add("card", "hide", "col-12");
  link.setAttribute("href", "#");
  link.classList.add("text-dark", "fw-bold", "fs-3", "p-3", "text-center");
  link.innerHTML = r.videoTitle;
  image.setAttribute("src", r.img);
  image.classList.add("img-thumbnail", "mx-auto", "d-block", "p-2");

  card.appendChild(link);
  card.appendChild(image);

  //#######################################################
  card.addEventListener("click", function filterDetail() {
    let box = document.getElementById("motherbox");
    let cards = document.querySelectorAll(".card");
    box.classList.add("hide");
    cards.forEach((card) => {
      card.classList.add("hide");
    });

    let detail = document.createElement("div");
    let title = document.createElement("h1");
    let frame = document.createElement("iframe");
    let ing = document.createElement("p");
    let par = document.createElement("p");
    let btn = document.createElement("button");

    detail.classList.add("detail", "col-12");
    title.classList.add("text-center", "text-light", "fw-bold", "m-3");
    title.innerText = r.videoTitle;
    detail.appendChild(title);
    frame.setAttribute("src", r.youtubeLink);
    frame.classList.add("frame");
    ing.innerHTML = "مكونات &#128071";
    ing.classList.add(
      "text-center",
      "text-light",
      "fw-bolder",
      "m-5",
      "text-decoration-underline",
      "ing"
    );
    par.innerHTML = r.description;
    par.classList.add("text-center", "parag", "fw-bold");
    btn.classList.add("butn", "m-5", "text-light", "text-center", "fw-bold");
    btn.innerHTML = "رجوع إلى الوصفات &#128072";

    btn.addEventListener("click", function retrunTopage() {
      box.classList.remove("hide");
      cards.forEach((card) => {
        if (card.classList.contains("show")) {
          card.classList.remove("hide");
        }
      });
      let details = document.querySelectorAll(".detail");
      details.forEach((detail) => {
        detail.classList.add("hide");
      });
    });

    detail.appendChild(frame);
    detail.appendChild(ing);
    detail.appendChild(par);
    detail.appendChild(btn);
    document.getElementById("details").appendChild(detail);
  });
  //#################################################################

  tags.innerHTML = r.tags_eng;
  tags.classList.add("text-dark", "fw-bold", "w3-display-bottomright", "p-5");
  tags.classList.add("hide");
  card.appendChild(tags);

  document.getElementById("recipes").appendChild(card);
}

var arr = [];
var array = [];
for (let t of recipes.data) {
  array.push(t.tags_eng);
}
//#####################################################

function filterRecipe(value) {
  let buttons = document.querySelectorAll(".butn");
  let cards = document.querySelectorAll(".card");

  buttons.forEach((button) => {
    if (button.classList.contains(value)) {
      button.classList.add("active");
      button.classList.add("noHover");
    }
  });

  arr.push(value);
  var j = 0;

//###############################
// j ai le meme probleme ici 
// j ai essaye ce code mais il ne marche pas 

  for (var i = 0; i < array.length; i++) {
    if (arr.length == 1) {
      if (array[i].includes(arr[j])) {
       
        cards.forEach((card) => {
          if (card.lastChild.innerHTML.includes(value)) {
            card.classList.remove("hide");
            card.classList.add("show");
          } else {
            card.classList.add("hide");
          }
        });
      } else {
      }
    } 
    
    else {
      while (array[i].includes(arr[j]) && j != arr.length) 
      {
        j++;
      }
      if (j === arr.length) {
       
        cards.forEach((card) => {
          card.classList.add("hide");
          if (card.lastChild.innerHTML == array[i]) {
            card.classList.remove("hide");
            card.classList.add("show");
          }
        });
      }
      /*
      else {
        
        cards.forEach((card) => {
            card.classList.add("hide");
        });
        let div=document.createElement("div");
        div.classList.add("text-center","card");
        let par=document.createElement("p");
        div.appendChild(par);
        par.innerHTML="No items";
        div.classList

      }
     */
    }
    j = 0;
  }
}
