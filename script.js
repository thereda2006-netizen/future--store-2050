// بيانات الترجمة
const translations = {
    ar: {
        welcome: "مرحباً بكم في مستقبل التسوق",
        slogan: "متجر إلكتروني يعمل بالذكاء الاصطناعي - إدارة تلقائية بالكامل",
        ai: "إدارة بالذكاء الاصطناعي",
        ai_desc: "نظام ذكي يدير جميع عمليات المتجر تلقائياً",
        multi: "متعدد اللغات والعملات",
        multi_desc: "يدعم 15 لغة و 20 عملة عالمية",
        fast: "معاملات فورية",
        fast_desc: "إتمام الشراء في ثوانٍ بواسطة الذكاء الاصطناعي",
        products: "المنتجات الذكية",
        filter: "التصفية الذكية",
        all: "الكل",
        trending: "الأكثر طلباً",
        recommended: "موصى به",
        discounted: "بخصم",
        personal_recommendation: "توصية شخصية من الذكاء الاصطناعي",
        loading_rec: "جاري تحليل تفضيلاتك...",
        payment: "نظام الدفع الذكي",
        payment_desc: "إتمام الدفع بلمسة واحدة باستخدام الذكاء الاصطناعي",
        biometric: "الدفع البيومتري",
        biometric_desc: "بصمة أو تعرف على الوجه",
        ai_payment: "الدفع بالذكاء الاصطناعي",
        ai_payment_desc: "إتمام تلقائي بالتحليل الذكي",
        crypto: "العملات الرقمية",
        crypto_desc: "بيتكوين، إيثريوم وغيرها",
        digital: "البطاقات الرقمية",
        digital_desc: "بطاقات ائتمان ومدى",
        process_payment: "معالج الدفع الذكي",
        ready: "جاهز",
        amount: "المبلغ:",
        payment_method: "طريقة الدفع:",
        ai_auto: "الدفع التلقائي بالذكاء الاصطناعي",
        digital_card: "البطاقة الرقمية",
        ai_security: "التحقق الذكي:",
        secure: "محمي بالذكاء الاصطناعي",
        risk: "مستوى المخاطرة:",
        low: "منخفض",
        process: "إتمام الدفع الذكي",
        ai_analysis: "التحليل الذكي للمعاملة",
        fraud_detection: "كشف الاحتيال:",
        safe: "آمن",
        speed: "سرعة المعاملة:",
        instant: "فورية",
        success_rate: "معدل النجاح:",
        dashboard: "لوحة التحكم الذكية",
        dashboard_desc: "إدارة المتجر بالكامل بواسطة الذكاء الاصطناعي",
        sales: "المبيعات",
        forecast: "التنبؤ بالمبيعات",
        inventory: "المخزون",
        auto_reorder: "إعادة الطلب تلقائياً",
        customers: "العملاء",
        analyze: "تحليل العملاء",
        ai_manager: "المدير الذكي",
        active: "نشط",
        tasks_completed: "المهام المكتملة:",
        full_control: "التحكم الكامل",
        ai_decisions: "قرارات الذكاء الاصطناعي الأخيرة",
        services: "الخدمات الذكية",
        services_desc: "خدمات متقدمة تعمل بالذكاء الاصطناعي",
        smart_shipping: "الشحن الذكي",
        smart_shipping_desc: "تتبع ذكي وتحسين مسارات الشحن تلقائياً",
        ai_support: "الدعم الذكي",
        ai_support_desc: "رد تلقائي على استفسارات العملاء 24/7",
        market_analysis: "تحليل السوق",
        market_analysis_desc: "تحليل تلقائي للأسعار والمنافسين",
        translation: "الترجمة الذكية",
        translation_desc: "ترجمة تلقائية للمنتجات والوصف لـ 15 لغة",
        activate: "تفعيل",
        footer_desc: "متجر المستقبل - يعمل بالذكاء الاصطناعي المتكامل لإدارة جميع العمليات تلقائياً",
        quick_links: "روابط سريعة",
        home: "الرئيسية",
        about: "عن المتجر",
        contact: "اتصل بنا",
        ai_assistant: "المساعد الذكي",
        contact_info: "معلومات الاتصال",
        riyadh: "الرياض، المملكة العربية السعودية",
        copyright: "© 2050 FutureStore. جميع الحقوق محفوظة. مصمم للعمل بالذكاء الاصطناعي المتكامل.",
        ai_active: "الذكاء الاصطناعي نشط",
        cart: "سلة التسوق الذكية",
        empty_cart: "سلة التسوق فارغة",
        empty_cart_sub: "استخدم الذكاء الاصطناعي للعثور على منتجات مناسبة لك",
        subtotal: "المجموع الجزئي:",
        ai_discount: "خصم الذكاء الاصطناعي:",
        total: "المجموع الكلي:",
        ai_checkout: "إتمام الشراء بالذكاء الاصطناعي",
        processing_payment: "جاري معالجة الدفع بالذكاء الاصطناعي",
        verification: "التحقق",
        processing: "المعالجة",
        confirmation: "التأكيد",
        completion: "الإكمال",
        ai_processing: "جاري المعالجة بالذكاء الاصطناعي",
        verifying: "جارٍ التحقق من بيانات الدفع...",
        method: "الطريقة:",
        security: "الأمان:"
    },
    en: {
        welcome: "Welcome to the Future of Shopping",
        slogan: "AI-Powered E-commerce Store - Fully Automated Management",
        ai: "AI Management",
        ai_desc: "Smart system that automatically manages all store operations",
        multi: "Multi-language & Currency",
        multi_desc: "Supports 15 languages and 20 global currencies",
        fast: "Instant Transactions",
        fast_desc: "Complete purchases in seconds using AI",
        products: "Smart Products",
        filter: "Smart Filter",
        all: "All",
        trending: "Trending",
        recommended: "Recommended",
        discounted: "Discounted",
        personal_recommendation: "Personal AI Recommendation",
        loading_rec: "Analyzing your preferences...",
        payment: "Smart Payment System",
        payment_desc: "One-touch payment completion using AI",
        biometric: "Biometric Payment",
        biometric_desc: "Fingerprint or Face Recognition",
        ai_payment: "AI Payment",
        ai_payment_desc: "Automatic completion with smart analysis",
        crypto: "Cryptocurrencies",
        crypto_desc: "Bitcoin, Ethereum and more",
        digital: "Digital Cards",
        digital_desc: "Credit and debit cards",
        process_payment: "Smart Payment Processor",
        ready: "Ready",
        amount: "Amount:",
        payment_method: "Payment Method:",
        ai_auto: "Automatic AI Payment",
        digital_card: "Digital Card",
        ai_security: "AI Verification:",
        secure: "AI Protected",
        risk: "Risk Level:",
        low: "Low",
        process: "Complete Smart Payment",
        ai_analysis: "AI Transaction Analysis",
        fraud_detection: "Fraud Detection:",
        safe: "Safe",
        speed: "Transaction Speed:",
        instant: "Instant",
        success_rate: "Success Rate:",
        dashboard: "Smart Control Panel",
        dashboard_desc: "Complete store management by AI",
        sales: "Sales",
        forecast: "Sales Forecast",
        inventory: "Inventory",
        auto_reorder: "Auto Reorder",
        customers: "Customers",
        analyze: "Analyze Customers",
        ai_manager: "AI Manager",
        active: "Active",
        tasks_completed: "Tasks Completed:",
        full_control: "Full Control",
        ai_decisions: "Recent AI Decisions",
        services: "Smart Services",
        services_desc: "Advanced AI-powered services",
        smart_shipping: "Smart Shipping",
        smart_shipping_desc: "Smart tracking and automatic route optimization",
        ai_support: "AI Support",
        ai_support_desc: "Automatic response to customer inquiries 24/7",
        market_analysis: "Market Analysis",
        market_analysis_desc: "Automatic price and competitor analysis",
        translation: "Smart Translation",
        translation_desc: "Automatic product translation for 15 languages",
        activate: "Activate",
        footer_desc: "Future Store - Powered by integrated AI to automatically manage all operations",
        quick_links: "Quick Links",
        home: "Home",
        about: "About",
        contact: "Contact Us",
        ai_assistant: "AI Assistant",
        contact_info: "Contact Info",
        riyadh: "Riyadh, Saudi Arabia",
        copyright: "© 2050 FutureStore. All rights reserved. Designed to work with integrated AI.",
        ai_active: "AI Active",
        cart: "Smart Shopping Cart",
        empty_cart: "Your cart is empty",
        empty_cart_sub: "Use AI to find products suitable for you",
        subtotal: "Subtotal:",
        ai_discount: "AI Discount:",
        total: "Total:",
        ai_checkout: "Complete Purchase with AI",
        processing_payment: "Processing Payment with AI",
        verification: "Verification",
        processing: "Processing",
        confirmation: "Confirmation",
        completion: "Completion",
        ai_processing: "Processing with AI",
        verifying: "Verifying payment data...",
        method: "Method:",
        security: "Security:"
    },
    fr: {
        welcome: "Bienvenue dans l'avenir du shopping",
        slogan: "Boutique en ligne alimentée par l'IA - Gestion entièrement automatisée"
    },
    es: {
        welcome: "Bienvenido al futuro de las compras",
        slogan: "Tienda en línea impulsada por IA - Gestión totalmente automatizada"
    }
};

