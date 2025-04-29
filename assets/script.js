const book = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((bookObj) => {
      console.log(bookObj);
      if (bookObj.ok) {
        return bookObj.json();
      }
    })
    .then((bookInfo) => {
      const row = document.querySelector(".row");
      bookInfo.forEach((item) => {
        //COL
        const col = document.createElement("div");
        col.className = " col-12 col-md-3 d-flex";
        col.style.margin = "10px 0"
        //CARD
        const card = document.createElement("div");
        card.className = "card w-100 h-100";
        //CARD.IMG
        const img = document.createElement("img");
        img.src = `${item.img}`;
        img.className = "card-img-top";
        img.style.objectFit = "contain";
        img.style.width = "100%";
        img.style.height = "300px";

        //CARD-BODY
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        const h5 = document.createElement("h5");
        h5.textContent = item.title;
        //DISCARD-BOOK
        const divDiscard = document.createElement("div");
        divDiscard.className =
          "d-flex justify-content-between align-items-center";
        const buttonDiscard = document.createElement("button");
        buttonDiscard.style.border = "none";
        buttonDiscard.className = "bg-danger";
        buttonDiscard.style.color = "white";
        buttonDiscard.innerHTML = `<i class="bi bi-trash"></i>`;

        buttonDiscard.addEventListener("click", () => {
          col.remove();
        });

        const p = document.createElement("p");
        p.style.margin = "0";
        p.textContent = `${item.price}€`;

        divDiscard.append(p, buttonDiscard);
        cardBody.append(h5, divDiscard);
        card.append(img, cardBody);
        col.appendChild(card);
        row.append(col);
      });
    })
    .catch((err) => console.log(err));
};

window.onload = () => {
  book();
};
