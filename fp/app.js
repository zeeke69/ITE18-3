const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = themeToggleBtn.querySelector('.theme-icon');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
	body.classList.add('dark-mode');
	themeIcon.textContent = '☀️';
} else {
	body.classList.remove('dark-mode');
	themeIcon.textContent = '🌙';
}

// Theme toggle event listener
themeToggleBtn.addEventListener('click', () => {
	body.classList.toggle('dark-mode');
	
	if (body.classList.contains('dark-mode')) {
		localStorage.setItem('theme', 'dark');
		themeIcon.textContent = '☀️';
	} else {
		localStorage.setItem('theme', 'light');
		themeIcon.textContent = '🌙';
	}
});

// Update header background on scroll (handles both light and dark mode)
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		if (body.classList.contains('dark-mode')) {
			header.style.backgroundColor = '#1a1a1a';
		} else {
			header.style.backgroundColor = '#29323c';
		}
	} else {
		if (body.classList.contains('dark-mode')) {
			header.style.backgroundColor = 'rgba(31, 30, 30, 0.9)';
		} else {
			header.style.backgroundColor = 'transparent';
		}
	}
});

// Editable Project Content Functionality
const editableTitles = document.querySelectorAll('.editable-title');
const editableDescriptions = document.querySelectorAll('.editable-description');

// Load saved project content from localStorage
editableTitles.forEach((title, index) => {
	const savedTitle = localStorage.getItem(`project-title-${index}`);
	if (savedTitle) {
		title.textContent = savedTitle;
	}
	
	title.addEventListener('blur', () => {
		localStorage.setItem(`project-title-${index}`, title.textContent);
	});
});

editableDescriptions.forEach((description, index) => {
	const savedDescription = localStorage.getItem(`project-description-${index}`);
	if (savedDescription) {
		description.textContent = savedDescription;
	}
	
	description.addEventListener('blur', () => {
		localStorage.setItem(`project-description-${index}`, description.textContent);
	});
});