# Ayur-Sutra Mobile App

A comprehensive React Native application for Ayurvedic healthcare management, built with TypeScript, Expo, and inline styling.

## 🌟 Features

### For Patients
- **Session Management**: View today's sessions, upcoming appointments, and completed treatments
- **Multi-language Support**: Available in English and Hindi
- **Feedback System**: Rate and review doctors and treatments
- **Notifications**: Real-time updates about appointments, prescriptions, and messages
- **Voice Assistant**: Voice-powered navigation and queries
- **Secure Authentication**: Role-based login system

### For Doctors
- **Dashboard**: Overview of daily schedule and pending actions
- **Patient Management**: Search and manage patient appointments
- **Schedule Management**: View and manage appointment calendar
- **Feedback Review**: Access patient feedback and ratings
- **Drawer Navigation**: Easy access to all features

### Common Features
- **Responsive Design**: Optimized for all screen sizes
- **Offline Support**: Basic functionality works offline
- **Push Notifications**: Real-time appointment and system notifications
- **Secure Data**: All sensitive data is properly encrypted
- **Accessibility**: Full accessibility support for all users

## 🏗️ Architecture

### Technology Stack
- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Styling**: Inline Styles (no external CSS frameworks)
- **Navigation**: React Navigation v6
- **State Management**: React Context API
- **Internationalization**: react-i18next
- **Icons**: Expo Vector Icons
- **API**: Mock API with TypeScript interfaces

### Project Structure
```
ayur_app/
├── assets/                 # Images, icons, and other static assets
│   ├── images/
│   └── icons/
├── src/
│   ├── api/               # Mock data and API functions
│   │   └── mockData.ts
│   ├── components/        # Reusable UI components
│   │   ├── common/        # Generic components (Button, Input, etc.)
│   │   ├── doctor/        # Doctor-specific components
│   │   └── patient/       # Patient-specific components
│   ├── context/           # React Context providers
│   │   └── AuthContext.tsx
│   ├── hooks/             # Custom React hooks
│   │   ├── index.ts
│   │   └── useTranslation.ts
│   ├── locales/           # Translation files
│   │   ├── en.json        # English translations
│   │   └── hi.json        # Hindi translations
│   ├── navigation/        # Navigation configuration
│   │   ├── AppNavigator.tsx
│   │   ├── DoctorTabs.tsx
│   │   ├── PatientTabs.tsx
│   │   └── CustomDrawerContent.tsx
│   ├── screens/           # Screen components
│   │   ├── auth/          # Authentication screens
│   │   ├── common/        # Shared screens
│   │   ├── doctor/        # Doctor-specific screens
│   │   └── patient/       # Patient-specific screens
│   ├── services/          # API and external services
│   │   ├── api.ts
│   │   └── authService.ts
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   └── utils/             # Utility functions and constants
│       ├── constants.ts
│       ├── themes.ts
│       └── i18n.ts
├── App.tsx               # Main application component
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ayur-sutra.git
   cd ayur-sutra/ayur_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run on your device**
   - Install Expo Go app on your mobile device
   - Scan the QR code from the terminal
   - Or press 'a' for Android emulator, 'i' for iOS simulator

### Build for Production

1. **Build APK (Android)**
   ```bash
   expo build:android
   ```

2. **Build IPA (iOS)**
   ```bash
   expo build:ios
   ```

## 📱 App Screens

### Authentication Flow
- **SplashScreen**: App logo and branding
- **LoginScreen**: User type selection (Doctor/Patient) and login form

### Doctor Flow
- **DoctorDashboard**: Daily schedule overview and pending actions
- **DoctorSchedule**: Detailed appointment calendar
- **DoctorFeedback**: Patient feedback and ratings
- **NotificationsScreen**: System notifications
- **VoiceBotScreen**: Voice assistant interface

### Patient Flow
- **PatientDashboard**: Session overview and management
- **PatientSessions**: Detailed session history
- **PatientFeedback**: Rate and review doctors
- **NotificationsScreen**: System notifications
- **VoiceBotScreen**: Voice assistant interface

## 🌍 Internationalization

The app supports multiple languages using react-i18next:

- **English (en)**: Default language
- **Hindi (hi)**: Full translation support

### Adding New Languages

1. Create a new JSON file in `src/locales/` (e.g., `fr.json`)
2. Add translations following the existing structure
3. Update `src/utils/i18n.ts` to include the new language
4. Update the language picker in settings

## 🎨 Theming and Styling

The app uses a comprehensive theming system with inline styles:

### Color Palette
- **Primary**: #00BFA5 (Teal)
- **Secondary**: #2C3E50 (Dark Blue)
- **Background**: #F8F9FA (Light Gray)
- **Success**: #27AE60 (Green)
- **Warning**: #F39C12 (Orange)
- **Error**: #E74C3C (Red)

### Typography
- System fonts with consistent sizing
- Weight variations: light, normal, medium, semiBold, bold
- Responsive font sizes

### Component Styling
All components use inline styles for:
- Better performance
- Component portability
- TypeScript integration
- No external dependencies

## 🔐 Authentication & Security

### Authentication Flow
1. User selects type (Doctor/Patient)
2. Enters credentials
3. JWT token received and stored
4. Role-based navigation

### Security Features
- Secure token storage
- API request authentication
- Input validation and sanitization
- Role-based access control

## 📊 Mock Data & API

The app includes comprehensive mock data for development:

### Mock Data Includes
- Users (Doctors and Patients)
- Appointments and Sessions
- Notifications
- Feedback and Ratings
- Therapy Session Types

### API Functions
- User authentication
- Appointment management
- Notification handling
- Feedback submission
- Search functionality

## 🔊 Voice Assistant

The app includes a voice assistant feature for:
- Navigation commands
- Appointment queries
- Health information
- Accessibility support

## 📋 Testing

### Unit Tests
```bash
npm test
# or
yarn test
```

### E2E Tests
```bash
npm run test:e2e
# or
yarn test:e2e
```

## 🚀 Deployment

### Expo Application Services (EAS)
```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Configure project
eas build:configure

# Build for production
eas build --platform all
```

### App Store Deployment
1. Build production version
2. Test thoroughly on devices
3. Submit to App Store/Play Store
4. Monitor app performance and user feedback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style Guidelines
- Use TypeScript for all new code
- Follow existing naming conventions
- Add appropriate comments and documentation
- Write unit tests for new features
- Follow the existing folder structure

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Development**: React Native, TypeScript, UI/UX
- **Backend Integration**: API development, authentication
- **Testing**: Unit tests, integration tests, E2E tests
- **DevOps**: CI/CD, deployment, monitoring

## 🆘 Support

For support, email support@ayursutra.com or join our Slack channel.

## 🔮 Future Enhancements

- [ ] Video consultation integration
- [ ] AI-powered health recommendations
- [ ] Wearable device integration
- [ ] Advanced analytics dashboard
- [ ] Telemedicine features
- [ ] Integration with pharmacy systems
- [ ] Offline synchronization
- [ ] Advanced voice assistant features

## 📚 Documentation

- [API Documentation](docs/api.md)
- [Component Documentation](docs/components.md)
- [Deployment Guide](docs/deployment.md)
- [Testing Guide](docs/testing.md)

---

**Ayur-Sutra** - Your holistic health companion 🌿