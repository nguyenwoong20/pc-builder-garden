
import React, { useEffect, useRef } from 'react';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject the HTML content into the container
    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>PC Builder</title>
            <style>
                /* Reset and base styles */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
                    transition: all 0.3s ease;
                }
                
                body {
                    background-color: #f9f9f9;
                    color: #333;
                    line-height: 1.6;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                
                /* Header styles */
                header {
                    background-color: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    backdrop-filter: blur(10px);
                }
                
                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 0;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    font-weight: bold;
                    font-size: 1.5rem;
                    color: #3370ff;
                }
                
                .logo-icon {
                    margin-right: 10px;
                    font-size: 1.8rem;
                }
                
                .nav-links {
                    display: flex;
                    gap: 25px;
                }
                
                .nav-links a {
                    color: #333;
                    text-decoration: none;
                    font-weight: 500;
                }
                
                .nav-links a:hover {
                    color: #3370ff;
                }
                
                .cta-button {
                    background-color: #3370ff;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                }
                
                .cta-button:hover {
                    background-color: #2860e6;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(51, 112, 255, 0.2);
                }
                
                .cta-button:active {
                    transform: translateY(0);
                }
                
                .menu-toggle {
                    display: none;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
                
                /* Hero section */
                .hero {
                    background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
                    background-size: cover;
                    background-position: center;
                    padding: 80px 0;
                    text-align: center;
                }
                
                .hero h1 {
                    font-size: 3rem;
                    margin-bottom: 20px;
                    background: linear-gradient(to right, #3370ff, #5e90ff);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    display: inline-block;
                }
                
                .hero p {
                    font-size: 1.2rem;
                    color: #666;
                    max-width: 600px;
                    margin: 0 auto 30px;
                }
                
                /* Component selection section */
                .components-section {
                    padding: 60px 0;
                }
                
                .section-title {
                    text-align: center;
                    margin-bottom: 40px;
                }
                
                .section-title h2 {
                    font-size: 2.5rem;
                    margin-bottom: 15px;
                }
                
                .section-title p {
                    color: #666;
                    max-width: 600px;
                    margin: 0 auto;
                }
                
                .component-selector {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 30px;
                    flex-wrap: wrap;
                    gap: 15px;
                }
                
                .component-type {
                    padding: 12px 24px;
                    background-color: white;
                    border-radius: 8px;
                    cursor: pointer;
                    border: 1px solid #eaeaea;
                    font-weight: 500;
                }
                
                .component-type:hover {
                    border-color: #3370ff;
                    color: #3370ff;
                }
                
                .component-type.active {
                    background-color: #3370ff;
                    color: white;
                    border-color: #3370ff;
                }
                
                .component-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 20px;
                    margin-top: 30px;
                }
                
                .component-card {
                    background-color: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                    cursor: pointer;
                }
                
                .component-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                }
                
                .card-image {
                    height: 180px;
                    width: 100%;
                    object-fit: contain;
                    background-color: #f5f7ff;
                    padding: 20px;
                }
                
                .card-content {
                    padding: 20px;
                }
                
                .card-title {
                    font-weight: 600;
                    font-size: 1.1rem;
                    margin-bottom: 8px;
                }
                
                .card-specs {
                    color: #666;
                    font-size: 0.9rem;
                    margin-bottom: 15px;
                }
                
                .card-price {
                    font-weight: 700;
                    color: #3370ff;
                    font-size: 1.2rem;
                    margin-bottom: 15px;
                }
                
                .card-action {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .add-button {
                    background-color: #f0f5ff;
                    color: #3370ff;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 6px;
                    font-weight: 600;
                    cursor: pointer;
                }
                
                .add-button:hover {
                    background-color: #3370ff;
                    color: white;
                }
                
                /* Build summary */
                .build-summary {
                    background-color: white;
                    border-radius: 12px;
                    padding: 30px;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
                    margin-top: 50px;
                }
                
                .summary-title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                }
                
                .summary-title h3 {
                    font-size: 1.5rem;
                }
                
                .total-price {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #3370ff;
                }
                
                .selected-components {
                    border-top: 1px solid #eaeaea;
                    padding-top: 20px;
                }
                
                .selected-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 0;
                    border-bottom: 1px solid #f5f5f5;
                }
                
                .selected-item-info {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                
                .selected-item-image {
                    width: 50px;
                    height: 50px;
                    object-fit: contain;
                    background-color: #f5f7ff;
                    border-radius: 6px;
                    padding: 5px;
                }
                
                .selected-item-name {
                    font-weight: 500;
                }
                
                .selected-item-price {
                    font-weight: 600;
                }
                
                .remove-button {
                    background: none;
                    border: none;
                    color: #ff4d4f;
                    cursor: pointer;
                    font-size: 1.2rem;
                }
                
                .checkout-button {
                    background-color: #3370ff;
                    color: white;
                    border: none;
                    padding: 14px 28px;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 1.1rem;
                    cursor: pointer;
                    width: 100%;
                    margin-top: 30px;
                }
                
                .checkout-button:hover {
                    background-color: #2860e6;
                }
                
                /* Footer */
                footer {
                    background-color: #1a1a1a;
                    color: #fff;
                    padding: 60px 0 30px;
                    margin-top: 80px;
                }
                
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 40px;
                    margin-bottom: 40px;
                }
                
                .footer-column h4 {
                    font-size: 1.2rem;
                    margin-bottom: 20px;
                    color: #fff;
                }
                
                .footer-column ul {
                    list-style: none;
                }
                
                .footer-column ul li {
                    margin-bottom: 12px;
                }
                
                .footer-column ul li a {
                    color: #aaa;
                    text-decoration: none;
                }
                
                .footer-column ul li a:hover {
                    color: #3370ff;
                }
                
                .footer-bottom {
                    text-align: center;
                    padding-top: 30px;
                    border-top: 1px solid #333;
                    color: #888;
                    font-size: 0.9rem;
                }
                
                /* Responsive styles */
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                
                    .menu-toggle {
                        display: block;
                    }
                
                    .hero h1 {
                        font-size: 2.2rem;
                    }
                
                    .section-title h2 {
                        font-size: 2rem;
                    }
                
                    .mobile-menu {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background-color: white;
                        padding: 20px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                        transform: translateY(-100%);
                        opacity: 0;
                        pointer-events: none;
                    }
                
                    .mobile-menu.active {
                        transform: translateY(0);
                        opacity: 1;
                        pointer-events: auto;
                    }
                
                    .mobile-menu a {
                        color: #333;
                        text-decoration: none;
                        font-weight: 500;
                        padding: 12px;
                        border-radius: 8px;
                    }
                
                    .mobile-menu a:hover {
                        background-color: #f5f5f5;
                    }
                }
                
                @media (max-width: 480px) {
                    .component-selector {
                        flex-direction: column;
                        width: 100%;
                    }
                
                    .component-type {
                        width: 100%;
                        text-align: center;
                    }
                }
            </style>
        </head>
        <body>
            <header>
                <div class="container">
                    <nav class="navbar">
                        <a href="#" class="logo">
                            <span class="logo-icon">🖥️</span>
                            PC Builder
                        </a>
                        <div class="nav-links">
                            <a href="#">Home</a>
                            <a href="#">Components</a>
                            <a href="#">Builds</a>
                            <a href="#">About</a>
                            <button class="cta-button">Start Building</button>
                        </div>
                        <button class="menu-toggle">☰</button>
                    </nav>
                </div>
                <div class="mobile-menu">
                    <a href="#">Home</a>
                    <a href="#">Components</a>
                    <a href="#">Builds</a>
                    <a href="#">About</a>
                    <button class="cta-button">Start Building</button>
                </div>
            </header>

            <section class="hero">
                <div class="container">
                    <h1>Build Your Dream PC</h1>
                    <p>Create a custom PC that perfectly matches your needs with our easy-to-use PC builder tool.</p>
                    <button class="cta-button">Start Building Now</button>
                </div>
            </section>

            <section class="components-section">
                <div class="container">
                    <div class="section-title">
                        <h2>Select Your Components</h2>
                        <p>Choose high-quality components that fit your budget and performance needs.</p>
                    </div>

                    <div class="component-selector">
                        <button class="component-type active" data-type="cpu">CPU</button>
                        <button class="component-type" data-type="gpu">GPU</button>
                        <button class="component-type" data-type="motherboard">Motherboard</button>
                        <button class="component-type" data-type="ram">RAM</button>
                        <button class="component-type" data-type="storage">Storage</button>
                        <button class="component-type" data-type="psu">Power Supply</button>
                        <button class="component-type" data-type="case">Case</button>
                        <button class="component-type" data-type="cooling">Cooling</button>
                    </div>

                    <div class="component-cards">
                        <!-- CPU Cards -->
                        <div class="component-card" data-component="cpu" data-id="cpu1">
                            <img src="https://m.media-amazon.com/images/I/61twhaihHxL._AC_SL1500_.jpg" alt="CPU" class="card-image">
                            <div class="card-content">
                                <h3 class="card-title">Intel Core i7-12700K</h3>
                                <p class="card-specs">12 Cores, 20 Threads, Up to 5.0 GHz</p>
                                <p class="card-price">$379.99</p>
                                <div class="card-action">
                                    <span>Socket: LGA1700</span>
                                    <button class="add-button" data-component="cpu" data-id="cpu1" data-price="379.99" data-name="Intel Core i7-12700K">Add</button>
                                </div>
                            </div>
                        </div>
                        <div class="component-card" data-component="cpu" data-id="cpu2">
                            <img src="https://m.media-amazon.com/images/I/61IIbwz-+ML._AC_SL1500_.jpg" alt="CPU" class="card-image">
                            <div class="card-content">
                                <h3 class="card-title">AMD Ryzen 7 5800X</h3>
                                <p class="card-specs">8 Cores, 16 Threads, Up to 4.7 GHz</p>
                                <p class="card-price">$299.99</p>
                                <div class="card-action">
                                    <span>Socket: AM4</span>
                                    <button class="add-button" data-component="cpu" data-id="cpu2" data-price="299.99" data-name="AMD Ryzen 7 5800X">Add</button>
                                </div>
                            </div>
                        </div>
                        <div class="component-card" data-component="cpu" data-id="cpu3">
                            <img src="https://m.media-amazon.com/images/I/51Dx39HJ9qL._AC_SL1000_.jpg" alt="CPU" class="card-image">
                            <div class="card-content">
                                <h3 class="card-title">Intel Core i9-13900K</h3>
                                <p class="card-specs">24 Cores, 32 Threads, Up to 5.8 GHz</p>
                                <p class="card-price">$549.99</p>
                                <div class="card-action">
                                    <span>Socket: LGA1700</span>
                                    <button class="add-button" data-component="cpu" data-id="cpu3" data-price="549.99" data-name="Intel Core i9-13900K">Add</button>
                                </div>
                            </div>
                        </div>

                        <!-- GPU Cards (hidden by default) -->
                        <div class="component-card" data-component="gpu" data-id="gpu1" style="display: none;">
                            <img src="https://m.media-amazon.com/images/I/81U5H5c0jyL._AC_SL1500_.jpg" alt="GPU" class="card-image">
                            <div class="card-content">
                                <h3 class="card-title">NVIDIA RTX 3080</h3>
                                <p class="card-specs">10GB GDDR6X, 8704 CUDA Cores</p>
                                <p class="card-price">$699.99</p>
                                <div class="card-action">
                                    <span>PCIe 4.0</span>
                                    <button class="add-button" data-component="gpu" data-id="gpu1" data-price="699.99" data-name="NVIDIA RTX 3080">Add</button>
                                </div>
                            </div>
                        </div>
                        <div class="component-card" data-component="gpu" data-id="gpu2" style="display: none;">
                            <img src="https://m.media-amazon.com/images/I/81oEEQV+jZL._AC_SL1500_.jpg" alt="GPU" class="card-image">
                            <div class="card-content">
                                <h3 class="card-title">AMD Radeon RX 6800 XT</h3>
                                <p class="card-specs">16GB GDDR6, 4608 Stream Processors</p>
                                <p class="card-price">$579.99</p>
                                <div class="card-action">
                                    <span>PCIe 4.0</span>
                                    <button class="add-button" data-component="gpu" data-id="gpu2" data-price="579.99" data-name="AMD Radeon RX 6800 XT">Add</button>
                                </div>
                            </div>
                        </div>

                        <!-- Motherboard Cards (hidden by default) -->
                        <div class="component-card" data-component="motherboard" data-id="mobo1" style="display: none;">
                            <img src="https://m.media-amazon.com/images/I/91DmGbvW+GL._AC_SL1500_.jpg" alt="Motherboard" class="card-image">
                            <div class="card-content">
                                <h3 class="card-title">ASUS ROG Strix Z690-E</h3>
                                <p class="card-specs">Intel Z690, DDR5, PCIe 5.0</p>
                                <p class="card-price">$469.99</p>
                                <div class="card-action">
                                    <span>Socket: LGA1700</span>
                                    <button class="add-button" data-component="motherboard" data-id="mobo1" data-price="469.99" data-name="ASUS ROG Strix Z690-E">Add</button>
                                </div>
                            </div>
                        </div>
                        <div class="component-card" data-component="motherboard" data-id="mobo2" style="display: none;">
                            <img src="https://m.media-amazon.com/images/I/91+3IlJLqRL._AC_SL1500_.jpg" alt="Motherboard" class="card-image">
                            <div class="card-content">
                                <h3 class="card-title">MSI MAG B550 Tomahawk</h3>
                                <p class="card-specs">AMD B550, DDR4, PCIe 4.0</p>
                                <p class="card-price">$179.99</p>
                                <div class="card-action">
                                    <span>Socket: AM4</span>
                                    <button class="add-button" data-component="motherboard" data-id="mobo2" data-price="179.99" data-name="MSI MAG B550 Tomahawk">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="build-summary">
                        <div class="summary-title">
                            <h3>Your PC Build</h3>
                            <span class="total-price" id="total-price">$0.00</span>
                        </div>
                        <div class="selected-components" id="selected-components">
                            <!-- Selected components will be added here dynamically -->
                            <div class="empty-build" id="empty-build">
                                <p style="text-align: center; padding: 20px 0;">Your build is empty. Start adding components!</p>
                            </div>
                        </div>
                        <button class="checkout-button">Complete Your Build</button>
                    </div>
                </div>
            </section>

            <footer>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-column">
                            <h4>PC Builder</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Building Guides</a></li>
                                <li><a href="#">Component Guides</a></li>
                                <li><a href="#">PC Building Tips</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h4>Customer Support</h4>
                            <ul>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">Returns & Refunds</a></li>
                                <li><a href="#">Warranty Info</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h4>Connect With Us</h4>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2023 PC Builder. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            <script>
                // Mobile menu toggle
                const menuToggle = document.querySelector('.menu-toggle');
                const mobileMenu = document.querySelector('.mobile-menu');
                
                menuToggle.addEventListener('click', () => {
                    mobileMenu.classList.toggle('active');
                });
                
                // Component type selector
                const componentTypes = document.querySelectorAll('.component-type');
                const componentCards = document.querySelectorAll('.component-card');
                
                componentTypes.forEach(button => {
                    button.addEventListener('click', () => {
                        // Remove active class from all buttons
                        componentTypes.forEach(btn => btn.classList.remove('active'));
                        
                        // Add active class to clicked button
                        button.classList.add('active');
                        
                        // Show only cards of selected component type
                        const selectedType = button.getAttribute('data-type');
                        
                        componentCards.forEach(card => {
                            if (card.getAttribute('data-component') === selectedType) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                        });
                    });
                });
                
                // Build management
                const addButtons = document.querySelectorAll('.add-button');
                const selectedComponentsContainer = document.getElementById('selected-components');
                const emptyBuild = document.getElementById('empty-build');
                const totalPriceElement = document.getElementById('total-price');
                
                let selectedComponents = {};
                let totalPrice = 0;
                
                // Function to update the build summary
                function updateBuildSummary() {
                    // Clear the container
                    selectedComponentsContainer.innerHTML = '';
                    
                    // Check if build is empty
                    if (Object.keys(selectedComponents).length === 0) {
                        selectedComponentsContainer.appendChild(emptyBuild);
                        totalPriceElement.textContent = '$0.00';
                        return;
                    }
                    
                    // Add each selected component to the summary
                    for (const type in selectedComponents) {
                        const component = selectedComponents[type];
                        
                        const selectedItem = document.createElement('div');
                        selectedItem.className = 'selected-item';
                        selectedItem.innerHTML = \`
                            <div class="selected-item-info">
                                <img src="https://via.placeholder.com/50" class="selected-item-image">
                                <div>
                                    <div class="selected-item-name">\${component.name}</div>
                                    <div class="selected-item-type">\${type.toUpperCase()}</div>
                                </div>
                            </div>
                            <div class="selected-item-price">$\${component.price}</div>
                            <button class="remove-button" data-component="\${type}">×</button>
                        \`;
                        
                        selectedComponentsContainer.appendChild(selectedItem);
                    }
                    
                    // Add event listeners to remove buttons
                    const removeButtons = document.querySelectorAll('.remove-button');
                    removeButtons.forEach(button => {
                        button.addEventListener('click', () => {
                            const componentType = button.getAttribute('data-component');
                            
                            // Subtract price
                            totalPrice -= selectedComponents[componentType].price;
                            
                            // Remove component
                            delete selectedComponents[componentType];
                            
                            // Update the summary
                            updateBuildSummary();
                            updateTotalPrice();
                        });
                    });
                }
                
                // Function to update the total price
                function updateTotalPrice() {
                    totalPriceElement.textContent = '$' + totalPrice.toFixed(2);
                }
                
                // Add event listeners to "Add" buttons
                addButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const componentType = button.getAttribute('data-component');
                        const componentId = button.getAttribute('data-id');
                        const componentName = button.getAttribute('data-name');
                        const componentPrice = parseFloat(button.getAttribute('data-price'));
                        
                        // If we already have a component of this type, subtract its price
                        if (selectedComponents[componentType]) {
                            totalPrice -= selectedComponents[componentType].price;
                        }
                        
                        // Add the new component
                        selectedComponents[componentType] = {
                            id: componentId,
                            name: componentName,
                            price: componentPrice
                        };
                        
                        // Add the price
                        totalPrice += componentPrice;
                        
                        // Update the UI
                        updateBuildSummary();
                        updateTotalPrice();
                    });
                });
            </script>
        </body>
        </html>
      `;

      // Initialize the embedded HTML/JS
      const script = document.createElement('script');
      script.textContent = `
        // This script is needed to initialize any JavaScript in the embedded HTML
        // It can be empty since the embedded HTML already contains all the necessary JavaScript
      `;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="pc-builder-container w-full min-h-screen"
    />
  );
};

export default Index;
