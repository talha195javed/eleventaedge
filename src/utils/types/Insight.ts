export type Insight = {
    id: string;
    category: string;
    video?: {
        title: string;
        thumbnail: string;
        url: string;
    };
    article?: {
        title: string;
        description: string;
        thumbnail: string;
        content: string;
        time: number; // reading time in minutes
    };
};