const cities = [
  { name: 'Paris', description: 'City of lights and love. Famous for its historic architecture, fashion, and cuisine.', travelTime: '2 hours from London by Eurostar', stay: '3-5 days' },
  { name: 'Tokyo', description: 'A bustling city blending traditional temples with futuristic architecture.', travelTime: '12 hours from New York', stay: '5-7 days' },
  { name: 'New York', description: 'The city that never sleeps, famous for its skyline, Broadway, and cultural diversity.', travelTime: '7 hours from London', stay: '4-6 days' },
  { name: 'Sydney', description: 'Home to iconic landmarks like the Sydney Opera House and Bondi Beach.', travelTime: '14 hours from Los Angeles', stay: '5-7 days' },
  { name: 'Rio de Janeiro', description: 'Famous for its beaches, Carnaval, and the Christ the Redeemer statue.', travelTime: '10 hours from New York', stay: '4-6 days' }
];

const cityList = document.getElementById('city-list');
const travelPlan = document.getElementById('travel-plan');
const editButton = document.getElementById('edit-btn');
let isEditing = false; // Track the edit mode

// Add cities to the plan
cityList.addEventListener('click', function(event) {
  if (event.target.classList.contains('add-btn')) {
    const cityIndex = event.target.getAttribute('data-index');
    const city = cities[cityIndex];

    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'bg-dark', 'text-light', 'd-flex', 'justify-content-between');
    listItem.innerHTML = `
      <span>${city.name} - ${city.description} (Travel Time: ${city.travelTime}, Stay: ${city.stay})</span>
      <span>
        <button class="btn btn-success btn-sm confirm-btn" disabled>Confirm</button>
        <button class="btn btn-danger btn-sm delete-btn" disabled>Delete</button>
      </span>
    `;
    travelPlan.appendChild(listItem);

    // Show the edit button when cities are added
    editButton.classList.remove('d-none');
  }
});

// Handle plan editing (delete/confirm actions)
travelPlan.addEventListener('click', function(event) {
  const target = event.target;
  const listItem = target.closest('li');

  if (!isEditing) return; // Prevent actions unless editing mode is active

  if (target.classList.contains('delete-btn')) {
    listItem.remove(); // Remove city from plan
  } else if (target.classList.contains('confirm-btn')) {
    // Confirm city and disable buttons
    listItem.querySelector('.confirm-btn').remove();
    listItem.querySelector('.delete-btn').remove();
    listItem.innerHTML = `<span>${listItem.textContent}</span> <span class="badge bg-success">Confirmed</span>`;
  }

  // If confirmed item is clicked while editing, enable confirm and delete buttons again
  if (target.classList.contains('badge') && target.classList.contains('bg-success')) {
    // Get the original text before confirming
    const originalText = target.previousElementSibling.textContent.replace("Confirmed", "").trim();
    listItem.innerHTML = `
      <span>${originalText}</span>
      <span>
        <button class="btn btn-success btn-sm confirm-btn" disabled>Confirm</button>
        <button class="btn btn-danger btn-sm delete-btn" disabled>Delete</button>
      </span>
    `;
  }

  // Hide the edit button if no cities are left in the plan
  if (!travelPlan.querySelector('li')) {
    editButton.classList.add('d-none');
  }
});

// Edit button functionality (to enable confirm/delete actions)
editButton.addEventListener('click', function() {
  isEditing = !isEditing; // Toggle editing mode

  // Enable or disable buttons based on editing mode
  const confirmButtons = travelPlan.querySelectorAll('.confirm-btn');
  const deleteButtons = travelPlan.querySelectorAll('.delete-btn');

  confirmButtons.forEach(button => button.disabled = !isEditing);
  deleteButtons.forEach(button => button.disabled = !isEditing);
  
  // Update the edit button text based on the mode
  editButton.textContent = isEditing ? 'Done Editing' : 'Edit Plan';
});
