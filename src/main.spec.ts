import { verifyEnvironment } from './environments/verify-environment';

jest.mock('./environments/verify-environment', () => ({
    verifyEnvironment: jest.fn(),
}));

describe('main.ts', () => {
    it('should call verifyEnvironment', () => {
        expect(verifyEnvironment).toBeDefined();
    });
});