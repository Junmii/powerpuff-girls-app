import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MainInfoPage from '../src/app/page';

describe('MainInfoPage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the main info page', async () => {
        global.fetch = jest.fn()
            .mockResolvedValueOnce({
                json: async () => ({
                    name: 'The Powerpuff Girls',
                    summary: '<p>A show about superpowered girls.</p>',
                    genres: ['Animation', 'Comedy'],
                    image: {
                        original: 'http://example.com/image.jpg'
                    }
                })
            })
            .mockResolvedValueOnce({
                json: async () => [
                    { id: '1', name: 'Episode 1' },
                    { id: '2', name: 'Episode 2' }
                ]
            });

        render(await MainInfoPage());

        expect(screen.getByText('The Powerpuff Girls')).toBeInTheDocument();
        expect(screen.getByText('Episode 1')).toBeInTheDocument();
        expect(screen.getByText('Episode 2')).toBeInTheDocument();
    });

    it('renders correctly when no episodes are returned', async () => {
        global.fetch = jest.fn()
            .mockResolvedValueOnce({
                json: async () => ({
                    name: 'The Powerpuff Girls',
                    summary: '<p>A show about superpowered girls.</p>',
                    genres: ['Animation', 'Comedy'],
                    image: {
                        original: 'http://example.com/image.jpg'
                    }
                })
            })
            .mockResolvedValueOnce({
                json: async () => []
            });

        render(await MainInfoPage());

        expect(screen.getByText('The Powerpuff Girls')).toBeInTheDocument();
        expect(screen.queryByText('Episode 1')).not.toBeInTheDocument();
    });

    it('renders correctly with no genres', async () => {
        global.fetch = jest.fn()
            .mockResolvedValueOnce({
                json: async () => ({
                    name: 'The Powerpuff Girls',
                    summary: '<p>No genres listed.</p>',
                    genres: [],
                    image: {
                        original: 'http://example.com/image.jpg'
                    }
                })
            })
            .mockResolvedValueOnce({
                json: async () => []
            });

        render(await MainInfoPage());

        expect(screen.getByText('The Powerpuff Girls')).toBeInTheDocument();
        expect(screen.queryByTestId('genreTag')).not.toBeInTheDocument();
    });

    it('throws error when fetch fails', async () => {
        global.fetch = jest.fn(() => Promise.reject('API is down'));

        await expect(MainInfoPage()).rejects.toThrow('API is down');
    });

    it('sanitizes and renders HTML from summary', async () => {
        global.fetch = jest.fn()
            .mockResolvedValueOnce({
                json: async () => ({
                    name: 'The Powerpuff Girls',
                    summary: '<script>alert("hack")</script><p>Clean content</p>',
                    genres: ['Comedy'],
                    image: {
                        original: 'http://example.com/image.jpg'
                    }
                })
            })
            .mockResolvedValueOnce({
                json: async () => []
            });

        render(await MainInfoPage());

        expect(screen.getByText('Clean content')).toBeInTheDocument();
        expect(screen.queryByText('alert("hack")')).not.toBeInTheDocument();
    });
});
