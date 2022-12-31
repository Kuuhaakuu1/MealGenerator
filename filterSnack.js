let recipes = {
  data: [
    {
      id: 1,
      youtubeLink: "https://www.youtube.com/embed/eQ_SNh02NeY",
      videoTitle:
        "وداعا للكسل في 5 دقائق حضري فطائر المقلاة السائلة السريعة بدون حليب وبدون زبدة ولا لحوم إقتصادين",
      description:
        " كؤوس دقيق 400G 4+ كؤوس ماء بارد4 600ML + ملعقة صغيرة ملح + ملعقة كبيرة سكر + رشة فلفل أسود+ رشة زعتر + ملعقتين زيت زيتون + بيضة +4 ملاعق بقدونس + في الحشوة + بطاطس خضراء + جزر مسلوق + ملح + زيت + توم + زنجبيل + كركم + زعتر + فلفل أسود + جبن السندويش  تونة ",
      category: "Snack",
      tags: "",
      tags_eng: "eggs oil milk flour persil potato carrot thon cheese",
      subCategory: "--",
      img: "images/images/id1.2.jpg",
    },
    {
      id: 2,
      youtubeLink: "https://www.youtube.com/embed/xSa_4BMFrgo",
      videoTitle:
        "عندك بطاطس وبيض وفروماج !! قومي حالا حضريها فرمشة عين بدون فرن ساهلة وسريعة",
      description: "بطاطس <br/>بيض<br/> فروماج",
      category: "MainCourse",
      tags: "بطاطس بيض فروماج",
      tags_eng: "potato eggs cheese thon",
      subCategory: "Tortilla",
      img: "images/images/id4.jpg",
    },
    {
      id: 3,
      youtubeLink: "https://www.youtube.com/embed/nJUUxS7LgUo",
      videoTitle: "عندك تونة و بيض ؟؟ حضري اسهل وألذ وجبة في دقائق",
      description: "بطاطس <br/> تونة",
      category: "MainCourse",
      tags: "",
      tags_eng: "potato thon",
      subCategory: "--",
      img: "images/images/id2.2.jpg",
    },
    {},
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
function choiceInRecipe(card, arr) {
  var pr = 1;

  for (var i = 0; i < arr.length; i++) {
    if (card.lastChild.innerHTML.includes(arr[i])) {
      pr = pr * 1;
    } else {
      pr = pr * 0;
      break;
    }
  }
  if (arr.length == 0) {
    pr = 0;
  }
  return pr;
}

var c = 1;
function filterRecipe(value) {
  let buttons = document.querySelectorAll(".butn");
  let cards = document.querySelectorAll(".card");
  //ajout des valeurs selectionnees
  arr.push(value);

  buttons.forEach((button) => {
    if (button.classList.contains(value)) {
      button.classList.add("active");
      //button.classList.add("noHover");
    }
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      c++;
    }
  }

  if (c % 2 != 0) {
    console.log(value + "clicked two times");
    buttons.forEach((button) => {
      if (button.classList.contains(value)) {
        button.classList.remove("active");
      }
      const index = arr.indexOf(value);
      if (index > -1) {
        // only splice array when item is found
        arr.splice(index, 1); // 2nd parameter means remove one item only
      }
    });
  }

  cards.forEach((card) => {
    // -----   call the choiceInResipe here ---------
    if (choiceInRecipe(card, arr)) {
      card.classList.remove("hide");
      card.classList.add("show");
    } else {
      card.classList.add("hide");
    }
  });
}
