// Mock data for trainers
const trainers = [
    { name: 'John Doe', specialty: 'Weight Training', location: 'New York' },
    { name: 'Jane Smith', specialty: 'Yoga', location: 'Los Angeles' },
    { name: 'Mike Johnson', specialty: 'HIIT', location: 'Chicago' },
    { name: 'Londo Christopher', specialty: 'Bodybuilding', contact: 'Instagram: @perkzofwerk', location: 'Thousand Oaks' }
];

// Search function
function searchTrainers() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const results = trainers.filter(trainer =>
        trainer.name.toLowerCase().includes(input) ||
        trainer.specialty.toLowerCase().includes(input) ||
        trainer.location.toLowerCase().includes(input)
    );

    displayTrainers(results);
}

// Display trainers with profile image
function displayTrainers(trainers) {
    const trainerResults = document.getElementById('trainerResults');
    trainerResults.innerHTML = '';

    if (trainers.length === 0) {
        trainerResults.innerHTML = '<p>No trainers found.</p>';
        return;
    }

    trainers.forEach(trainer => {
        const trainerCard = document.createElement('div');
        trainerCard.classList.add('trainer-card');
        trainerCard.innerHTML = `
        <h3>${trainer.name}</h3>
        <p>Specialty: ${trainer.specialty}</p>
        <p>Location: ${trainer.location}</p>
        <p>Social Media: ${trainer.social}</p>
      `;
        trainerResults.appendChild(trainerCard);
    });
}


// Form submission for trainers
document.getElementById('trainerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const specialty = document.getElementById('specialty').value;
    const location = document.getElementById('location').value;

    trainers.push({ name, specialty, location });

    document.getElementById('formMessage').innerText = 'Trainer registered successfully!';

    // Clear the form
    document.getElementById('trainerForm').reset();
});
