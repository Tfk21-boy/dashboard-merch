// ===== PRODUCT DATA =====
// Array of K-pop albums and merchandise with complete details
const products = [
    {
        id: 1,
        name: "BORN PINK - Limited Edition",
        group: "BLACKPINK",
        category: "album",
        price: 34.99,
        description: "Limited edition album includes exclusive photobook, CD, poster, and random photocard. Features hit tracks 'Pink Venom' and 'Shut Down'.",
        icon: "fas fa-compact-disc",
        image: "img/bp1.jpg"
    },
    {
        id: 2,
        name: "Proof - Collector's Edition",
        group: "BTS",
        category: "album",
        price: 49.99,
        description: "Complete anthology album celebrating 9 years of BTS. Includes 3 CDs with 48 tracks, special photobook, and exclusive ARMY merchandise.",
        icon: "fas fa-record-vinyl",
        image: "img/bts1.jpg"
    },
    {
        id: 3,
        name: "Official Light Stick V3",
        group: "BTS",
        category: "merch",
        price: 64.99,
        description: "Latest version of the ARMY Bomb with Bluetooth connectivity and customizable colors. Perfect for concerts and fan meetings.",
        icon: "fas fa-magic",
        image: "img/bts2.jpg"
    },
    {
        id: 4,
        name: "FML - Season's Greetings",
        group: "SEVENTEEN",
        category: "merch",
        price: 55.50,
        description: "2024 Season's Greetings package includes calendar, planner, photobook, DVD, and exclusive photocards. Limited stock available.",
        icon: "fas fa-calendar-star",
        image: "img/svt1.jpg"
    },
    {
        id: 5,
        name: "I've IVE - Signed Version",
        group: "IVE",
        category: "album",
        price: 89.99,
        description: "Hand-signed album by IVE members. Includes CD, lyric booklet, poster, and 2 random photocards. Very limited quantity!",
        icon: "fas fa-compact-disc",
        image: "img/ive1.jpg"
    },
    {
        id: 6,
        name: "Official World Tour Hoodie",
        group: "BLACKPINK",
        category: "merch",
        price: 79.99,
        description: "Premium quality hoodie with official Born Pink World Tour embroidery. Available in sizes S-XXL. 100% cotton.",
        icon: "fas fa-tshirt",
        image: "img/bp2.webp"
    },
    {
        id: 7,
        name: "2 Baddies - Neo Version",
        group: "NCT 127",
        category: "album",
        price: 28.75,
        description: "Neo version of the 4th full album. Includes CD, photocard, poster, and sticker sheet. Features title track '2 Baddies'.",
        icon: "fas fa-music",
        image: "img/nct1.jpg"
    },
    {
        id: 8,
        name: "Photocard Set - Complete",
        group: "SEVENTEEN",
        category: "merch",
        price: 29.99,
        description: "Complete set of 13 member photocards from the latest comeback. High-quality prints with protective sleeves included.",
        icon: "fas fa-images",
        image: "img/svt2.jpg"
    },
    {
        id: 9,
        name: "Ready to Be - World Tour Edition",
        group: "TWICE",
        category: "album",
        price: 42.50,
        description: "Special world tour edition includes concert DVD, behind-the-scenes footage, and exclusive tour merchandise.",
        icon: "fas fa-compact-disc",
        image: "img/twc1.webp"
    },
    {
        id: 10,
        name: "Official Fanclub Kit",
        group: "Stray Kids",
        category: "merch",
        price: 75.00,
        description: "Annual STAY fanclub membership kit includes membership card, photobook, special gifts, and access to exclusive content.",
        icon: "fas fa-gift",
        image: "img/stz1.jpeg"
    },
    {
        id: 11,
        name: "Maxident - Digipack",
        group: "Stray Kids",
        category: "album",
        price: 22.99,
        description: "Compact digipack version with CD, mini photobook, and random photocard. Features title track 'Case 143'.",
        icon: "fas fa-compact-disc",
        image: "img/skz2.webp"
    },
    {
        id: 12,
        name: "Tour Exclusive T-Shirt",
        group: "TWICE",
        category: "merch",
        price: 39.99,
        description: "Official Ready to Be World Tour exclusive t-shirt. Available only during the tour dates. 100% organic cotton.",
        icon: "fas fa-tshirt",
        image: "img/twc2.webp"
    },
    {
        id: 13,
        name: "The World EP.2 : Outlaw",
        group: "ATEEZ",
        category: "album",
        price: 27.99,
        description: "Latest mini album from ATEEZ. Includes CD, photobook, lyric poster, and random photocard. Title track 'Bouncy'.",
        icon: "fas fa-record-vinyl",
        image: "img/atz1.jpg"
    },
    {
        id: 14,
        name: "Lightiny V2",
        group: "ATEEZ",
        category: "merch",
        price: 59.99,
        description: "Official ATEEZ light stick with 8 colors representing each member. Bluetooth enabled with mobile app control.",
        icon: "fas fa-lightbulb",
        image: "img/atz2.webp"
    },
    {
        id: 15,
        name: "Poster Set - Official",
        group: "NCT 127",
        category: "merch",
        price: 24.99,
        description: "Set of 5 high-quality posters featuring each unit: NCT 127, NCT Dream, WayV, and all members together.",
        icon: "fas fa-scroll",
        image: "img/nct2.webp"
    }
];

