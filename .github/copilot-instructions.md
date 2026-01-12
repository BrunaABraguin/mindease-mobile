# MindEase Mobile - AI Development Guide

MindEase is a React Native/Expo wellness app designed for neurodivergent users with cognitive accessibility in mind.

## Project Architecture

### Core Technologies
- **Expo Router** with file-based routing in `app/` directory 
- **React Native** with TypeScript strict mode
- **Zustand** for state management (see `stores/`)
- **react-native-size-matters** for responsive scaling

### Key Patterns

#### Theme System (Cognitive Accessibility First)
The app features an extensive cognitive accessibility-focused theme system:
- **Location**: `utils/theme.ts` (644 lines) - comprehensive color and spacing system
- **Hook**: `hooks/useTheme.ts` + `stores/themeStore.ts` for theme state
- **Multiple cognitive modes**: `standard`, `highContrast`, `focus`, `calm` + dark variants
- **Semantic color groups**: `background`, `text`, `accent`, `semantic`, `graphic`, `cognitive`
- **Scaled dimensions**: All spacing uses `scale()`, `verticalScale()` via `react-native-size-matters`

```tsx
// Always use theme colors and scaled dimensions
const { colors } = useTheme();
<View style={{ backgroundColor: colors.background.primary, padding: spacingX._25 }} />
```

#### Component Structure
- **ScreenWrapper**: Standard screen container with theme-aware background and padding
- **Tab Icons**: Custom icon components in `components/tab-icons.tsx` with focus-aware colors
- **TypeScript Types**: Centralized in `utils/types.ts` (includes `TabIconComponent`, `Colors`)

#### File Organization
```
app/                    # Expo Router pages
├── _layout.tsx         # Root layout with Stack navigation
├── (tabs)/            # Tab-based navigation group
│   ├── _layout.tsx    # Tab layout configuration
│   └── *.tsx          # Individual tab screens
components/            # Reusable UI components
hooks/                 # Custom React hooks
stores/                # Zustand stores
utils/                 # Theme system, types, utilities
assets/images/         # Static assets
```

#### Navigation & Screens
- Uses Expo Router with typed routes (`experiments.typedRoutes: true`)
- Tab navigation with cognitive-friendly icons and colors
- All screens wrap content in `ScreenWrapper` for consistency

### Development Workflow

#### Commands
```bash
npm start                    # Start Expo dev server
npm run android/ios/web     # Platform-specific builds  
npm run lint                # ESLint validation
npm run reset-project       # Reset to blank project (moves current to app-example/)
```

#### Key Files to Understand
1. **`utils/theme.ts`** - Master theme system with cognitive accessibility
2. **`app/(tabs)/_layout.tsx`** - Tab navigation configuration  
3. **`hooks/useTheme.ts`** - Theme consumption pattern
4. **`components/ScreenWrapper.tsx`** - Standard screen layout

### Cognitive Accessibility Guidelines

#### Always Consider
- Multiple cognitive modes (`standard`, `highContrast`, `focus`, `calm`)
- Semantic color usage from theme system
- Proper font weights for cognitive hierarchy (`fontWeightGroups`)
- Responsive scaling for all dimensions
- Tab icons change color based on focus state for better UX

#### Theme Color Selection
```tsx
// Semantic colors for different states
colors.cognitive.timerFocus    // Red for focus sessions
colors.cognitive.timerBreak    // Green for break sessions  
colors.semantic.success        // For positive actions
colors.graphic.pink           // For illustrations/missions
```

### App-Specific Notes
- **App Name**: "MindEase" (wellness/productivity focus)
- **Primary Features**: Pomodoro timer, habits, tasks, missions, profile
- **Target Users**: Neurodivergent individuals needing cognitive accessibility
- **Current State**: Basic tab structure, early development phase
- **Expo SDK**: ~54.0.31 with new architecture enabled (`newArchEnabled: true`)