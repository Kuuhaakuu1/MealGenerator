let recipes = {
  data: [
    {
      id: 1,
      youtubeLink: "https://www.youtube.com/embed/6LT2fLPgfoI",
      videoTitle:
        "كيكة الخمس ملاعق مذاق رهيب لا يقاوم بدون كريمة بمكونات جد بسيطة واقتصادية كيك ادمااان",
      description:
        "مكونات الكيك<br/> جوج بيضات  <br/>5ملاعق من السكر 100غرام <br/>5ملاعق من الزيت 50مل<br/>5ملاعق من الحليب 70مل<br/> 5ملاعق من الدقيق 100غرام<br/> 3ملاعق من بدرة الكاكاو الخام 30غ<br/> ملعقة صغيرة من خميرة الحلويات 7غرام<br/> كيس سكر الفانيليا<br/> قبصة ملح<br/> كأس حليب <br/> كيس قهوة سريعة الذوبان<br/> طبقة التانية:<br/> نصف لتر من الحليب<br/>   50غرام من نشا الذرة<br/> كيس سكر الفانيليا<br/> كأس الا ربع من السكر 120غرام <br/>ملعقة صغيرة من الزبدة 15غرام  <br/>علبة دانيت شكلاطة 125غرام <br/>  60غرام من الشكلاطة السوداء<br/> طبقة التالتة:<br/> 140غرام من شكلاطة سوداء<br/> ربع كأس من الحليب الساخن 70مل  <br/>لتزين :<br/> شكلاطة فيغميسيل5",
      category: "Dessert",
      tags: "بيض,سكر,زيت,حليب,دقيق,كاكاو,خميرة الحلويات,سكر الفانيليا,ملح,قهوة,نشا,زبدة,دانيت شكلاطة ,شكلاطة سوداء ",
      tags_eng:"eggs sugar oil milk flour cacao bkp vanilla mayzena butter danette chocolat",
      subCategory: "--",
      img: "images/images/id1.1.jpg",
    },
    {
      id: 2,
      youtubeLink: "https://www.youtube.com/embed/bseuRO7b-74",
      videoTitle:
        "من ليوم يستحيل تبدليه كيك يومي غيردرهم1ديري لفرق غينسيك فجميع لكيكات طااالع وخفيفه ب2بيضات",
      description:
        "2بيضات <br/> 1ياغورت وزن 110غرام <br/> سكر وزيت بنفس علبت   ياغورت <br/> دقيق بنفس علبت ياغورت 3مرات <br/> 3خمرات من فأت 8غرام <br/> قطر لمول مابين 24 حتى 26 سانتيم <br/> ",
      category: "Dessert",
      tags: "بيض,ياغورت,سكر,زيت,دقيق",
      tags_eng: "eggs sugar oil yogurt flour",
      subCategory: "--",
      img: "images/images/id2.1.jpg",
    },
    {
      id: 3,
      youtubeLink: "https://www.youtube.com/embed/VNh1b8wg3Ro",
      videoTitle:
        "كرص/قريشلات/ بريوش بالحليب رطب كالقطن خطوة بخطوة بمقادير مضبوطة وناجحة  بدون دلك او مجهود",
      description:
        "220ملل حليب دافئ <br/> 70ملل زيت <br/> نصف كأس سكر <br/> ملعقة خميرة فورية <br/> نصف ملعقة ملح <br/> فانيلا <br/> بيضة <br/> 7غ خمیره حلویات <br/> 500 غ دقيق ابيض",
      category: "Dessert",
      tags: " حليب,زيت,سكر,بيضة,دقيق",
      tags_eng: "eggs sugar oil flour milk yeast",
      subCategory: "--",
      img: "images/images/id3.1.jpg",
    },
    {
      id: 4,
      youtubeLink: "https://www.youtube.com/embed/uJrOU5ZbDKs",
      videoTitle:
        "طريقة تحضير كريب حلو بطريقة جد مبسطة للمبتدئات مع صلصة الشوكولا بديل نوتيلا",
      description:
        " 2 بيضات <br/> دقيق (ما يعادل زلافة ممتلئة)  <br/> 8غ فانيلا <br/>3ملاعق زيت ( او 3 ملاعق زبدة ذائبة) <br/>3 ملاعق سكر <br/>  حليب (مايعادل 4 كؤوس  و نصف ديال العنبة) <br/> رشة ملح",
      category: "Dessert",
      tags: "بيض,دقيق,فانيلا,زيت,سكر,حليب",
      tags_eng: "eggs oil sugar flour vanilla milk",
      subcategory: "--",
      img: "images/images/id4.1.jpg",
    },
  ],
};

//############################################################
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
    //##################################################################
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
  tags.classList.add("hide");
  card.appendChild(tags);

  document.getElementById("recipes").appendChild(card);
}
var arr = [];
//#####################################################

function filterRecipe(value) {
  let buttons = document.querySelectorAll(".butn");
  let cards = document.querySelectorAll(".card");
  //ajout des valeurs selectionnees 
  arr.push(value);
  
  buttons.forEach((button) => {
    if (button.classList.contains(value)) {
      button.classList.add("active");
      button.classList.add("noHover");
    }
  });
 
  
  cards.forEach((card) => {
    arr.every(function checkcontain(e){
       if(card.lastChild.innerHTML.includes(e))
       {
         card.classList.remove("hide");
         card.classList.add("show");
       }
    });
  
   });



 
  
}
