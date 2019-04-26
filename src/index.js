document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)

  let giftList = document.querySelector(".gift-list");
  let searchBar = document.querySelector("filter-imput");

  for (let gift of gifts){

    let giftListItem = document.createElement("li");
    let giftListImg = document.createElement("img");
    giftListImg.setAttribute("src", gift.image);
    giftListItem.innerHTML = gift.name;

    giftList.append(giftListItem);
    giftList.append(giftListImg);
  }


    (function(){
      ("#filter-input").on("keyup", function() {
        var value = (this).val().toLowerCase();
        ("gift-list li").filter(function() {
          (this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });





})
