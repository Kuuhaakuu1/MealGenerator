let recipes = {
  data: [
    {
      id: 1,
      youtubeLink: "https://www.youtube.com/embed/6LT2fLPgfoI",
      videoTitle:
        "كيكة الخمس ملاعق مذاق رهيب لا يقاوم بدون كريمة بمكونات جد بسيطة واقتصادية كيك ادمااان",
      description:
        "2بيضات+ 5ملاعق من السكر 100غرام+ 5ملاعق من الزيت 50مل+ 5ملاعق من الحليب 70مل+ 5ملاعق من الدقيق 100غرام+ 3ملاعق من بدرة الكاكاو الخام 30غ+  ملعقة صغيرة من خميرة الحلويات 7غرام+  كيس سكر الفانيليا + قبصة ملح + كأس حليب+ كيس قهوة سريعة الذوبان + طبقة التانية : نصف لتر من الحليب+ 50غرام من نشا الذرة+  كيس سكر الفانيليا + كأس الا ربع من السكر 120غرام +ملعقة صغيرة من الزبدة 15غرام+  علبة دانيت شكلاطة 125غرام+ 60غرام من الشكلاطة السوداء,  طبقة التالتة :140غرام من شكلاطة سوداء+  ربع كأس من الحليب الساخن  70 مل, لتزين : شكلاطة فيغميسيل",
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
        "2بيضات+1ياغورت وزن 110غرام +سكر وزيت بنفس علبت   ياغورت+ دقيق بنفس علبت ياغورت 3مرات +3خمرات من فأت 8غرام قطر لمول مابين 24 حتى 26 سانتيم+",
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
        "220ملل حليب دافئ +70ملل زيت +نصف كأس سكر+ملعقة خميرة فورية +نصف ملعقة ملح +فانيلا+بيضة+7غ خمیره حلویات+500 غ دقيق ابيض",
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
        "2 بيضات+250 غ دقيق (ما يعادل زلافة ممتلئة)+8 غ فانيلا+3 ملاعق زيت ( او 3 ملاعق زبدة ذائبة)+3 ملاعق سكر+650 ملل حليب (مايعادل 4 كؤوس  و نصف ديال العنبة)+ رشة ملح",
      category: "Dessert",
      tags: "بيض,دقيق,فانيلا,زيت,سكر,حليب",
      tags_eng: "eggs oil sugar flour vanilla milk",
      subcategory: "--",
      img: "images/images/id4.1.jpg",
    },
    {
        id: 5,
        youtubeLink: "https://www.youtube.com/embed/cyIi4K3OTQE&ab_channel=%D9%88%D8%B5%D9%81%D8%A7%D8%AA%D9%87%D9%86%D8%AF%D9%88%D8%B4%D8%A9RecettesHindoucha",
        videoTitle:
          "الفطائر القطنية في المقلاة فرمشة عين إقتصاديين لفطور صباح أو كوتيا",
        description:
          "2بيضات + سكر =3م.ك  +سكر فاني+ زيت =3م.ك  +كوب و نصف حليب +خميرة بيكنباودر=14غ +دقيق حسب الخليط تقريبا 8م.ك",
        category: "Dessert",
        tags: "خميرة الحلويات,بيض,دقيق,فانيلا,زيت,سكر,حليب",
        tags_eng: "eggs oil sugar flour vanilla milk bkp",
        subcategory: "--",
        img: "images/images/id5.1.jpg",
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
  link.classList.add("text-dark", "fw-bold", "title", "p-3", "text-center");
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
    title.classList.add("text-center", "text-light", "fw-bold", "m-3","fs-1");
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
function choiceInRecipe(card,arr)
  {
    var pr=1;
  
    for (var i = 0; i < arr.length; i++) 
    {
      if(card.lastChild.innerHTML.includes(arr[i]))
      {
        pr=pr*1;
      }else
      {
        pr=pr*0;
        break;
      }
      
    }
    if(arr.length==0)
    {
      pr=0;
    }
    return pr;
  }
var c=1;
function filterRecipe(value) {
  let buttons = document.querySelectorAll(".butn");
  let cards = document.querySelectorAll(".card");
  //ajout des valeurs selectionnees 
  

  buttons.forEach((button) => {
    if (button.classList.contains(value)) {
        arr.push(value);
      button.classList.add("active");
      //button.classList.add("noHover");
    }
  });
  for(let i=0;i<arr.length;i++)
  {
      if(arr[i]=== value)
      {
         c++;
      }
  }
   
  if(c %2 != 0){ 
      console.log(value+"clicked two times");
      buttons.forEach((button) => {
          if (button.classList.contains(value)) {
       button.classList.remove("active"); }
       const index = arr.indexOf(value);
       if (index > -1) { // only splice array when item is found
         arr.splice(index, 1); // 2nd parameter means remove one item only
       }
          });}

 
 
  cards.forEach((card) => 
          {
            // -----   call the choiceInResipe here ---------
              if (choiceInRecipe(card,arr)) 
              {
                card.classList.remove("hide");
                card.classList.add("show");
              } else 
              {
                card.classList.add("hide");
                card.classList.remove("show");
              }
          });
}
