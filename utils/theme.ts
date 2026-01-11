import { scale, verticalScale } from "react-native-size-matters";

/**
 * MindEase Color Library
 * Designed for cognitive accessibility and neurodivergent users
 * Supports Light and Dark modes with cognitive considerations
 */

const baseColors = {
  // Background Colors
  white: "#FFFFFF",
  black: "#000000",

  // Accent Colors (Main theme colors)
  sageMint: "#88BC95", // Light sage green
  celestialBlue: "#8DDEFC", // Light sky blue
  softLime: "#9FDC7F", // Soft lime green

  // Graphic/Illustration Colors
  palePink: "#F8B8C6", // Pale pink
  warmGold: "#F0B75E", // Warm golden yellow
  deepNavy: "#172034", // Deep navy blue
} as const;

// Light Mode Color System
export const lightColors = {
  // Background System
  background: {
    primary: baseColors.white, // Main background
    secondary: "#F9FAFB", // Secondary background (very light gray)
    modal: "rgba(0, 0, 0, 0.85)", // Modal/overlay background
    card: baseColors.white, // Card background
    focus: "#F0FDF4", // Focus mode background (very light green)
    disabled: "#F3F4F6", // Disabled state background
    error: "#FEF2F2", // Error state background
    warning: "#FFFBEB", // Warning state background
    success: "#F0FDF4", // Success state background
    info: "#EFF6FF", // Info state background
    elevated: "#FFFFFF", // Elevated surfaces
    surface: "#FAFAFA", // Surface color
  },

  // Text System
  text: {
    primary: baseColors.black, // Main text color
    secondary: "#4B5563", // Secondary text
    tertiary: "#6B7280", // Tertiary text
    muted: "#9CA3AF", // Muted text
    inverse: baseColors.white, // Text on dark backgrounds
    link: baseColors.sageMint, // Link color
    linkHover: "#5A9268", // Link hover state
    disabled: "#D1D5DB", // Disabled text
    error: "#DC2626", // Error text
    warning: "#D97706", // Warning text
    success: "#059669", // Success text
    info: "#2563EB", // Info text
    placeholder: "#9CA3AF", // Placeholder text
  },

  // Accent System (Primary interactive elements)
  accent: {
    primary: baseColors.sageMint, // Primary accent (sage mint)
    primaryHover: "#5A9268", // Primary accent hover
    primaryFocus: "#4A7C59", // Primary accent focus
    secondary: baseColors.celestialBlue, // Secondary accent (celestial blue)
    secondaryHover: "#5BC8F0", // Secondary accent hover
    secondaryFocus: "#0EA5E9", // Secondary accent focus
    tertiary: baseColors.softLime, // Tertiary accent (soft lime)
    tertiaryHover: "#7CB518", // Tertiary accent hover
    tertiaryFocus: "#65A30D", // Tertiary accent focus
  },

  // Semantic Colors
  semantic: {
    error: "#DC2626",
    errorHover: "#B91C1C",
    errorLight: "#FEF2F2",
    warning: "#D97706",
    warningHover: "#B45309",
    warningLight: "#FFFBEB",
    success: "#059669",
    successHover: "#047857",
    successLight: "#F0FDF4",
    info: "#2563EB",
    infoHover: "#1D4ED8",
    infoLight: "#EFF6FF",
  },

  // Graphic/Illustration Colors
  graphic: {
    pink: baseColors.palePink,
    pinkLight: "#FDEEF3",
    gold: baseColors.warmGold,
    goldLight: "#FEF3E2",
    navy: baseColors.deepNavy,
    navyLight: "#E0E7FF",
  },

  // Cognitive Accessibility Specific Colors
  cognitive: {
    // Focus Mode Colors (reduced stimulation)
    focusBackground: "#FAFAFA",
    focusText: "#1F2937",
    focusBorder: "#E5E7EB",

    // High Contrast Mode
    highContrastBg: baseColors.white,
    highContrastText: baseColors.black,
    highContrastAccent: "#0F172A",

    // Calm Mode (very soft colors)
    calmBackground: "#F8FAFC",
    calmAccent: "#94A3B8",
    calmText: "#475569",

    // Progress/Timer Colors
    timerFocus: "#DC2626", // Red for focus sessions
    timerBreak: "#059669", // Green for break sessions
    progressBar: baseColors.sageMint, // Progress indicator
    habitStreak: baseColors.warmGold, // Habit streak indicator
  },

  // Border Colors
  border: {
    light: "#F3F4F6",
    default: "#E5E7EB",
    medium: "#D1D5DB",
    dark: "#9CA3AF",
    accent: baseColors.sageMint,
    focus: "#3B82F6",
    error: "#DC2626",
    warning: "#D97706",
    success: "#059669",
  },

  // Shadow Colors (for cognitive-friendly shadows)
  shadow: {
    light: "rgba(0, 0, 0, 0.05)",
    medium: "rgba(0, 0, 0, 0.10)",
    dark: "rgba(0, 0, 0, 0.15)",
    colored: "rgba(136, 188, 149, 0.15)", // Sage mint shadow
  },
} as const;