// بيانات المنتجات
const products = [
    {
        id: 1,
        name: "هاتف هولوغرام ذكي 2050",
        name_en: "Smart Hologram Phone 2050",
        category: "electronics",
        price: 8999.99,
        description: "هاتف المستقبل يعمل باللمس الهوائي وعرض الهولوغرام ثلاثي الأبعاد",
        description_en: "Future phone with air touch and 3D hologram display",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        trending: true,
        ai_recommended: true,
        discount: 15
    },
    {
        id: 2,
        name: "ساعة ذكية بالذكاء الاصطناعي",
        name_en: "AI Smart Watch",
        category: "electronics",
        price: 2499.99,
        description: "ساعة ذكية تعمل بالذكاء الاصطناعي لتتبع الصحة واللياقة",
        description_en: "AI-powered smart watch for health and fitness tracking",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        trending: true,
        ai_recommended: false,
        discount: 10
    },
    {
        id: 3,
        name: "نظارة الواقع المعزز الذكي",
        name_en: "Smart AR Glasses",
        category: "electronics",
        price: 5999.99,
        description: "نظارة ذكية تعرض المعلومات بشكل هولوغرامي في مجال الرؤية",
        description_en: "Smart glasses that display information as holograms in your field of vision",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        trending: false,
        ai_recommended: true,
        discount: 20
    },
    {
        id: 4,
        name: "روبوت منزلي ذكي",
        name_en: "Smart Home Robot",
        category: "electronics",
        price: 12999.99,
        description: "روبوت منزلي يعمل بالذكاء الاصطناعي للمساعدة في المهام المنزلية",
        description_en: "AI-powered home robot for household tasks assistance",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        trending: true,
        ai_recommended: true,
        discount: 25
    },
    {
        id: 5,
        name: "طابعة ثلاثية الأبعاد ذكية",
        name_en: "Smart 3D Printer",
        category: "electronics",
        price: 7499.99,
        description: "طابعة ثلاثية الأبعاد تعمل بالذكاء الاصطناعي لتصميم وطباعة أي شيء",
        description_en: "AI-powered 3D printer to design and print anything",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        trending: false,
        ai_recommended: false,
        discount: 0
    },
    {
        id: 6,
        name: "ملابس ذكية بتقنية النانو",
        name_en: "Nano Smart Clothing",
        category: "clothing",
        price: 1999.99,
        description: "ملابس ذكية بتقنية النانو تتكيف مع درجة الحرارة والطقس",
        description_en: "Nano smart clothing that adapts to temperature and weather",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        trending: true,
        ai_recommended: true,
        discount: 15
    },
    {
        id: 7,
        name: "حقيبة ذكية مضادة للسرقة",
        name_en: "Anti-Theft Smart Bag",
        category: "clothing",
        price: 1299.99,
        description: "حقيبة ذكية مضادة للسرقة مع تتبع GPS وتشغيل آلي",
        description_en: "Anti-theft smart bag with GPS tracking and automation",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        trending: false,
        ai_recommended: false,
        discount: 0
    },
    {
        id: 8,
        name: "كتاب الذكاء الاصطناعي المتقدم",
        name_en: "Advanced AI Book",
        category: "books",
        price: 299.99,
        description: "كتاب متقدم عن تقنيات الذكاء الاصطناعي في 2050",
        description_en: "Advanced book about AI technologies in 2050",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        trending: true,
        ai_recommended: true,
        discount: 10
    }
];

