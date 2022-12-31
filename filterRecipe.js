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
        "700 غ بطاطس+ 2 بيضات +ملح+فلفل اسود+ثوم بودرة + 7 ملاعق نشا أو دقيق+ 2 ملاعق +بصلة+ 2 فصوص ثوم+ لحم مفروم+ملح+فلفل اسود +فلفل احمر +ثوم بودرة +قصبر مجفف+ م.ك.زبدة+م.ك.دقيق+ كأس صغير حليب+ جبن",
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
          "1كأس أرز أصفر أمريكي +2 كاس ماء بارد +الخضار (تقريبا 1 كاس من الجزر قطع صغيره 1 كاس بزلاء . كاس فلافل ألوان قطع صغيره.1بصلة صغيرة قطع ناعمة . باقة قزبرة وبقدونس )+ التوابل +  ملعقة صغيرة مركز الطماطم. ملح بحسب الذوق.  نصف ملعقه صغيره كركم . ربع ملعقه صغيره زنجبيل . ربع ملعقه صغيره فلفل أسود+القليل من زيت نباتي أو زيت الزيتون (2معالق تقريبا)",
        category:"MainCourse",
        tags: "أرز,جزر,بزلاء,فلفل,بصل,قزبر وبقدونس",
        tags_eng: "rice carrot pees pepper onion persil oil aisha",
        subCategory: "Ricewithvgs",
        img: "images/images/id3.jpg",
      },
      {
        id: 4,
        youtubeLink: "https://www.youtube.com/embed/mIEAvlsmYic",
        videoTitle:
          "عليها طلب للعشاء/ في دقائق صحية رهييبة لمذاق لم تحضري مثلها أبدااا/ وجبة عشاء",
        description:
        "بطاطس + قرنبيط أي شفلور+ ليمونة+ السلق أو السبانخ+2 حبة طماطم+1 بصلة+2 فص ثوم+200 جرام لحم مفروم+1 ملعقة كبيرة طماطم مركزة+ زيت الزيتون+ ملح ، فلفل ، كمون ، بابريكا ، زنجبيل+ جبن مبشور" ,
        category: "MainCourse",
        tags: "",
        tags_eng: "potato choux epinard aisha onion hashmeat garlic cheese oil",
        subCategory: "Ricewithvgs",
        img: "images/images/id4.1.1.jpg",
        
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
  


  //#####################################################
  // ---- create this method that return 1 if all my choices in the some recipe and 0 if not
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
  // -------------------------------------------------------
  var arr = [];
  function filterRecipe(value) {
    var c=1;
    

    let buttons = document.querySelectorAll(".butn");
    let cards = document.querySelectorAll(".card");

    
    buttons.forEach((button) => {
      if (button.classList.contains(value)) {
        button.classList.add("active");
        arr.push(value);
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
  