// Dark Mode Color System
export const darkColors = {
  // Background System - Dark mode optimized for cognitive accessibility
  background: {
    primary: "#0F172A", // Main dark background (soft, not pure black)
    secondary: "#1E293B", // Secondary background
    modal: "rgba(15, 23, 42, 0.95)", // Modal/overlay background
    card: "#1E293B", // Card background
    focus: "#0F1419", // Focus mode background (darker for concentration)
    disabled: "#334155", // Disabled state background
    error: "#1F1C1C", // Error state background (dark red tint)
    warning: "#1C1917", // Warning state background (dark amber tint)
    success: "#0C1B17", // Success state background (dark green tint)
    info: "#0F1629", // Info state background (dark blue tint)
    elevated: "#1E293B", // Elevated surfaces
    surface: "#334155", // Surface color
  },

  // Text System - Optimized for dark backgrounds with cognitive consideration
  text: {
    primary: "#F8FAFC", // Main text color (soft white, easier on eyes)
    secondary: "#CBD5E1", // Secondary text
    tertiary: "#94A3B8", // Tertiary text
    muted: "#64748B", // Muted text
    inverse: "#0F172A", // Text on light backgrounds
    link: "#7DD3FC", // Link color (lighter celestial blue for dark)
    linkHover: "#38BDF8", // Link hover state
    disabled: "#475569", // Disabled text
    error: "#F87171", // Error text (softer red)
    warning: "#FBBF24", // Warning text (softer yellow)
    success: "#4ADE80", // Success text (softer green)
    info: "#60A5FA", // Info text (softer blue)
    placeholder: "#64748B", // Placeholder text
  },

  // Accent System - Adjusted for dark mode visibility and cognitive comfort
  accent: {
    primary: "#A7F3D0", // Primary accent (lighter sage mint for dark)
    primaryHover: "#6EE7B7", // Primary accent hover
    primaryFocus: "#34D399", // Primary accent focus
    secondary: "#7DD3FC", // Secondary accent (lighter celestial blue)
    secondaryHover: "#38BDF8", // Secondary accent hover
    secondaryFocus: "#0EA5E9", // Secondary accent focus
    tertiary: "#BEF264", // Tertiary accent (lighter soft lime)
    tertiaryHover: "#A3E635", // Tertiary accent hover
    tertiaryFocus: "#84CC16", // Tertiary accent focus
  },

  // Semantic colors adapted for dark mode
  semantic: {
    error: "#F87171", // Softer red for dark mode
    errorHover: "#EF4444",
    errorLight: "#1F1C1C",
    warning: "#FBBF24", // Softer yellow for dark mode
    warningHover: "#F59E0B",
    warningLight: "#1C1917",
    success: "#4ADE80", // Softer green for dark mode
    successHover: "#22C55E",
    successLight: "#0C1B17",
    info: "#60A5FA", // Softer blue for dark mode
    infoHover: "#3B82F6",
    infoLight: "#0F1629",
  },

  // Graphic colors adapted for dark mode
  graphic: {
    pink: "#F9A8D4", // Lighter pink for dark mode
    pinkLight: "#2D1B2E",
    gold: "#FCD34D", // Lighter gold for dark mode
    goldLight: "#1F1B16",
    navy: "#60A5FA", // Converted to lighter blue for dark mode
    navyLight: "#1E3A8A",
  },

  // Cognitive accessibility colors for dark mode
  cognitive: {
    focusBackground: "#020617", // Ultra dark for maximum focus
    focusText: "#F1F5F9", // High contrast text
    focusBorder: "#334155", // Subtle border
    highContrastBg: "#000000", // Pure black for high contrast
    highContrastText: "#FFFFFF", // Pure white text
    highContrastAccent: "#FFFFFF", // White accent for high contrast
    calmBackground: "#0F172A", // Calm dark background
    calmAccent: "#64748B", // Calm muted accent
    calmText: "#CBD5E1", // Calm soft text
    timerFocus: "#F87171", // Softer red for timer
    timerBreak: "#4ADE80", // Softer green for timer
    progressBar: "#A7F3D0", // Light sage mint for progress
    habitStreak: "#FCD34D", // Light gold for streaks
  },

  // Border colors for dark mode
  border: {
    light: "#334155",
    default: "#475569",
    medium: "#64748B",
    dark: "#94A3B8",
    accent: "#A7F3D0",
    focus: "#60A5FA",
    error: "#F87171",
    warning: "#FBBF24",
    success: "#4ADE80",
  },

  // Shadow colors for dark mode
  shadow: {
    light: "rgba(0, 0, 0, 0.3)",
    medium: "rgba(0, 0, 0, 0.5)",
    dark: "rgba(0, 0, 0, 0.7)",
    colored: "rgba(167, 243, 208, 0.15)", // Sage mint shadow
  },
} as const;