// معدلات التحويل للعملات
const exchangeRates = {
    SAR: 1,      // الريال السعودي (العملة الأساسية)
    USD: 0.27,   // الدولار الأمريكي
    EUR: 0.25,   // اليورو
    GBP: 0.21,   // الجنيه الإسترليني
    AED: 1.00,   // الدرهم الإماراتي
    KWD: 0.082   // الدينار الكويتي
};

// رموز العملات
const currencySymbols = {
    SAR: "ر.س",
    USD: "$",
    EUR: "€",
    GBP: "£",
    AED: "د.إ",
    KWD: "د.ك"
};

// حالة التطبيق
let currentLanguage = 'ar';
let currentCurrency = 'SAR';
let cart = [];
let aiMessages = [];
let aiDecisions = [];

// عناصر DOM
const aiAssistantBtn = document.getElementById('aiAssistantBtn');
const aiChatContainer = document.getElementById('aiChatContainer');
const closeChat = document.getElementById('closeChat');
const aiChatMessages = document.getElementById('aiChatMessages');
const aiChatInput = document.getElementById('aiChatInput');
const sendMessage = document.getElementById('sendMessage');
const voiceInput = document.getElementById('voiceInput');
const futureCartBtn = document.getElementById('futureCartBtn');
const futureCart = document.getElementById('futureCart');
const closeFutureCart = document.getElementById('closeFutureCart');
const futureCartContent = document.getElementById('futureCartContent');
const futureCartCount = document.getElementById('futureCartCount');
const aiCheckoutBtn = document.getElementById('aiCheckoutBtn');
const currencySelect = document.getElementById('currencySelect');
const langBtns = document.querySelectorAll('.lang-btn');
const productsHologrid = document.getElementById('productsHologrid');
const filterOptions = document.querySelectorAll('.filter-option');
const aiRecommendation = document.getElementById('aiRecommendation');
const paymentAmount = document.getElementById('paymentAmount');
const paymentCurrency = document.getElementById('paymentCurrency');
const paymentMethodSelect = document.getElementById('paymentMethodSelect');
const processPaymentBtn = document.getElementById('processPayment');
const aiPaymentModal = document.getElementById('aiPaymentModal');
const closePaymentModal = document.getElementById('closePaymentModal');
const paymentProgress = document.getElementById('paymentProgress');
const paymentResult = document.getElementById('paymentResult');
const processingStatus = document.getElementById('processingStatus');
const paymentAmountDisplay = document.getElementById('paymentAmountDisplay');
const paymentMethodDisplay = document.getElementById('paymentMethodDisplay');

// تهيئة التطبيق
function initApp() {
    displayProducts();
    setupEventListeners();
    updateCart();
    loadAIDecisions();
    simulateAIRecommendation();
    simulateAISuggestions();
    simulateAIStats();
    
    // إضافة بعض القرارات الأولية للذكاء الاصطناعي
    addAIDecision("تحديث أسعار المنتجات تلقائياً بناءً على تحليل السوق", "success");
    addAIDecision("إعادة ترتيب مخزون المنتجات الأكثر مبيعاً", "info");
    addAIDecision("تحسين توصيات المنتجات بناءً على سلوك العملاء", "success");
    
    // إضافة بعض الرسائل الأولية للدعم
    addAIMessage("مرحباً! أنا المساعد الذكي لمتجر المستقبل 2050. كيف يمكنني مساعدتك اليوم؟");
    addAIMessage("يمكنني مساعدتك في:<br>• إتمام عملية الشراء تلقائياً<br>• الرد على استفسارات العملاء<br>• إدارة المخزون والطلبات<br>• تقديم توصيات شخصية<br>• تحليل بيانات المبيعات");
}

