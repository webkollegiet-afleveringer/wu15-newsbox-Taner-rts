import ArticleCard from './ArticleCard'

export default function Detail({ category, articles }) {

    return (
        <details>
            <summary>{category}</summary>
            {articles.map(article => (
                <ArticleCard key={article.title} article={article} action="bookmark" />
            ))}
        </details>
    )
}
