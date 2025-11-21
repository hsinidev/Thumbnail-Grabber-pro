
export type Resolution = 'maxresdefault' | 'hq720' | 'sddefault' | 'hqdefault' | 'mqdefault';

export const RESOLUTIONS: { label: string; value: Resolution; resolution: string }[] = [
    { label: 'Max Resolution', value: 'maxresdefault', resolution: '1920x1080' },
    { label: 'HD 720p', value: 'hq720', resolution: '1280x720' },
    { label: 'Standard 480p', value: 'sddefault', resolution: '640x480' },
    { label: 'High Quality 480p', value: 'hqdefault', resolution: '480x360' },
    { label: 'Medium Quality', value: 'mqdefault', resolution: '320x180' },
];

/**
 * Extracts the YouTube video ID from various URL formats.
 * @param url The YouTube URL or video ID string.
 * @returns The 11-character video ID or null if not found.
 */
export const extractVideoId = (url: string): string | null => {
    if (!url) return null;

    // Check if the input is already a valid 11-character ID
    if (url.length === 11 && /^[a-zA-Z0-9_-]+$/.test(url)) {
        return url;
    }

    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/|youtube-nocookie\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};


/**
 * Generates a YouTube thumbnail URL for a given video ID and resolution.
 * @param videoId The 11-character YouTube video ID.
 * @param resolution The desired thumbnail resolution.
 * @returns The full URL to the thumbnail image.
 */
export const generateThumbnailUrl = (videoId: string, resolution: Resolution): string => {
    return `https://img.youtube.com/vi/${videoId}/${resolution}.jpg`;
};
