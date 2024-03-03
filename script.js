const books = [
  {
    cover:
      "http://books.google.com/books/content?id=HvJaAAAAMAAJ&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api",
    author: "Rudyard Kipling",
    genre: "Animals",
    pageCount: "332 pages",
  },
  {
    cover:
      "https://books.google.com/books/content?id=SKWqDwAAQBAJ&printsec=frontcover&img=1&zoom=9&edge=curl&source=gbs_api",
    author: "Victor H. Green",
    genre: "History",
    pageCount: "235 pages",
  },
  {
    cover:
      "https://books.google.com/books/content?id=kKh5Dyqxx-QC&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api",
    author: "Aldous Huxley",
    genre: "Fiction",
    pageCount: "288 pages",
  },
  {
    cover:
      "https://books.google.com/books/content?id=W4r7lF_MSMYC&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api",
    author: "Leo Tolstoy",
    genre: "Fiction",
    pageCount: "865 pages",
  },
  {
    cover:
      "http://books.google.com/books/content?id=K-KYUBCmgfYC&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api",
    author: "Homer",
    genre: "Epic poetry, Greek",
    pageCount: "290 pages",
  },
  {
    cover:
      "https://books.google.com/books/content?id=9xHCAgAAQBAJ&printsec=frontcover&img=1&zoom=7&edge=curl&source=gbs_api",
    author: "Mary Shelley",
    genre: "Fiction",
    pageCount: "176 pages",
  },
  {
    cover:
      "https://books.google.com/books/content?id=UpmCDwAAQBAJ&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api",
    author: "Oscar Wilde",
    genre: "Fiction",
    pageCount: "216 pages",
  },
  {
    cover:
      "http://books.google.com/books/content?id=ViwQAQAAMAAJ&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api",
    author: "William L. Atkinson",
    genre: "Communicable diseases",
    pageCount: "538 pages",
  },
  {
    cover:
      "http://books.google.com/books/content?id=hHUsHOHqVzEC&printsec=frontcover&img=1&zoom=10&source=gbs_api",
    author: "James Surowiecki",
    genre: "Business & Economics",
    pageCount: "335 pages",
  },
  {
    cover:
      "https://books.google.com/books/content?id=r2yCRUxo0EYC&printsec=frontcover&img=1&zoom=8&edge=curl&source=gbs_api",
    author: "Simon Sinek",
    genre: "Business & Economics",
    pageCount: "269 pages",
  },
  {
    cover:
      "https://books.google.com/books/content?id=gJVtu6vuBpkC&printsec=frontcover&img=1&zoom=9&edge=curl&source=gbs_api",
    author: "William Germano",
    genre: "Reference",
    pageCount: "154 pages",
  },
  {
    cover:
      "http://books.google.com/books/content?id=KhMYAAAAYAAJ&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api",
    author: "Emily Bronte",
    genre: "Fiction",
    pageCount: "300 pages",
  },
  {
    cover:
      "https://books.google.com/books/content?id=g_gLEAAAQBAJ&printsec=frontcover&img=1&zoom=9&edge=curl&source=gbs_api",
    author: "Janneke Adema",
    genre: "Language Arts & Disciplines",
    pageCount: "351 pages",
  },
  {
    cover:
      "http://books.google.com/books/content?id=-EnlAAAAMAAJ&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api",
    author: "Ernst G. Timme",
    genre: "Wisconsin",
    pageCount: "810 pages",
  },
  {
    cover:
      "https://books.google.com/books/content?id=auhOEAAAQBAJ&printsec=frontcover&img=1&zoom=9&edge=curl&source=gbs_api",
    author: "Ben Tarnoff",
    genre: "Political Science",
    pageCount: "273 pages",
  },
  {
    cover:
      "https://books.google.com/books/content?id=utugT5lFRQoC&printsec=frontcover&img=1&zoom=9&edge=curl&source=gbs_api",
    author: "Michael Pollan",
    genre: "Health & Fitness",
    pageCount: "243 pages",
  },
  {
    cover:
      "https://books.google.com/books/content?id=oIYNBodW-ZEC&printsec=frontcover&img=1&zoom=9&edge=curl&source=gbs_api",
    author: "Michael Lewis",
    genre: "Sports & Recreation",
    pageCount: "336 pages",
  },
  {
    cover:
      "http://books.google.com/books/content?id=esYZAQAAIAAJ&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api",
    author: "",
    genre: "Aeronautics",
    pageCount: "84 pages",
  },
  {
    cover:
      "https://books.google.com/books/content?id=FTpxDwAAQBAJ&printsec=frontcover&img=1&zoom=9&edge=curl&source=gbs_api",
    author: "Christopher Alexander",
    genre: "Architecture",
    pageCount: "Unknown pages",
  },
  {
    cover:
      "https://books.google.com/books/content?id=y4ECx94VRJYC&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api",
    author: "Leo Tolstoy",
    genre: "Adultery",
    pageCount: "882 pages",
  },
];

console.log("script");
let currentBook = 0;

function loading(element) {
  var loading = document.createElement("img");
  loading.src = "loading.gif";
  loading.classList.add("loading");
  loading.alt = "loading";
  element.appendChild(loading);
}

function loadCover(url, container) {
    container.innerHTML = "";
  var img = new Image();
  loading(container);
  img.classList.add("cover");
  img.onload = function () {
    container.innerHTML = "";
    container.appendChild(img);
  };
  img.src = url;
}

function renderBook(index) {
  const curr = books[index];
  var cover = document.getElementById("imgContainer");
  loadCover(curr.cover, cover);
  document.getElementById("author").textContent = curr.author;
  document.getElementById("genre").textContent = curr.genre;
  document.getElementById("pageCount").textContent = curr.pageCount;
}

document.getElementById("next").addEventListener("click", () => {
  currentBook = (currentBook + 1) % books.length;
  renderBook(currentBook);
});

document.getElementById("prev").addEventListener("click", () => {
  currentBook = (currentBook - 1 + books.length) % books.length;
  renderBook(currentBook);
});

renderBook(currentBook);