// ===== GLOBAL VARIABLES =====
let currentFilter = 'all';
let currentSearch = '';
let filteredProducts = [...products];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const productCount = document.getElementById('product-count');
const emptyState = document.getElementById('empty-state');
const productModal = document.getElementById('product-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalContent = document.getElementById('modal-content');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderProducts();
    setupEventListeners();
}

// ===== EVENT LISTENERS SETUP =====
function setupEventListeners() {
    // Search input event
    searchInput.addEventListener('input', handleSearch);
    
    // Filter button events
    filterButtons.forEach(button => {
        button.addEventListener('click', () => handleFilter(button));
    });
    
    // Modal events
    modalOverlay.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && productModal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ===== SEARCH HANDLER =====
function handleSearch(e) {
    currentSearch = e.target.value.toLowerCase().trim();
    filterProducts();
    renderProducts();
}

// ===== FILTER HANDLER =====
function handleFilter(button) {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Update current filter
    currentFilter = button.dataset.filter;
    filterProducts();
    renderProducts();
}

// ===== PRODUCT FILTERING LOGIC =====
function filterProducts() {
    filteredProducts = products.filter(product => {
        // Apply category filter
        const categoryMatch = currentFilter === 'all' || product.category === currentFilter;
        
        // Apply search filter
        const searchMatch = currentSearch === '' || 
            product.name.toLowerCase().includes(currentSearch) || 
            product.group.toLowerCase().includes(currentSearch);
        
        return categoryMatch && searchMatch;
    });
}

// ===== PRODUCT RENDERING =====
function renderProducts() {
    // Clear container
    productsContainer.innerHTML = '';
    
    // Update product count
    productCount.textContent = filteredProducts.length;
    
    // Show empty state if no products
    if (filteredProducts.length === 0) {
        emptyState.classList.add('active');
        return;
    }
    
    // Hide empty state
    emptyState.classList.remove('active');
    
    // Render each product card
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

// ===== CREATE PRODUCT CARD ELEMENT =====
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = `product-card ${product.category}`;
    card.dataset.id = product.id;
    
    // Create HTML structure for product card
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="category-badge">${product.category === 'album' ? 'Album' : 'Merch'}</div>
        </div>
        <div class="product-info">
            <div class="product-group">
                <i class="fas fa-users"></i> ${product.group}
            </div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
        </div>
    `;
    
    // Add click event to open modal
    card.addEventListener('click', () => openModal(product));
    
    return card;
}

// ===== MODAL FUNCTIONS =====
function openModal(product) {
    // Populate modal content
    modalContent.innerHTML = createModalContent(product);
    
    // Show modal with animation
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    
    // Optional: Add fade out animation
    setTimeout(() => {
        modalContent.innerHTML = '';
    }, 300);
}

function createModalContent(product) {
    return `
        <div class="modal-grid">
            <div class="modal-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-info">
                <div class="modal-category ${product.category}">
                    ${product.category === 'album' ? 'Album' : 'Merchandise'}
                </div>
                <h2>${product.name}</h2>
                <div class="modal-group">
                    <i class="fas fa-users"></i> ${product.group}
                </div>
                <p class="modal-description">${product.description}</p>
                <div class="modal-price">$${product.price.toFixed(2)}</div>
                
                <!-- Contact Section -->
                <div class="contact-section">
                    <h3 class="contact-title">Interested in this product? Contact us to purchase</h3>
                    <div class="contact-buttons">
                        <a href="https://wa.me/1234567890" target="_blank" class="contact-btn whatsapp">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </a>
                        <a href="https://instagram.com" target="_blank" class="contact-btn instagram">
                            <i class="fab fa-instagram"></i> Instagram
                        </a>
                        <a href="https://tiktok.com" target="_blank" class="contact-btn tiktok">
                            <i class="fab fa-tiktok"></i> TikTok
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ===== UTILITY FUNCTIONS =====
// Function to simulate loading (optional)
function simulateLoading() {
    productsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
            <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: var(--accent-color);"></i>
            <p style="margin-top: 1rem; color: var(--text-secondary);">Loading products...</p>
        </div>
    `;
    
    setTimeout(renderProducts, 500); // Simulate network delay
}

// Initial render with simulated loading
setTimeout(initializeApp, 300);