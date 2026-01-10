# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
# Start Metro bundler
npm start

# Run on Android (emulator or connected device)
npx react-native run-android

# Run on specific Android device
npx react-native run-android --device <device-id>

# Run on iOS
npx react-native run-ios

# Lint
npm run lint

# Run tests
npm test

# Clean Android build
cd android && ./gradlew clean && cd ..

# Reset Metro cache
npx react-native start --reset-cache
```

## Architecture

This is a React Native app for forestry inventory management with a modular component structure.

### Project Structure

```
src/
├── types/                    # TypeScript interfaces
│   ├── Coordinate.ts         # Lat/lng coordinate
│   ├── Region.ts             # Map region with deltas
│   ├── InventoryPoint.ts     # Single point marker
│   ├── InventoryArea.ts      # Polygon area
│   └── InventoryItem.ts      # Union of Point | Area
├── hooks/
│   ├── useLocation.ts        # GPS tracking, permissions
│   └── useInventory.ts       # Items CRUD, AsyncStorage
├── styles/                   # Separate stylesheets per component
│   ├── HeaderStyles.ts
│   ├── ToolPanelStyles.ts
│   ├── CrosshairStyles.ts
│   ├── ItemModalStyles.ts
│   ├── SidebarStyles.ts
│   ├── ItemCardStyles.ts
│   ├── MapStyles.ts
│   └── index.ts
├── components/
│   ├── Header.tsx            # Status bar (online/GPS)
│   ├── ToolPanel.tsx         # Left toolbar buttons
│   ├── Crosshair.tsx         # Crosshair overlay + confirm button
│   ├── ItemModal.tsx         # Add/edit item form
│   ├── Sidebar/
│   │   ├── Sidebar.tsx       # Items list + export
│   │   └── ItemCard.tsx      # Individual item card
│   └── Map/
│       └── InventoryMap.tsx  # MapView with markers/polygons
└── constants.ts              # STORAGE_KEY, DEFAULT_REGION
```

### Key Patterns

- **Custom Hooks**: `useLocation` handles GPS/permissions, `useInventory` handles item state and persistence
- **Component Props**: Each component receives callbacks for actions (onToggle, onDelete, etc.)
- **Type Exports**: All types exported from `src/types/index.ts`
- **Component Exports**: All components exported from `src/components/index.ts`

### App.tsx Responsibilities

- Orchestrates drawing mode state (`none` | `point` | `area`)
- Manages area points during polygon creation
- Handles modal visibility and current item being edited
- Composes all components together

### Known Issue

The `@react-native-community/geolocation` package has a version conflict with newer Google Play Services. If the app crashes on location access with `IncompatibleClassChangeError`, pin `play-services-location` to version 21.0.1 in android/build.gradle.
