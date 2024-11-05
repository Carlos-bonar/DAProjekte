function getBookTemplates(i){

    let bookTemplate = `<div class="bookOverOverView" id="bookOverOverView${i}">
                        <div class="bookTitle" id="bookTitle${i}">${books[i].name}</div>
                        <div class="seperator"></div>
                        <div class="bookImg" id="bookIMG${i}"><img class="bookIMG" src="./IMG/book-2948634_640.png" alt="Book"></div>
                        <div class="seperator"></div>
                        <div class="priceAndLikes" id="priceAndLikes${i}">
                          <div class="pice" id="price${i}">${books[i].price} €</div>
                          <div class="likes" id="likes${i}"><div class="likecounter" id="likescounter${i}">${books[i].likes}</div> <button class="likeButton" id="likeButton${i}" onclick="like(${i})"><img class="heartImgs"  id="heartImg${i}" src="" alt="heart"></button></div>
                        </div>
                        <div class="description" id="description${i}">
                          <p class="descriptionChild"><span class="descriptionElement">Author</span> <span class="span">: ${books[i].author}</span> </p>
                          <p class="descriptionChild"><span class="descriptionElement">Erscheinungsjahr</span> <span class="span">: ${books[i].publishedYear}</span></p>
                          <p class="descriptionChild"><span class="descriptionElement">Genre</span> <span class="span">: ${books[i].genre}</span></p>
                        </div>
                        <div class="seperator"></div>
                        <div class="comments" >Kommentare:
                        <div id="comments${i}">
                        
                        </div>
                        </div>
                        <div class="commentPush"><div class="inputOverdiv"><input type="text" class="commentInput" id="nickInput${i}" placeholder="Dein Nick..."><input type="text" class="commentInput" id="commentInput${i}" placeholder="Schreib Dein Kommentar..."><div class="inputUnderline"></div></div><div class="buttonDiv"><button class="pushComment" id="pushComment" onclick="pushComment(${i})"><img class="telegram" src="./IMG/telegram.png" alt="Teleg."></button></div></div>
                        </div>`
      return bookTemplate;
   }

   function getCommentTemplate(i, c){
    let commentTemplate = 
                        `<div class="p-Comments"><div class="commentAutor">${books[i].comments[c].name}</div><div class="realComment">:${books[i].comments[c].comment}</div></div>`
    return commentTemplate;
   }