// Export light colors as default for backward compatibility
export const colors = lightColors;

// Color Modes for Cognitive Accessibility with Light/Dark support
export const colorModes = {
  // Light Modes
  light: lightColors,
  lightHighContrast: {
    ...lightColors,
    background: {
      ...lightColors.background,
      primary: baseColors.white,
      secondary: "#F9FAFB",
      card: baseColors.white,
    },
    text: {
      ...lightColors.text,
      primary: baseColors.black,
      secondary: "#1F2937",
      tertiary: "#374151",
    },
    accent: {
      ...lightColors.accent,
      primary: "#1F2937",
      secondary: "#374151",
      tertiary: "#4B5563",
    },
  },
  lightFocus: {
    ...lightColors,
    background: {
      ...lightColors.background,
      primary: "#FAFAFA",
      secondary: "#F5F5F5",
      card: "#FFFFFF",
    },
    accent: {
      ...lightColors.accent,
      primary: "#6B7280",
      secondary: "#9CA3AF",
      tertiary: "#D1D5DB",
    },
  },
  lightCalm: {
    ...lightColors,
    background: {
      ...lightColors.background,
      primary: "#F8FAFC",
      secondary: "#F1F5F9",
      card: "#FFFFFF",
    },
    accent: {
      ...lightColors.accent,
      primary: "#94A3B8",
      secondary: "#CBD5E1",
      tertiary: "#E2E8F0",
    },
    text: {
      ...lightColors.text,
      primary: "#475569",
      secondary: "#64748B",
      tertiary: "#94A3B8",
    },
  },

  // Dark Modes
  dark: darkColors,
  darkHighContrast: {
    ...darkColors,
    background: {
      ...darkColors.background,
      primary: baseColors.black,
      secondary: "#111827",
      card: "#1F2937",
    },
    text: {
      ...darkColors.text,
      primary: baseColors.white,
      secondary: "#F3F4F6",
      tertiary: "#E5E7EB",
    },
    accent: {
      ...darkColors.accent,
      primary: baseColors.white,
      secondary: "#E5E7EB",
      tertiary: "#D1D5DB",
    },
  },
  darkFocus: {
    ...darkColors,
    background: {
      ...darkColors.background,
      primary: "#020617",
      secondary: "#0F172A",
      card: "#1E293B",
    },
    accent: {
      ...darkColors.accent,
      primary: "#64748B",
      secondary: "#475569",
      tertiary: "#334155",
    },
  },
  darkCalm: {
    ...darkColors,
    background: {
      ...darkColors.background,
      primary: "#0F172A",
      secondary: "#1E293B",
      card: "#334155",
    },
    accent: {
      ...darkColors.accent,
      primary: "#64748B",
      secondary: "#475569",
      tertiary: "#334155",
    },
    text: {
      ...darkColors.text,
      primary: "#CBD5E1",
      secondary: "#94A3B8",
      tertiary: "#64748B",
    },
  },

  // Legacy modes (for backward compatibility)
  standard: lightColors,
  highContrast: {
    ...lightColors,
    background: {
      ...lightColors.background,
      primary: baseColors.white,
      secondary: "#F9FAFB",
      card: baseColors.white,
    },
    text: {
      ...lightColors.text,
      primary: baseColors.black,
      secondary: "#1F2937",
      tertiary: "#374151",
    },
    accent: {
      ...lightColors.accent,
      primary: "#1F2937",
      secondary: "#374151",
      tertiary: "#4B5563",
    },
  },
  focus: {
    ...lightColors,
    background: {
      ...lightColors.background,
      primary: "#FAFAFA",
      secondary: "#F5F5F5",
      card: "#FFFFFF",
    },
    accent: {
      ...lightColors.accent,
      primary: "#6B7280",
      secondary: "#9CA3AF",
      tertiary: "#D1D5DB",
    },
  },
  calm: {
    ...lightColors,
    background: {
      ...lightColors.background,
      primary: "#F8FAFC",
      secondary: "#F1F5F9",
      card: "#FFFFFF",
    },
    accent: {
      ...lightColors.accent,
      primary: "#94A3B8",
      secondary: "#CBD5E1",
      tertiary: "#E2E8F0",
    },
    text: {
      ...lightColors.text,
      primary: "#475569",
      secondary: "#64748B",
      tertiary: "#94A3B8",
    },
  },
} as const;

