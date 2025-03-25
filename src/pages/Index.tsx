
import React, { useEffect, useRef } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
            <title>PC Market - Gaming Computers</title>
            <style>
                /* Reset and base styles */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Arial, sans-serif;
                }
                
                body {
                    background-color: #f5f5f5;
                    color: #333;
                    line-height: 1.6;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 15px;
                }
                
                a {
                    text-decoration: none;
                    color: inherit;
                }
                
                img {
                    max-width: 100%;
                }
                
                /* Header styles */
                header {
                    background-color: #fff;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    position: sticky;
                    top: 0;
                    z-index: 100;
                }
                
                .header-top {
                    background-color: #232F3E;
                    color: white;
                    padding: 8px 0;
                    font-size: 14px;
                }
                
                .header-top .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .contact-info {
                    display: flex;
                    gap: 20px;
                }
                
                .contact-info i {
                    margin-right: 5px;
                }
                
                .header-main {
                    padding: 15px 0;
                }
                
                .header-main .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 24px;
                    font-weight: 700;
                    color: #232F3E;
                }
                
                .logo span {
                    color: #FF9900;
                }
                
                .search-bar {
                    flex-grow: 1;
                    max-width: 500px;
                    margin: 0 30px;
                    position: relative;
                }
                
                .search-bar input {
                    width: 100%;
                    padding: 10px 15px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 14px;
                }
                
                .search-bar button {
                    position: absolute;
                    right: 5px;
                    top: 5px;
                    background: #FF9900;
                    border: none;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 4px;
                    cursor: pointer;
                }
                
                .header-actions {
                    display: flex;
                    gap: 20px;
                    align-items: center;
                }
                
                .action-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 14px;
                }
                
                .action-item i {
                    font-size: 20px;
                    margin-bottom: 3px;
                }
                
                /* Navigation styles */
                nav {
                    background-color: #131921;
                    color: white;
                }
                
                .nav-container {
                    display: flex;
                    justify-content: space-between;
                }
                
                .main-nav {
                    display: flex;
                }
                
                .main-nav li {
                    list-style: none;
                    position: relative;
                }
                
                .main-nav li a {
                    display: block;
                    padding: 15px 20px;
                    transition: all 0.3s ease;
                }
                
                .main-nav li:hover {
                    background-color: #232F3E;
                }
                
                .main-nav li:hover > ul {
                    display: block;
                }
                
                .main-nav ul {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background-color: #232F3E;
                    width: 200px;
                    z-index: 10;
                }
                
                .main-nav ul li {
                    width: 100%;
                }
                
                .main-nav ul li a {
                    padding: 10px 15px;
                }
                
                .support-nav {
                    display: flex;
                    align-items: center;
                }
                
                .support-nav .hotline {
                    padding: 0 15px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .support-nav .hotline span {
                    color: #FF9900;
                    font-weight: bold;
                }
                
                /* Banner styles */
                .banner {
                    margin: 20px 0;
                }
                
                .banner img {
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                }
                
                /* Product grid styles */
                .products-section {
                    margin: 40px 0;
                }
                
                .section-title {
                    margin-bottom: 20px;
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                
                .section-title h2 {
                    background-color: #FF9900;
                    color: white;
                    padding: 10px 20px;
                    display: inline-block;
                    border-radius: 5px 5px 0 0;
                    margin: 0;
                }
                
                .section-title::after {
                    content: '';
                    flex-grow: 1;
                    height: 2px;
                    background-color: #FF9900;
                    margin-left: 15px;
                }
                
                .filter-options {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    background-color: #f9f9f9;
                    padding: 15px;
                    border-radius: 5px;
                }
                
                .filter-buttons {
                    display: flex;
                    gap: 10px;
                }
                
                .filter-button {
                    padding: 8px 15px;
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .filter-button:hover, .filter-button.active {
                    background-color: #FF9900;
                    color: white;
                    border-color: #FF9900;
                }
                
                .sort-options select {
                    padding: 8px 15px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    background-color: white;
                }
                
                .product-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
                    gap: 20px;
                }
                
                .product-card {
                    background-color: white;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
                }
                
                .product-card img {
                    width: 100%;
                    height: 200px;
                    object-fit: contain;
                    background-color: #f9f9f9;
                    padding: 15px;
                }
                
                .product-info {
                    padding: 15px;
                }
                
                .product-title {
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 10px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    height: 44px;
                }
                
                .product-specs {
                    margin: 10px 0;
                    background-color: #f9f9f9;
                    padding: 10px;
                    border-radius: 4px;
                    font-size: 14px;
                }
                
                .spec-item {
                    display: flex;
                    margin-bottom: 5px;
                }
                
                .spec-name {
                    font-weight: 500;
                    min-width: 70px;
                }
                
                .product-price {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 15px;
                }
                
                .price {
                    font-size: 18px;
                    font-weight: 700;
                    color: #FF9900;
                }
                
                .price-old {
                    text-decoration: line-through;
                    color: #999;
                    font-size: 14px;
                    margin-right: 10px;
                }
                
                .add-to-cart {
                    background-color: #FF9900;
                    color: white;
                    border: none;
                    padding: 8px 15px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                
                .add-to-cart:hover {
                    background-color: #E68A00;
                }
                
                /* Pagination styles */
                .pagination {
                    display: flex;
                    justify-content: center;
                    margin: 40px 0;
                }
                
                .pagination a {
                    display: inline-block;
                    padding: 8px 14px;
                    margin: 0 5px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    background-color: white;
                    transition: all 0.3s ease;
                }
                
                .pagination a:hover, .pagination a.active {
                    background-color: #FF9900;
                    color: white;
                    border-color: #FF9900;
                }
                
                /* Footer styles */
                footer {
                    background-color: #232F3E;
                    color: white;
                    padding: 50px 0 20px;
                }
                
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 30px;
                    margin-bottom: 30px;
                }
                
                .footer-column h3 {
                    font-size: 18px;
                    margin-bottom: 20px;
                    position: relative;
                    padding-bottom: 10px;
                }
                
                .footer-column h3::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 50px;
                    height: 2px;
                    background-color: #FF9900;
                }
                
                .footer-column ul {
                    list-style: none;
                }
                
                .footer-column ul li {
                    margin-bottom: 10px;
                }
                
                .footer-column ul li a {
                    transition: color 0.3s ease;
                }
                
                .footer-column ul li a:hover {
                    color: #FF9900;
                }
                
                .footer-contact p {
                    margin-bottom: 10px;
                    display: flex;
                    align-items: center;
                }
                
                .footer-contact i {
                    margin-right: 10px;
                    width: 20px;
                }
                
                .footer-bottom {
                    text-align: center;
                    padding-top: 20px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    margin-top: 30px;
                    font-size: 14px;
                }
                
                /* Responsive styles */
                @media (max-width: 992px) {
                    .search-bar {
                        max-width: 300px;
                        margin: 0 15px;
                    }
                }
                
                @media (max-width: 768px) {
                    .header-main .container {
                        flex-wrap: wrap;
                    }
                    
                    .logo {
                        margin-bottom: 15px;
                    }
                    
                    .search-bar {
                        max-width: 100%;
                        margin: 15px 0;
                        order: 3;
                    }
                    
                    .header-actions {
                        margin-left: auto;
                    }
                    
                    .nav-container {
                        flex-direction: column;
                    }
                    
                    .main-nav {
                        flex-direction: column;
                    }
                    
                    .main-nav ul {
                        position: static;
                        width: 100%;
                        display: none;
                    }
                    
                    .support-nav {
                        padding: 15px 0;
                        justify-content: center;
                    }
                    
                    .product-grid {
                        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
                    }
                }
                
                @media (max-width: 576px) {
                    .contact-info {
                        display: none;
                    }
                    
                    .header-top .container {
                        justify-content: center;
                    }
                    
                    .header-actions {
                        gap: 10px;
                    }
                    
                    .action-item span {
                        display: none;
                    }
                    
                    .filter-options {
                        flex-direction: column;
                        gap: 15px;
                    }
                    
                    .product-grid {
                        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                    }
                }
            </style>
        </head>
        <body>
            <header>
                <div class="header-top">
                    <div class="container">
                        <div class="contact-info">
                            <a href="tel:0909123456"><i class="fas fa-phone"></i> 0909 123 456</a>
                            <a href="mailto:info@pcmarket.com"><i class="fas fa-envelope"></i> info@pcmarket.com</a>
                        </div>
                        <div class="top-links">
                            <a href="#">Tin tức</a> | 
                            <a href="#">Giới thiệu</a> | 
                            <a href="#">Liên hệ</a>
                        </div>
                    </div>
                </div>
                <div class="header-main">
                    <div class="container">
                        <a href="#" class="logo">PC<span>Market</span></a>
                        <div class="search-bar">
                            <input type="text" placeholder="Tìm kiếm sản phẩm...">
                            <button><i class="fas fa-search"></i></button>
                        </div>
                        <div class="header-actions">
                            <a href="#" class="action-item">
                                <i class="fas fa-user-circle"></i>
                                <span>Tài khoản</span>
                            </a>
                            <a href="#" class="action-item">
                                <i class="fas fa-heart"></i>
                                <span>Yêu thích</span>
                            </a>
                            <a href="#" class="action-item">
                                <i class="fas fa-shopping-cart"></i>
                                <span>Giỏ hàng</span>
                            </a>
                        </div>
                    </div>
                </div>
                <nav>
                    <div class="container nav-container">
                        <ul class="main-nav">
                            <li><a href="#">Trang chủ</a></li>
                            <li>
                                <a href="#">Máy tính chơi game</a>
                                <ul>
                                    <li><a href="#">PC Gaming dưới 10 triệu</a></li>
                                    <li><a href="#">PC Gaming 10-20 triệu</a></li>
                                    <li><a href="#">PC Gaming 20-30 triệu</a></li>
                                    <li><a href="#">PC Gaming trên 30 triệu</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">PC Văn phòng</a>
                                <ul>
                                    <li><a href="#">PC Office dưới 10 triệu</a></li>
                                    <li><a href="#">PC Office 10-15 triệu</a></li>
                                    <li><a href="#">PC Office cao cấp</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">PC Workstation</a>
                                <ul>
                                    <li><a href="#">PC Đồ họa - Kỹ thuật</a></li>
                                    <li><a href="#">PC Render & 3D</a></li>
                                    <li><a href="#">PC Studio</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Linh kiện PC</a>
                                <ul>
                                    <li><a href="#">CPU</a></li>
                                    <li><a href="#">Mainboard</a></li>
                                    <li><a href="#">RAM</a></li>
                                    <li><a href="#">VGA</a></li>
                                    <li><a href="#">SSD/HDD</a></li>
                                    <li><a href="#">PSU</a></li>
                                    <li><a href="#">Case</a></li>
                                    <li><a href="#">Tản nhiệt</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Build PC</a></li>
                        </ul>
                        <div class="support-nav">
                            <div class="hotline">
                                <i class="fas fa-headset"></i>
                                <div>
                                    <div>Hotline:</div>
                                    <span>0909 123 456</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div class="container">
                <div class="banner">
                    <img src="https://static.gigabyte.com/StaticFile/Image/Global/9b0a3847306719de8d30e2908a991a8b/Product/26863/png/1000" alt="Gaming PC Banner">
                </div>

                <div class="products-section">
                    <div class="section-title">
                        <h2>MÁY TÍNH CHƠI GAME</h2>
                    </div>
                    
                    <div class="filter-options">
                        <div class="filter-buttons">
                            <button class="filter-button active">Tất cả</button>
                            <button class="filter-button">Phổ thông</button>
                            <button class="filter-button">Cao cấp</button>
                            <button class="filter-button">Siêu cao cấp</button>
                        </div>
                        <div class="sort-options">
                            <select>
                                <option>Sắp xếp mặc định</option>
                                <option>Giá: Thấp đến cao</option>
                                <option>Giá: Cao đến thấp</option>
                                <option>Tên: A-Z</option>
                                <option>Tên: Z-A</option>
                                <option>Mới nhất</option>
                                <option>Bán chạy nhất</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="product-grid">
                        <!-- Product 1 -->
                        <div class="product-card">
                            <img src="https://product.hstatic.net/1000026716/product/dell_gaming_g15_5520_i5_12500h_f39ef2e6f2ce49d8818e7640cf799030_large.png" alt="Gaming PC">
                            <div class="product-info">
                                <h3 class="product-title">PC Gaming Intel i5-12400F | RTX 3060 | 16GB RAM</h3>
                                <div class="product-specs">
                                    <div class="spec-item">
                                        <span class="spec-name">CPU:</span>
                                        <span class="spec-value">Intel Core i5-12400F</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">VGA:</span>
                                        <span class="spec-value">NVIDIA RTX 3060 12GB</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">RAM:</span>
                                        <span class="spec-value">16GB DDR4 3200MHz</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">SSD:</span>
                                        <span class="spec-value">512GB NVMe</span>
                                    </div>
                                </div>
                                <div class="product-price">
                                    <div>
                                        <span class="price-old">20.990.000đ</span>
                                        <span class="price">18.490.000đ</span>
                                    </div>
                                    <button class="add-to-cart">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Product 2 -->
                        <div class="product-card">
                            <img src="https://product.hstatic.net/1000026716/product/gearvn-pc-glacier-i3406-i3-10105f-1_d5c143eb8b55478d9819b50c73ac97e7_large.jpg" alt="Gaming PC">
                            <div class="product-info">
                                <h3 class="product-title">PC Gaming AMD Ryzen 5 5600X | RTX 3060Ti | 16GB RAM</h3>
                                <div class="product-specs">
                                    <div class="spec-item">
                                        <span class="spec-name">CPU:</span>
                                        <span class="spec-value">AMD Ryzen 5 5600X</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">VGA:</span>
                                        <span class="spec-value">NVIDIA RTX 3060Ti 8GB</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">RAM:</span>
                                        <span class="spec-value">16GB DDR4 3600MHz</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">SSD:</span>
                                        <span class="spec-value">1TB NVMe</span>
                                    </div>
                                </div>
                                <div class="product-price">
                                    <div>
                                        <span class="price-old">25.990.000đ</span>
                                        <span class="price">22.990.000đ</span>
                                    </div>
                                    <button class="add-to-cart">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Product 3 -->
                        <div class="product-card">
                            <img src="https://hanoicomputercdn.com/media/product/65096_pc_streaming_nhat_tao_t23_intel_core_i5_13500_rtx_4060_8gb_16gb_ddr5_1tb_nvme_1.jpg" alt="Gaming PC">
                            <div class="product-info">
                                <h3 class="product-title">PC Gaming Intel i7-12700K | RTX 3070Ti | 32GB RAM</h3>
                                <div class="product-specs">
                                    <div class="spec-item">
                                        <span class="spec-name">CPU:</span>
                                        <span class="spec-value">Intel Core i7-12700K</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">VGA:</span>
                                        <span class="spec-value">NVIDIA RTX 3070Ti 8GB</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">RAM:</span>
                                        <span class="spec-value">32GB DDR4 3600MHz</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">SSD:</span>
                                        <span class="spec-value">1TB NVMe</span>
                                    </div>
                                </div>
                                <div class="product-price">
                                    <div>
                                        <span class="price-old">35.990.000đ</span>
                                        <span class="price">32.490.000đ</span>
                                    </div>
                                    <button class="add-to-cart">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Product 4 -->
                        <div class="product-card">
                            <img src="https://hanoicomputercdn.com/media/product/250_63568_case_h7_flow_white_05.jpg" alt="Gaming PC">
                            <div class="product-info">
                                <h3 class="product-title">PC Gaming AMD Ryzen 7 5800X | RX 6800 XT | 32GB RAM</h3>
                                <div class="product-specs">
                                    <div class="spec-item">
                                        <span class="spec-name">CPU:</span>
                                        <span class="spec-value">AMD Ryzen 7 5800X</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">VGA:</span>
                                        <span class="spec-value">AMD RX 6800 XT 16GB</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">RAM:</span>
                                        <span class="spec-value">32GB DDR4 3600MHz</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">SSD:</span>
                                        <span class="spec-value">1TB NVMe</span>
                                    </div>
                                </div>
                                <div class="product-price">
                                    <div>
                                        <span class="price-old">31.990.000đ</span>
                                        <span class="price">28.990.000đ</span>
                                    </div>
                                    <button class="add-to-cart">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Product 5 -->
                        <div class="product-card">
                            <img src="https://anphat.com.vn/media/product/250_38844_thermaltake_ah_t600_snow_ca_1q4_00m6wn_00__1_.jpg" alt="Gaming PC">
                            <div class="product-info">
                                <h3 class="product-title">PC Gaming Intel i9-12900K | RTX 3080Ti | 64GB RAM</h3>
                                <div class="product-specs">
                                    <div class="spec-item">
                                        <span class="spec-name">CPU:</span>
                                        <span class="spec-value">Intel Core i9-12900K</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">VGA:</span>
                                        <span class="spec-value">NVIDIA RTX 3080Ti 12GB</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">RAM:</span>
                                        <span class="spec-value">64GB DDR5 5200MHz</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">SSD:</span>
                                        <span class="spec-value">2TB NVMe Gen4</span>
                                    </div>
                                </div>
                                <div class="product-price">
                                    <div>
                                        <span class="price-old">55.990.000đ</span>
                                        <span class="price">49.990.000đ</span>
                                    </div>
                                    <button class="add-to-cart">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Product 6 -->
                        <div class="product-card">
                            <img src="https://product.hstatic.net/1000026716/product/h7_flow_white_01_9ae4d1fc54944bcd9d52bac5cb6d89ec_large.jpg" alt="Gaming PC">
                            <div class="product-info">
                                <h3 class="product-title">PC Gaming AMD Ryzen 9 5950X | RTX 3090 | 64GB RAM</h3>
                                <div class="product-specs">
                                    <div class="spec-item">
                                        <span class="spec-name">CPU:</span>
                                        <span class="spec-value">AMD Ryzen 9 5950X</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">VGA:</span>
                                        <span class="spec-value">NVIDIA RTX 3090 24GB</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">RAM:</span>
                                        <span class="spec-value">64GB DDR4 3600MHz</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">SSD:</span>
                                        <span class="spec-value">2TB NVMe Gen4</span>
                                    </div>
                                </div>
                                <div class="product-price">
                                    <div>
                                        <span class="price-old">65.990.000đ</span>
                                        <span class="price">59.990.000đ</span>
                                    </div>
                                    <button class="add-to-cart">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Product 7 -->
                        <div class="product-card">
                            <img src="https://product.hstatic.net/1000026716/product/i341001_7a83f6d5fb034a839eb5334ad4eabf8b_large.png" alt="Gaming PC">
                            <div class="product-info">
                                <h3 class="product-title">PC Gaming Intel i5-11400F | GTX 1660 Super | 16GB RAM</h3>
                                <div class="product-specs">
                                    <div class="spec-item">
                                        <span class="spec-name">CPU:</span>
                                        <span class="spec-value">Intel Core i5-11400F</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">VGA:</span>
                                        <span class="spec-value">NVIDIA GTX 1660 Super 6GB</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">RAM:</span>
                                        <span class="spec-value">16GB DDR4 3200MHz</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">SSD:</span>
                                        <span class="spec-value">512GB NVMe</span>
                                    </div>
                                </div>
                                <div class="product-price">
                                    <div>
                                        <span class="price-old">15.990.000đ</span>
                                        <span class="price">14.490.000đ</span>
                                    </div>
                                    <button class="add-to-cart">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Product 8 -->
                        <div class="product-card">
                            <img src="https://anphat.com.vn/media/product/250_40546_corsair_icue_5000d_rgb_hydro_x_edition_tempered_glass_mid_tower_atx_pc_smart_case___black_cc_9011246_ww__3_.jpg" alt="Gaming PC">
                            <div class="product-info">
                                <h3 class="product-title">PC Gaming AMD Ryzen 5 3600 | GTX 1650 Super | 16GB RAM</h3>
                                <div class="product-specs">
                                    <div class="spec-item">
                                        <span class="spec-name">CPU:</span>
                                        <span class="spec-value">AMD Ryzen 5 3600</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">VGA:</span>
                                        <span class="spec-value">NVIDIA GTX 1650 Super 4GB</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">RAM:</span>
                                        <span class="spec-value">16GB DDR4 3200MHz</span>
                                    </div>
                                    <div class="spec-item">
                                        <span class="spec-name">SSD:</span>
                                        <span class="spec-value">512GB NVMe</span>
                                    </div>
                                </div>
                                <div class="product-price">
                                    <div>
                                        <span class="price-old">13.990.000đ</span>
                                        <span class="price">12.490.000đ</span>
                                    </div>
                                    <button class="add-to-cart">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pagination">
                        <a href="#" class="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">»</a>
                    </div>
                </div>
            </div>

            <footer>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-column">
                            <h3>Về PC Market</h3>
                            <ul>
                                <li><a href="#">Giới thiệu</a></li>
                                <li><a href="#">Tin tức công nghệ</a></li>
                                <li><a href="#">Tuyển dụng</a></li>
                                <li><a href="#">Chính sách bảo mật</a></li>
                                <li><a href="#">Điều khoản sử dụng</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Hỗ trợ khách hàng</h3>
                            <ul>
                                <li><a href="#">Hướng dẫn mua hàng</a></li>
                                <li><a href="#">Chính sách vận chuyển</a></li>
                                <li><a href="#">Chính sách đổi trả</a></li>
                                <li><a href="#">Phương thức thanh toán</a></li>
                                <li><a href="#">Bảo hành và sửa chữa</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Phương thức thanh toán</h3>
                            <ul>
                                <li><a href="#">Chuyển khoản ngân hàng</a></li>
                                <li><a href="#">Thanh toán khi nhận hàng (COD)</a></li>
                                <li><a href="#">Thẻ tín dụng / Thẻ ghi nợ</a></li>
                                <li><a href="#">Trả góp qua thẻ tín dụng</a></li>
                            </ul>
                        </div>
                        <div class="footer-column footer-contact">
                            <h3>Thông tin liên hệ</h3>
                            <p><i class="fas fa-map-marker-alt"></i> 123 Đường Công Nghệ, Quận 1, TP.HCM</p>
                            <p><i class="fas fa-phone"></i> 0909 123 456</p>
                            <p><i class="fas fa-envelope"></i> info@pcmarket.com</p>
                            <p><i class="fas fa-clock"></i> 8:00 - 20:00, Thứ 2 - Chủ nhật</p>
                            <div class="social-icons" style="margin-top: 15px;">
                                <a href="#" style="margin-right: 10px;"><i class="fab fa-facebook"></i></a>
                                <a href="#" style="margin-right: 10px;"><i class="fab fa-youtube"></i></a>
                                <a href="#" style="margin-right: 10px;"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-tiktok"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>© 2023 PC Market. Tất cả các quyền được bảo lưu.</p>
                    </div>
                </div>
            </footer>

            <script>
                // Add Font Awesome for icons
                const fontAwesome = document.createElement('link');
                fontAwesome.rel = 'stylesheet';
                fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
                document.head.appendChild(fontAwesome);
                
                // Filter buttons
                document.querySelectorAll('.filter-button').forEach(button => {
                    button.addEventListener('click', () => {
                        document.querySelectorAll('.filter-button').forEach(btn => {
                            btn.classList.remove('active');
                        });
                        button.classList.add('active');
                    });
                });
                
                // Add to cart functionality
                document.querySelectorAll('.add-to-cart').forEach(button => {
                    button.addEventListener('click', (e) => {
                        e.preventDefault();
                        const productCard = button.closest('.product-card');
                        const productName = productCard.querySelector('.product-title').textContent;
                        alert(\`Đã thêm "\${productName}" vào giỏ hàng!\`);
                    });
                });
                
                // Mobile menu toggle
                const mobileMenuToggle = () => {
                    const mainNav = document.querySelector('.main-nav');
                    mainNav.classList.toggle('mobile-active');
                };
                
                // Initialize responsive behavior
                const initResponsive = () => {
                    if (window.innerWidth <= 768) {
                        const nav = document.querySelector('nav');
                        const menuToggle = document.createElement('button');
                        menuToggle.className = 'mobile-menu-toggle';
                        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                        menuToggle.addEventListener('click', mobileMenuToggle);
                        
                        if (!document.querySelector('.mobile-menu-toggle')) {
                            nav.querySelector('.container').prepend(menuToggle);
                        }
                    }
                };
                
                window.addEventListener('load', initResponsive);
                window.addEventListener('resize', initResponsive);
            </script>
        </body>
        </html>
      `;

      // Add FontAwesome script
      const fontAwesomeScript = document.createElement('script');
      fontAwesomeScript.src = 'https://kit.fontawesome.com/a076d05399.js';
      fontAwesomeScript.crossOrigin = 'anonymous';
      document.head.appendChild(fontAwesomeScript);

      // Initialize the embedded HTML/JS
      const script = document.createElement('script');
      script.textContent = `
        // This script is needed to initialize any JavaScript in the embedded HTML
      `;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full min-h-screen"
    />
  );
};

export default Index;