// عرض المنتجات
function displayProducts() {
    productsHologrid.innerHTML = '';
    
    products.forEach(product => {
        const priceInCurrency = convertCurrency(product.price, currentCurrency);
        const currencySymbol = currencySymbols[currentCurrency];
        const discountedPrice = product.discount > 0 ? priceInCurrency * (1 - product.discount / 100) : priceInCurrency;
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card-future';
        productCard.innerHTML = `
            <div class="product-image-future">
                <img src="${product.image}" alt="${currentLanguage === 'ar' ? product.name : product.name_en}">
                ${product.discount > 0 ? `<div class="product-badge">-${product.discount}%</div>` : ''}
            </div>
            <div class="product-info-future">
                <div class="product-category-future">
                    <i class="fas fa-${getCategoryIcon(product.category)}"></i>
                    ${getCategoryName(product.category)}
                </div>
                <h3 class="product-title-future">${currentLanguage === 'ar' ? product.name : product.name_en}</h3>
                <p class="product-description-future">${currentLanguage === 'ar' ? product.description : product.description_en}</p>
                <div class="product-footer-future">
                    <div class="product-price-future">
                        ${product.discount > 0 ? `
                            <span style="text-decoration: line-through; color: #aaa; font-size: 1rem; margin-left: 10px;">${formatPrice(priceInCurrency)} ${currencySymbol}</span>
                            <span>${formatPrice(discountedPrice)} ${currencySymbol}</span>
                        ` : `
                            <span>${formatPrice(priceInCurrency)} ${currencySymbol}</span>
                        `}
                    </div>
                    <button class="ai-add-to-cart" data-id="${product.id}">
                        <i class="fas fa-robot"></i>
                        ${currentLanguage === 'ar' ? 'إضافة ذكية' : 'AI Add'}
                    </button>
                </div>
            </div>
        `;
        
        // إضافة حدث النقر على زر الإضافة
        const addToCartBtn = productCard.querySelector('.ai-add-to-cart');
        addToCartBtn.addEventListener('click', () => {
            const finalPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price;
            addToCart(product.id, finalPrice);
            showNotification('success', 'تمت الإضافة', 'تمت إضافة المنتج إلى سلة التسوق الذكية بنجاح');
        });
        
        productsHologrid.appendChild(productCard);
    });
}

// الحصول على أيقونة التصنيف
function getCategoryIcon(category) {
    const icons = {
        'electronics': 'microchip',
        'clothing': 'tshirt',
        'books': 'book',
        'home': 'home'
    };
    return icons[category] || 'box';
}

// الحصول على اسم التصنيف
function getCategoryName(category) {
    const names = {
        'electronics': currentLanguage === 'ar' ? 'إلكترونيات' : 'Electronics',
        'clothing': currentLanguage === 'ar' ? 'ملابس' : 'Clothing',
        'books': currentLanguage === 'ar' ? 'كتب' : 'Books',
        'home': currentLanguage === 'ar' ? 'منزلية' : 'Home'
    };
    return names[category] || category;
}

// تحويل العملة
function convertCurrency(amount, currency) {
    return amount * exchangeRates[currency];
}

// تنسيق السعر
function formatPrice(price) {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// إعداد المستمعين للأحداث
function setupEventListeners() {
    // فتح وإغلاق محادثة الذكاء الاصطناعي
    aiAssistantBtn.addEventListener('click', () => {
        aiChatContainer.classList.toggle('active');
    });
    
    closeChat.addEventListener('click', () => {
        aiChatContainer.classList.remove('active');
    });
    
    // إرسال رسالة في المحادثة
    sendMessage.addEventListener('click', sendAIMessage);
    aiChatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendAIMessage();
    });
    
    // إدخال الصوت
    voiceInput.addEventListener('click', startVoiceInput);
    
    // فتح وإغلاق سلة التسوق
    futureCartBtn.addEventListener('click', () => {
        futureCart.classList.add('active');
    });
    
    closeFutureCart.addEventListener('click', () => {
        futureCart.classList.remove('active');
    });
    
    // تغيير العملة
    currencySelect.addEventListener('change', (e) => {
        currentCurrency = e.target.value;
        updateCurrencyDisplay();
        displayProducts();
        updateCart();
    });
    
    // تغيير اللغة
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            changeLanguage(lang);
        });
    });
    
    // تصفية المنتجات
    filterOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const filter = e.target.dataset.filter;
            filterProducts(filter);
            
            // تحديث حالة الأزرار النشطة
            filterOptions.forEach(opt => opt.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
    
    // إتمام الدفع
    processPaymentBtn.addEventListener('click', processPayment);
    
    // إغلاق نافذة الدفع
    closePaymentModal.addEventListener('click', () => {
        aiPaymentModal.classList.remove('active');
    });
    
    // إتمام الشراء بالذكاء الاصطناعي
    aiCheckoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('error', 'سلة فارغة', 'السلة فارغة، أضف منتجات أولاً');
            return;
        }
        
        const total = calculateCartTotal();
        paymentAmount.value = total.toFixed(2);
        updatePaymentModal();
        aiPaymentModal.classList.add('active');
        
        // بدء عملية الدفع
        simulateAIPayment();
    });
    
    // الأحداث السريعة في المحادثة
    document.querySelectorAll('.quick-action').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            handleQuickAction(action);
        });
    });
    
    // أزرار لوحة التحكم
    document.querySelectorAll('.ai-action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            handleAIAction(action);
        });
    });
    
    // أزرار الخدمات
    document.querySelectorAll('.service-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const service = e.target.dataset.service;
            toggleService(service, e.target);
        });
    });
}

