import './ArticleCard.scss'
import { useRef } from 'react'
import { useState } from 'react'

export default function ArticleCard({ article, action = "bookmark" }) {

  const articleRef = useRef();
  const [diff, setDiff] = useState(0)

  function handleTouchStart(event) {
    console.log("start", event.touches[0].screenX);
    setDiff(event.touches[0].screenX)
  }

  function handleTouchEnd(event) {
    console.log("end", event.changedTouches[0].screenX);
    if (diff > event.changedTouches[0].screenX + 50) {
      const distance = diff - event.changedTouches[0].screenX;
      articleRef.current.style.transform = `translateX(-${distance}px)`;
    }
  }

  return (
    <div className="articleCard__wrapper">
      <button className={`articleCard__action articleCard__action--${action}`}>
        {action === "bookmark" ? (
          <svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        ) : (
          <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
        )}
      </button>
      <article ref={articleRef} key={article.title} className="articleCard" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {article.multimedia?.length && <img src={article.multimedia[0].url} alt="" />}
        <div>
          <h2 className="articleCard__heading">{article.title}</h2>
          <p className="articleCard__abstract">{article.abstract}</p>
        </div>
      </article>
    </div>
  );
}






















