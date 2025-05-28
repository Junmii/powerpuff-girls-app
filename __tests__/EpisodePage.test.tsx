import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import EpisodePage from '../src/app/episodes/[episode-id]/page';

describe('EpisodePage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the correct details page', async () => {
        global.fetch = jest.fn()
            .mockResolvedValueOnce({
                json: async () => (
                    {
                        id: '123',
                        name: 'Princess Buttercup',
                        _links: {
                            show: {
                                name: 'The Powerpuff Girls'
                            }
                        }
                    }
                )
            });

        render(await EpisodePage({
            params: Promise.resolve({ 'episode-id': '123' })
        }));

        expect(screen.getByText('Princess Buttercup')).toBeInTheDocument();
    });

    it('renders the not found page when another series is requested', async () => {
        global.fetch = jest.fn()
            .mockResolvedValueOnce({
                json: async () => (
                    { 
                        id: '1', 
                        name: 'Episode 1', 
                        _links: {
                            show: {
                                name: 'How I Met Your Mother'
                            }
                        }
                    }
                )
            });

        render(await EpisodePage({
            params: Promise.resolve({ 'episode-id': '123' })
        }));
        
        expect(screen.getByText('Oops! This page doesn\'t exist.')).toBeInTheDocument();
    });

    it('sanitizes and renders HTML from summary', async () => {
        global.fetch = jest.fn()
            .mockResolvedValueOnce({
                json: async () => (
                    {
                        id: '123',
                        name: 'Episode 1',
                        _links: {
                            show: {
                                name: 'The Powerpuff Girls'
                            }
                        },
                        summary: '<script>alert("hack")</script><p>Clean episode content</p>',
                    }
                )
            });

        render(await EpisodePage({
            params: Promise.resolve({ 'episode-id': '123' })
        }));

        expect(screen.getByText('Clean episode content')).toBeInTheDocument();
        expect(screen.queryByText('alert("hack")')).not.toBeInTheDocument();
    });
});