// إضافة منتج إلى السلة
function addToCart(productId, price) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: currentLanguage === 'ar' ? product.name : product.name_en,
            price: price || product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCart();
}

// تحديث السلة
function updateCart() {
    // تحديث العداد
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    futureCartCount.textContent = totalItems;
    
    // تحديث محتوى السلة
    displayCartItems();
}

// عرض عناصر السلة
function displayCartItems() {
    futureCartContent.innerHTML = '';
    
    if (cart.length === 0) {
        futureCartContent.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>${currentLanguage === 'ar' ? 'سلة التسوق فارغة' : 'Your cart is empty'}</p>
                <p class="empty-cart-sub">${currentLanguage === 'ar' ? 'استخدم الذكاء الاصطناعي للعثور على منتجات مناسبة لك' : 'Use AI to find products suitable for you'}</p>
            </div>
        `;
        return;
    }
    
    const total = calculateCartTotal();
    const discount = calculateAIDiscount(total);
    const finalTotal = total - discount;
    
    // تحديث الملخص
    document.getElementById('cartSubtotal').textContent = formatPrice(convertCurrency(total, currentCurrency));
    document.getElementById('aiDiscount').textContent = formatPrice(convertCurrency(discount, currentCurrency));
    document.getElementById('cartTotal').textContent = formatPrice(convertCurrency(finalTotal, currentCurrency));
    document.getElementById('cartCurrency').textContent = currencySymbols[currentCurrency];
    
    // عرض العناصر
    cart.forEach(item => {
        const priceInCurrency = convertCurrency(item.price, currentCurrency);
        const currencySymbol = currencySymbols[currentCurrency];
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item-future';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatPrice(priceInCurrency)} ${currencySymbol}</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-control">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                </div>
                <button class="remove-item-btn" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        // إضافة أحداث التحكم في الكمية
        const decreaseBtn = cartItem.querySelector('.decrease');
        const increaseBtn = cartItem.querySelector('.increase');
        const removeBtn = cartItem.querySelector('.remove-item-btn');
        
        decreaseBtn.addEventListener('click', () => updateQuantity(item.id, -1));
        increaseBtn.addEventListener('click', () => updateQuantity(item.id, 1));
        removeBtn.addEventListener('click', () => removeFromCart(item.id));
        
        futureCartContent.appendChild(cartItem);
    });
}

// تحديث كمية المنتج
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
        showNotification('info', 'تمت الإزالة', 'تمت إزالة المنتج من السلة');
    }
    
    updateCart();
}

// إزالة منتج من السلة
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('info', 'تمت الإزالة', 'تمت إزالة المنتج من السلة');
}

// حساب المجموع الكلي
function calculateCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// حساب خصم الذكاء الاصطناعي
function calculateAIDiscount(total) {
    // محاكاة خصم ذكي بناءً على قيمة الشراء
    if (total > 5000) return total * 0.15; // خصم 15% للطلبات الكبيرة
    if (total > 2000) return total * 0.10; // خصم 10% للطلبات المتوسطة
    if (total > 500) return total * 0.05;  // خصم 5% للطلبات الصغيرة
    return 0;
}

// تحديث عرض العملة
function updateCurrencyDisplay() {
    paymentCurrency.textContent = currencySymbols[currentCurrency];
    updateCart();
}

// تغيير اللغة
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // تحديث أزرار اللغة النشطة
    langBtns.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // تحديث جميع العناصر التي تحتوي على data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // تحديث المنتجات
    displayProducts();
    updateCart();
}

// تصفية المنتجات
function filterProducts(filter) {
    const productCards = document.querySelectorAll('.product-card-future');
    
    productCards.forEach(card => {
        const productId = parseInt(card.querySelector('.ai-add-to-cart').dataset.id);
        const product = products.find(p => p.id === productId);
        
        let show = false;
        
        switch(filter) {
            case 'all':
                show = true;
                break;
            case 'trending':
                show = product.trending;
                break;
            case 'ai_recommended':
                show = product.ai_recommended;
                break;
            case 'discounted':
                show = product.discount > 0;
                break;
        }
        
        card.style.display = show ? 'block' : 'none';
    });
}

// إضافة رسالة إلى محادثة الذكاء الاصطناعي
function addAIMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isUser ? 'user-message' : 'ai-message';
    
    const time = new Date().toLocaleTimeString('ar-SA', {hour: '2-digit', minute:'2-digit'});
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
            <p class="message-time">${time}</p>
        </div>
    `;
    
    aiChatMessages.appendChild(messageDiv);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

// إرسال رسالة في المحادثة
function sendAIMessage() {
    const message = aiChatInput.value.trim();
    if (!message) return;
    
    // إضافة رسالة المستخدم
    addAIMessage(message, true);
    aiChatInput.value = '';
    
    // محاكاة رد الذكاء الاصطناعي
    setTimeout(() => {
        const aiResponse = generateAIResponse(message);
        addAIMessage(aiResponse);
    }, 1000);
}

// توليد رد الذكاء الاصطناعي
function generateAIResponse(message) {
    const responses = [
        "أنا أفهم استفسارك. بناءً على تحليلي، يمكنني مساعدتك في إتمام عملية الشراء أو الرد على استفساراتك حول المنتجات.",
        "شكراً لسؤالك. الذكاء الاصطناعي الخاص بي يحلل طلبك وسأقدم لك أفضل الحلول تلقائياً.",
        "لقد قمت بتحليل سؤالك. هل تريد مساعدة في اختيار المنتجات المناسبة بناءً على تفضيلاتك؟",
        "أنا هنا لمساعدتك. يمكنني إدارة عملية الشراء بالكامل تلقائياً إذا كنت تريد.",
        "بناءً على تحليل بيانات المتجر، أرى أن المنتجات الأكثر طلباً هذا الأسبوع هي الإلكترونيات الذكية.",
        "يمكنني تقديم توصية شخصية لك. هل تفضل منتجات التكنولوجيا أم الملابس الذكية؟"
    ];
    
    // تحليل بسيط للرسالة
    if (message.includes('شراء') || message.includes('شراء') || message.includes('buy')) {
        return "أرى أنك مهتم بالشراء. يمكنني إتمام عملية الشراء بالكامل تلقائياً. هل تريد المتابعة؟";
    } else if (message.includes('سعر') || message.includes('price')) {
        return "الأسعار في متجرنا تعتمد على الذكاء الاصطناعي الذي يضبطها تلقائياً حسب الطلب والعرض. جميع الأسعار تشمل خصومات ذكية.";
    } else if (message.includes('شحن') || message.includes('shipping')) {
        return "نظام الشحن الذكي لدينا يستخدم الذكاء الاصطناعي لتحسين مسارات التوصيل. متوسط وقت التوصيل 24 ساعة.";
    } else if (message.includes('دفع') || message.includes('payment')) {
        return "نظام الدفع الذكي يدعم جميع الطرق بما في ذلك الدفع البيومتري والذكاء الاصطناعي التلقائي.";
    } else {
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// بدء إدخال الصوت
function startVoiceInput() {
    showNotification('info', 'تفعيل الصوت', 'جاري تفعيل نظام التعرف على الصوت...');
    
    // محاكاة إدخال الصوت
    setTimeout(() => {
        const voiceCommands = [
            "أريد شراء هاتف ذكي",
            "عرض المنتجات الموصى بها",
            "إتمام عملية الشراء",
            "ما هي خصومات اليوم؟",
            "تتبع طلبي السابق"
        ];
        
        const randomCommand = voiceCommands[Math.floor(Math.random() * voiceCommands.length)];
        aiChatInput.value = randomCommand;
        showNotification('success', 'تم التعرف', `تم التعرف على الأمر: "${randomCommand}"`);
    }, 1500);
}

// التعامل مع الأحداث السريعة
function handleQuickAction(action) {
    let message = '';
    
    switch(action) {
        case 'products':
            message = "أريد عرض جميع المنتجات الذكية";
            break;
        case 'track':
            message = "كيف يمكنني تتبع طلبي؟";
            break;
        case 'support':
            message = "أحتاج إلى دعم فني";
            break;
        case 'payment':
            message = "ما هي طرق الدفع المتاحة؟";
            break;
    }
    
    aiChatInput.value = message;
    sendAIMessage();
}

// تحديث نافذة الدفع
function updatePaymentModal() {
    const total = calculateCartTotal();
    const discount = calculateAIDiscount(total);
    const finalTotal = total - discount;
    
    const amountInCurrency = convertCurrency(finalTotal, currentCurrency);
    const currencySymbol = currencySymbols[currentCurrency];
    
    paymentAmountDisplay.textContent = `${formatPrice(amountInCurrency)} ${currencySymbol}`;
    
    // تحديث طريقة الدفع المعروضة
    const methodText = paymentMethodSelect.options[paymentMethodSelect.selectedIndex].textContent;
    paymentMethodDisplay.textContent = methodText;
}

// محاكاة عملية الدفع بالذكاء الاصطناعي
function simulateAIPayment() {
    paymentProgress.style.width = '0%';
    paymentResult.style.display = 'none';
    
    // المرحلة 1: التحقق
    setTimeout(() => {
        updateProgress(25, "جارٍ التحقق من بيانات الدفع...");
    }, 500);
    
    // المرحلة 2: المعالجة
    setTimeout(() => {
        updateProgress(50, "جاري معالجة الدفع بالذكاء الاصطناعي...");
    }, 2000);
    
    // المرحلة 3: التأكيد
    setTimeout(() => {
        updateProgress(75, "جارٍ تأكيد المعاملة مع البنك...");
    }, 4000);
    
    // المرحلة 4: الإكمال
    setTimeout(() => {
        updateProgress(100, "تمت المعاملة بنجاح!");
        
        // عرض نتيجة النجاح
        setTimeout(() => {
            showPaymentResult(true);
            addAIDecision("إتمام عملية دفع ذكية بقيمة " + formatPrice(convertCurrency(calculateCartTotal(), currentCurrency)) + " " + currencySymbols[currentCurrency], "success");
            
            // تفريغ السلة بعد الشراء الناجح
            cart = [];
            updateCart();
        }, 1000);
    }, 6000);
}

// تحديث شريط التقدم
function updateProgress(percent, status) {
    paymentProgress.style.width = percent + '%';
    processingStatus.textContent = status;
    
    // تحديث الخطوات النشطة
    const steps = document.querySelectorAll('.progress-step');
    steps.forEach((step, index) => {
        if (percent >= (index + 1) * 25) {
            step.classList.add('active');
        }
    });
}

// عرض نتيجة الدفع
function showPaymentResult(success) {
    const total = calculateCartTotal();
    const discount = calculateAIDiscount(total);
    const finalTotal = total - discount;
    const amountInCurrency = convertCurrency(finalTotal, currentCurrency);
    const currencySymbol = currencySymbols[currentCurrency];
    
    if (success) {
        paymentResult.innerHTML = `
            <div class="payment-result success">
                <i class="fas fa-check-circle"></i>
                <h4>تمت عملية الدفع بنجاح!</h4>
                <p>تم إتمام الدفع بقيمة ${formatPrice(amountInCurrency)} ${currencySymbol} باستخدام الذكاء الاصطناعي</p>
                <p>سيتم شحن طلبك خلال 24 ساعة باستخدام نظام الشحن الذكي</p>
                <button class="btn-primary" id="closePaymentSuccess">موافق</button>
            </div>
        `;
        
        document.getElementById('closePaymentSuccess').addEventListener('click', () => {
            aiPaymentModal.classList.remove('active');
        });
    } else {
        paymentResult.innerHTML = `
            <div class="payment-result failure">
                <i class="fas fa-times-circle"></i>
                <h4>فشلت عملية الدفع</h4>
                <p>يرجى المحاولة مرة أخرى أو استخدام طريقة دفع أخرى</p>
                <button class="btn-secondary" id="retryPayment">إعادة المحاولة</button>
            </div>
        `;
        
        document.getElementById('retryPayment').addEventListener('click', simulateAIPayment);
    }
    
    paymentResult.style.display = 'block';
}

// عملية الدفع
function processPayment() {
    const amount = parseFloat(paymentAmount.value);
    if (!amount || amount <= 0) {
        showNotification('error', 'خطأ', 'يرجى إدخال مبلغ صحيح');
        return;
    }
    
    updatePaymentModal();
    aiPaymentModal.classList.add('active');
    simulateAIPayment();
}

// تحميل قرارات الذكاء الاصطناعي
function loadAIDecisions() {
    const decisionsList = document.getElementById('aiDecisionsList');
    decisionsList.innerHTML = '';
    
    aiDecisions.forEach(decision => {
        const decisionItem = document.createElement('div');
        decisionItem.className = 'decision-item';
        
        const icon = decision.type === 'success' ? 'fa-check-circle' : 'fa-info-circle';
        const color = decision.type === 'success' ? 'var(--accent-color)' : 'var(--primary-color)';
        
        decisionItem.innerHTML = `
            <div class="decision-icon" style="background: ${color}">
                <i class="fas ${icon}"></i>
            </div>
            <div class="decision-text">
                <p>${decision.text}</p>
                <div class="decision-time">${decision.time}</div>
            </div>
        `;
        
        decisionsList.appendChild(decisionItem);
    });
}

// إضافة قرار جديد للذكاء الاصطناعي
function addAIDecision(text, type = 'info') {
    const time = new Date().toLocaleTimeString('ar-SA', {hour: '2-digit', minute:'2-digit'});
    
    aiDecisions.unshift({
        text,
        type,
        time
    });
    
    // الاحتفاظ بـ 5 قرارات فقط
    if (aiDecisions.length > 5) {
        aiDecisions.pop();
    }
    
    loadAIDecisions();
}

// محاكاة توصية الذكاء الاصطناعي
function simulateAIRecommendation() {
    const recommendations = [
        "بناءً على تحليل سلوك التسوق، نوصي بهاتف الهولوغرام الذكي 2050 للمستخدمين المهتمين بالتكنولوجيا المتقدمة.",
        "الذكاء الاصطناعي يحلل أن المنتجات الإلكترونية تشهد طلباً متزايداً بنسبة 30% هذا الشهر.",
        "نوصي بالاطلاع على قسم الملابس الذكية التي تتكيف مع الطقس، خاصة مع تغير الفصول."
    ];
    
    const randomRecommendation = recommendations[Math.floor(Math.random() * recommendations.length)];
    aiRecommendation.innerHTML = `<p>${randomRecommendation}</p>`;
}

// محاكاة اقتراحات الذكاء الاصطناعي
function simulateAISuggestions() {
    const suggestions = [
        "تخفيضات على الإلكترونيات لمدة 24 ساعة",
        "عرض خاص على الروبوت المنزلي الذكي",
        "خصم 20% على نظارات الواقع المعزز"
    ];
    
    const predictions = [
        "+15% هذا الأسبوع",
        "+8% في المبيعات اليوم",
        "+22% في قسم الإلكترونيات"
    ];
    
    document.getElementById('aiSuggestion').textContent = suggestions[Math.floor(Math.random() * suggestions.length)];
    document.getElementById('salesPrediction').textContent = predictions[Math.floor(Math.random() * predictions.length)];
}

// محاكاة إحصائيات الذكاء الاصطناعي
function simulateAIStats() {
    // تحديث الإحصائيات
    document.getElementById('aiSales').textContent = (24580 + Math.floor(Math.random() * 1000)).toLocaleString();
    document.getElementById('aiCustomers').textContent = (1254 + Math.floor(Math.random() * 50)).toLocaleString();
    document.getElementById('aiTransactions').textContent = (356 + Math.floor(Math.random() * 20)).toLocaleString();
    
    // تحديث لوحة التحكم
    document.getElementById('totalSales').textContent = (89999 + Math.floor(Math.random() * 10000)).toLocaleString();
    document.getElementById('inventoryCount').textContent = (156 + Math.floor(Math.random() * 20)).toLocaleString();
    document.getElementById('customerCount').textContent = (2547 + Math.floor(Math.random() * 100)).toLocaleString();
}

// التعامل مع إجراءات الذكاء الاصطناعي
function handleAIAction(action) {
    switch(action) {
        case 'forecast':
            showNotification('info', 'تنبؤ المبيعات', 'جارٍ تحليل البيانات للتنبؤ بمبيعات الشهر القادم...');
            setTimeout(() => {
                showNotification('success', 'تحليل مكتمل', 'يتوقع الذكاء الاصطناعي زيادة بنسبة 18% في المبيعات الشهر القادم');
            }, 2000);
            break;
        case 'reorder':
            showNotification('info', 'إعادة الطلب', 'جارٍ تحليل المخزون وإعادة طلب المنتجات المنخفضة تلقائياً...');
            setTimeout(() => {
                showNotification('success', 'تم الطلب', 'تم إعادة طلب 15 منتج تلقائياً بواسطة الذكاء الاصطناعي');
                addAIDecision("إعادة طلب تلقائي للمنتجات المنخفضة في المخزون", "success");
            }, 2000);
            break;
        case 'analyze':
            showNotification('info', 'تحليل العملاء', 'جارٍ تحليل سلوك العملاء وأنماط الشراء...');
            setTimeout(() => {
                showNotification('success', 'تحليل مكتمل', 'اكتشف الذكاء الاصطناعي أن 65% من العملاء يفضلون المنتجات الذكية');
            }, 2000);
            break;
        case 'manage':
            showNotification('info', 'التحكم الكامل', 'تفعيل وضع الإدارة الكاملة بالذكاء الاصطناعي...');
            setTimeout(() => {
                showNotification('success', 'تم التفعيل', 'الذكاء الاصطناعي يدير الآن جميع عمليات المتجر تلقائياً');
                addAIDecision("تفعيل وضع الإدارة الكاملة بالذكاء الاصطناعي", "success");
            }, 2000);
            break;
    }
}

// تبديل الخدمة
function toggleService(service, button) {
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        button.innerHTML = `<i class="fas fa-rocket"></i> ${currentLanguage === 'ar' ? 'تفعيل' : 'Activate'}`;
        showNotification('info', 'إيقاف الخدمة', `تم إيقاف خدمة ${service} مؤقتاً`);
    } else {
        button.classList.add('active');
        button.innerHTML = `<i class="fas fa-check"></i> ${currentLanguage === 'ar' ? 'مفعل' : 'Active'}`;
        showNotification('success', 'تفعيل الخدمة', `تم تفعيل خدمة ${service} بنجاح`);
        addAIDecision(`تفعيل خدمة ${service} الذكية`, "success");
    }
}

// عرض الإشعارات
function showNotification(type, title, message) {
    const notifications = document.getElementById('aiNotifications');
    
    const notification = document.createElement('div');
    notification.className = `ai-notification ${type}`;
    
    const icon = type === 'success' ? 'fa-check-circle' : 
                 type === 'error' ? 'fa-times-circle' : 
                 'fa-info-circle';
    
    notification.innerHTML = `
        <div class="notification-header">
            <i class="fas ${icon}"></i>
            <h5>${title}</h5>
        </div>
        <div class="notification-content">
            <p>${message}</p>
        </div>
    `;
    
    notifications.appendChild(notification);
    
    // إزالة الإشعار بعد 5 ثوانٍ
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// بدء التطبيق
document.addEventListener('DOMContentLoaded', initApp);

// محاكاة تحديثات الذكاء الاصطناعي في الوقت الحقيقي
setInterval(() => {
    simulateAIStats();
    simulateAISuggestions();
    
    // تحديث عشوائي للتوصية
    if (Math.random() > 0.7) {
        simulateAIRecommendation();
    }
    
    // إضافة قرارات ذكاء اصطناعي عشوائية
    if (Math.random() > 0.8) {
        const decisions = [
            "تعديل أسعار المنتجات بناءً على تحليل المنافسين",
            "تحسين توصيات المنتجات حسب الطقس الحالي",
            "إرسال تنبيهات ذكية للعملاء المهتمين",
            "تحسين واجهة المتجر بناءً على سلوك المستخدمين"
        ];
        
        const randomDecision = decisions[Math.floor(Math.random() * decisions.length)];
        addAIDecision(randomDecision, Math.random() > 0.5 ? "success" : "info");
    }
}, 10000);
