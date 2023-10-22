
const apiUrl = 'http://localhost:3000';
const notesApiUrl = `${apiUrl}/notes`;

const notesForm = document.getElementById ("notes-tab");
const questionsForm = document.getElementById ("questions-tab");
const notesTab = document.getElementById ("notesTab");
const questionsTab = document.getElementById ("questionTab");

// Add event listeners to the tab buttons
notesTab.addEventListener("click", () => {
    notesForm.style.display = "block";
    questionsForm.style.display = "none";
    notesTab.classList.add("active-tab");
    questionsTab.classList.remove("active-tab");
});

questionsTab.addEventListener("click", () => {
    notesForm.style.display = "none";
    questionsForm.style.display = "block";
    notesTab.classList.remove("active-tab");
    questionsTab.classList.add("active-tab");
});

// Initially, show the notes tab and make it active
notesForm.style.display = "block";
notesTab.classList.add("active-tab");

document.addEventListener('DOMContentLoaded', () => {
    const notesList = document.getElementById('notes');
  
    // Function to create a new note item and add it to the list
    function addNoteToList(note) {
      const li = document.createElement('li');
      li.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.content}</p>
      `;
  
      notesList.appendChild(li);
    }
    // Simulate fetching notes from the backend and adding them to the list
    function fetchNotesFromBackend() {
        fetch(notesApiUrl)
          .then(response => response.json())
          .then(notes => {
            notes.forEach(note => addNoteToList(note));
          })
          .catch(error => {
            console.error('Error fetching notes:', error);
          });
      }

// Function to create a new note item and add it to the list
function addNoteToList(note) {
  const li = document.createElement('li');
  li.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.content}</p>
  `;
  
  notesList.appendChild(li);
}

// Function to fetch and display notes from the backend
function fetchNotesFromBackend() {
  fetch(notesApiUrl)
    .then(response => response.json())
    .then(notes => {
      notes.forEach(note => addNoteToList(note));
    })
    .catch(error => {
      console.error('Error fetching notes:', error);
    });
}

// Call the fetchNotesFromBackend function when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const notesList = document.getElementById('notes');
  
  // Initially, show the notes tab
  notesForm.style.display = 'block';
  questionsForm.style.display = 'none';
  notesTab.classList.add('active-tab');
  questionsTab.classList.remove('active-tab');

  // Fetch and display notes
  fetchNotesFromBackend();
});})