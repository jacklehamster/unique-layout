import { expect, it, describe, jest } from 'bun:test';
import { UniqueLayoutWithCallback } from ".";

describe('unique layout', () => {
    it('ensure unique layout with clalback', () => {
        const fun1 = jest.fn();
        const fun2 = jest.fn();
        const fun3 = jest.fn();
        const layout = new UniqueLayoutWithCallback();
        layout.registerLayout("test", fun1);
        expect(fun1).toHaveBeenCalledWith(true);
        layout.registerLayout("test", fun2);
        expect(fun1).toHaveBeenCalledWith(false);
        expect(fun2).toHaveBeenCalledWith(true);
        layout.registerLayout("test2", fun3);
        expect(fun3).toHaveBeenCalledWith(true);
        expect(fun2).not.toHaveBeenCalledWith(false);
    });
});
