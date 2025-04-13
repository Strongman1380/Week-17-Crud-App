# Aspire Impact Network Web Application

## Overview

The Aspire Impact Network web application is a dual-purpose platform designed to support the organization's mission of empowering communities and elevating brands across Nebraska. This React-based application provides both community service management tools and showcases the organization's digital solutions offerings.

## Mission

Aspire Impact Network is dedicated to supporting individuals, families, and small businesses through:

- Compassionate social services and community support programs
- Innovative digital solutions and business services

## Features

### Community Services

- User management system for tracking community members
- Case management tools
- Support for reentry services
- Family wraparound programming

### Digital Solutions

- Professional branding services
- Web development offerings
- Marketing support
- Business automation solutions

## Technology Stack

- **Frontend Framework**: React 18
- **Routing**: React Router v6
- **Styling**: CSS with Bootstrap components
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Development Tools**: ESLint, Prettier

## Project Structure

```
├── public/             # Static assets and HTML template
├── src/                # Source code
│   ├── api/            # API integration modules
│   ├── assets/         # Images, fonts, and other assets
│   ├── components/     # Reusable UI components
│   ├── data/           # Static data and constants
│   ├── pages/          # Page components
│   ├── services/       # Business logic services
│   ├── styles/         # CSS and styling files
│   ├── utils/          # Utility functions and helpers
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── app.css             # Application-specific styles
├── index.css           # Global styles
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
└── vit.config.js       # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-organization/aspire-impact-network.git
   cd aspire-impact-network
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## API Integration

The application currently uses a mock API for development purposes. In production, update the API base URL in `src/utils/api.js`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and owned by Aspire Impact Network.

## Contact

Aspire Impact Network - [info@aspireimpact.org](mailto:info@aspireimpact.org)

Project Link: [https://github.com/your-organization/aspire-impact-network](https://github.com/your-organization/aspire-impact-network)