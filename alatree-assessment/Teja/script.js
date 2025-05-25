const stories = [
  { title: "The Enchanted Forest", author: "Luna Silver", genre: "Fantasy", length: "Medium", image: "https://foodtank.com/wp-content/uploads/2015/09/agroforestry-FAO.jpg" },
  { title: "Lost in Time", author: "Ethan Ray", genre: "Sci-Fi", length: "Long", image: "https://www.wikihow.com/images/thumb/5/52/Tell-Time-Step-13-Version-2.jpg/v4-460px-Tell-Time-Step-13-Version-2.jpg" },
  { title: "Whispers in the Dark", author: "Mira Voss", genre: "Mystery", length: "Short", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORLhFbETI1hydJ_4lndK9xXxDeR7MZdWzDw&s" },
  { title: "Hearts Entwined", author: "Lily Dawn", genre: "Romance", length: "Medium", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZkWaFeV9YUEnQeE9cJy5yhyhcSvMM4FBYfHwlhjFjj3jQ2NDREYBx9c_U4AdxcPDKiw&usqp=CAU" },
  { title: "Chronicles of the Unknown", author: "Arin Blake", genre: "Sci-Fi", length: "Long", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIKBEccPSpDA8nXOC--Vmj-u7709JQ-ut2w&s" },
];

const grid = document.getElementById('storyGrid');
const genreFilter = document.getElementById('genreFilter');
const lengthFilter = document.getElementById('lengthFilter');

function displayStories() {
  grid.innerHTML = '';
  const genre = genreFilter.value;
  const length = lengthFilter.value;
  const filtered = stories.filter(story => {
    return (genre === '' || story.genre === genre) &&
           (length === '' || story.length === length);
  });

  filtered.forEach(story => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${story.image}" alt="${story.title}">
      <div class="card-content">
        <h3>${story.title}</h3>
        <p>by ${story.author}</p>
        <p><strong>${story.genre}</strong> | ${story.length}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

genreFilter.addEventListener('change', displayStories);
lengthFilter.addEventListener('change', displayStories);

displayStories();
