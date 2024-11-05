let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": "19.99",
      "publishedYear": 2018,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": "14.50",
      "publishedYear": 2021,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": "22.95",
      "publishedYear": 2019,
      "genre": "Romantik",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": "18.00",
      "publishedYear": 2020,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": "16.75",
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": "12.30",
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": "21.00",
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": "17.50",
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": "19.99",
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ]
  

  
function renderBooks(){
  let bookRef = document.getElementById('content');
        bookRef.innerHTML = "";
            for (let i=0; i<books.length; i++){
                getFromLocalStorageComments(i);
                getFromLocalStoragelikes(i);
                bookRef.innerHTML += getBookTemplates(i);
                renderComments(i);
            } 
            for (let c = 0; c<books.length; c++){
              isliked(c)
            }
             
}

function renderComments(i){
  let commentRef = document.getElementById(`comments${i}`)
  commentRef.innerHTML = "";
  
  for(let c = 0; c<books[i].comments.length; c++){
    commentRef.innerHTML += getCommentTemplate(i, c);
  }
}

function saveToLocalStorageLikes(i){
  localStorage.setItem(`likes${i}`, JSON.stringify(books[i].likes));
  localStorage.setItem(`liked${i}`, JSON.stringify(books[i].liked));
}

function saveToLocalStorageComments(i){
  localStorage.setItem(`comments${i}`, JSON.stringify(books[i].comments));
}

function getFromLocalStoragelikes(i){
  let likesRef = JSON.parse(localStorage.getItem(`likes${i}`));
  let likedRef = JSON.parse(localStorage.getItem(`liked${i}`));

  if(likesRef === null || likedRef === null){
    return;
  }
  else{
    books[i].likes = likesRef;
    books[i].liked = likedRef;
  }
}

function getFromLocalStorageComments(i){
  let commentsRef = JSON.parse(localStorage.getItem(`comments${i}`));

  if(commentsRef === null ){
    return;
  }
  else{
    books[i].comments = commentsRef;
  }

}


//12.09. gemacht und noch mal anschaune, was du genau gemacht hast! 
function isliked(i){
  let likeStatus = books[i].liked;
  let heartImgRef = document.getElementById(`heartImg${i}`)

    if (likeStatus === true){
      heartImgRef.src = "./IMG/heart (1).png"
    }
    else{
      heartImgRef.src = "./IMG/emptyheart.png"
    }
}


function like(i){
  let likeStatus = books[i].liked;
  let heartImgRef = document.getElementById(`heartImg${i}`);
  //let likeCountRef = books[i].likes  das hier hat keinen Sinn, da es lediglich eine Kopie erstellt aber nicht den Wert im Array ändert!?! Hä?
  let likesDOMRef = document.getElementById(`likescounter${i}`);

    if(likeStatus === true){
      heartImgRef.src = "./IMG/emptyheart.png";
      books[i].liked = false;
      books[i].likes--;
    }
    else{
      heartImgRef.src = "./IMG/heart (1).png";
      books[i].liked = true;
      books[i].likes++;
    }
    likesDOMRef.innerHTML = books[i].likes;
    saveToLocalStorageLikes(i);
}

function pushComment(i){
  let addMustard = document.getElementById(`commentInput${i}`);
  let userNick = document.getElementById(`nickInput${i}`);

    if(addMustard.value === ""){
      alert("Bitte ein Kommentar eingeben! Danke")
    }
    else{
      if (userNick.value ===""){
        alert("bitte geben Sie einen Namen ein")
      }
      else{
        let newComment = {
          name: userNick.value,
          comment: addMustard.value
        };
        books[i].comments.push(newComment);
      }
    }
  saveToLocalStorageComments(i);
  renderComments(i);
  addMustard.value = "";
  userNick.value = "";
}