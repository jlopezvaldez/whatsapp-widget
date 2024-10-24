// WhatsApp Chat Widget Script
(function() {
    // Configuration
    const config = {
        phoneNumber: '14806344505', // Replace with your WhatsApp number (with country code)
        mainMessage: 'Hi there, have a question?\nClick here to WhatsApp us →',
        spanishMessage: 'Hablamos español.',
        position: 'right', // 'right' or 'left'
        brandColor: '#25D366', // WhatsApp green
        delay: 3000 // Delay before showing popup (milliseconds)
    };

    // Create CSS styles
    const styles = `
        .wa-chat-widget-container {
            position: fixed;
            bottom: 20px;
            ${config.position}: 20px;
            z-index: 9999;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .wa-chat-button {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: ${config.brandColor};
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 8px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
        }

        .wa-chat-button:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }

        .wa-chat-popup {
            position: absolute;
            bottom: 80px;
            ${config.position}: 0;
            width: 320px;
            background: white;
            border-radius: 24px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
            pointer-events: none;
            padding: 20px;
        }

        .wa-chat-popup.show {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
        }

        .wa-chat-content {
            display: flex;
            align-items: center;
            gap: 15px;
            transition: transform 0.3s ease;
        }

        /* Hover effect for the entire content */
        .wa-chat-link:hover .wa-chat-content {
            transform: translateX(5px);
        }

        .wa-chat-avatar {
            width: 48px;
            height: 48px;
            min-width: 48px;
            border-radius: 50%;
            overflow: hidden;
            background: #f0f0f0;
            flex-shrink: 0;
        }

        .wa-chat-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .wa-chat-message {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding-top: 4px;
        }

        .wa-chat-main-text {
            font-size: 16px;
            color: #1f1f1f;
            line-height: 1.4;
            margin: 0;
            white-space: pre-line; 
        }

        .wa-chat-spanish-text {
            font-size: 15px;
            color: #4a4a4a;
            line-height: 1.4;
            margin: 0;
        }

        .wa-chat-link {
            text-decoration: none;
            display: block;
            width: 100%;
            height: 100%;
            cursor: pointer;
            border-radius: 24px;
            transition: transform 0.3s ease;
        }

        /* Subtle pulsing animation for the popup when it first appears */
        @keyframes subtle-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }

        .wa-chat-popup.show {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
            animation: subtle-bounce 2s ease-in-out;
        }
    `;

    // Create WhatsApp icon SVG
    const whatsappIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.784 23.456l4.5-1.442C7.236 23.254 9.546 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.244 4.67c6.06 0 10.033 6.177 7.725 11.728-2.307 5.55-9.523 7.09-13.854 3.002-3.087-2.928-3.398-7.853-.712-11.166 1.661-2.05 4.143-3.564 6.841-3.564zm-.99 3.124c-.331-.008-.666.086-.957.275-.391.252-1.188.852-1.188 2.081 0 1.229.859 2.416 .977 2.582.119.166 1.644 2.632 4.065 3.589 2.421.957 2.421.637 2.859.596.437-.04 1.41-.596 1.608-1.171.198-.574.198-1.068.139-1.171-.06-.103-.218-.166-.456-.291s-1.41-.715-1.628-.795c-.218-.079-.377-.119-.535.119-.159.238-.614.795-.752.956-.139.166-.277.187-.516.064-.238-.125-1.005-.379-1.913-1.205-.706-.647-1.184-1.447-1.322-1.686-.139-.238-.015-.369.104-.487.107-.106.238-.277.357-.415.119-.139.159-.238.238-.397.08-.158.04-.297-.02-.415-.059-.119-.525-1.308-.74-1.786-.184-.402-.381-.417-.557-.425z"/>
        </svg>
    `;

    // Create widget HTML
    const widgetHTML = `
        <div class="wa-chat-widget-container">
            <div class="wa-chat-button">${whatsappIcon}</div>
            <div class="wa-chat-popup">
                <a href="https://wa.me/${config.phoneNumber}" target="_blank" class="wa-chat-link">
                    <div class="wa-chat-content">
                        <div class="wa-chat-avatar">
                            <img src="girl.jpg" alt="Support Agent"/>
                        </div>
                        <div class="wa-chat-message">
                            <div class="wa-chat-main-text">${config.mainMessage}</div>
                            <div class="wa-chat-spanish-text">${config.spanishMessage}</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    `;

    // Create and inject styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Add widget to page
    const widgetContainer = document.createElement('div');
    widgetContainer.innerHTML = widgetHTML;
    document.body.appendChild(widgetContainer);

    // Add event listeners
    const chatButton = document.querySelector('.wa-chat-button');
    const chatPopup = document.querySelector('.wa-chat-popup');
    let popupTimeout;

    // Make both button and popup clickable
    chatButton.addEventListener('click', (e) => {
        if (!chatPopup.classList.contains('show')) {
            chatPopup.classList.add('show');
        } else {
            window.open(`https://wa.me/${config.phoneNumber}`, '_blank');
        }
        e.stopPropagation();
    });

    chatPopup.addEventListener('click', (e) => {
        window.open(`https://wa.me/${config.phoneNumber}`, '_blank');
        e.stopPropagation();
    });

    // Show popup after delay
    popupTimeout = setTimeout(() => {
        chatPopup.classList.add('show');
        setTimeout(() => {
            chatPopup.classList.remove('show');
        }, 5000);
    }, config.delay);

    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.wa-chat-widget-container')) {
            chatPopup.classList.remove('show');
        }
    });
})();