import { blogs, categories } from "../data.js";

const blogsList = document.querySelector(".blogs");
const blogCardTemplate = document.querySelector("#blog-card-template");

function formatDate(date) {
  return new Date(date).toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function addBlogCards(blogs) {
  for (const blog of blogs) {
    const blogCard = blogCardTemplate.content.cloneNode(true);

    blogCard.querySelector(".blog-title").textContent = blog.title;
    blogCard.querySelector(".blog-description").textContent = blog.description;
    blogCard.querySelector(".blog-created-at").textContent = formatDate(blog.createdAt);
    blogCard.querySelector(".blog-city").textContent = blog.city;
    blogCard.querySelector(".author-name").textContent = blog.author.name;
    blogCard.querySelector(".author-avatar").src = blog.author.avatar;
    blogCard.querySelector(".blog-img").src = blog.image;

    for (const category of blog.categories) {
      const categoryBadge = document.createElement("span");
      categoryBadge.textContent = category;
      categoryBadge.classList.add("blog-category");

      blogCard.querySelector(".blog-categories").appendChild(categoryBadge);
    }

    blogsList.appendChild(blogCard);
  }
}

let selectedTag = null;

function addFilterationTags() {
  const filterationTags = document.querySelector(".filteration-tags");

  for (const category of categories) {
    const tagButton = document.createElement("button");
    tagButton.classList.add("tag");
    tagButton.textContent = category;

    tagButton.addEventListener("click", () => {
      if (selectedTag === category) {
        blogsList.innerHTML = "";
        addBlogCards(blogs);

        selectedTag = null;
      } else {
        const filteredBlogs = filterBlogsByTag(category);

        blogsList.innerHTML = "";
        addBlogCards(filteredBlogs);

        selectedTag = category;
      }
    });

    filterationTags.appendChild(tagButton);
  }
}

function filterBlogsByTag(tag) {
  const filteredBlogs = blogs.filter((blog) => {
    if (blog.categories.includes(tag)) {
      return true;
    } else {
      return false;
    }
  });

  return filteredBlogs;
}

addBlogCards(blogs);
addFilterationTags();
