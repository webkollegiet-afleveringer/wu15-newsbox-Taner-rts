


export default function Detail({category, articles}) {

    return (
        <details>
            <summary>{category}</summary>
            {articles.map(article => (
                <article key={article.title}> 
                <img src={article.multimedia[0]?.url} alt={article.title} />
                    <h2>
                        {article.title}
                    </h2>
                </article>
            ))}

        </details>
    )
}