# Squarespace WhatsApp Chat Widget 💬
![Squarespace](https://img.shields.io/badge/Squarespace-Compatible-000000?style=for-the-badge&logo=squarespace&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

Add a sleek, professional WhatsApp chat widget to your Squarespace site to boost customer engagement and provide instant support! 🚀

## 🌟 Features
- Floating WhatsApp button with smooth hover effects
- Clean, modern popup design with profile picture
- Multi-language support built-in
- Mobile-friendly and responsive
- Customizable positioning (left/right)
- Auto-show/hide functionality
- Click-to-chat direct integration with WhatsApp
- No external dependencies

## 🎯 Purpose
This widget provides a frictionless way for visitors to initiate WhatsApp conversations with your business directly from your website. By offering instant messaging capabilities through a familiar platform, you can:
- Increase customer engagement rates
- Provide immediate support
- Boost conversion rates
- Build stronger customer relationships
- Offer multi-language support

## 🚀 Quick Start
1. Copy the entire widget code
2. Go to your Squarespace site's Settings > Advanced > Code Injection
3. Paste the code into the Footer section
4. Replace the `phoneNumber` in the config with your WhatsApp business number:
```javascript
const config = {
    phoneNumber: '1234567890', // Replace with your number (include country code)
    mainMessage: 'Hi there, have a question?\nClick here to WhatsApp us →',
    spanishMessage: 'Hablamos español.',
    position: 'right',
    delay: 3000
};
```

## 🛠 Customization
### Basic Customization
Modify the config object to customize:
- `phoneNumber`: Your WhatsApp number with country code
- `mainMessage`: Primary greeting message
- `spanishMessage`: Secondary language message
- `position`: Widget position ('right' or 'left')
- `delay`: Auto-show delay in milliseconds

### Advanced Styling
The widget uses modular CSS classes that you can easily customize:
- `.wa-chat-button`: Main floating button
- `.wa-chat-popup`: Message popup
- `.wa-chat-avatar`: Profile picture
- `.wa-chat-message`: Message container

## 📱 Mobile Compatibility
The widget is fully responsive and works seamlessly on all devices. On mobile, it integrates directly with the WhatsApp mobile app for a native experience.

## 🔍 How It Works
The widget:
1. Creates a floating WhatsApp button on your site
2. Shows a customizable popup message when clicked
3. Connects directly to WhatsApp when the message is clicked
4. Handles click events and animations smoothly
5. Provides a non-intrusive user experience

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to submit pull requests or open issues.

## 📝 License
Distributed under the MIT License. See `LICENSE` for more information.

## ⚙️ Technical Details
- Pure JavaScript implementation
- No jQuery or external dependencies
- Lightweight and performant
- SEO-friendly
- GDPR-compliant (no data collection)

## 🎨 Design Features
- Modern, clean interface
- Smooth animations
- Responsive layout
- Customizable appearance
- Professional typography

## 💡 Tips for Best Use
1. Use a business WhatsApp number
2. Add a professional profile picture
3. Customize messages for your audience
4. Consider timezone differences in auto-show timing
5. Test on multiple devices and browsers

## 🌐 Multi-Language Support
The widget supports multiple languages through customizable message fields. Default implementation includes English and Spanish, but can be modified for any language.

---
⭐️ If this widget helped improve your customer engagement, consider giving it a star!

*Note: This widget is designed for use with WhatsApp Business accounts for optimal customer service management.*
