import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Insight } from "../../utils/types/Insight";

const ArticleView: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const article = location.state?.article as Insight['article'];

    if (!article) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                <div className="p-4 mb-4 text-red-500 bg-red-100 rounded-lg">
                    Article not found
                </div>
                <button
                    onClick={() => navigate('/insights')}
                    className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                    Back to Insights
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 text-white bg-gray-900">
            <div className="container px-4 pt-4 pb-12 mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center mb-8 text-blue-400 hover:text-blue-300"
                >
                    ← Back to Insights
                </button>

                <article className="max-w-4xl mx-auto">
                    <h1 className="mb-6 text-3xl font-bold md:text-4xl">{article.title}</h1>
                    <p className="text-gray-300">{article.description}</p>
                    {article.thumbnail && (
                        <img
                            src={article.thumbnail}
                            alt={article.title}
                            className="object-cover py-12 rounded-lg w-fullmb-8"
                        />
                    )}

                    <div className="mb-4 text-sm text-gray-400">
                        {article.time} mins read
                    </div>
                    <div className="prose prose-invert max-w-none">
                        {article.content ? (
                            <div dangerouslySetInnerHTML={{ __html: article.content }} />
                        ) : (
                            <p className="text-gray-300">{article.description}</p>
                        )}
                    </div>
                </article>
            </div>
        </div>
    );
};

export default ArticleView;