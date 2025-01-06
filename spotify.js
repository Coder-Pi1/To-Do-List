
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('hidden');
    const mainContent = document.querySelector('.main-content');
    mainContent.style.marginLeft = sidebar.classList.contains('hidden') ? '0' : '250px';
}

function expandCard(title, imgUrl, description) {
const expandedCard = document.getElementById('expanded-card');
const expandedImg = document.getElementById('expanded-img');
const expandedTitle = document.getElementById('expanded-title');
const expandedDescription = document.getElementById('expanded-description');

// Set the content of the expanded card
expandedImg.src = imgUrl;
expandedTitle.textContent = title;
expandedDescription.textContent = description;

// Show the expanded card with an animation
expandedCard.classList.add('show');
}


function closeCard() {
    const expandedCard = document.getElementById('expanded-card');
    expandedCard.classList.remove('show');
}