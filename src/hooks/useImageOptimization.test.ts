import { renderHook, act } from '@testing-library/react';
import { useImageOptimization } from './useImageOptimization';

describe('useImageOptimization Hook', () => {
  beforeAll(() => {
    // Mock createObjectURL
    global.URL.createObjectURL = jest.fn();
    global.URL.revokeObjectURL = jest.fn();
  });

  it('returns correct image props', () => {
    const { result } = renderHook(() => useImageOptimization({
      src: '/test-image.jpg',
      width: 400,
      quality: 75,
    }));

    expect(result.current.imageProps).toEqual({
      src: '/test-image.jpg',
      width: 400,
      quality: 75,
      loading: 'lazy',
      sizes: expect.stringContaining('(max-width: 640px) 100vw'),
      placeholder: 'empty',
    });
  });

  it('prioritizes loading for priority images', () => {
    const { result } = renderHook(() => useImageOptimization({
      src: '/test-image.jpg',
      width: 400,
      priority: true,
    }));

    expect(result.current.imageProps.loading).toBe('eager');
  });

  it('generates blur data URL for non-priority images', async () => {
    const { result } = renderHook(() => useImageOptimization({
      src: '/test-image.jpg',
      width: 400,
    }));

    // Wait for blur data URL generation
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.imageProps.placeholder).toBe('blur');
    expect(result.current.imageProps.blurDataURL).toBeDefined();
  });

  it('tracks loading state correctly', () => {
    const { result } = renderHook(() => useImageOptimization({
      src: '/test-image.jpg',
      width: 400,
    }));

    expect(result.current.isLoaded).toBe(false);

    act(() => {
      result.current.onLoadingComplete();
    });

    expect(result.current.isLoaded).toBe(true);
  });
});