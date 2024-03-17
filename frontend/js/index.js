$(document).ready(() => {
    $('#cards-container').html(''); 
  
    $.ajax({
      url: "http://localhost/news-website/backend/get_news.php",
      method: "GET",
      dataType: "json",
      success: (response) => {
        renderCards(response); 
      },
      error: (xhr, status, error) => {
        console.log("Your cards were not loaded successfully.");
        console.error(error);
      },
    });
  });
  
  function renderCards(data) {
    let cardsHtml = '';
  
    for (let i = 0; i < data.length; i++) {
      const cardData = data[i];

      cardsHtml += 
      `
      <div class="card my-4 mx-2" style="width: 18rem">
          ${cardData.img ? '<img src="./assets/' + cardData.img + '" class="card-img-top" alt="...">' : ''}  
          <div class="card-body">
            <h5 class="card-title">${cardData.title}</h5>
            <p class="card-text">
              ${cardData.description}
            </p>
            <a href="#" class="btn btn-primary">learn More</a>
          </div>
        </div>
      `
    }
  

    $('#cards-container').html(cardsHtml);
  }


  $("#news-form").submit(() => {
    let form = document.getElementById("news-form");
    let formData = new FormData(form);
  
    $.ajax({
      url: "http://localhost/news-website/backend/create_news.php",
      method: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: (response) => {
        console.log("form sent successfully");
      },
      error: (xhr, status, error) => {
        console.log("Your form was not sent successfully.");
        console.error(error);
      },
    });
  });
  
