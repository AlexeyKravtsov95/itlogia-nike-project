import '../css/style.css';

const container = document.getElementById('size-selector');
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-button');
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
const isFavorite = true;
const firstShoe = document.getElementById('first-shoe');
const secondShoe = document.getElementById('second-shoe');

const sizes = [
    { label: "EU 33", available: true },
    { label: "EU 33.5", available: false },
    { label: "EU 34", available: false },
    { label: "EU 34.5", available: false },
    { label: "EU 35", available: true },
    { label: "EU 35.5", available: true },
    { label: "EU 36", available: true },
    { label: "EU 36.5", available: false },
    { label: "EU 37", available: true },
    { label: "EU 37.5", available: false },
    { label: "EU 38", available: true },
    { label: "EU 38.5", available: false },
    { label: "EU 39", available: true },
    { label: "EU 39.5", available: false },
    { label: "EU 40", available: true },
];

sizes.forEach(size => {
    const btn = document.createElement("button");
    btn.textContent = size.label;

    btn.className = "py-3 rounded-sm text-xs font-medium border border-(--border-size-btn)";

    if (size.available) {
        btn.classList.add("hover:border-black");
    } else {
        btn.classList.add("bg-neutral-100", "text-(--border-size-btn)", "cursor-not-allowed");
    }

    container.appendChild(btn);
})

openBtn.addEventListener('click', (event) => {
    overlay.classList.remove("hidden");
    sidebar.classList.remove("hidden");
})

closeBtn.addEventListener('click', (event) => {
    overlay.classList.add("hidden");
    sidebar.classList.add("hidden");
});

window.addEventListener('DOMContentLoaded', () => {
    const favoriteIcon = document.getElementById('favorite');
    if(isFavorite) {
        favoriteIcon.classList.add('fill-black');
    }
})

firstShoe.addEventListener('click', (event) => {
    secondShoe.classList.remove('border', 'border-rounded')
    firstShoe.classList.add('border', 'border-rounded')

})

secondShoe.addEventListener('click', (event) => {
    firstShoe.classList.remove('border', 'border-rounded')
    secondShoe.classList.add('border', 'border-rounded')
})

