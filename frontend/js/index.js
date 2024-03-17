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