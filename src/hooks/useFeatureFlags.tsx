import { useMemo } from 'react';

import { featureFlags } from '@/config/featureFlags';

type FeatureFlagsType = typeof featureFlags;
type FeatureFlagKey = keyof typeof featureFlags;
type Writeable<T> = { -readonly [P in keyof T]: T[P] };

/**
 * useFeatureFlags
 * This hook will read the feature flags from the environment variables and return them as an object.
 * It will also use the featureFlags from the config directory
 * @returns featureFlags
 */
export function useFeatureFlags() {
  const flags = useMemo(() => {
    return Object.entries(featureFlags).reduce((acc, [key]) => {
      const envKey = `NEXT_PUBLIC_FEATURE_FLAG_${key.toUpperCase()}`;
      const envValue = process.env[envKey];
      if (envValue) {
        acc[key as FeatureFlagKey] = envValue === 'true';
      }

      return acc;
    }, {} as Writeable<FeatureFlagsType>);
  }, []);

  return flags as FeatureFlagsType;
}
