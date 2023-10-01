
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const searchResults = document.getElementById("search-results");

searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value.trim();

    searchResults.innerHTML = "";

    if (searchTerm !== "") {
        const resultDiv = document.createElement("div");
        resultDiv.textContent = "Search results for: " + searchTerm;
        searchResults.appendChild(resultDiv);
    } else {
        searchResults.textContent = "Please enter a search term.";
    }
});



// javascript for comment section
const commentInput = document.getElementById("comment-input");
const addCommentButton = document.getElementById("add-comment-button");
const commentsList = document.getElementById("comments-list");

function addTemporaryComment() {
    const commentText = commentInput.value;

    if (commentText.trim() === "") {
        alert("Please enter a comment.");
        return;
    }

    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.textContent = commentText;

    commentsList.appendChild(commentElement);

    commentInput.value = "";

    setTimeout(() => {
        commentElement.remove();
    }, 5000);
}

addCommentButton.addEventListener("click", addTemporaryComment);

addCommentButton.addEventListener("mousedown", () => {
    commentInput.disabled = true;
    setTimeout(() => {
        commentInput.disabled = false;
    }, 3000);
});
