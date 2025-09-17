import { COLORS, FONTS, SPACING, BORDER_RADIUS } from './constants';

// Light Theme
export const lightTheme = {
  colors: {
    primary: COLORS.primary,
    primaryLight: COLORS.primaryLight,
    primaryDark: COLORS.primaryDark,
    secondary: COLORS.secondary,
    background: COLORS.background,
    backgroundLight: COLORS.backgroundLight,
    surface: COLORS.backgroundLight,
    text: COLORS.textPrimary,
    textSecondary: COLORS.textSecondary,
    textLight: COLORS.textLight,
    border: COLORS.border,
    success: COLORS.success,
    warning: COLORS.warning,
    error: COLORS.error,
    info: COLORS.info,
    shadow: COLORS.shadowLight,
  },
  fonts: {
    regular: {
      fontFamily: 'System',
      fontWeight: FONTS.weights.normal,
    },
    medium: {
      fontFamily: 'System',
      fontWeight: FONTS.weights.medium,
    },
    semiBold: {
      fontFamily: 'System',
      fontWeight: FONTS.weights.semiBold,
    },
    bold: {
      fontFamily: 'System',
      fontWeight: FONTS.weights.bold,
    },
  },
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
};

// Dark Theme (for future implementation)
export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#1A1A1A',
    backgroundLight: '#2D2D2D',
    surface: '#2D2D2D',
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
    textLight: '#808080',
    border: '#404040',
    shadow: 'rgba(255, 255, 255, 0.1)',
  },
};

// Common component styles using theme
export const getComponentStyles = (theme: typeof lightTheme) => ({
  // Button Styles
  button: {
    primary: {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.borderRadius.md,
      paddingVertical: theme.spacing.lg,
      paddingHorizontal: theme.spacing.xl,
    },
    secondary: {
      backgroundColor: theme.colors.backgroundLight,
      borderRadius: theme.borderRadius.md,
      paddingVertical: theme.spacing.lg,
      paddingHorizontal: theme.spacing.xl,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    outline: {
      backgroundColor: 'transparent',
      borderRadius: theme.borderRadius.md,
      paddingVertical: theme.spacing.lg,
      paddingHorizontal: theme.spacing.xl,
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
  },
  
  // Input Styles
  input: {
    container: {
      backgroundColor: theme.colors.backgroundLight,
      borderRadius: theme.borderRadius.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
    },
    focused: {
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.backgroundLight,
    },
    text: {
      fontSize: FONTS.sizes.md,
      color: theme.colors.text,
    },
  },
  
  // Card Styles
  card: {
    container: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.lg,
      marginBottom: theme.spacing.lg,
      shadowColor: theme.colors.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
  },
  
  // Header Styles
  header: {
    container: {
      backgroundColor: theme.colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      paddingHorizontal: theme.spacing.xl,
      paddingVertical: theme.spacing.lg,
    },
    title: {
      fontSize: FONTS.sizes.lg,
      fontWeight: FONTS.weights.bold,
      color: theme.colors.text,
    },
  },
  
  // Text Styles
  text: {
    h1: {
      fontSize: FONTS.sizes.xxxl,
      fontWeight: FONTS.weights.bold,
      color: theme.colors.text,
    },
    h2: {
      fontSize: FONTS.sizes.xxl,
      fontWeight: FONTS.weights.bold,
      color: theme.colors.text,
    },
    h3: {
      fontSize: FONTS.sizes.xl,
      fontWeight: FONTS.weights.semiBold,
      color: theme.colors.text,
    },
    body: {
      fontSize: FONTS.sizes.md,
      fontWeight: FONTS.weights.normal,
      color: theme.colors.text,
    },
    caption: {
      fontSize: FONTS.sizes.sm,
      fontWeight: FONTS.weights.normal,
      color: theme.colors.textSecondary,
    },
    label: {
      fontSize: FONTS.sizes.sm,
      fontWeight: FONTS.weights.medium,
      color: theme.colors.text,
    },
  },
  
  // Status Styles
  status: {
    success: {
      backgroundColor: theme.colors.success,
      color: '#FFFFFF',
    },
    warning: {
      backgroundColor: theme.colors.warning,
      color: '#FFFFFF',
    },
    error: {
      backgroundColor: theme.colors.error,
      color: '#FFFFFF',
    },
    info: {
      backgroundColor: theme.colors.info,
      color: '#FFFFFF',
    },
  },
});

// Export default theme
export const defaultTheme = lightTheme;

// Theme context type
export type Theme = typeof lightTheme;
export type ComponentStyles = ReturnType<typeof getComponentStyles>;