// Utility function to get colors based on mode
export const getColorsByMode = (mode: keyof typeof colorModes = "light") => {
  return colorModes[mode];
};

// Utility function to determine if mode is dark
export const isDarkMode = (mode: keyof typeof colorModes) => {
  return mode.startsWith("dark");
};

// Utility function to get adaptive colors based on system theme
export const getAdaptiveColors = (
  isDark: boolean = false,
  cognitiveMode: "standard" | "highContrast" | "focus" | "calm" = "standard"
) => {
  const prefix = isDark ? "dark" : "light";
  const suffix =
    cognitiveMode === "standard"
      ? ""
      : cognitiveMode.charAt(0).toUpperCase() + cognitiveMode.slice(1);
  const modeKey = `${prefix}${suffix}` as keyof typeof colorModes;

  return getColorsByMode(modeKey);
};

// Export specific color groups for easier imports
export const backgroundColors = colors.background;
export const textColors = colors.text;
export const accentColors = colors.accent;
export const semanticColors = colors.semantic;
export const graphicColors = colors.graphic;
export const cognitiveColors = colors.cognitive;
export const borderColors = colors.border;
export const shadowColors = colors.shadow;

export const spacingX = {
  _3: scale(3),
  _5: scale(5),
  _7: scale(7),
  _10: scale(10),
  _12: scale(12),
  _15: scale(15),
  _20: scale(20),
  _25: scale(25),
  _30: scale(30),
  _35: scale(35),
  _40: scale(40),
  _60: scale(60),
  _65: scale(65),
  _150: scale(150),
  _210: scale(210),
};

export const spacingY = {
  _2: verticalScale(2),
  _5: verticalScale(5),
  _7: verticalScale(7),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _14: verticalScale(14),
  _15: verticalScale(15),
  _17: verticalScale(17),
  _20: verticalScale(20),
  _25: verticalScale(25),
  _30: verticalScale(30),
  _35: verticalScale(35),
  _40: verticalScale(40),
  _45: verticalScale(45),
  _50: verticalScale(50),
  _55: verticalScale(55),
  _60: verticalScale(60),
  _90: verticalScale(90),
  _100: verticalScale(100),
  _135: verticalScale(135),
  _160: verticalScale(160),
  _200: verticalScale(200),
  _300: verticalScale(300),
};

