document.addEventListener("DOMContentLoaded", () => {
  // Fetch news posts
  const postsContainer = document.getElementById("news-posts");
  if (postsContainer) {
    fetch("posts.json")
      .then((response) => response.json())
      .then((posts) => {
        posts.news.forEach((post) => {
          const postElement = document.createElement("div");
          postElement.innerHTML = `
              <a href="news-post.html?id=${post.id}">
                <div class="news-post">
                  <img src="${post.img}" alt="${post.title}">
                  <h1>${post.title}</h1>
                  <p>${post.excerpt} 
                    <a style="color: #0891b2;" href="news-post.html?id=${post.id}">Read more</a>
                  </p>
                  <small>Published on: ${post.date}</small>
                </div>
              </a>
            `;
          postsContainer.appendChild(postElement);
        });
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }

  // Fetch achievement posts
  const achievementContainer = document.getElementById("achievement-posts");
  if (achievementContainer) {
    fetch("posts.json")
      .then((response) => response.json())
      .then((posts) => {
        posts.achievements.forEach((post) => {
          const postElement = document.createElement("div");
          postElement.innerHTML = `
              <a href="achievement-post.html?id=${post.id}">
                <div class="achievement-post">
                <div style="width: 340px; height: 200px; overflow: hidden;">
                  <img src="${post.img}" alt="${post.title}">
                  </div>
                  <h1>${post.title}</h1>
                  <p>${post.excerpt.slice(
                    0,
                    200
                  )}<a style="color: #0891b2;" href="achievement-post.html?id=${
            post.id
          }"> Read more</a></p>
                </div>
              </a>
            `;
          achievementContainer.appendChild(postElement);
        });
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }
});
