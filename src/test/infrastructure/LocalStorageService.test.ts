import { describe, it, expect } from 'vitest';
import { LocalStorageService } from '../../infrastructure/storage/LocalStorageService';

describe('LocalStorageService', () => {
  it('should store and retrieve data', () => {
    const testData = { name: 'Test', value: 123 };
    LocalStorageService.set('test', testData);
    const retrieved = LocalStorageService.get<typeof testData>('test');
    expect(retrieved).toEqual(testData);
  });

  it('should return null for non-existent keys', () => {
    const result = LocalStorageService.get('non-existent-key');
    expect(result).toBeNull();
  });

  it('should remove data', () => {
    LocalStorageService.set('test-remove', { data: 'test' });
    LocalStorageService.remove('test-remove');
    const result = LocalStorageService.get('test-remove');
    expect(result).toBeNull();
  });

  it('should clear all mindease data', () => {
    LocalStorageService.set('test1', { data: 'test1' });
    LocalStorageService.set('test2', { data: 'test2' });
    LocalStorageService.clear();
    expect(LocalStorageService.get('test1')).toBeNull();
    expect(LocalStorageService.get('test2')).toBeNull();
  });
});