export const radius = {
  _3: verticalScale(3),
  _6: verticalScale(6),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _17: verticalScale(17),
  _20: verticalScale(20),
  _25: verticalScale(25),
  _30: verticalScale(30),
  _35: verticalScale(35),
  _40: verticalScale(40),
  _50: verticalScale(50),
  _200: verticalScale(200),
};

export const fontSize = {
  // Extra Small
  _8: scale(8), // Micro text, legal disclaimers
  _10: scale(10), // Caption text, timestamps
  _12: scale(12), // Small labels, secondary info

  // Small
  _14: scale(14), // Tab labels, form labels
  _16: scale(16), // Small body text, hints
  _18: scale(18), // Default body text, input text

  // Medium (Base)
  _20: scale(20), // Primary body text, buttons
  _22: scale(22), // Emphasized body text
  _24: scale(24), // Large body text, card titles

  // Large
  _28: scale(28), // Section headers, navigation titles
  _32: scale(32), // Page titles, important headers
  _36: scale(36), // Modal titles, screen headers

  // Extra Large
  _40: scale(40), // Main headings, feature titles
  _44: scale(44), // Large headings, hero text
  _48: scale(48), // Display headings

  // Display (Extra Large)
  _56: scale(56), // Large display text
  _64: scale(64), // Hero headings
  _72: scale(72), // Main hero text, splash screens
  _80: scale(80), // Extra large display (rare use)
} as const;

export const fontWeight = {
  // Ultra Light
  _100: "100" as const, // Ultra thin (rarely used)

  // Light weights
  _200: "200" as const, // Extra light
  _300: "300" as const, // Light text, captions

  // Normal weights
  _400: "400" as const, // Regular/Normal - default body text
  _500: "500" as const, // Medium - slightly emphasized text

  // Bold weights
  _600: "600" as const, // Semi-bold - headings, important text
  _700: "700" as const, // Bold - main headings, emphasis
  _800: "800" as const, // Extra bold - hero text, display
  _900: "900" as const, // Black/Heavy - maximum emphasis
} as const;

// Semantic font weight groups for cognitive accessibility
export const fontWeightGroups = {
  // Standard typography hierarchy
  standard: {
    body: fontWeight._400, // Regular body text
    emphasis: fontWeight._500, // Slightly emphasized text
    strong: fontWeight._600, // Strong emphasis
    heading: fontWeight._700, // Headings
    display: fontWeight._800, // Display text
  },

  // For users with cognitive needs (clearer hierarchy)
  cognitive: {
    body: fontWeight._400, // Regular body text
    emphasis: fontWeight._600, // More noticeable emphasis
    strong: fontWeight._700, // Clear strong emphasis
    heading: fontWeight._700, // Consistent heading weight
    display: fontWeight._800, // Bold display text
  },

  // High contrast mode (maximum differentiation)
  highContrast: {
    body: fontWeight._500, // Slightly heavier body for contrast
    emphasis: fontWeight._700, // Bold emphasis
    strong: fontWeight._800, // Extra bold for strong
    heading: fontWeight._800, // Heavy headings
    display: fontWeight._900, // Maximum weight for display
  },

  // Focus mode (reduced complexity)
  focus: {
    body: fontWeight._400, // Regular body text
    emphasis: fontWeight._500, // Subtle emphasis
    strong: fontWeight._600, // Moderate strong
    heading: fontWeight._600, // Consistent moderate headings
    display: fontWeight._700, // Bold but not overwhelming
  },
} as const;

// Export types for TypeScript
export type ColorMode = keyof typeof colorModes;
export type ThemeMode = "light" | "dark";
export type CognitiveMode = "standard" | "highContrast" | "focus" | "calm";
export type BackgroundColor = keyof typeof colors.background;
export type TextColor = keyof typeof colors.text;
export type AccentColor = keyof typeof colors.accent;
export type SemanticColor = keyof typeof colors.semantic;
export type GraphicColor = keyof typeof colors.graphic;
export type CognitiveColor = keyof typeof colors.cognitive;
export type BorderColor = keyof typeof colors.border;
export type ShadowColor = keyof typeof colors.shadow;
export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
export type FontWeightGroup = keyof typeof fontWeightGroups;
